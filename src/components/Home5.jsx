import "../Home5.css";
import logo from "../assets/home5logo1.png";
import heroBg from "../assets/herohome.jpeg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import home2box1 from "../assets/home2box1.jpg";
import home2box2 from "../assets/home2box2.jpg";
import home2box3 from "../assets/home2box3.jpg";

import logo1 from "../assets/vector1.png";
import logo2 from "../assets/vector2.png";
import logo3 from "../assets/vector3.png";
import logo4 from "../assets/vector4.png";
import logo5 from "../assets/vector5.png";

import t1 from "../assets/home2t1.jpg";
import t2 from "../assets/home2t2.jpg";
import t3 from "../assets/home2t3.jpg";
import t4 from "../assets/home2t1.jpg";
import t5 from "../assets/home2t2.jpg";

import phoneImg from "../assets/phone.png";
import appStore from "../assets/app-store.jpg";
import playStore from "../assets/ch-play.jpg";

import a1 from "../assets/home2person1.jpg";
import a2 from "../assets/home2person2.jpg";
import a3 from "../assets/home2person3.jpg";
import a4 from "../assets/home2person4.jpg";

import building from "../assets/section.jpg";

import bloggrid1 from "../assets/blog-grid-1.jpg";
import bloggrid2 from "../assets/blog-grid-2.jpg";
import bloggrid3 from "../assets/blog-grid-3.jpg";

import footerImg from "../assets/footerImg.png";
import footerlogo from "../assets/home5logo2.png";

