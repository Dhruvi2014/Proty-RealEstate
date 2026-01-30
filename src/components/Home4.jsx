import "../Home4.css";
import logo from "../assets/home4logo1.png";
import heroBg from "../assets/herohome.jpeg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import home3person1 from "../assets/home3person1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import boxhouse1 from "../assets/box-house1.jpg";
import boxhouse2 from "../assets/box-house2.jpg";

import home2box1 from "../assets/home2box1.jpg";
import home2box2 from "../assets/home2box2.jpg";
import home2box3 from "../assets/home2box3.jpg";
import home2box4 from "../assets/home2box4.jpg";
import home2box5 from "../assets/home2box5.jpg";
import home2box6 from "../assets/home2box6.jpg";

import cat1 from "../assets/img1.jpg";
import cat2 from "../assets/img2.jpg";
import cat3 from "../assets/img3.jpg";
import cat4 from "../assets/img4.jpg";
import cat5 from "../assets/img5.jpg";
import cat6 from "../assets/img6.jpg";
import cat7 from "../assets/img7.jpg";
import cat8 from "../assets/img1.jpg";
import cat9 from "../assets/img2.jpg";

import agent from "../assets/person-1.png";

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

import heroBg1 from "../assets/home2building.jpeg";

import bloggrid1 from "../assets/blog-grid-1.jpg";
import bloggrid2 from "../assets/blog-grid-2.jpg";
import bloggrid3 from "../assets/blog-grid-3.jpg";

import footerImg from "../assets/footerImg.png";
import footerlogo from "../assets/home4logo2.png";


