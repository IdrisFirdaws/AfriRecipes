import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();
    const [showSidebar, setShowSidebar] = useState(false); // State to toggle sidebar

    const links = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Recipes",
            path: "/recipes",
        },
    ];

    // const toggleSidebar = () => {
    //     setShowSidebar(!showSidebar); // Toggle sidebar state
    // };

    return (
        <>
            {/* <div className={`navbar container ${showSidebar ? "active" : ""}`}> */}
            <div className="navbar container">
                <Link to="/" href="#!" className="logo">
                    Afr<span>iR</span>ecipes
                </Link>
                <div className="nav-links">
                    {links.map((link) => (
                        <NavLink
                            to={link.path}
                            className={location.pathname === link.path ? "active" : ""}
                            key={link.name}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
                {/* <div className={`sidebar-btn ${showSidebar ? "active" : ""}`} onClick={toggleSidebar}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div> */}
            </div>

            {/* Sidebar */}
            {/* {showSidebar && (
                <div className="sidebar">
                    <div className="nav-links">
                        {links.map((link) => (
                            <NavLink
                                to={link.path}
                                className={location.pathname === link.path ? "active" : ""}
                                key={link.name}
                                onClick={toggleSidebar} // Close sidebar on link click
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )} */}
        </>
    );
}
