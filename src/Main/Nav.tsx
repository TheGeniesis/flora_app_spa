import { HashRouter, NavLink } from "react-router-dom";
import React from "react";

export const Nav = () => {
    return (
        <HashRouter>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"><NavLink to="/" className="nav-link">Start</NavLink></li>
                        <li className="nav-item"><NavLink to="/devices" className="nav-link">Devices</NavLink></li>
                        <li className="nav-item"><NavLink to="/measurements" className="nav-link">Measurements</NavLink></li>
                    </ul>
                </nav>
            </div>
        </HashRouter>
    );
};
