import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../AgenciesDetails.css";
import logo from "../assets/logo.png";

import banner from "../assets/blog-grid-1.jpg";
import bannerlogo from "../assets/brand8.jpg";


export default function AgenciesGrid() {
    return (
        <>

            <nav className="navbar navbar-expand-lg fixed-top bg-white shadow-sm">
                <div className="container">

                    <a className="navbar-brand d-flex align-items-center" href="#">
                        <img src={logo} alt="logo" className="header-logo" />
                    </a>


                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#mobileMenu"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="mainMenu">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

                            <li className="nav-item dropdown mega-dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                    Home
                                </a>

                                <div className="dropdown-menu mega-menu narrow animate">
                                    <ul className="list-unstyled mb-0">

                                        <li><Link to="/">Home Page 1</Link></li>
                                        <li><Link to="/home2">Home Page 2</Link></li>
                                        <li><Link to="/home3">Home Page 3</Link></li>
                                        <li><Link to="/home4">Home Page 4</Link></li>
                                        <li><Link to="/home5">Home Page 5</Link></li>
                                        <li><Link to="/home6">Home Page 6</Link></li>
                                        <li><Link to="/home7">Home Page 7</Link></li>
                                        <li><Link to="/home8">Home Page 8</Link></li>
                                        <li><Link to="/home9">Home Page 9</Link></li>
                                        <li><Link to="/home10">Home Page 10</Link></li>

                                    </ul>
                                </div>
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

                            <li className="nav-item dropdown mega-dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                    Pages
                                </a>

                                <div className="dropdown-menu mega-menu narrow animate">
                                    <ul className="list-unstyled mb-0">

                                        <li className="submenu-item">
                                            <span>
                                                Agents <i className="fa-solid fa-angle-right"></i>
                                            </span>

                                            <ul className="submenu list-unstyled" >
                                                <li><Link to="/agents">Agent</Link></li>
                                                <li><Link to="/agentdetails">Agent Dtails</Link></li>
                                            </ul>
                                        </li>

                                        <li className="submenu-item">
                                            <span>
                                                Agencies <i className="fa-solid fa-angle-right"></i>
                                            </span>

                                            <ul className="submenu list-unstyled">
                                                <li>Agencies Grid</li>
                                                <li>Agencies Grid</li>
                                                <li>Agencies Details</li>
                                            </ul>
                                        </li>

                                        <li>Home Loan Process</li>
                                        <li>Career</li>
                                        <li>Faq's</li>
                                        <li>Compare</li>
                                        <li>Project List</li>
                                        <li>Project Details</li>
                                        <li>Page 404</li>
                                        <li>Dashboard</li>

                                    </ul>
                                </div>
                            </li>


                            <li className="nav-item dropdown mega-dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                    Blog
                                </a>

                                <div className="dropdown-menu mega-menu narrow animate">
                                    <ul className="list-unstyled mb-0">
                                        <li>Blog Grid </li>
                                        <li>Blog List </li>
                                        <li>Blog Details </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>

                        <div className="d-flex align-items-center gap-3">
                            <span className="fw-semibold">
                                <i className="fa-solid fa-phone"></i>(603) 555-0123
                            </span>

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

            <div
                className="offcanvas offcanvas-start mobile-menu"
                tabIndex="-1"
                id="mobileMenu"
            >
                <div className="offcanvas-header">
                    <img src={logo} alt="logo" className="header-logo" />
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                    ></button>
                </div>

                <div className="offcanvas-body">
                    <ul className="mobile-nav list-unstyled">

                        <li>
                            <a data-bs-toggle="collapse" href="#mHome">
                                Home <i className="fa-solid fa-angle-down"></i>
                            </a>
                            <ul id="mHome" className="collapse list-unstyled">
                                <li>Home Page 1</li>
                                <li>Home Page 2</li>
                                <li>Home Page 3</li>
                                <li>Home Page 4</li>
                                <li>Home Page 5</li>
                                <li>Home Page 6</li>
                                <li>Home Page 7</li>
                                <li>Home Page 8</li>
                                <li>Home Page 9</li>
                                <li>Home Page 10</li>
                            </ul>
                        </li>

                        <li>
                            <a data-bs-toggle="collapse" href="#mListing">
                                Listing <i className="fa-solid fa-angle-down"></i>
                            </a>
                            <ul id="mListing" className="collapse list-unstyled">
                                <li className="submenu-mobile">
                                    <a data-bs-toggle="collapse" href="#mAgents">
                                        Layout <i className="fa-solid fa-angle-right"></i>
                                    </a>
                                    <ul id="mAgents" className="collapse list-unstyled">
                                        <li>Grid Style-Full Width</li>
                                        <li>Grid Style-Top Search</li>
                                        <li>Grid Style-Sidebar Left</li>
                                        <li>Grid Style-Sidebar Right</li>
                                        <li>Grid Style-Full Width</li>
                                        <li>Grid Style-Top Search</li>
                                        <li>Grid Style-Sidebar Left</li>
                                        <li>Grid Style-Sidebar Right</li>
                                    </ul>
                                </li>
                                <li className="submenu-mobile">
                                    <a data-bs-toggle="collapse" href="#mAgents">
                                        Feature <i className="fa-solid fa-angle-right"></i>
                                    </a>
                                    <ul id="mAgents" className="collapse list-unstyled">
                                        <li>Property Half Map Grid</li>
                                        <li>Property Half Map List</li>
                                        <li>Property Half Top Map</li>
                                        <li>Property Filter Popup</li>
                                        <li>Property Filter Popup Left</li>
                                        <li>Property Filter Popup Right</li>
                                    </ul>
                                </li>
                                <li className="submenu-mobile">
                                    <a data-bs-toggle="collapse" href="#mAgents">
                                        Listing Details <i className="fa-solid fa-angle-right"></i>
                                    </a>
                                    <ul id="mAgents" className="collapse list-unstyled">
                                        <li>Property Details 1</li>
                                        <li>Property Details 2</li>
                                        <li>Property Details 3</li>
                                        <li>Property Details 4</li>
                                        <li>Property Details 5</li>
                                    </ul>
                                </li>
                                <li className="submenu-mobile">
                                    <a data-bs-toggle="collapse" href="#mAgents">
                                        Agents <i className="fa-solid fa-angle-right"></i>
                                    </a>
                                    <ul id="mAgents" className="collapse list-unstyled">
                                        <li>Agents</li>
                                        <li>Agent Details</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a data-bs-toggle="collapse" href="#mPages">
                                Pages <i className="fa-solid fa-angle-down"></i>
                            </a>

                            <ul id="mPages" className="collapse list-unstyled">

                                <li className="submenu-mobile">
                                    <a data-bs-toggle="collapse" href="#mAgents">
                                        Agents <i className="fa-solid fa-angle-right"></i>
                                    </a>
                                    <ul id="mAgents" className="collapse list-unstyled">
                                        <li>Agents</li>
                                        <li>Agent Details</li>
                                    </ul>
                                </li>

                                <li className="submenu-mobile">
                                    <a data-bs-toggle="collapse" href="#mAgencies">
                                        Agencies <i className="fa-solid fa-angle-right"></i>
                                    </a>
                                    <ul id="mAgencies" className="collapse list-unstyled">
                                        <li>Agencies Grid</li>
                                        <li>Agencies List</li>
                                        <li>Agency Details</li>
                                    </ul>
                                </li>

                                <li>Career</li>
                                <li>Faq's</li>
                                <li>Compare</li>
                                <li>Project List</li>
                                <li>Page 404</li>
                            </ul>
                        </li>

                        <li>
                            <a data-bs-toggle="collapse" href="#mBlog">
                                Blog <i className="fa-solid fa-angle-down"></i>
                            </a>
                            <ul id="mBlog" className="collapse list-unstyled">
                                <li>Blog List</li>
                                <li>Blog Grid</li>
                                <li>Blog Details</li>
                            </ul>
                        </li>

                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <br></br><br></br>

            <div className="agnt-wrapper py-5">
                <div className="container">
                    <div className="agnt-breadcrumb mb-4">
                        <span style={{ textDecoration: "none", color: "#888" }}><Link to="/">Home</Link></span>
                        <i className="fas fa-angle-right mx-2"></i>
                        <span className="agnt-breadcrumb-active">Property Listing</span>
                    </div>
                </div>
            </div>

            <section className="agd-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="agd-banner">
                                <img
                                    src={banner}
                                    alt="agency banner"
                                    className="agd-banner-img"
                                />

                                <div className="agd-logo-box">
                                    <img src={bannerlogo} alt="agency logo" />
                                </div>
                            </div>

                            <div className="agd-title-box">
                                <h2>Lorem House</h2>
                                <p>
                                    <i className="fas fa-map-marker-alt"></i>
                                    2118 Thornridge Cir, Syracuse, Connecticut 35624
                                </p>
                            </div>

                            <div className="agd-about-box">
                                <h4>About Lorem House</h4>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                    risus leo, blandit vitae diam a, vestibulum viverra nisi.
                                    Vestibulum ullamcorper velit eget mattis aliquam. Proin dapibus
                                    luctus pulvinar. Integer et libero ut purus bibendum gravida non
                                    ac tellus.
                                </p>

                                <p>
                                    Aliquam non lorem consequat, luctus dui et, auctor nisi. Aenean
                                    placerat sapien at augue lacinia, non semper urna tempor.
                                    Mauris sit amet elit orci.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="agd-contact-box">
                                <h4>Contact Me</h4>

                                <input type="text" placeholder="Your name" />
                                <input type="email" placeholder="Email" />
                                <input type="text" placeholder="Phone" />
                                <textarea rows="4" placeholder="Message"></textarea>

                                <div className="agd-btn-group">
                                    <button className="agd-send-btn">
                                        <i className="fas fa-envelope"></i> Send message
                                    </button>

                                    <button className="agd-call-btn">
                                        <i className="fas fa-phone"></i> Call
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}