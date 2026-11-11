import { useEffect, type RefObject } from 'react'

/**
 * Moldura de dispositivos dos estudos de caso (monitor + celular):
 * - entrada 3D única quando a maior parte da composição aparece na tela;
 * - leve inclinação acompanhando o mouse (só com ponteiro fino).
 * Escreve --device-x / --device-y (-1..1) e as classes device-pending /
 * device-entered no palco; o resto é CSS. Sem animação com reduced-motion.
 */
export function useDeviceStage(stageRef: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const mouse = window.matchMedia('(hover: hover) and (pointer: fine)')
    let frame = 0
    let x = 0
    let y = 0
    const render = () => {
      frame = 0
      stage.style.setProperty('--device-x', String(x))
      stage.style.setProperty('--device-y', String(y))
    }
    const queue = () => {
      if (!frame) frame = window.requestAnimationFrame(render)
    }
    const reset = () => { x = 0; y = 0; queue() }
    const move = (event: PointerEvent) => {
      if (motion.matches || !mouse.matches || event.pointerType !== 'mouse') return
      const rect = stage.getBoundingClientRect()
      x = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width) * 2 - 1))
      y = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height) * 2 - 1))
      queue()
    }
    // A entrada acontece uma vez; a ilustração permanece visível sem animações.
    let observer: IntersectionObserver | undefined
    if (!motion.matches && 'IntersectionObserver' in window) {
      // Espera a maior parte da composição aparecer. Em telas baixas,
      // limita a área exigida para que o gatilho continue alcançável.
      const revealRatio = Math.min(0.65, (window.innerHeight * 0.6) / Math.max(stage.clientHeight, 1))
      stage.classList.add('device-pending')
      observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting || entry.intersectionRatio < revealRatio) return
        stage.classList.add('device-entered')
        observer?.disconnect()
      }, { threshold: revealRatio })
      observer.observe(stage)
    }
    const preferencesChanged = () => {
      reset()
      if (motion.matches) {
        stage.classList.remove('device-pending')
        observer?.disconnect()
      }
    }
    stage.addEventListener('pointermove', move)
    stage.addEventListener('pointerleave', reset)
    stage.addEventListener('pointercancel', reset)
    motion.addEventListener('change', preferencesChanged)
    mouse.addEventListener('change', preferencesChanged)
    return () => {
      observer?.disconnect()
      window.cancelAnimationFrame(frame)
      stage.removeEventListener('pointermove', move)
      stage.removeEventListener('pointerleave', reset)
      stage.removeEventListener('pointercancel', reset)
      motion.removeEventListener('change', preferencesChanged)
      mouse.removeEventListener('change', preferencesChanged)
      stage.classList.remove('device-pending', 'device-entered')
      stage.style.removeProperty('--device-x')
      stage.style.removeProperty('--device-y')
    }
  }, [stageRef])
}
