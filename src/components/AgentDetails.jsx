import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../AgentDetails.css";
import logo from "../assets/logo.png";
import agentImg from "../assets/home2person1.jpg"

import img1 from "../assets/boxlist1.jpg";
import img2 from "../assets/boxlist2.jpg";

import gridImg from "../assets/img1.jpg";

import footerImg from "../assets/footerImg.png";
import footerlogo from "../assets/logo2.png";

export default function AgentDetails() {
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
                                                <li><Link to="/agenciesgrid">Agencies Grid</Link></li>
                                                <li><Link to="/agencieslist">Agencies List</Link></li>
                                                <li><Link to="/agenciesdetails">Agencies Details</Link></li>
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

            <section className="ap-wrapper">
                <div className="container">
                    <div className="row g-4">

                        <div className="col-lg-8">
                            <div className="ap-profile-card d-flex flex-column flex-md-row">

                                <div className="ap-image-box">
                                    <img src={agentImg} alt="Agent" />
                                </div>

                                <div className="ap-info-box">
                                    <h3 className="ap-name">Cameron Williamson</h3>
                                    <p className="ap-role">Company Agent at Themesflat</p>

                                    <ul className="ap-contact-list">
                                        <li>
                                            <i className="fas fa-phone-alt"></i>
                                            <span>+7 445 556 8337</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-envelope"></i>
                                            <span>themesflat@gmail.com</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-map-marker-alt"></i>
                                            <span>1901 Thornridge Cir. Shiloh, Hawaii 81063</span>
                                        </li>
                                    </ul>

                                    <hr />

                                    <h5 className="ap-about-title">About Cameron Williamson</h5>
                                    <p className="ap-about-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Aliquam risus leo, blandit vitae diam a, vestibulum viverra nisi.
                                        Vestibulum ullamcorper velit eget mattis aliquam.
                                        Proin dapibus luctus pulvinar.
                                        Integer et libero ut purus bibendum.
                                    </p>

                                    <button className="ap-read-more">
                                        Read More <i className="fas fa-arrow-right"></i>
                                    </button>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="ap-contact-card">
                                <h4 className="ap-form-title">Contact Me</h4>

                                <input type="text" placeholder="Your name" />
                                <input type="email" placeholder="Email" />
                                <input type="text" placeholder="Your phone number" />
                                <textarea placeholder="Message"></textarea>

                                <div className="ap-btn-group">
                                    <button className="ap-send-btn">
                                        <i className="fas fa-envelope"></i> Send message
                                    </button>
                                    <button className="ap-call-btn">
                                        <i className="fas fa-phone"></i> Call
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="pl-wrapper">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-8">
                            <h3 className="pl-title">Listing</h3>

                            <div className="row g-4">

                                {[img1, img2, img1, img2].map((img, i) => (
                                    <div className="col-md-6" key={i}>
                                        <div className="pl-card">

                                            <div className="pl-img-box">
                                                <img src={img} alt="property" />

                                                <span className="pl-badge-featured">Featured</span>
                                                <span className="pl-badge-sale">For Sale</span>

                                                <div className="pl-hover-icons">
                                                    <button><i className="fas fa-heart"></i></button>
                                                    <button><i className="fas fa-random"></i></button>
                                                </div>
                                            </div>

                                            <div className="pl-card-body">
                                                <h5>Elegant studio flat</h5>
                                                <p className="pl-location">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                    102 Ingraham St, Brooklyn, NY 11237
                                                </p>

                                                <div className="pl-features">
                                                    <span>3 Beds</span>
                                                    <span>3 Baths</span>
                                                    <span>4,043 Sqft</span>
                                                </div>

                                                <div className="pl-footer">
                                                    <span className="pl-price">$8,600</span>
                                                    <button className="pl-details-btn">Details</button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="pl-sidebar">
                                <h5>Featured Listings</h5>

                                {[img1, img2, img1, img2].map((img, i) => (
                                    <div className="pl-side-item" key={i}>
                                        <img src={img} alt="side" />
                                        <div>
                                            <h6>Casa Lomas de Machali</h6>
                                            <p>3 Bed · 3 Bath · 4,043 Sqft</p>
                                            <span>$7,250.00</span>
                                        </div>
                                    </div>
                                ))}

                            </div>

                            <div
                                className="sidebar-box agent-card"
                                style={{ backgroundImage: `url(${gridImg})` }}
                            >
                                <h3>We can help you find a local real estate agent</h3>
                                <p>
                                    Connect with a trusted agent who knows the market inside out –
                                    whether you’re buying or selling.
                                </p>
                                <button className="btn btn-warning w-100">
                                    Connect with an agent
                                </button>
                            </div>



                        </div>

                    </div>
                </div>
            </section>


            <div className="container pp-wrapper d-flex flex-wrap align-items-center justify-content-between">

                <div className="pp-pagination d-flex align-items-center">

                    <button className="pp-page-btn">
                        <i className="fas fa-chevron-left"></i>
                    </button>

                    <button className="pp-page-number">1</button>
                    <button className="pp-page-number active">2</button>
                    <span className="pp-dots">…</span>
                    <button className="pp-page-number">20</button>

                    <button className="pp-page-btn">
                        <i className="fas fa-chevron-right"></i>
                    </button>

                </div>
            </div>

            <div className="rf-cta0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 d-flex align-items-center gap-4">
                            <img
                                src={footerImg}
                                alt="agent"
                                className="rf-cta-img0"
                            />
                            <div>
                                <h3>Find a Local Real Estate Agent Today</h3>
                                <p>
                                    If you’re looking to buy or sell a home. We’ll help you make
                                    the most money possible.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
                            <div className="rf-cta-search0">
                                <input type="text" placeholder="Find your location agent" />
                                <i className="fas fa-search"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="rf-footer0">
                <div className="container">
                    <div className="rf-footer-top0 d-flex flex-column flex-md-row justify-content-between align-items-center">
                        <div className="rf-footer-logo0">
                            <img src={footerlogo} alt="logo" />
                        </div>

                        <div className="rf-footer-contact0">
                            <div>
                                <i className="fas fa-phone-alt"></i>
                                <span>Call us</span>
                                <strong>(603) 555-0123</strong>
                            </div>

                            <div>
                                <i className="fas fa-envelope"></i>
                                <span>Need live help</span>
                                <strong>proty-support@gmail.com</strong>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className="row rf-footer-main0">
                        <div className="col-lg-3 col-md-6">
                            <h5>About us</h5>
                            <ul>
                                <li><i className="fas fa-angle-right"></i> Contact</li>
                                <li><i className="fas fa-angle-right"></i> Why choose us?</li>
                                <li><i className="fas fa-angle-right"></i> Customer reviews</li>
                                <li><i className="fas fa-angle-right"></i> Our team</li>
                                <li><i className="fas fa-angle-right"></i> Careers with realty</li>
                                <li><i className="fas fa-angle-right"></i> Work with us</li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <h5>Popular house</h5>
                            <ul>
                                <li>#Penthouses</li>
                                <li>#Villa</li>
                                <li>#Smart home</li>
                                <li>#Apartments</li>
                                <li>#Office</li>
                                <li>#Bungalow</li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <h5>Quick links</h5>
                            <ul>
                                <li><i className="fas fa-angle-right"></i> Terms of use</li>
                                <li><i className="fas fa-angle-right"></i> Privacy policy</li>
                                <li><i className="fas fa-angle-right"></i> Our services</li>
                                <li><i className="fas fa-angle-right"></i> Contact support</li>
                                <li><i className="fas fa-angle-right"></i> Pricing plans</li>
                                <li><i className="fas fa-angle-right"></i> FAQs</li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <h5>Newsletter</h5>
                            <p>Sign up to receive the latest articles</p>

                            <input
                                type="email"
                                placeholder="Your email address"
                                className="rf-newsletter-input0"
                            />
                            <button className="rf-subscribe-btn0">Subscribe</button>

                            <div className="rf-terms0">
                                <input type="checkbox" />
                                <span>
                                    I have read and agree to the terms & conditions
                                </span>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className="rf-footer-bottom0 d-flex flex-column flex-md-row justify-content-between align-items-center">
                        <p>
                            © Copyright 2024 <strong>PROTY</strong> – REAL ESTATE. Designed &
                            Developed by Themesflat
                        </p>

                        <div className="rf-social0">
                            <span>Follow us</span>
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-x-twitter"></i>
                            <i className="fab fa-linkedin-in"></i>
                            <i className="fab fa-instagram"></i>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    )
}