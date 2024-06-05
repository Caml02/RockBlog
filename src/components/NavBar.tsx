

const NavBar = () => {
    return (
        <>
        <nav className="sticky-top navbar navbar-expand-lg bg-dark d-flex" data-bs-theme="dark">
            <div className="container justify-content-between">
                <a className="navbar-brand" href="/">Rock Blog</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            
                    <button className="mx-2 p-0 text-uppercase bg-transparent border-0">
                        <a 
                            className="nav-link" 
                            href="/article"
                        >
                            Articles
                        </a>
                    </button>
                    <button className="mx-2 p-0 text-uppercase btn btn-primary bg-transparent border-0"
                        data-bs-toggle="modal" 
                        data-bs-target="#ContactModal">
                            Contact
                    </button>
                </div>
            </div>
        </nav>
        </>
    )
}

export default NavBar;