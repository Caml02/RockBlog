const Footer = () => {
    return (
        <>
            <footer className="footer bg-dark" data-bs-theme="dark">
                <div className="container py-3 ">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li>
                            <a className="nav-link px-2 text-muted" href="/">Home</a>
                        </li>
                        <li>
                            <a className="nav-link px-2 text-muted" href="/article">Articles</a>
                        </li>
                        <li>
                            <a className="nav-link px-2 text-muted" href="/contact">Contact</a>
                        </li>
                    </ul>
                    <p className="text-center text-muted">© 2024 Company, Inc</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;