import "../Home6.css";
import logo from "../assets/logo.png";
import heroBg from "../assets/herohome.jpeg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import img1 from "../assets/house1.jpg";
import img2 from "../assets/house2.jpg";
import img3 from "../assets/house3.jpg";
import img4 from "../assets/house4.jpg";

import mainImg from "../assets/main-image.jpg";
import sideImg from "../assets/side-image.jpg";

const images = [img1, img2, img3, img4];

export default function Home6() {
    const [index, setIndex] = useState(0);
    const [propertyCount, setPropertyCount] = useState(0);
    const [agentCount, setAgentCount] = useState(0);

    useEffect(() => {
        let p = 0;
        let a = 0;

        const timer = setInterval(() => {
            if (p < 250) p += 5;
            if (a < 470) a += 10;

            setPropertyCount(p);
            setAgentCount(a);

            if (p >= 250 && a >= 470) clearInterval(timer);
        }, 25);

        return () => clearInterval(timer);
    }, []);

    const nextIndex = (index + 1) % images.length;
    const prevIndex = index === 0 ? images.length - 1 : index - 1;

     const [protyAnimate, setProtyAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setProtyAnimate(true), 200);
  }, []);
  const protyServicesData = [
    {
      title: "Residential Sales and Leasing",
      desc: "Assisting clients in buying, selling, and leasing residential properties such as houses, apartments, and condominiums.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      icon: "fa-house"
    },
    {
      title: "Commercial Real Estate Services",
      desc: "Facilitating transactions related to commercial properties such as office buildings, retail spaces, industrial warehouses, land for development.",
      image:
        "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6",
      icon: "fa-building"
    },
    {
      title: "Property Management",
      desc: "Managing properties on behalf of owners, including tenant screening, rent collection, maintenance, and financial reporting.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      icon: "fa-house"
    }
  ];

    return (
        <>
        <div className="home6-page-bg">

            <div className="home6-page">
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
                                            <li>Home Page 7</li>
                                            <li>Home Page 8</li>
                                            <li>Home Page 9</li>
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
                                    Book a visit
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

            </div>
            <section className="hero-section">
                <div className="container-fluid">
                    <div className="row align-items-center">

                        <div className="col-lg-6 hero-left text-white">
                            <h1>
                                Find the home that <br />
                                <span>best fits</span> your finances
                            </h1>

                            <div className="mini-preview">
                                <img src={img1} alt="preview" />
                            </div>


                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Maecenas ultrices sapien dolor.
                            </p>

                            <button className="hero-btn">
                                See property <i className="fas fa-arrow-right"></i>
                            </button>

                            <div className="hero-stats">
                                <div>
                                    <h2>{propertyCount}+</h2>
                                    <p>Property Available</p>
                                </div>
                                <div>
                                    <h2>{agentCount}+</h2>
                                    <p>Local Agent</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 hero-right">

                            <div className="image-wrapper">
                                <div className="image-card">
                                    <img
                                        src={images[index]}
                                        alt="property"
                                        className="main-image"
                                    />
                                </div>
                            </div>

                            <div className="slider-nav-beside">

                                <div className="nav-pill prev" onClick={() => setIndex(prevIndex)}>
                                    <img src={images[prevIndex]} alt="prev" />
                                    <span className="arrow">
                                        <i className="fas fa-arrow-left"></i>
                                    </span>
                                </div>

                                <div className="nav-pill next active" onClick={() => setIndex(nextIndex)}>
                                    <img src={images[nextIndex]} alt="next" />
                                    <span className="arrow">
                                        <i className="fas fa-arrow-right"></i>
                                    </span>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <div className="proty-searchbar-wrapper proty-search-anim" style={{backgroundColor:"#1c1f24"}}>
                <div className="proty-searchbar-box">

                    <div className="proty-search-input">
                        <i className="fas fa-search"></i>
                        <input
                            type="text"
                            placeholder="What to look for?"
                        />
                    </div>

                    <button className="proty-search-btn">
                        Search property
                        <i className="fas fa-arrow-right ms-2"></i>
                    </button>

                </div>
            </div>

            <section className="proty-hero-wrapper">

                <div className="container-fluid">

                    <div className="row align-items-center g-5">

                        <div className="col-lg-5 proty-hero-left proty-anim-left">
                            <h1 className="proty-hero-title">
                                Find the home that <br /> best fits your finances
                            </h1>

                            <p className="proty-hero-desc">
                                At Proty, we're more than just a real estate company; we're architects
                                of dreams, crafting spaces where life flourishes and businesses thrive.
                            </p>

                            <div className="proty-hero-contact">
                                <div className="proty-contact-row">
                                    <i className="fas fa-phone"></i>
                                    <span>(603) 555-0123</span>
                                </div>
                                <div className="proty-contact-row">
                                    <i className="fas fa-envelope"></i>
                                    <span>proty-support@gmail.com</span>
                                </div>
                            </div>

                            <button className="proty-hero-btn">
                                More about <i className="fas fa-arrow-right ms-2"></i>
                            </button>
                        </div>

                        <div className="col-lg-4 proty-hero-center proty-anim-zoom">
                            <div className="proty-main-img-box">
                                <img src={mainImg} alt="Main house" />
                            </div>
                        </div>

                        <div className="col-lg-3 proty-hero-right proty-anim-right">
                            <h5 className="proty-expertise-title">Our Expertise:</h5>
                            <p className="proty-expertise-text">
                                We offer a comprehensive suite of real estate services for diverse needs.
                            </p>

                            <ul className="proty-expertise-list">
                                <li><i className="fas fa-check-circle"></i> Residential Sales & Leasing</li>
                                <li><i className="fas fa-check-circle"></i> Commercial Real Estate</li>
                                <li><i className="fas fa-check-circle"></i> Property Management</li>
                                <li><i className="fas fa-check-circle"></i> Investment Advisory</li>
                            </ul>

                            <div className="proty-side-img-box">
                                <img src={sideImg} alt="Side house" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="proty-services-section">
      <div className="container text-center">

        <h2 className={`proty-services-heading ${protyAnimate ? "proty-show" : ""}`}>
          Have a look at our services
        </h2>

        <p className={`proty-services-subheading ${protyAnimate ? "proty-show" : ""}`}>
          Our vision is to be the premier real estate company recognized for excellence,
          innovation, and lasting value for our clients and communities.
        </p>

        <div className="row justify-content-center mt-5">
          {protyServicesData.map((item, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className={`proty-service-card ${protyAnimate ? "proty-show" : ""}`}>

                <div className="proty-service-icon">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>

                <div className="proty-service-image">
                  <img src={item.image} alt={item.title} />
                </div>

                <h5 className="proty-service-title">{item.title}</h5>
                <p className="proty-service-text">{item.desc}</p>

              </div>
            </div>
          ))}
        </div>

        <button className="proty-services-btn mt-4">
          View all services <i className="fa-solid fa-arrow-right ms-2"></i>
        </button>

      </div>
    </section>
            </div>


        </>
    )
}