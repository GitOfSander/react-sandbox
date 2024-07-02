import React from "react";
import { NavLink } from "react-router-dom";

function NavComponent() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white topbar static-top justify-content-between">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/research">Research</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/trades">Trades</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/fitness">Fitness</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
};
  
export default NavComponent;