export default function Home4() {
    const [type, setType] = useState("rent");
    const [showFilter, setShowFilter] = useState(false);

    const rowOneLogos = [logo1, logo2, logo3, logo4, logo5];
    const rowTwoLogos = [logo5, logo4, logo3, logo2, logo1];

    const propertyTypes = [
        { title: "Apartment", count: "234 Property", icon: "fa-building" },
        { title: "Villa", count: "234 Property", icon: "fa-house-chimney" },
        { title: "Studio", count: "234 Property", icon: "fa-city", active: true },
        { title: "Office", count: "234 Property", icon: "fa-briefcase" },
        { title: "Townhouse", count: "234 Property", icon: "fa-house" },
        { title: "Commercial", count: "234 Property", icon: "fa-store" },
    ];

    const houses = [
        { id: 1, img: home2box1 },
        { id: 2, img: home2box2 },
        { id: 3, img: home2box3 },
        { id: 4, img: home2box4 },
        { id: 5, img: home2box5 },
        { id: 6, img: home2box6 },

    ];

    const [startIndex, setStartIndex] = useState(0);
    const visibleCards = 3;

    const handleNext = () => {
        if (startIndex < houses.length - visibleCards) {
            setStartIndex(startIndex + 1);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const propertyCategories = [
        { id: 1, title: "New York", count: "2,491 Properties", img: cat1 },
        { id: 2, title: "New York", count: "2,491 Properties", img: cat2 },
        { id: 3, title: "New York", count: "2,491 Properties", img: cat3 },
        { id: 4, title: "New York", count: "1,320 Properties", img: cat4 },
        { id: 5, title: "New York", count: "980 Properties", img: cat5 },
        { id: 6, title: "New York", count: "640 Properties", img: cat6 },
        { id: 7, title: "New York", count: "410 Properties", img: cat7 },
        { id: 8, title: "New York", count: "290 Properties", img: cat8 },
        { id: 9, title: "New York", count: "150 Properties", img: cat9 }
    ];

    const [activeCard, setActiveCard] = useState(0);

    const maxSlideLimit = propertyCategories.length - 3;

    const handleNextCategory = () => {
        if (activeCard < maxSlideLimit) {
            setActiveCard(activeCard + 1);
        }
    };

    const handlePrevCategory = () => {
        if (activeCard > 0) {
            setActiveCard(activeCard - 1);
        }
    };

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


    return (
        <>

            <div className="home4-page">
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

                            <button className="agents-btn-primary">
                                Meet The Team
                            </button>


                            <div className="row agents-stats mt-5">
                                <div className="col-4 text-center">
                                    <i className="fa-solid fa-house stats-icon"></i>
                                    <h4>900+</h4>
                                    <p>Homes for Sale</p>
                                </div>

                                <div className="col-4 text-center">
                                    <i className="fa-solid fa-user stats-icon"></i>
                                    <h4>287</h4>
                                    <p>Real Estate Agents</p>
                                </div>

                                <div className="col-4 text-center">
                                    <i className="fa-solid fa-shield-halved stats-icon"></i>
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


            <section className="property-types-section1 pt-5 pb-0">
                <div className="container text-center">
                    <h2 className="section-title1">Try Searching For</h2>
                    <p className="section-subtitle1">
                        Thousands of luxury home enthusiasts just like you have found their dream home
                    </p>

                    <Swiper
                        modules={[Pagination]}
                        slidesPerView="auto"
                        spaceBetween={24}
                        pagination={{ clickable: true }}
                        className="property-swiper1"
                    >
                        {propertyTypes.map((item, index) => (
                            <SwiperSlide key={index} className="property-slide1">
                                <div className={`property-card1 ${item.active ? "active" : ""}`}>
                                    <span className="spill-bg1"></span>

                                    <div className="property-icon1">
                                        <i className={`fa-solid ${item.icon}`}></i>
                                    </div>

                                    <h5>{item.title}</h5>
                                    <p>{item.count}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            <section className="cpp-properties-section">
                <div className="container">

                    <h2 className="cpp-title text-center">Featured Properties</h2>
                    <p className="cpp-subtitle text-center">
                        Thousands of luxury home enthusiasts just like you visit our website.
                    </p>

                    <div className="cpp-slider-wrapper">

                        <div className="cpp-slider-window">
                            <div
                                className="cpp-slider-track"
                                style={{ transform: `translateX(-${startIndex * 33.333}%)` }}
                            >
                                {houses.map((item) => (
                                    <div className="cpp-property-col" key={item.id}>
                                        <div className="cpp-property-card">

                                            <div className="cpp-image-box">
                                                <img src={item.img} alt="property" />

                                                <span className="cpp-badge cpp-featured">Featured</span>
                                                <span className="cpp-badge cpp-sale">For Sale</span>

                                                <div className="cpp-hover-icons">
                                                    <span><i className="fa-regular fa-bookmark"></i></span>
                                                    <span><i className="fa-solid fa-magnifying-glass"></i></span>
                                                </div>
                                            </div>

                                            <div className="cpp-card-body">
                                                <h5 className="cpp-card-title">Elegant studio flat</h5>

                                                <p className="cpp-location">
                                                    <i className="fa-solid fa-location-dot"></i>
                                                    &nbsp;102 Ingraham St, Brooklyn, NY 11237
                                                </p>

                                                <p className="cpp-meta">
                                                    <strong>3</strong> Beds &nbsp;
                                                    <strong>3</strong> Baths &nbsp;
                                                    <strong>4,043</strong> Sqft
                                                </p>

                                                <div className="cpp-card-footer">
                                                    <span className="cpp-price">$8.600</span>

                                                    <div className="cpp-actions">
                                                        <span className="cpp-compare">
                                                            <i className="fa-solid fa-arrow-right-arrow-left"></i>
                                                            &nbsp;Compare
                                                        </span>

                                                        <button className="cpp-details-btn">Details</button>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="cpp-pagination-row">

                        <button
                            className="cpp-pagination-btn"
                            onClick={handlePrev}
                            disabled={startIndex === 0}
                        >
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>

                        <div className="cpp-dots-wrapper">
                            {houses.slice(0, houses.length - visibleCards + 1).map((_, index) => (
                                <span
                                    key={index}
                                    className={`cpp-dot ${startIndex === index ? "active" : ""}`}
                                    onClick={() => setStartIndex(index)}
                                ></span>
                            ))}
                        </div>

                        <button
                            className="cpp-pagination-btn"
                            onClick={handleNext}
                            disabled={startIndex === houses.length - visibleCards}
                        >
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>

                    </div>

                </div>
            </section>

            <section className="help-section">
                <div className="container">

                    <div className="text-center mb-5">
                        <h2 className="help-title">How Can We Help You?</h2>
                        <p className="help-subtitle">
                            Thousands of luxury home enthusiasts just like you visit our website.
                        </p>
                    </div>

                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="help-card">
                                <div className="icon-box">
                                    <i className="fas fa-user-tie"></i>
                                </div>
                                <div className="content">
                                    <h5>Find the Best Agent for You</h5>
                                    <p>
                                        Explore video tours, in-depth research, and articles on
                                        20,000 neighborhoods. Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit.
                                    </p>
                                    <a href="#">Learn More</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="help-card">
                                <div className="icon-box bg-gold">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="content">
                                    <h5>Explore Great Neighborhoods</h5>
                                    <p>
                                        Explore video tours, in-depth research, and articles on
                                        20,000 neighborhoods. Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit.
                                    </p>
                                    <a href="#">Learn More</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="help-card">
                                <div className="icon-box">
                                    <i className="fas fa-home"></i>
                                </div>
                                <div className="content">
                                    <h5>Find highly rated apartments</h5>
                                    <p>
                                        Explore video tours, in-depth research, and articles on
                                        20,000 neighborhoods. Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit.
                                    </p>
                                    <a href="#">Learn More</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="help-card">
                                <div className="icon-box">
                                    <i className="fas fa-chart-line"></i>
                                </div>
                                <div className="content">
                                    <h5>Search Recent Property Sales</h5>
                                    <p>
                                        Explore video tours, in-depth research, and articles on
                                        20,000 neighborhoods. Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit.
                                    </p>
                                    <a href="#">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <br></br>
            <section>
                <div className="container pcs-slider-wrapper">
                    <h2 className="cpp-title text-center">Explore Property Categories</h2>
                    <p className="cpp-subtitle text-center">
                        We connect you directly to the person that knows the most about a property for sale, the
                        listing agent.                    </p>
                    <div className="pcs-slider-window">
                        <div
                            className="pcs-slider-track"
                            style={{
                                transform: `translateX(-${activeCard * 33.3333}%)`
                            }}

                        >
                            {propertyCategories.map((item) => (
                                <div className="pcs-card" key={item.id}>
                                    <img src={item.img} alt={item.title} />

                                    <div className="pcs-overlay">
                                        <h5>{item.title}</h5>
                                        <span>
                                            {item.count}
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pcs-controls">
                        <button
                            className="pcs-control-btn"
                            onClick={handlePrevCategory}
                            disabled={activeCard === 0}
                        >
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>

                        <div className="pcs-dots">
                            {Array.from({ length: maxSlideLimit + 1 }).map((_, dotIndex) => (
                                <span
                                    key={dotIndex}
                                    className={`pcs-dot ${activeCard === dotIndex ? "active" : ""
                                        }`}
                                    onClick={() => setActiveCard(dotIndex)}
                                ></span>
                            ))}
                        </div>

                        <button
                            className="pcs-control-btn"
                            onClick={handleNextCategory}
                            disabled={activeCard === maxSlideLimit}
                        >
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>

                </div>

            </section>

            <section className="cta-wrapper1 mt-5">
                <div className="cta-card1">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <h2>
                                Are You Selling Or <br /> Renting Your Property?
                            </h2>
                            <p>
                                Thousands of luxury home enthusiasts just like you visit our
                                website.
                            </p>
                            <button className="btn cta-btn1">
                                Request your free appraisal
                            </button>
                        </div>

                        <div className="col-lg-6 col-md-12 text-center">
                            <img src={agent} className="agent-img1" alt="agent" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="cpp-properties-section">
                <div className="container">

                    <h2 className="cpp-title text-center">Best Properties For Sale</h2>
                    <p className="cpp-subtitle text-center">
                        Thousands of luxury home enthusiasts just like you visit our website.
                    </p>

                    <div className="cpp-slider-wrapper">

                        <div className="cpp-slider-window">
                            <div
                                className="cpp-slider-track"
                                style={{ transform: `translateX(-${startIndex * 33.333}%)` }}
                            >
                                {houses.map((item) => (
                                    <div className="cpp-property-col" key={item.id}>
                                        <div className="cpp-property-card">

                                            <div className="cpp-image-box">
                                                <img src={item.img} alt="property" />

                                                <span className="cpp-badge cpp-featured">Featured</span>
                                                <span className="cpp-badge cpp-sale">For Sale</span>

                                                <div className="cpp-hover-icons">
                                                    <span><i className="fa-regular fa-bookmark"></i></span>
                                                    <span><i className="fa-solid fa-magnifying-glass"></i></span>
                                                </div>
                                            </div>

                                            <div className="cpp-card-body">
                                                <h5 className="cpp-card-title">Elegant studio flat</h5>

                                                <p className="cpp-location">
                                                    <i className="fa-solid fa-location-dot"></i>
                                                    &nbsp;102 Ingraham St, Brooklyn, NY 11237
                                                </p>

                                                <p className="cpp-meta">
                                                    <strong>3</strong> Beds &nbsp;
                                                    <strong>3</strong> Baths &nbsp;
                                                    <strong>4,043</strong> Sqft
                                                </p>

                                                <div className="cpp-card-footer">
                                                    <span className="cpp-price">$8.600</span>

                                                    <div className="cpp-actions">
                                                        <span className="cpp-compare">
                                                            <i className="fa-solid fa-arrow-right-arrow-left"></i>
                                                            &nbsp;Compare
                                                        </span>

                                                        <button className="cpp-details-btn">Details</button>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="cpp-pagination-row">

                        <button
                            className="cpp-pagination-btn"
                            onClick={handlePrev}
                            disabled={startIndex === 0}
                        >
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>

                        <div className="cpp-dots-wrapper">
                            {houses.slice(0, houses.length - visibleCards + 1).map((_, index) => (
                                <span
                                    key={index}
                                    className={`cpp-dot ${startIndex === index ? "active" : ""}`}
                                    onClick={() => setStartIndex(index)}
                                ></span>
                            ))}
                        </div>

                        <button
                            className="cpp-pagination-btn"
                            onClick={handleNext}
                            disabled={startIndex === houses.length - visibleCards}
                        >
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>

                    </div>

                </div>
            </section>

            <section className="testimonialSectionWrap container-fluid">
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

                    <div className="testimonialNavControls1">
                        <div className="testimonialFooterControls">
                            <button
                                className="testimonialArrowBtn1"
                                onClick={handleTestimonialPrev}
                            >
                                <i className="fas fa-arrow-left"></i>
                            </button>

                            <div className="testimonialDotsWrap1">
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
                                className="testimonialArrowBtn1"
                                onClick={handleTestimonialNext}
                            >
                                <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            <section className="wt-main-section container">
                <div className="container text-center">
                    <h2 className="wt-title">Let’s Work Together</h2>
                    <p className="wt-subtitle">
                        Thousands of luxury home enthusiasts just like you visit our website.
                    </p>
                </div>

                <div className="wt-slider-wrapper">
                    <div className="wt-slider wt-slider-left">
                        {[...rowOneLogos, ...rowOneLogos].map((logo, index) => (
                            <div className="wt-logo-card" key={`row1-${index}`}>
                                <img src={logo} alt="Real Estate Logo" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="wt-slider-wrapper">
                    <div className="wt-slider wt-slider-right">
                        {[...rowTwoLogos, ...rowTwoLogos].map((logo, index) => (
                            <div className="wt-logo-card" key={`row2-${index}`}>
                                <img src={logo} alt="Real Estate Logo" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section
                className="agency-hero-section"
                style={{ backgroundImage: `url(${heroBg1})` }}
            >
                <div className="agency-hero-overlay"></div>

                <div className="container position-relative">
                    <div className="agency-hero-content text-center text-white">
                        <h1>
                            Sell Your Home With One Of <br />
                            California’s Leading Real Estate Agencies
                        </h1>
                        <p>
                            Find a lender who can offer competitive mortgage rates and help you
                            with pre-approval.
                        </p>

                        <a href="#" className="agency-hero-btn mb-5">
                            Meet The Team
                        </a>
                    </div>

                    <div className="row agency-card-row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="agency-service-card">
                                <div className="agency-icon">
                                    <i class="fa-solid fa-person-shelter"></i>                                </div>
                                <h4>Property Management</h4>
                                <p>
                                    Realty real estate specialise in property management, with
                                    services that cover all aspects of residential and commercial
                                    leasing.
                                </p>

                                <a href="#" className="agency-card-btn">
                                    Find out more
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="agency-service-card">
                                <div className="agency-icon">
                                    <i class="fa-solid fa-house-user"></i>                                </div>
                                <h4>Rent a Home</h4>
                                <p>
                                    Realty real estate specialise in property management, with
                                    services that cover all aspects of residential and commercial
                                    leasing.
                                </p>

                                <a href="#" className="agency-card-btn">
                                    Find out more
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12 mb-4">
                            <div className="agency-service-card">
                                <div className="agency-icon">
                                    <i className="fas fa-tag"></i>
                                </div>
                                <h4>Sell a Home</h4>
                                <p>
                                    Realty real estate specialise in property management, with
                                    services that cover all aspects of residential and commercial
                                    leasing.
                                </p>

                                <a href="#" className="agency-card-btn">
                                    Find out more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <section className="insight-section4 mb-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title4">Insight & Opinion</h2>
                        <p className="section-subtitle4">
                            Thousands of luxury home enthusiasts just like you visit our website.
                        </p>
                    </div>

                    <div className="row g-4">
                        {blogs.map((blog, index) => (
                            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                                <div className="blog-card4">
                                    <div className="img-wrapper4">
                                        <img src={blog.img} alt="blog" />
                                        <span className="tag4">{blog.tag}</span>
                                    </div>

                                    <div className="blog-content4">
                                        <div className="date4">
                                            <i className="fa-regular fa-clock"></i>
                                            <span>{blog.date}</span>
                                        </div>

                                        <h4>{blog.title}</h4>

                                        <Link
                                            to={`/blog/${blog.id}`}
                                            className="read-more4"
                                            style={{ color: "#b88e2e" }}
                                        >
                                            Read More <i className="fa-solid fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="footer4-cta">
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
                            <div className="cta-search2">
                                <input type="text" placeholder="Find your location agent" />
                                <i className="fas fa-search"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer4">
                <div className="container">
                    <div className="footer-top d-flex flex-column flex-md-row justify-content-between align-items-center">
                        <div className="footer-logo4">
                            <img src={footerlogo} alt="logo" />
                        </div>

                        <div className="footer-contact4">
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
                            <button className="subscribe-btn4">Subscribe</button>

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
    )
}
