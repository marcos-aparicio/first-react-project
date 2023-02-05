import React from "react";
import {Link} from "react-router-dom";

function Header(){
    return(
        <header>
           <nav className="navbar navbar-expand-lg">
                <div className="container-fluid flex-column align-items-end">
                    <div className="navbar-collapse collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Personal Information 1</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/personal-info2" className="nav-link">Personal Information 2</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/summary" className="nav-link">Summary</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> 
        </header>
    );
}
export default Header;