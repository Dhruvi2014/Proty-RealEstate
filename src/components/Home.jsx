import React from "react";
import "../Style.css";
import logo from "../assets/logo.png";

const Home = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-white shadow-sm">
            <div className="container">

                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img src={logo} alt="logo" className="header-logo" />
                </a>


                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainMenu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="mainMenu">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home</a>
                        </li>

                        <li className="nav-item dropdown mega-dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                data-bs-toggle="dropdown"
                            >
                                Listing
                            </a>

                            <div className="dropdown-menu mega-menu">
                                <div className="row">

                                    <div className="col-md-4">
                                        <h6>Layout</h6>
                                        <ul className="list-unstyled">
                                            <li>Grid Style - Full Width</li>
                                            <li>Grid Style - Top Search</li>
                                            <li>Grid Style - Sidebar Left</li>
                                            <li>List Style - Full Width</li>
                                        </ul>
                                    </div>

                                    <div className="col-md-4">
                                        <h6>Feature</h6>
                                        <ul className="list-unstyled">
                                            <li>Property Half Map Grid</li>
                                            <li>Property Half Map List</li>
                                            <li>Property Filter Popup</li>
                                        </ul>
                                    </div>

                                    <div className="col-md-4">
                                        <h6>Listing Details</h6>
                                        <ul className="list-unstyled">
                                            <li>Property Details 1</li>
                                            <li>Property Details 2</li>
                                            <li>Property Details 3</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Pages</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Blog</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>

                    <div className="d-flex align-items-center gap-3">
                        <span className="fw-semibold">
                            <i className="fa-solid fa-phone"></i>(603) 555-0123
                        </span>

                        {/* Profile Dropdown */}
                        <div className="dropdown profile-dropdown">
                            <button
                                className="btn profile-btn"
                                data-bs-toggle="dropdown"
                            >
                                <i className="fa-regular fa-user"></i>
                            </button>

                            <ul className="dropdown-menu dropdown-menu-end profile-menu">
                                <li><a className="dropdown-item" href="#"><i className="fa-solid fa-table-cells"></i> Dashboards</a></li>
                                <li><a className="dropdown-item" href="#"><i className="fa-regular fa-user"></i> My profile</a></li>
                                <li><a className="dropdown-item" href="#"><i className="fa-solid fa-box"></i> My package</a></li>
                                <li><a className="dropdown-item" href="#"><i className="fa-regular fa-heart"></i> My favorites (1)</a></li>
                                <li><a className="dropdown-item" href="#"><i className="fa-solid fa-magnifying-glass"></i> My save searches</a></li>
                                <li><a className="dropdown-item" href="#"><i className="fa-regular fa-star"></i> Reviews</a></li>
                                <li><a className="dropdown-item" href="#"><i className="fa-solid fa-house"></i> My properties</a></li>
                                <li><a className="dropdown-item" href="#"><i className="fa-solid fa-plus"></i> Add property</a></li>

                                <li><hr className="dropdown-divider" /></li>

                                <li><a className="dropdown-item" href="#"><i className="fa-solid fa-right-to-bracket"></i> Login / Register</a></li>
                                <li><a className="dropdown-item logout" href="#"><i className="fa-solid fa-right-from-bracket"></i> Logout</a></li>
                            </ul>
                        </div>

                        <button className="btn btn-outline-warning rounded-pill px-4">
                            Add property
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Home;
