

const Navbar = ({setCategory}) => {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary"data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><span className="badge bg-danger text-light fs-4">Vartaz</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        
                        <li className="nav-item">
                            <a className="nav-link" onClick={()=>setCategory("business")} >business</a>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={()=>setCategory("entertainment")}>entertainment</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={()=>setCategory("general")}>general</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={()=>setCategory("health")}>health</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={()=>setCategory("science")}>science</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={()=>setCategory("sports")}>sports</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={()=>setCategory("technology")}>technology</div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={()=>setCategory("education")} >education</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
           
        </nav>
        
        </>
        
    );
}

export default Navbar;
