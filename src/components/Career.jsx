import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../Career.css";
import logo from "../assets/logo.png";

import agentImg from "../assets/home3person1.png";
import testimonial from "../assets/home2t3.jpg"

import footerImg from "../assets/footerImg.png";
import footerlogo from "../assets/logo2.png";

export default function Career() {
    const jobs = [
        { title: "Junior Graphic Designer (Web)", category: "Marketing", location: "New York", salary: "$850 Month" },
        { title: "Finance Manager & Health", category: "Marketing", location: "New York", salary: "$850 Month" },
        { title: "Group Marketing Manager", category: "Marketing", location: "New York", salary: "$850 Month" },
        { title: "Product Sales Specialist", category: "Marketing", location: "New York", salary: "$850 Month" },
        { title: "Web Developer", category: "Marketing", location: "New York", salary: "$850 Month" },
        { title: "Software Engineer", category: "Marketing", location: "New York", salary: "$850 Month" },
        { title: "Junior Graphic Designer (Web)", category: "Marketing", location: "New York", salary: "$850 Month" },
        { title: "UX/UI Designer Web", category: "Marketing", location: "New York", salary: "$850 Month" },
        { title: "Full Stack Engineer", category: "Marketing", location: "New York", salary: "$850 Month" },
        { title: "Product Manager, Studio", category: "Marketing", location: "New York", salary: "$850 Month" },
    ];

    const benefits = [
        { icon: "fas fa-heartbeat", title: "Health care" },
        { icon: "fas fa-piggy-bank", title: "Attractive salary and bonus" },
        { icon: "fas fa-users", title: "Family life" }
    ];
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

            <div className="cib-main-wrapper">
                <section className="cib-hero-section">
                    <div className="cib-hero-overlay">
                        <div className="container text-center">
                            <h1 className="cib-hero-title">A Culture of Inclusivity and Belonging</h1>
                            <p className="cib-hero-subtitle">
                                Thousands of luxury home enthusiasts just like you visit our website.
                            </p>
                            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                            <div className="cib-search-container shadow">
                                <div className="row g-0 align-items-center">
                                    <div className="col-md-3 cib-border-end">
                                        <div className="cib-search-field">
                                            <span className="cib-label">City</span>
                                            <select className="form-select cib-select-borderless">
                                                <option>Select City</option>
                                                <option>New York</option>
                                                <option>London</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="cib-search-field">
                                            <input
                                                type="text"
                                                className="form-control cib-input-borderless"
                                                placeholder="Find job here"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3 p-2">
                                        <button className="btn cib-search-btn w-100">
                                            Search <i className="fas fa-search ms-2"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cib-bottom-content py-5">
                    <div className="container text-center">
                        <h2 className="cib-section-title">Best Job For You At Proty</h2>
                        <p className="cib-section-text mx-auto">
                            We connect you directly to the person who knows the most about a property for sale, the listing agent.
                        </p>
                    </div>
                </section>
            </div>


            <section className="pj-listings-wrapper py-5">
                <div className="container">
                    <div className="row g-4">
                        {jobs.map((job, index) => (
                            <div key={index} className="col-lg-6">
                                <div className="pj-job-card shadow-sm d-flex align-items-center justify-content-between">
                                    <div className="pj-job-info">
                                        <h5 className="pj-job-title">{job.title}</h5>
                                        <div className="pj-job-meta d-flex flex-wrap">
                                            <span className="pj-meta-item">
                                                <i className="fas fa-briefcase me-1"></i> {job.category}
                                            </span>
                                            <span className="pj-meta-item">
                                                <i className="fas fa-map-marker-alt me-1"></i> {job.location}
                                            </span>
                                            <span className="pj-meta-item">
                                                <i className="fas fa-money-bill-wave me-1"></i>
                                                <span className="pj-highlight">{job.salary}</span>
                                            </span>
                                        </div>
                                    </div>
                                    <button className="btn pj-apply-btn">Apply now</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-5">
                        <button className="btn pj-load-more">Load more</button>
                    </div>
                </div>
            </section>

            <section className="pbw-section-wrapper py-5">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="pbw-image-container">
                                <div className="pbw-img-back">
                                    <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop" alt="Living Room" />
                                </div>
                                <div className="pbw-img-front shadow-lg">
                                    <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000&auto=format&fit=crop" alt="Bedroom" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 ps-lg-5">
                            <h2 className="pbw-main-title">Benefits when you work at Proty</h2>
                            <p className="pbw-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin ipsum ullamcorper, pulvinar ipsum in, imperdiet ante. In feugiat tortor semper nibh rhoncus volutpat. Suspendisse potenti.
                            </p>
                            <p className="pbw-description-sub">
                                Proin pharetra rhoncus maximus. Sed est dolor, consectetur eu sagittis a.
                            </p>

                            <div className="row g-3 my-4">
                                {benefits.map((item, index) => (
                                    <div key={index} className="col-4 text-center">
                                        <div className="pbw-icon-card">
                                            <div className="pbw-icon-box">
                                                <i className={`${item.icon} pbw-orange-icon`}></i>
                                            </div>
                                            <p className="pbw-icon-label">{item.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button className="btn pbw-join-btn">Join our team</button>
                        </div>

                    </div>
                </div>
            </section>

            <section className="per-review-wrapper py-5">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-5 mb-5 mb-lg-0">
                            <h2 className="per-main-title">Reviews from employees working at Proty</h2>
                            <p className="per-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin ipsum ullamcorper, pulvinar ipsum in, imperdiet ante. In feugiat tortor semper nibh rhoncus volutpat.
                            </p>
                            <p className="per-description-sub">
                                Proin pharetra rhoncus maximus. Sed est dolor, consectetur eu sagittis a.
                            </p>
                            <button className="btn per-stories-btn">More stories</button>
                        </div>

                        <div className="col-lg-7">
                            <div className="per-visual-container">
                                <div className="per-bg-circle"></div>

                                <img
                                    src={agentImg}
                                    alt="Main Employee"
                                    className="per-main-img"
                                />

                                <div className="per-float-card per-top-card shadow-sm">
                                    <div className="d-flex align-items-center gap-2">
                                        <img src={testimonial} alt="Avatar" className="per-avatar-sm" />
                                        <div>
                                            <h6 className="per-name-sm mb-0">Cody Fisher</h6>
                                            <p className="per-role-sm mb-0">CEO Themesflat</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="per-float-card per-star-badge shadow-sm">
                                    <div className="per-stars text-warning">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>

                                <div className="per-float-card per-bottom-card shadow">
                                    <div className="per-stars text-warning mb-2">
                                        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                    </div>
                                    <p className="per-review-text">
                                        Vivamus at nisl ornare, vulputate turpis finibus, posuere metus. Donec in placerat felis. Praesent ante tellus, dignissim nec imperdiet ac.
                                    </p>
                                    <div className="d-flex align-items-center gap-2 mt-3">
                                        <img src="https://i.pravatar.cc/150?u=cody" alt="Avatar" className="per-avatar-lg" />
                                        <div>
                                            <h6 className="per-name-lg mb-0">Cody Fisher</h6>
                                            <p className="per-role-lg mb-0">CEO Themesflat</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

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