export default function Home5() {
    const [type, setType] = useState("rent");
    const [showFilter, setShowFilter] = useState(false);

    const houses = [
        { id: 1, img: home2box1 },
        { id: 2, img: home2box2 },
        { id: 3, img: home2box3 },
    ];

    const propertyTypes = [
        { title: "Apartment", count: "234 Property", icon: "fa-building" },
        { title: "Villa", count: "234 Property", icon: "fa-house-chimney" },
        { title: "Studio", count: "234 Property", icon: "fa-city", active: true },
        { title: "Office", count: "234 Property", icon: "fa-briefcase" },
        { title: "Townhouse", count: "234 Property", icon: "fa-house" },
        { title: "Commercial", count: "234 Property", icon: "fa-store" },
    ];

    const data = [
        {
            icon: "fa-users",
            title: "Local Expertise",
        },
        {
            icon: "fa-magnifying-glass",
            title: "Intuitive search",
        },
        {
            icon: "fa-house-circle-check",
            title: "We Get Results",
        },
        {
            icon: "fa-thumbs-up",
            title: "Happy Clients",
        },
    ];

    const logos = [
        { image: logo1 },
        { image: logo2 },
        { image: logo3 },
        { image: logo4 },
        { image: logo5 },
    ];



    const datatest = [
        { id: 1, img: t1, text: "Phasellus efficitur dictum urna, non elementum mauris mollis a. Duis lacinia arcu ac lorem ultricies porta.", name: "Annette Black", role: "CEO Themesflat" },
        { id: 2, img: t2, text: "Proin auctor, mauris at tristique ullamcorper, fin nunc nisi sagittis velit, eget blandit dolor arcu sed ante.", name: "Annette Black", role: "CEO Themesflat" },
        { id: 3, img: t3, text: "Sed eget nibh eros. Phasellus pharetra ac leo et auctor. Donec libero dui, blandit id nulla laoreet.", name: "Annette Black", role: "CEO Themesflat" },
        { id: 4, img: t4, text: "Etiam mollis tincidunt elit, sit amet sodales tellus finibus ut. Orci varius natoque penatibus.", name: "Annette Black", role: "CEO Themesflat" },
        { id: 5, img: t5, text: "Maecenas eleifend malesuada egestas. In eu eros hendrerit, pharetra justo id, blandit orci.", name: "Annette Black", role: "CEO Themesflat" }
    ];

    const [start, setStart] = useState(0);

    const next = () => {
        if (start < datatest.length - 3) setStart(start + 1);
    };

    const prev = () => {
        if (start > 0) setStart(start - 1);
    };

    const agents = [
        { img: a1, name: "Leslie Alexander", role: "Sale agent" },
        { img: a2, name: "Leslie Alexander", role: "Sale agent" },
        { img: a3, name: "Leslie Alexander", role: "Sale agent" },
        { img: a4, name: "Leslie Alexander", role: "Sale agent" }
    ];

    const [amount, setAmount] = useState(1000);
    const [down, setDown] = useState(2000);
    const [interest, setInterest] = useState(0);
    const [period, setPeriod] = useState("");
    const [tax, setTax] = useState(3000);
    const [insurance, setInsurance] = useState(3000);

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
            <div className="home5-page">
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

                        <h1>Search Luxury Homes</h1>
                        <p>Thousands of luxury home enthusiasts just like you visit our website.</p>

                        <div className="proty2-toggle">
                        </div>

                        <div className="proty2-search-bar">
                            <select>
                                <option>For Sale</option>
                                <option>For Rent</option>
                            </select>
                            <input placeholder="Address, City, ZIP..." />



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


            <div className="container ps-wrapper">
                <div className="ps-header text-center">
                    <h2 className="ps-title">Featured Listings</h2>
                    <p className="ps-subtitle">
                        Thousands of luxury home enthusiasts just like you visit our website.
                    </p>
                </div>

                <div className="ps-states">
                    {["View all", "Apartments", "Farm House", "Houe", "Villas"].map(
                        (item, i) => (
                            <button
                                key={i}
                                className={`ps-state-btn ${i === 0 ? "active" : ""}`}
                            >
                                {item}
                            </button>
                        )
                    )}
                </div>

                <div className="ps-cards-row">
                    {houses.slice(0, 3).map((item) => (
                        <div className="ps-card-col" key={item.id}>
                            <div className="ps-property-card">
                                <div className="ps-img-box">
                                    <img src={item.img} alt="property" />

                                    <span className="ps-badge ps-featured">Featured</span>
                                    <span className="ps-badge ps-sale">For Sale</span>

                                    <div className="ps-hover-icons">
                                        <i className="fas fa-bookmark"></i>
                                        <i className="fas fa-search"></i>
                                    </div>
                                </div>

                                <div className="ps-body">
                                    <h5>Elegant studio flat</h5>

                                    <p className="ps-location">
                                        <i className="fas fa-map-marker-alt"></i>
                                        Ingraham St, Brooklyn, NY 11237
                                    </p>

                                    <div className="ps-details">
                                        <span>3 Beds</span>
                                        <span>3 Baths</span>
                                        <span>4,043 Sqft</span>
                                    </div>

                                    <div className="ps-price-row">
                                        <h4>$8.600</h4>

                                        <div className="ps-actions">
                                            <span className="ps-compare">
                                                <i className="fas fa-exchange-alt"></i> Compare
                                            </span>
                                            <button className="ps-details-btn">Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="ps-load-more-wrapper">
                    <button className="ps-load-more-btn">
                        Load more property
                    </button>
                </div>

            </div>

            <section className="ts-property-types-section pt-5 pb-0 mt-0">
                <div className="container text-center">
                    <h2 className="ts-section-title">Try Searching For</h2>
                    <p className="ts-section-subtitle">
                        Thousands of luxury home enthusiasts just like you have found their dream home
                    </p>

                    <Swiper
                        modules={[Pagination]}
                        slidesPerView="auto"
                        spaceBetween={24}
                        pagination={{ clickable: true }}
                        className="ts-property-swiper"
                    >
                        {propertyTypes.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className={`ts-property-card ${item.active ? "active" : ""}`}>
                                    <span className="ts-spill-bg"></span>

                                    <div className="ts-property-icon">
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

            <section className="selling-section py-5" style={{ backgroundColor: "#f0f0f0" }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="selling-title">
                            Selling Your Home With Realty
                        </h2>
                        <p className="selling-subtitle">
                            We'll get to know you to understand your selling goals, and explain
                            the selling process so you know what to expect.
                        </p>
                    </div>

                    <div className="row g-4">
                        {data.map((item, index) => (
                            <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                                <div className="selling-card text-center">
                                    <div className="icon-box">
                                        <i className={`fa-solid ${item.icon}`}></i>
                                    </div>
                                    <h5>{item.title}</h5>
                                    <p>
                                        We are not loud, noisy and full of our own self-importance.
                                        As your agent we know we work for you.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="logo-section container">
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

            <section className="tst-section">
                <div className="container text-center">
                    <h2 className="tst-title">Clients Testimonials</h2>
                    <p className="tst-subtitle">Thousands of luxury home enthusiasts just like you visit our website.</p>

                    <div className="tst-slider-wrapper">
                        <div
                            className="tst-slider-track"
                            style={{ transform: `translateX(-${start * 33.333}%)` }}
                        >
                            {datatest.map((item) => (
                                <div className="tst-card" key={item.id}>
                                    <img src={item.img} alt="" className="tst-avatar" />

                                    <p className="tst-text">{item.text}</p>

                                    <div className="tst-stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>

                                    <h5 className="tst-name">{item.name}</h5>
                                    <span className="tst-role">{item.role}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="tst-controls">
                        <button onClick={prev} className="tst-btn">
                            <i className="fas fa-arrow-left"></i>
                        </button>

                        <div className="tst-dots">
                            {datatest.slice(0, datatest.length - 2).map((_, i) => (
                                <span key={i} className={i === start ? "active" : ""}></span>
                            ))}
                        </div>

                        <button onClick={next} className="tst-btn">
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </section>

            <section className="adw-section">
                <div className="container">
                    <div className="row align-items-center adw-box">

                        <div className="col-lg-6 adw-content">
                            <h2 className="adw-title">Take Your Search With You</h2>
                            <p className="adw-text">
                                We’re here to help you find your dream home, offer property insights,
                                and connect you with top local agents on iOS and Android.
                            </p>

                            <div className="adw-buttons">
                                <img src={appStore} alt="App Store" />
                                <img src={playStore} alt="Play Store" />
                            </div>
                        </div>

                        <div className="col-lg-6 text-center adw-phone-wrap">
                            <img src={phoneImg} alt="Phone" className="adw-phone-img" />
                        </div>

                    </div>
                </div>
            </section>

            <section className="agt-section">
                <div className="container text-center">
                    <h2 className="agt-title">Choose Your Local Agent</h2>
                    <p className="agt-subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo
                    </p>

                    <div className="row g-4 mt-4">
                        {agents.map((a, i) => (
                            <div className="col-lg-3 col-md-6" key={i}>
                                <div className="agt-card">

                                    <div className="agt-top-icons">
                                        <i className="fas fa-phone"></i>
                                        <i className="fas fa-envelope"></i>
                                    </div>

                                    <img src={a.img} alt="" className="agt-img" />

                                    <div className="agt-hover-social">
                                        <i className="fab fa-facebook-f"></i>
                                        <i className="fab fa-x-twitter"></i>
                                        <i className="fab fa-linkedin-in"></i>
                                        <i className="fab fa-instagram"></i>
                                    </div>

                                    <div className="agt-info">
                                        <h5>{a.name}</h5>
                                        <span>{a.role}</span>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="agt-footer-text">
                        Explore Property agents are here to help with all your buying, renting and selling goals.
                        Find the home of your dreams with an expert you can trust. Let’s chat
                    </p>

                    <button className="agt-btn">
                        Find your location agent <i className="fas fa-search ms-2"></i>
                    </button>
                </div>
            </section>

            <section className="mc-section">
                <div className="container">
                    <div className="row align-items-center mc-wrapper">

                        <div className="col-lg-6">
                            <h2 className="mc-title">Calculate Mortgage Payments</h2>
                            <p className="mc-subtitle">
                                Estimate your payment with our easy-to-use loan calculator. Then get
                                pre-qualified to buy by a local lender.
                            </p>

                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label className="mc-label">Total Amount</label>
                                    <input
                                        type="number"
                                        className="mc-input"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="mc-label">Down Payment</label>
                                    <div className="mc-input-group">
                                        <input
                                            type="number"
                                            className="mc-input"
                                            value={down}
                                            onChange={(e) => setDown(e.target.value)}
                                        />
                                        <span className="mc-badge">20%</span>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <label className="mc-label">Interest Rate</label>
                                    <input
                                        type="number"
                                        className="mc-input"
                                        value={interest}
                                        onChange={(e) => setInterest(e.target.value)}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="mc-label">Amortization Period (months)</label>
                                    <select className="mc-input" value={period} onChange={(e) => setPeriod(e.target.value)}>
                                        <option>Select amortization period</option>
                                        <option>120</option>
                                        <option>180</option>
                                        <option>240</option>
                                        <option>360</option>
                                    </select>
                                </div>

                                <div className="col-md-6">
                                    <label className="mc-label">Property Tax</label>
                                    <input
                                        type="number"
                                        className="mc-input"
                                        value={tax}
                                        onChange={(e) => setTax(e.target.value)}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="mc-label">Home Insurance</label>
                                    <input
                                        type="number"
                                        className="mc-input"
                                        value={insurance}
                                        onChange={(e) => setInsurance(e.target.value)}
                                    />
                                </div>
                            </div>

                            <p className="mc-result">
                                Your estimated monthly payment: <span>$8000</span>
                            </p>

                            <div className="mc-actions">
                                <button className="mc-btn-primary">Calculate now</button>
                                <button className="mc-btn-outline">Start over</button>
                            </div>
                        </div>

                        <div className="col-lg-6 text-center">
                            <img src={building} alt="building" className="mc-image" />
                        </div>

                    </div>
                </div>
            </section>


            <section className="io-section mb-5">
    <div className="container">
        <div className="text-center mb-5">
            <h2 className="io-title">Insight & Opinion</h2>
            <p className="io-subtitle">
                Thousands of luxury home enthusiasts just like you visit our website.
            </p>
        </div>

        <div className="row g-4">
            {blogs.map((blog, index) => (
                <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                    <div className="io-blog-card">
                        <div className="io-img-wrapper">
                            <img src={blog.img} alt="blog" />
                            <span className="io-tag">{blog.tag}</span>
                        </div>

                        <div className="io-blog-content">
                            <div className="io-date">
                                <i className="fa-regular fa-clock"></i>
                                <span>{blog.date}</span>
                            </div>

                            <h4>{blog.title}</h4>

                            <Link
                                to={`/blog/${blog.id}`}
                                className="io-read-more"
                                style={{ color: "#6f8cff" }}
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


<div className="rf-cta">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-8 d-flex align-items-center gap-4">
                <img
                    src={footerImg}
                    alt="agent"
                    className="rf-cta-img"
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
                <div className="rf-cta-search">
                    <input type="text" placeholder="Find your location agent" />
                    <i className="fas fa-search"></i>
                </div>
            </div>
        </div>
    </div>
</div>

<footer className="rf-footer">
    <div className="container">
        <div className="rf-footer-top d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="rf-footer-logo">
                <img src={footerlogo} alt="logo" />
            </div>

            <div className="rf-footer-contact">
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

        <div className="row rf-footer-main">
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
                    className="rf-newsletter-input"
                />
                <button className="rf-subscribe-btn">Subscribe</button>

                <div className="rf-terms">
                    <input type="checkbox" />
                    <span>
                        I have read and agree to the terms & conditions
                    </span>
                </div>
            </div>
        </div>

        <hr />

        <div className="rf-footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center">
            <p>
                © Copyright 2024 <strong>PROTY</strong> – REAL ESTATE. Designed &
                Developed by Themesflat
            </p>

            <div className="rf-social">
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
