import Link from "next/link";

const Nav = () => {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
  <div className="container-fluid">
    <Link href="/">
    <a className="navbar-brand text-danger">Portafolio</a>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse text-danger" id="navbarColor02">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
         
        </li>
        <li className="nav-item">
          <Link href="/github">
          <a className="nav-link">GitHub</a>
          </Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
        </>
    )
};

export default Nav;