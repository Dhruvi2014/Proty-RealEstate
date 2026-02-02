import "../Home2.css";
import logo from "../assets/logo3.png";
import heroBg from "../assets/herohome.jpeg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import personImg from "../assets/home-2-person.png";
// import buildingImg from "../assets/building-home2.png"; 

import home2box1 from "../assets/home2box1.jpg";
import home2box2 from "../assets/home2box2.jpg";
import home2box3 from "../assets/home2box3.jpg";
import home2box4 from "../assets/home2box4.jpg";
import home2box5 from "../assets/home2box5.jpg";
import home2box6 from "../assets/home2box6.jpg";

import agent1 from "../assets/home2person1.jpg";
import agent2 from "../assets/home2person2.jpg";
import agent3 from "../assets/home2person3.jpg";
import agent4 from "../assets/home2person4.jpg";
import home2person5 from "../assets/home2person5.png";

import city1 from "../assets/img1.jpg";
import city2 from "../assets/img2.jpg";
import city3 from "../assets/img3.jpg";
import city4 from "../assets/img4.jpg";
import city5 from "../assets/img5.jpg";
import city6 from "../assets/img6.jpg";

import home2t1 from "../assets/home2t1.jpg";
import home2t2 from "../assets/home2t2.jpg";
import home2t3 from "../assets/home2t3.jpg";
import home2t4 from "../assets/home2t1.jpg";
import home2t5 from "../assets/home2t2.jpg";

import logo1 from "../assets/vector1.png";
import logo2 from "../assets/vector2.png";
import logo3 from "../assets/vector3.png";
import logo4 from "../assets/vector4.png";
import logo5 from "../assets/vector5.png";

import bloggrid1 from "../assets/blog-grid-1.jpg";
import bloggrid2 from "../assets/blog-grid-2.jpg";
import bloggrid3 from "../assets/blog-grid-3.jpg";

import footerImg from "../assets/footerImg.png";
import footerlogo from "../assets/logo3.png";

const testimonialDataList = [
    {
        img: home2t1,
        text: "Phasellus efficitur dictum urna, non elementum mauris mollis a. Duis lacinia arcu ac lorem ultricies porta.",
        name: "Ronald Richards",
        role: "CEO Themesflat",
    },
    {
        img: home2t2,
        text: "Proin auctor, mauris at tristique ullamcorper, nunc nisi sagittis velit, eget blandit dolor arcu sed ante.",
        name: "Courtney Henry",
        role: "CEO Themesflat",
    },
    {
        img: home2t3,
        text: "Phasellus efficitur dictum urna, non elementum mauris mollis a. Duis lacinia arcu ac lorem ultricies porta.",
        name: "Ronald Richards",
        role: "CEO Themesflat",
    },
    {
        img: home2t4,
        text: "Aliquam felis eros, eleifend non faucibus at, viverra sed lorem. Fusce euismod varius massa.",
        name: "Esther Howard",
        role: "Marketing Head",
    },
    {
        img: home2t5,
        text: "Suspendisse potenti. Cras ultricies ligula sed magna dictum porta.",
        name: "Brooklyn Simmons",
        role: "Product Manager",
    },
];

const logos = [
    { image: logo1 },
    { image: logo2 },
    { image: logo3 },
    { image: logo4 },
    { image: logo5 },
];

const blogs = [
    {
        img: bloggrid1,
        tag: "Real estate",
        title: "Building gains into housing stocks and how to trade the...",
        date: "26 August, 2024",
    },
    {
        img: bloggrid2,
        tag: "News",
        title: "Building gains into housing stocks and how to trade the...",
        date: "26 August, 2024",
    },
    {
        img: bloggrid3,
        tag: "Real estate",
        title: "Building gains into housing stocks and how to trade the...",
        date: "26 August, 2024",
    },
];

