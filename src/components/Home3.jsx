import "../Home3.css";
import logo from "../assets/logo4.png";
import heroBg from "../assets/herohome.jpeg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import home3person1 from "../assets/home3person1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import person from "../assets/home2person1.jpg";

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

import home3 from "../assets/home3.jpg";
import t1 from "../assets/home2t1.jpg";
import t2 from "../assets/home2t2.jpg";
import t3 from "../assets/home2t3.jpg";
import t4 from "../assets/testimonials-2.jpg";
import t5 from "../assets/testimonials-3.jpg";

import logo1 from "../assets/vector1.png";
import logo2 from "../assets/vector2.png";
import logo3 from "../assets/vector3.png";
import logo4 from "../assets/vector4.png";
import logo5 from "../assets/vector5.png";

import bloggrid1 from "../assets/blog-grid-1.jpg";
import bloggrid2 from "../assets/blog-grid-2.jpg";
import bloggrid3 from "../assets/blog-grid-3.jpg";

import footerImg from "../assets/footerImg.png";
import footerlogo from "../assets/logo4-4.png";

export default function Home3() {
    const [type, setType] = useState("rent");
    const [showFilter, setShowFilter] = useState(false);

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

    const agents = [
        { id: 1, name: "Leslie Alexander", role: "Sale agent", img: agent1 },
        { id: 2, name: "Leslie Alexander", role: "Sale agent", img: agent2 },
        { id: 3, name: "Leslie Alexander", role: "Sale agent", img: agent3 },
        { id: 4, name: "Leslie Alexander", role: "Sale agent", img: agent4 },
    ];

    const testimonialsData = [
        {
            img: t1,
            text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis, lorem in fringilla feugiat.",
            name: "Brooklyn Simmons",
            location: "Los Angeles, CA",
        },
        {
            img: t2,
            text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis, lorem in fringilla feugiat.",
            name: "Leslie Alexander",
            location: "Los Angeles, CA",
        },
        {
            img: t3,
            text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis, lorem in fringilla feugiat.",
            name: "Kristin Watson",
            location: "San Diego, CA",
        },
        {
            img: t4,
            text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis, lorem in fringilla feugiat.",
            name: "Ronald Richards",
            location: "Miami, FL",
        },
        {
            img: t5,
            text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis, lorem in fringilla feugiat.",
            name: "Courtney Henry",
            location: "New York, NY",
        },
    ];

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const goToNextSlide = () => {
        if (activeSlideIndex < testimonialsData.length - 2) {
            setActiveSlideIndex(activeSlideIndex + 1);
        }
    };

    const goToPrevSlide = () => {
        if (activeSlideIndex > 0) {
            setActiveSlideIndex(activeSlideIndex - 1);
        }
    };

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


    return (
        <>
            <div className="home3-page">
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


            <section className="help-section">
                <div className="container text-center">
                    <h2 className="help-title">How Can We Help You?</h2>
                    <p className="help-subtitle">
                        Thousands of luxury home enthusiasts just like you visit our website.
                    </p>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="help-card">
                                <div className="help-icon">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                                <h4>Buy a Home</h4>
                                <p>
                                    Find your place with an immersive photo experience and the most
                                    listings, including things you won’t find anywhere else.
                                </p>
                                <button className="help-btn outline-btn">Learn More</button>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="help-card">
                                <div className="help-icon">
                                    <i className="fa-solid fa-dollar-sign"></i>
                                </div>
                                <h4>Rent a Home</h4>
                                <p>
                                    Find your place with an immersive photo experience and the most
                                    listings, including things you won’t find anywhere else.
                                </p>
                                <button className="help-btn outline-btn">Learn More</button>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="help-card">
                                <div className="help-icon">
                                    <i className="fa-solid fa-arrow-trend-up"></i>
                                </div>
                                <h4>Sell a Home</h4>
                                <p>
                                    Find your place with an immersive photo experience and the most
                                    listings, including things you won’t find anywhere else.
                                </p>
                                <button className="help-btn outline-btn">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sell-banner-wrapper">
                <div className="sell-banner">
                    <div className="sell-content">
                        <h1>
                            Have confidence in any market with us
                        </h1>
                        <p>
                            Proty® agents have the experience to get the job done in today’s market,
                            backed by a robust network of over 140,000 agents in more than 9,000
                            offices worldwide. With our extensive global connections and deep local
                            insights, you gain an edge that transcends what you'll find online.
                        </p>
                        <button>Find your Agent Today</button>
                    </div>

                    <div className="sell-image">
                        <img
                            src={home3person1}
                            alt="Agent"
                        />
                    </div>
                </div>
            </section>

            <section className="property-types-section  pt-5 pb-0">
                <div className="container text-center">
                    <h2 className="section-title">Try Searching For</h2>
                    <p className="section-subtitle">
                        Thousands of luxury home enthusiasts just like you have found their dream home
                    </p>

                    <Swiper
                        modules={[Pagination]}
                        slidesPerView="auto"
                        spaceBetween={24}
                        pagination={{ clickable: true }}
                        className="property-swiper"
                    >

                        {propertyTypes.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className={`property-card ${item.active ? "active" : ""}`}>
                                    <span className="spill-bg"></span>

                                    <div className="property-icon">
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

            <section className="cp-properties-section">
                <div className="container">

                    <h2 className="cp-title text-center">Current Properties</h2>
                    <p className="cp-subtitle text-center">
                        Thousands of luxury home enthusiasts just like you visit our website.
                    </p>

                    <div className="cp-slider-wrapper">
                        <div className="cp-slider-window">

                            <div
                                className="cp-slider-track"
                                style={{ transform: `translateX(-${startIndex * 33.333}%)` }}
                            >
                                {houses.map((item) => (
                                    <div className="cp-property-col" key={item.id}>
                                        <div className="cp-property-card">

                                            <div className="cp-image-box">
                                                <img src={item.img} alt="property" />

                                                <span className="cp-badge cp-featured">Featured</span>
                                                <span className="cp-badge cp-sale">For Sale</span>

                                                <div className="cp-hover-icons">
                                                    <span><i className="fa-regular fa-bookmark"></i></span>
                                                    <span><i className="fa-solid fa-magnifying-glass"></i></span>
                                                </div>
                                            </div>

                                            <div className="cp-card-body">
                                                <h5 className="cp-card-title">Elegant studio flat</h5>
                                                <p className="cp-location">
                                                    <i className="fa-solid fa-location-dot"></i>
                                                    &nbsp;102 Ingraham St, Brooklyn, NY 11237
                                                </p>

                                                <p className="cp-meta">
                                                    <strong>3</strong> Beds &nbsp;
                                                    <strong>3</strong> Baths &nbsp;
                                                    <strong>4,043</strong> Sqft
                                                </p>

                                                <div className="cp-card-footer">
                                                    <span className="cp-price">$8.600</span>

                                                    <div className="cp-actions">
                                                        <span className="cp-compare">
                                                            <i className="fa-solid fa-arrow-right-arrow-left"></i>
                                                            &nbsp;Compare
                                                        </span>

                                                        <button className="cp-details-btn">Details</button>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="cp-pagination-row">

                        <button
                            className="cp-pagination-btn"
                            onClick={handlePrev}
                            disabled={startIndex === 0}
                        >
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>

                        <div className="cp-dots-wrapper">
                            {houses.slice(0, houses.length - visibleCards + 1).map((_, index) => (
                                <span
                                    key={index}
                                    className={`cp-dot ${startIndex === index ? "active" : ""}`}
                                    onClick={() => setStartIndex(index)}
                                ></span>
                            ))}
                        </div>

                        <button
                            className="cp-pagination-btn"
                            onClick={handleNext}
                            disabled={startIndex === houses.length - visibleCards}
                        >
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>

                    </div>


                </div>
            </section>

            <section className="agents-section">
                <div className="container text-center">

                    <h2 className="agents-title">Agents Specializing In California</h2>
                    <p className="agents-subtitle">
                        We connect you directly to the person that knows the most about a
                        property for sale, the listing agent.
                    </p>

                    <div className="row mt-5">
                        {agents.map((agent) => (
                            <div key={agent.id} className="col-lg-3 col-md-6 mb-4">
                                <div className="agent-card">

                                    <div className="agent-img-wrap">
                                        <img src={agent.img} alt={agent.name} />

                                        <div className="agent-social">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-x-twitter"></i></a>
                                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>

                                    <h5 className="agent-name">{agent.name}</h5>
                                    <p className="agent-role">{agent.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <br></br>

                    <p className="agents-footer-text mt-4">
                        Explore Property agents are here to help with all your buying,
                        renting and selling goals. Find the home of your dreams with an
                        expert you can trust. Let’s chat
                    </p>

                    <button className="agents-btn">
                        Find your location agent <i className="fas fa-search ms-2"></i>
                    </button>

                </div>
            </section>

            <section className="home3-wrapper">
                <div className="container-fluid">
                    <div className="row g-0 align-items-stretch">

                        <div className="col-lg-6 col-md-12">
                            <div className="home3-image">
                                <img src={home3} alt="Property" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="home3-content">

                                <h2 className="home3-title">Featured Properties</h2>

                                <div className="home3-tags">
                                    <span className="tag-sale">For Sale</span>
                                    <span className="tag-featured">Featured</span>
                                </div>

                                <h3 className="home3-property-title">
                                    Rancho Vista Verde, Santa Barbara
                                </h3>

                                <div className="home3-features">
                                    <span><i className="fa-solid fa-bed"></i> Beds 4</span>
                                    <span><i className="fa-solid fa-bath"></i> Baths 2</span>
                                    <span><i className="fa-solid fa-ruler-combined"></i> Sqft 1150</span>
                                    <span><i className="fa-solid fa-warehouse"></i> Garage 2</span>
                                </div>

                                <p className="home3-location">
                                    <i className="fa-solid fa-location-dot"></i>
                                    102 Ingraham St, Brooklyn, NY 11237
                                </p>

                                <div className="home3-agent">
                                    <img
                                        src={person}
                                        alt="Agent"
                                    />
                                    <div>
                                        <small>Agent</small>
                                        <h6>John Smith</h6>
                                    </div>
                                </div>

                                <hr />

                                <div className="home3-footer">
                                    <h4 className="home3-price">
                                        $250,00 <span>/month</span>
                                    </h4>

                                    <div className="home3-actions">
                                        <button className="compare-btn">
                                            <i className="fa-solid fa-arrow-right-arrow-left"></i> Compare
                                        </button>
                                        <button className="details-btn">
                                            Details
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="wcus-section">
                <div className="container">

                    <div className="wcus-header text-center">
                        <h2>Why Choose Us?</h2>
                        <p>
                            Here’s just a few reasons why homeowners are choosing Realty
                            to sell their property.
                        </p>
                    </div>

                    <div className="row wcus-card-row">

                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="wcus-card">
                                <div className="wcus-icon-box">
                                    <i className="fa-solid fa-calendar-check"></i>
                                </div>
                                <h4>30+ Years of Local Property Experience</h4>
                                <p>
                                    We are not loud, noisy and full of our own self-importance.
                                    As your agent we know we work for you.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="wcus-card">
                                <div className="wcus-icon-box">
                                    <i className="fa-solid fa-user-group"></i>
                                </div>
                                <h4>We Have Happy Clients</h4>
                                <p>
                                    Not all agents have the skills or experience to ensure you
                                    get the highest price for your property.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="wcus-card">
                                <div className="wcus-icon-box">
                                    <i className="fa-solid fa-house-user"></i>
                                </div>
                                <h4>We Are not Like Other Agents You Know</h4>
                                <p>
                                    We are not loud, noisy and full of our own self-importance.
                                    As your agent we know we work for you.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="wcus-card">
                                <div className="wcus-icon-box">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <h4>Intimate Local Knowledge</h4>
                                <p>
                                    Not all agents have the skills or experience to ensure you
                                    get the highest price for your property.
                                </p>
                            </div>
                        </div>

                    </div>

                    <p className="wcus-footer-text text-center">
                        You can obtain more information and an appraisal of your property by{" "}
                        <span>clicking this link</span> now.
                    </p>

                    <div className="text-center">
                        <button className="wcus-btn">Get Started Now</button>
                    </div>

                </div>
            </section>

            <section className="tslider-section">
                <div className="container">

                    <div className="tslider-header text-center">
                        <h2>What Our Clients Say?</h2>
                        <p>
                            Here’s just a few reasons why homeowners are choosing Realty
                            to sell their property.
                        </p>
                    </div>

                    <div className="row tslider-row">
                        {testimonialsData.slice(activeSlideIndex, activeSlideIndex + 2).map((item, idx) => (
                            <div className="col-lg-6 col-md-12" key={idx}>
                                <div className="tslider-card">
                                    <img src={item.img} alt="client" className="tslider-avatar" />

                                    <p className="tslider-text">{item.text}</p>

                                    <div className="tslider-stars">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>

                                    <h5>{item.name}</h5>
                                    <span>{item.location}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="tslider-controls">
                        <button
                            className="tslider-btn"
                            onClick={goToPrevSlide}
                            disabled={activeSlideIndex === 0}
                        >
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>

                        <div className="tslider-dots">
                            {testimonialsData.slice(0, testimonialsData.length - 1).map((_, i) => (
                                <span
                                    key={i}
                                    className={
                                        activeSlideIndex === i
                                            ? "tslider-dot active"
                                            : "tslider-dot"
                                    }
                                ></span>
                            ))}
                        </div>

                        <button
                            className="tslider-btn"
                            onClick={goToNextSlide}
                            disabled={activeSlideIndex === testimonialsData.length - 2}
                        >
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
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

                                        <Link to={`/blog/${blog.id}`} className="read-more" style={{color:"#ff6f61"}}>
                                            Read More <i className="fa-solid fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="footer2-cta">
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

            <footer className="footer2">
                <div className="container">
                    <div className="footer-top d-flex flex-column flex-md-row justify-content-between align-items-center">
                        <div className="footer-logo2">
                            <img src={footerlogo} alt="logo" />
                        </div>

                        <div className="footer-contact2">
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
                            <button className="subscribe-btn2">Subscribe</button>

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