import Link from "next/link";

const Nav = () => {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
  <div className="container-fluid">
    <Link href="/">
    <a className="navbar-brand text-light">Portafolio</a>
    </Link>
    <Link href="/github">
          <a className="nav-link text-light">GitHub</a>
    </Link>
  </div>
</nav>
        </>
    )
};

export default Nav;