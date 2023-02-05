import React from "react";

function Header(){
    return(
        <header>
           <nav className="navbar navbar-expand-lg">
                <div className="container-fluid flex-column align-items-end">
                    <div className="navbar-collapse collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* TODO: develop a better navbar */}
                        </ul>
                    </div>
                </div>
            </nav> 
        </header>
    );
}
export default Header;