export default function Home2() {
    const [type, setType] = useState("rent");
    const [showFilter, setShowFilter] = useState(false);

    const propertyData = [
        { title: "Apartment", icon: "fa-building" },
        { title: "Villa", icon: "fa-house-chimney" },
        { title: "Studio", icon: "fa-city" },
        { title: "Townhouse", icon: "fa-building-columns" },
        { title: "Commercial", icon: "fa-briefcase" },
        { title: "Family Home", icon: "fa-house" },
        { title: "Penthouse", icon: "fa-hotel" },
        { title: "Land / Plot", icon: "fa-map-location-dot" }
    ];

    const houses = [
        { id: 1, img: home2box1 },
        { id: 2, img: home2box2 },
        { id: 3, img: home2box3 },
        { id: 4, img: home2box4 },
        { id: 5, img: home2box5 },
        { id: 6, img: home2box6 },
    ];

    const [activeDot, setActiveDot] = useState(0);

    const countersData = [
        { id: "years", label: "Years of Business", target: 26, suffix: "+" },
        { id: "sold", label: "Properties sold", target: 4130 },
        { id: "happy", label: "Happy customers", target: 98, suffix: "%" },
        { id: "clients", label: "Years of Business", target: 1780 },
    ];

    const [counts, setCounts] = useState({});

    useEffect(() => {
        countersData.forEach((item) => {
            const saved = Number(localStorage.getItem(item.id)) || 0;
            const target = item.target;

            if (saved >= target) {
                setCounts((prev) => ({ ...prev, [item.id]: target }));
                return;
            }

            let current = saved;
            const steps = Math.ceil(target / 60);

            const interval = setInterval(() => {
                current += steps;

                if (current >= target) {
                    current = target;
                    clearInterval(interval);
                }

                localStorage.setItem(item.id, current);
                setCounts((prev) => ({ ...prev, [item.id]: current }));
            }, 30);
        });
    }, []);

    const agents = [
        { id: 1, img: agent1, name: "Leslie Alexander", role: "Sale agent" },
        { id: 2, img: agent2, name: "Leslie Alexander", role: "Sale agent" },
        { id: 3, img: agent3, name: "Leslie Alexander", role: "Sale agent" },
        { id: 4, img: agent4, name: "Leslie Alexander", role: "Sale agent" },
    ];

    const images = [city1, city2, city3, city4, city5, city6];
    const CARD_WIDTH = 360;
    const GAP = 24;
    const VISIBLE = 4;

    const [index, setIndex] = useState(0);
    const maxIndex = images.length - VISIBLE;

    const next = () => {
        if (index < maxIndex) setIndex(index + 1);
    };

    const prev = () => {
        if (index > 0) setIndex(index - 1);
    };

    const [testimonialPointer, setTestimonialPointer] = useState(0);

    const handleTestimonialNext = () => {
        if (testimonialPointer < testimonialDataList.length - 3) {
            setTestimonialPointer(testimonialPointer + 1);
        }
    };

    const handleTestimonialPrev = () => {
        if (testimonialPointer > 0) {
            setTestimonialPointer(testimonialPointer - 1);
        }
    };

    return (
        <>
            <div className="home2-page">
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

                                <button className="btn btn-outline-success rounded-pill px-4">
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

                <section
                    className="proty2-hero"
                    style={{ backgroundImage: `url(${heroBg})` }}
                >
                    <div className="proty2-overlay"></div>

                    <div className="container proty2-content text-center">

                        <h1>Your Way Home Starts Here</h1>
                        <p>Thousands of luxury home enthusiasts just like you visit our website.</p>

                        <div className="proty2-toggle">
                            <button
                                className={type === "rent" ? "active" : ""}
                                onClick={() => setType("rent")}
                            >
                                For Rent
                            </button>
                            <button
                                className={type === "sale" ? "active" : ""}
                                onClick={() => setType("sale")}
                            >
                                For Sale
                            </button>
                        </div>

                        <div className="proty2-search-bar">
                            <input placeholder="Address, City, ZIP..." />

                            <select>
                                <option>Property type</option>
                                <option>Apartment</option>
                                <option>Villa</option>
                            </select>

                            <select>
                                <option>Location</option>
                                <option>New York</option>
                                <option>California</option>
                            </select>

                            <button
                                className="filter-btn"
                                onClick={() => setShowFilter(!showFilter)}
                            >
                                <i className="fa-solid fa-sliders"></i>
                            </button>

                            <button className="search-btn">
                                Search <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>

                        {showFilter && (
                            <div className="proty2-filter-panel">

                                <div className="range-row">
                                    <div>
                                        <p>Price range</p>
                                        <input type="range" />
                                    </div>
                                    <div>
                                        <p>Size range</p>
                                        <input type="range" />
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col-md-3">
                                        <select className="form-select">
                                            <option>Province / States</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3">
                                        <select className="form-select">
                                            <option>Rooms</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3">
                                        <select className="form-select">
                                            <option>Bath : Any</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3">
                                        <select className="form-select">
                                            <option>Beds : Any</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="amenities mt-3">
                                    <p>Amenities:</p>
                                    <label><input type="checkbox" /> Dishwasher</label>
                                    <label><input type="checkbox" /> Fireplace</label>
                                    <label><input type="checkbox" /> Microwave</label>
                                    <label><input type="checkbox" /> Security cameras</label>
                                </div>

                            </div>
                        )}
                    </div>
                </section>
            </div>

            <section className="property-section">
                <div className="container">
                    <h2 className="section-title">Property Type</h2>
                    <p className="section-subtitle">
                        Thousands of luxury home enthusiasts just like you visit our website.
                    </p>

                    <div className="row">
                        {propertyData.map((item, index) => (
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mb-4" key={index}>
                                <div className="property-box">
                                    <div className="icon-box">
                                        <i className={`fa-solid ${item.icon}`}></i>
                                    </div>

                                    <div className="property-content">
                                        <h5>{item.title}</h5>
                                        <p>
                                            <i className="fa-regular fa-file-lines"></i> 476 listings for sale
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <section className="trusted-section">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-6 col-md-12">
                            <h2 className="trusted-title">
                                Trusted By 100+ Million Buyers
                            </h2>
                            <p className="trusted-subtitle">
                                We connect you directly to the person that knows the most about a
                                property for sale, the listing agent
                            </p>

                            <div className="row mt-4">
                                <div className="col-md-6 mb-4">
                                    <div className="info-card">
                                        <div className="icon-circle">
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <h5>Explore Great Neighborhoods</h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                                            sollicitudin ipsum eu massa
                                        </p>
                                        <span className="learn-more">Learn More</span>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <div className="info-card">
                                        <div className="icon-circle">
                                            <i className="fa-solid fa-user-tie"></i>
                                        </div>
                                        <h5>Find the Best Agent for You</h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                                            sollicitudin ipsum eu massa
                                        </p>
                                        <span className="learn-more">Learn More</span>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <div className="info-card">
                                        <div className="icon-circle">
                                            <i className="fa-solid fa-building"></i>
                                        </div>
                                        <h5>Find highly rated apartments</h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                                            sollicitudin ipsum eu massa
                                        </p>
                                        <span className="learn-more">Learn More</span>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <div className="info-card">
                                        <div className="icon-circle">
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                        <h5>Search Recent Property Sales</h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                                            sollicitudin ipsum eu massa
                                        </p>
                                        <span className="learn-more">Learn More</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 text-center image-wrapper">
                            <img src={personImg} alt="Person" className="person-img" />
                            {/* <img src={buildingImg} alt="Building" className="building-img" /> */}
                        </div>

                    </div>
                </div>
            </section>

            <div className="popular-wrapper container">
                <div className="text-center mb-4">
                    <h2 className="fw-bold">Popular Searches</h2>
                    <p className="text-muted">
                        Thousands of luxury home enthusiasts just like you visit our website.
                    </p>
                </div>

                <div className="d-flex justify-content-center gap-3 mb-5 flex-wrap">
                    {["Michigan", "Oklahoma", "Kentucky", "Nebraska", "Colorado"].map(
                        (item, i) => (
                            <button
                                key={i}
                                className={`state-btn ${i === 0 ? "active" : ""}`}
                            >
                                {item}
                            </button>
                        )
                    )}
                </div>

                <div className="slider-viewport">
                    <div
                        className="slider-track"
                        style={{
                            transform: `translateX(-${activeDot * 25}%)`

                        }}

                    >
                        {houses.map((item) => (
                            <div className="slider-card" key={item.id}>
                                <div className="property-card">
                                    <div className="img-wrapper">
                                        <img src={item.img} alt="property" />

                                        <span className="badge featured">Featured</span>
                                        <span className="badge sale">For Sale</span>

                                        <div className="hover-icons">
                                            <i className="fas fa-bookmark"></i>
                                            <i className="fas fa-search"></i>
                                        </div>
                                    </div>

                                    <div className="property-body">
                                        <h5>Elegant studio flat</h5>

                                        <p className="location">
                                            <i className="fas fa-map-marker-alt"></i>
                                            Ingraham St, Brooklyn, NY 11237
                                        </p>

                                        <div className="details">
                                            <span>3 Beds</span>
                                            <span>3 Baths</span>
                                            <span>4,043 Sqft</span>
                                        </div>

                                        <div className="price-row">
                                            <h4>$8.600</h4>

                                            <div className="actions">
                                                <span className="compare">
                                                    <i className="fas fa-exchange-alt"></i> Compare
                                                </span>
                                                <button className="details-btn">Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="dots">
                    {[0, 1, 2].map((dot) => (
                        <span
                            key={dot}
                            className={`dot ${activeDot === dot ? "active" : ""}`}
                            onClick={() => setActiveDot(dot)}
                        ></span>
                    ))}
                </div>
            </div>

            <section className="hero-section">
                <div className="overlay"></div>

                <div className="container hero-content text-center">
                    <h1>Market Your Property With <br /> Realty</h1>

                    <p className="subtitle">
                        No obligation market appraisal for your property today.
                        Our virtual options are still available if you prefer
                    </p>

                    <div className="row stats-row mt-5">
                        {countersData.map((item) => (
                            <div className="col-6 col-md-3 mb-4" key={item.id}>
                                <div className="stat-card">
                                    <h2>
                                        {counts[item.id] || 0}
                                        {item.suffix || ""}
                                    </h2>
                                    <p>{item.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="agents-section">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="agents-title">Choose Your Local Agent</h2>
                        <p className="agents-subtitle">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
                            lobortis justo
                        </p>
                    </div>

                    <div className="row g-4">
                        {agents.map((agent) => (
                            <div className="col-lg-3 col-md-6">
                                <div className="agent-card">
                                    <div className="agent-img-wrap">
                                        <img src={agent.img} alt="agent" />

                                        <div className="agent-social">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>

                                    <div className="agent-content">
                                        <h5>Leslie Alexander</h5>
                                        <span>Sale agent</span>

                                        <div className="agent-icons">
                                            <a href="#"><i className="fas fa-phone"></i></a>
                                            <a href="#"><i className="fas fa-envelope"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>

                    <div className="text-center mt-5">
                        <p className="agent-bottom-text">
                            Explore Property agents are here to help with all your buying,
                            renting and selling goals.
                            <br />
                            Find the home of your dreams with an expert you can trust. Let’s chat
                        </p>

                        <button className="agent-btn">
                            Find your location agent <i className="fas fa-search ms-2"></i>
                        </button>
                    </div>
                </div>
            </section>

            <section className="neighborhood-section">
                <div className="neighborhood-wrapper text-center">
                    <h2 className="section-title">Explore The Neighborhoods</h2>
                    <p className="section-subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
                        lobortis justo
                    </p>

                    <div className="slider-viewport1">
                        <div
                            className="slider-track1"
                            style={{
                                transform: `translateX(-${index * (CARD_WIDTH + GAP)
                                    }px)`,
                            }}
                        >
                            {images.map((img, i) => (
                                <div className="slider-card1" key={i}>
                                    <div className="city-card">
                                        <img src={img} alt="city" />

                                        <div className="city-overlay">
                                            <h5>New York</h5>
                                            <span>
                                                2,491 Properties
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="slider-controls">
                        <button onClick={prev} disabled={index === 0}>
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>

                        <div className="dots">
                            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                                <span
                                    key={i}
                                    className={`dot ${index === i ? "active" : ""}`}
                                    onClick={() => setIndex(i)}
                                ></span>
                            ))}
                        </div>

                        <button onClick={next} disabled={index === maxIndex}>
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </section>

            <section className="testimonialSectionWrap">
                <div className="container text-center">
                    <h2 className="testimonialMainTitle">Clients Testimonials</h2>
                    <p className="testimonialSubTitle">
                        Thousands of luxury home enthusiasts just like you visit our website.
                    </p>

                    <div className="testimonialSliderWrapper">
                        <div
                            className="testimonialSliderTrack"
                            style={{
                                transform: `translateX(-${testimonialPointer * 33.33}%)`,
                            }}
                        >
                            {testimonialDataList.map((item, idx) => (
                                <div className="testimonialBox" key={idx}>
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="testimonialUserImg"
                                    />

                                    <p className="testimonialDesc">{item.text}</p>

                                    <div className="testimonialStars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>

                                    <h5 className="testimonialUserName">{item.name}</h5>
                                    <span className="testimonialUserRole">{item.role}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="testimonialNavControls">
                        <div className="testimonialFooterControls">
                            <button
                                className="testimonialArrowBtn"
                                onClick={handleTestimonialPrev}
                            >
                                <i className="fas fa-arrow-left"></i>
                            </button>

                            <div className="testimonialDotsWrap">
                                {Array.from({ length: testimonialDataList.length - 2 }).map(
                                    (_, dotIndex) => (
                                        <span
                                            key={dotIndex}
                                            className={`testimonialDot ${testimonialPointer === dotIndex ? "activeDot" : ""
                                                }`}
                                            onClick={() => setTestimonialPointer(dotIndex)}
                                        ></span>
                                    )
                                )}
                            </div>

                            <button
                                className="testimonialArrowBtn"
                                onClick={handleTestimonialNext}
                            >
                                <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            <section className="sell-banner-wrapper">
                <div className="sell-banner">
                    <div className="sell-content">
                        <h1>
                            Are You Selling Or <br /> Renting Your Property?
                        </h1>
                        <p>
                            Thousands of luxury home enthusiasts just like you visit our website.
                        </p>
                        <button>Request your free appraisal</button>
                    </div>

                    <div className="sell-image">
                        <img
                            src={home2person5}
                            alt="Agent"
                        />
                    </div>
                </div>
            </section>


            <section className="logo-section container">
                <h2>Let’s Work Together</h2>
                <p>Thousands of luxury home enthusiasts just like you visit our website.</p>

                <div className="logo-slider">
                    <div className="logo-track">
                        {[...logos, ...logos].map((logo, index) => (
                            <div className="logo-card" key={index}>
                                <img src={logo.image} alt="Real Estate Logo" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="insight-section">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title">Insight & Opinion</h2>
                        <p className="section-subtitle">
                            Thousands of luxury home enthusiasts just like you visit our website.
                        </p>
                    </div>

                    <div className="row g-4">
                        {blogs.map((blog, index) => (
                            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                                <div className="blog-card">
                                    <div className="img-wrapper">
                                        <img src={blog.img} alt="blog" />
                                        <span className="tag">{blog.tag}</span>
                                    </div>

                                    <div className="blog-content">
                                        <div className="date">
                                            <i className="fa-regular fa-clock"></i>
                                            <span>{blog.date}</span>
                                        </div>

                                        <h4>{blog.title}</h4>

                                        <Link to={`/blog/${blog.id}`} className="read-more">
                                            Read More <i className="fa-solid fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="footer-cta">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 d-flex align-items-center gap-4">
                            <img
                                src={footerImg}
                                alt="agent"
                                className="cta-img"
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
                            <div className="cta-search">
                                <input type="text" placeholder="Find your location agent" />
                                <i className="fas fa-search"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <div className="container">
                    <div className="footer-top d-flex flex-column flex-md-row justify-content-between align-items-center">
                        <div className="footer-logo">
                            <img src={footerlogo} alt="logo" />
                        </div>

                        <div className="footer-contact">
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

                    <div className="row footer-main">
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
                                className="newsletter-input"
                            />
                            <button className="subscribe-btn">Subscribe</button>

                            <div className="terms">
                                <input type="checkbox" />
                                <span>
                                    I have read and agree to the terms & conditions
                                </span>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center">
                        <p>
                            © Copyright 2024 <strong>PROTY</strong> – REAL ESTATE. Designed &
                            Developed by Themesflat
                        </p>

                        <div className="social">
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

    );
}
