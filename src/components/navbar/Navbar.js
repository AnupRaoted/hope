import Brand from "../../assets/Brand";

function Navbar() {
    return (
        <>
            <header>
                <div className="d-flex flex-column flex-md-row align-items-center mt-md-3 pb-3 mb-3 border-bottom">
                    <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
                        <Brand width={100}/>
                    </a>

                    <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                        <a className="me-3 py-2 text-dark text-decoration-none" href="#">Features</a>
                        <a className="me-3 py-2 text-dark text-decoration-none" href="#">Enterprise</a>
                        <a className="me-3 py-2 text-dark text-decoration-none" href="#">Support</a>
                        <a className="py-2 text-dark text-decoration-none" href="#">Pricing</a>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar;