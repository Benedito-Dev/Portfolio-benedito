export function Navbar() {
  return (
    <header>
      <div className="container nav">
        <div className="brand">
          <span className="dot"></span>
          Benedito Bittencourt
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#stack">Stack</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#processo">Processo</a></li>
          </ul>
        </nav>
        <a href="#contato" className="btn-contact">Contato <span>&#8599;</span></a>
      </div>
    </header>
  )
}
