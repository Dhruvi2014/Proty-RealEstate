import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../Home9.css";
import logo from "../assets/logo.png";

import img from "../assets/gallery-2.jpg";
import herohome from "../assets/herohome.jpeg";

import imgMain from "../assets/boxlist1.jpg";
import imgSmall from "../assets/boxlist2.jpg";

import serviceImg1 from "../assets/home9img3.jpg";
import serviceImg2 from "../assets/home9img2.jpg";
import serviceImg3 from "../assets/home9img1.jpg";


export default function Home9() {
    const targets = [950, 2200, 470, 2500];
    const labels = ["Dream house", "Happy clients", "Local Agent", "Property Available"];

    const [counts, setCounts] = useState([0, 0, 0, 0]);

    useEffect(() => {
        const duration = 1500;
        const frameRate = 16;
        const totalFrames = duration / frameRate;

        const timer = setInterval(() => {
            setCounts((prevCounts) => {
                const newCounts = prevCounts.map((current, index) => {
                    if (current >= targets[index]) return targets[index];
                    const increment = Math.ceil(targets[index] / totalFrames);
                    const nextValue = current + increment;
                    return nextValue >= targets[index] ? targets[index] : nextValue;
                });

                if (newCounts.every((val, i) => val === targets[i])) {
                    clearInterval(timer);
                }
                return newCounts;
            });
        }, frameRate);

        return () => clearInterval(timer);
    }, []);
    return (
        <>
            <div className="home9-page">
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
                                            <li>Home Page 10</li>

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

                                    <div className="dropdown-menu mega-menu narrow animate" >
                                        <ul className="list-unstyled mb-0">

                                            <li className="submenu-item">
                                                <span>
                                                    Agents <i className="fa-solid fa-angle-right"></i>
                                                </span>

                                                <ul className="submenu list-unstyled" >
                                                    <li>Agents</li>
                                                    <li>Agent Details</li>
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

                                <button className="btn btn-outline rounded-pill px-4" style={{ color: "#ff7a00", borderColor: "#ff7a00" }}>
                                    Add Property
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

                <div className="proty9-hero">
                    <div className="proty9-overlay"></div>
                    <div className="container">
                        <div className="proty9-content">
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <h1 className="proty9-main-title">
                                        Turning your Real <br /> Estate dreams into reality
                                    </h1>
                                </div>

                                <div className="col-lg-5">
                                    <p className="proty9-description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices sapien dolor, non consequat risus feugiat eu. Quisque congue, nisi vel tincidunt suscipit.
                                    </p>
                                    <div className="proty9-floating-img">
                                        <img
                                            src={img}
                                            alt="Interior Design"
                                            className="img-fluid rounded-4"
                                            style={{ height: "200px", width: "400px" }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="proty9-search-container">
                                <div className="proty9-search-bar">
                                    <div className="search-input-group">
                                        <i className="bi bi-geo-alt"></i>
                                        <input type="text" placeholder="What to look for?" />
                                    </div>

                                    <div className="search-divider"></div>

                                    <div className="search-divider d-none d-lg-block"></div>

                                    <button className="proty9-search-btn">
                                        Search property <i className="bi bi-search ms-2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br><br></br>
                    <div className="container-fluid mt-5" >
                        <div className="row">
                            <div className="col-12">
                                <img
                                    src={herohome}
                                    className="img-fluid rounded-5 shadow-lg proty9-bottom-hero"
                                    alt="Living Room"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <section className="proty9-stats-section mt-5">
                    <div className="container">
                        <div className="row g-0 proty9-stats-row">
                            {counts.map((value, index) => (
                                <div key={index} className="col-6 col-md-3 proty9-stats-col">
                                    <div className="proty9-counter-box">
                                        <h2 className="proty9-counter-number">
                                            {value.toLocaleString()}+
                                        </h2>
                                        <p className="proty9-counter-label">{labels[index]}</p>
                                    </div>
                                    {index < 3 && <div className="proty9-divider d-none d-md-block"></div>}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            <section className="home9-wrapper">
                <div className="container position-relative">
                    <div className="row align-items-center gy-5">

                        <div className="col-lg-6 home9-left">
                            <h2 className="home9-title">
                                We pride ourselves on our extensive market knowledge and
                                commitment to client satisfaction.
                            </h2>

                            <p className="home9-desc">
                                At Proty, we’re more than just a real estate company; we’re
                                architects of dreams, crafting spaces where life flourishes and
                                businesses thrive. With a rich history spanning 12 years, we’ve
                                established ourselves as a trusted leader in the real estate
                                market.
                            </p>

                            <div className="home9-small-img-box">
                                <img src={imgSmall} alt="Interior" className="img-fluid" />
                            </div>
                        </div>

                        <div className="col-lg-6 home9-right">
                            <div className="home9-main-img-box">
                                <img src={imgMain} alt="Luxury Home" className="img-fluid" />
                            </div>

                            <div className="home9-bottom-text">
                                <h5>A powerful platform with thousands of high-end properties</h5>
                                <p>
                                    We offer a comprehensive suite of real estate services, catering
                                    to a diverse clientele with varied needs and aspirations.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="home9-center-play">
                        <svg className="home9-circle-svg" viewBox="0 0 200 200">
                            <defs>
                                <path
                                    id="home9CirclePath"
                                    d="
                                    M 100,100
                                    m -75,0
                                    a 75,75 0 1,1 150,0
                                    a 75,75 0 1,1 -150,0
                                    "
                                />
                            </defs>

                            <text textAnchor="middle">
                                <textPath href="#home9CirclePath" startOffset="50%">
                                    find the dream home · proty real estate ·
                                </textPath>
                            </text>
                        </svg>

                        <div className="home9-play-circle">
                            <i className="fa-solid fa-play"></i>
                        </div>
                    </div>

                </div>
            </section>
            <section className="home9-services-section">
      <div className="container">

        <div className="home9-services-heading text-center">
          <h2>Have a look at our services</h2>
          <p>
            Our vision is to be the premier real estate company in New York,
            recognized for our unwavering commitment to excellence, innovation,
            and community impact. We aspire to create lasting value for our
            clients, employees, and the communities we serve.
          </p>
        </div>

        <div className="row g-4">

          <div className="col-lg-4 col-md-6">
            <div className="home9-service-card">
              <div className="home9-service-header">
                <div className="home9-service-icon">
                  <i className="fa-solid fa-handshake"></i>
                </div>
                <h5>Residential sales & leasing</h5>
              </div>

              <div className="home9-service-img">
                <img src={serviceImg1} alt="Residential" />
              </div>

              <p className="home9-service-text">
                Assisting clients in buying, selling, and leasing residential
                properties such as houses, apartments,condominiums
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="home9-service-card">
              <div className="home9-service-header">
                <div className="home9-service-icon">
                  <i className="fa-solid fa-building"></i>
                </div>
                <h5>Commercial Real Estate Services</h5>
              </div>

              <div className="home9-service-img">
                <img src={serviceImg2} alt="Commercial" />
              </div>

              <p className="home9-service-text">
                Assisting clients in buying, selling, and leasing residential
                properties such as houses, apartments,condominiums
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="home9-service-card">
              <div className="home9-service-header">
                <div className="home9-service-icon">
                  <i className="fa-solid fa-house-user"></i>
                </div>
                <h5>Property Management</h5>
              </div>

              <div className="home9-service-img">
                <img src={serviceImg3} alt="Property Management" />
              </div>

              <p className="home9-service-text">
                Assisting clients in buying, selling, and leasing residential
                properties such as houses, apartments,condominiums
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
        </>
    )
}