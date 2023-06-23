import Link from "next/link";

const Nav = () => {
    return(
        <>
        <nav style={{backgroundColor: '#00001a'}} className="navbar navbar-expand-lg">
          <div className="container-fluid py-2">
            <Link className="navbar-brand" href="/">
                <h4 id="nav-button" className="text-light">Portafolio</h4>
            </Link>
            <Link className="nav-link" href="/github">
                <h4 id="nav-button" className="text-light">GitHub</h4>
            </Link>
          </div>
        </nav>

        <style jsx>
        {`
            #nav-button{
              cursor: pointer;
            }
        `}
        </style>

        </>
    )
};

export default Nav;