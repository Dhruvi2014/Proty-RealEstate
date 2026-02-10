import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../HomeLoanProcess.css";
import logo from "../assets/logo.png";
import logobanner from "../assets/logobanner.png";

import boxhouse1 from "../assets/box-house1.jpg";
import boxhouse2 from "../assets/box-house2.jpg";

import home2person5 from "../assets/home2person5.png";

import footerImg from "../assets/footerImg.png";
import footerlogo from "../assets/logo2.png";
export default function HomeLoanProcess() {
    const steps = [
        {
            id: "01",
            title: "Complete The Questionnaire",
            description: "Your responses will help our partner. Shortly after your lender is selected, they'll contact you to discuss options for financing your future home.",
            icon: "fas fa-users"
        },
        {
            id: "02",
            title: "Get Financial Connections",
            description: "Your responses will help our partner. Shortly after your lender is selected, they'll contact you to discuss options for financing your future home.",
            icon: "fas fa-users"
        },
        {
            id: "03",
            title: "Receive Your Custom Quote",
            description: "Your responses will help our partner. Shortly after your lender is selected, they'll contact you to discuss options for financing your future home.",
            icon: "fas fa-users"
        }
    ];
    const [result, setResult] = useState(8000);
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

            <div className="hlp-hero-container">
                <div className="hlp-hero-content text-center">
                    <h1 className="hlp-main-title">Home Loan Process</h1>

                    <nav className="hlp-breadcrumb-nav">
                        <Link to="/" className="hlp-breadcrumb-link">Home Page 1</Link>
                        <span className="hlp-breadcrumb-separator"> • </span>
                        <span className="hlp-breadcrumb-current">Property Listing</span>
                    </nav>
                </div>

                <div className="hlp-settings-tab">
                    <i className="bi bi-gear-fill"></i>
                </div>
            </div>

            <section className="agents-section-wrapper">
                <div className="container">
                    <div className="row align-items-center agents-main-row">

                        <div className="col-lg-6">
                            <h2 className="agents-title">
                                Selling Agents And Property<br />Management Specialists
                            </h2>

                            <p className="agents-text">
                                Our team of real estate professionals have helped hundreds of buyers,
                                sellers and investors make decisions that they feel were and continue
                                to be right for them years down the road.
                            </p>

                            <p className="agents-text">
                                We measure success not by the sales volume that ranks us among the top
                                1% of local agents, but by delivering results and fulfilling the trust
                                placed on us by clients.
                            </p>

                            <p className="agents-text">
                                We stand ready to serve you as your California real estate team.
                            </p>

                            <button className="agents-btn" style={{ backgroundColor: "#f39c12" }}>
                                Meet The Team
                            </button>


                            <div className="row agents-stats mt-5">
                                <div className="col-4 text-center">
                                    <i className="fa-solid fa-house stats-icon" style={{ color: "#f39c12" }}></i>
                                    <h4>900+</h4>
                                    <p>Homes for Sale</p>
                                </div>

                                <div className="col-4 text-center">
                                    <i className="fa-solid fa-user stats-icon" style={{ color: "#f39c12" }}></i>
                                    <h4>287</h4>
                                    <p>Real Estate Agents</p>
                                </div>

                                <div className="col-4 text-center">
                                    <i className="fa-solid fa-shield-halved stats-icon" style={{ color: "#f39c12" }}></i>
                                    <h4>3.600+</h4>
                                    <p>Properties Sold</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 agents-right-content">
                            <div className="agents-image-area">
                                <div className="agents-main-wrapper">
                                    <img src={boxhouse1} alt="Main" />
                                </div>

                                <div className="agents-overlay-wrapper">
                                    <img src={boxhouse2} alt="Overlay" />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section className="syh-process-wrapper py-5">
                <div className="container">
                    {/* Header Section */}
                    <div className="text-center mb-5">
                        <h2 className="syh-main-heading">Selling Your Home With Realty</h2>
                        <p className="syh-sub-heading mx-auto">
                            We'll get to know you to understand your selling goals, and explain the selling process so you know what to expect.
                        </p>
                    </div>

                    {/* Steps Grid */}
                    <div className="row justify-content-center position-relative">
                        {/* Horizontal Dotted Line (Desktop Only) */}
                        <div className="syh-step-line d-none d-lg-block"></div>

                        {steps.map((step, index) => (
                            <div key={index} className="col-lg-4 col-md-6 mb-4">
                                <div className="syh-step-item text-center">
                                    {/* Step Number Circle */}
                                    <div className="syh-number-circle">{step.id}</div>

                                    {/* Card Content */}
                                    <div className="syh-card shadow-sm">
                                        <div className="syh-icon-box">
                                            <i className={`${step.icon} syh-icon`}></i>
                                        </div>
                                        <h4 className="syh-card-title">{step.title}</h4>
                                        <p className="syh-card-text">{step.description}</p>
                                        <a href="#" className="syh-read-more">
                                            Read More <i className="fas fa-arrow-circle-right ms-1"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="rmc-calculator-wrapper py-5">
                <div className="container shadow-sm bg-white rounded-4 overflow-hidden">
                    <div className="row">
                        <div className="col-12 p-0">
                            <img
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                                alt="Interior"
                                className="rmc-banner-img"
                            />
                        </div>
                    </div>

                    <div className="p-4 p-md-5">
                        <h2 className="rmc-title">Calculate Mortgage Payments</h2>
                        <p className="rmc-subtitle">
                            Estimate your payment with our easy-to-use loan calculator. Then get pre-qualified to buy by a local lender.
                        </p>

                        <form className="rmc-form mt-4">
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <label className="rmc-label">Total Amount</label>
                                    <input type="number" className="form-control rmc-input" placeholder="1000" />
                                </div>

                                <div className="col-md-6">
                                    <label className="rmc-label">Down Payment</label>
                                    <div className="input-group">
                                        <input type="number" className="form-control rmc-input" placeholder="2000" />
                                        <span className="input-group-text rmc-input-badge">20%</span>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <label className="rmc-label">Interest Rate</label>
                                    <input type="number" className="form-control rmc-input" placeholder="0" />
                                </div>

                                <div className="col-md-6">
                                    <label className="rmc-label">Amortization Period (months)</label>
                                    <select className="form-select rmc-input rmc-select">
                                        <option>Select amortization period</option>
                                        <option value="120">120 Months (10 Years)</option>
                                        <option value="240">240 Months (20 Years)</option>
                                        <option value="360">360 Months (30 Years)</option>
                                    </select>
                                </div>

                                <div className="col-md-6">
                                    <label className="rmc-label">Property Tax</label>
                                    <input type="text" className="form-control rmc-input" placeholder="$3000" />
                                </div>

                                <div className="col-md-6">
                                    <label className="rmc-label">Home Insurance</label>
                                    <input type="text" className="form-control rmc-input" placeholder="$3000" />
                                </div>
                            </div>

                            <div className="mt-4">
                                <p className="rmc-result-text">
                                    Your estimated monthly payment: <span className="rmc-amount">{result}</span>
                                </p>
                            </div>

                            <div className="d-flex flex-wrap gap-3 mt-4">
                                <button type="button" className="btn rmc-btn-calc">
                                    Calculate now
                                </button>
                                <button type="button" className="btn rmc-btn-start">
                                    Start over
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <section className="sell-banner-wrapper0">
                <div className="sell-banner0">
                    <div className="sell-content0">
                        <img src={logobanner} alt="logo" className="header-logo" />
                        <h1>
                            Find a Local Real Estate<br></br>
                            Agent Today
                        </h1>
                        <p>
                            If you’re looking to buy or sell a home. We’ll help you make the
                            <br></br>most money possible.
                        </p>
                        <button>Request your Location agent <i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>

                    <div className="sell-image0">
                        <img
                            src={home2person5}
                            alt="Agent"
                        />
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