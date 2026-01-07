import { useState } from "react";
import "../Style.css";
import logo from "../assets/logo.png";
import heroBg from "../assets/herohome.jpeg";

import boxhouse1 from "../assets/box-house1.jpg";
import boxhouse2 from "../assets/box-house2.jpg";
import boxhouse3 from "../assets/box-house3.jpg";
import boxhouse4 from "../assets/box-house4.jpg";
import boxhouse5 from "../assets/box-house5.jpg";
import boxhouse6 from "../assets/box-house6.jpg";


import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
const Home = () => {
    const [showFilters, setShowFilters] = useState(false);
    const [purpose, setPurpose] = useState("For Sale");
    const [activeTab, setActiveTab] = useState("Buying");

    const propertyTypes = [
        { title: "Apartment", count: "234 Property", icon: "fa-building" },
        { title: "Villa", count: "234 Property", icon: "fa-house-chimney" },
        { title: "Studio", count: "234 Property", icon: "fa-city", active: true },
        { title: "Office", count: "234 Property", icon: "fa-briefcase" },
        { title: "Townhouse", count: "234 Property", icon: "fa-house" },
        { title: "Commercial", count: "234 Property", icon: "fa-store" },
    ];

    const properties = [
        {
            img: boxhouse1,
            title: "Elegant studio flat",
            address: "102 Ingraham St, Brooklyn, NY 11237",
            beds: 3,
            baths: 3,
            sqft: "4,043",
            price: "$8.600",
        },
        {
            img: boxhouse2,
            title: "Elegant studio flat",
            address: "102 Ingraham St, Brooklyn, NY 11237",
            beds: 3,
            baths: 3,
            sqft: "4,043",
            price: "$8.600",
        },
        {
            img: boxhouse3,
            title: "Elegant studio flat",
            address: "102 Ingraham St, Brooklyn, NY 11237",
            beds: 3,
            baths: 3,
            sqft: "4,043",
            price: "$8.600",
        },
        {
            img: boxhouse4,
            title: "Elegant studio flat",
            address: "102 Ingraham St, Brooklyn, NY 11237",
            beds: 3,
            baths: 3,
            sqft: "4,043",
            price: "$8.600",
        },
        {
            img: boxhouse5,
            title: "Elegant studio flat",
            address: "102 Ingraham St, Brooklyn, NY 11237",
            beds: 3,
            baths: 3,
            sqft: "4,043",
            price: "$8.600",
        },
        {
            img: boxhouse6,
            title: "Elegant studio flat",
            address: "102 Ingraham St, Brooklyn, NY 11237",
            beds: 3,
            baths: 3,
            sqft: "4,043",
            price: "$8.600",
        }

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

            <section
                className="hero-home"
                style={{
                    backgroundImage: `url(${heroBg})`
                }}
            >
                <div className="overlay">
                    <div className="container text-center">
                        <h1 className="hero-title">Search Luxury Homes</h1>
                        <p className="hero-subtitle">
                            Thousands of luxury home enthusiasts just like you visit our website.
                        </p>

                        <div className="search-bar shadow-lg">
                            <div className="dropdown">
                                <button
                                    className="btn dropdown-toggle purpose-btn"
                                    data-bs-toggle="dropdown"
                                >
                                    {purpose}
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <button className="dropdown-item" onClick={() => setPurpose("For Sale")}>
                                            For Sale
                                        </button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item" onClick={() => setPurpose("For Rent")}>
                                            For Rent
                                        </button>
                                    </li>
                                </ul>
                            </div>

                            <input
                                type="text"
                                className="form-control location-input"
                                placeholder="Place, neighborhood, school or agent..."
                            />

                            <button
                                className="btn filter-btn"
                                onClick={() => setShowFilters(!showFilters)}
                            >
                                <i class="fa-solid fa-arrow-up-wide-short"></i>
                            </button>

                            <button className="btn search-btn">
                                Search <i className="bi bi-search"></i>
                            </button>
                        </div>

                        {showFilters && (
                            <div className="advanced-filter shadow-lg">
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <label className="filter-label">
                                            Price range from <span>$100</span> to <span>$500,000</span>
                                        </label>
                                        <input type="range" className="form-range" />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="filter-label">
                                            Size range from <span>0</span> to <span>1,000</span>
                                        </label>
                                        <input type="range" className="form-range" />
                                    </div>

                                    <div className="col-md-3">
                                        <select className="form-select">
                                            <option>Province / States</option>
                                            <option>California</option>
                                            <option>Texas</option>
                                            <option>Florida</option>
                                            <option>New York</option>
                                        </select>
                                    </div>

                                    <div className="col-md-3">
                                        <select className="form-select">
                                            <option>Rooms</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>

                                    <div className="col-md-3">
                                        <select className="form-select">
                                            <option>Bath: Any</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>

                                    <div className="col-md-3">
                                        <select className="form-select">
                                            <option>Beds: Any</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="amenities mt-4">
                                    <h6>Amenities:</h6>
                                    <div className="row">
                                        {[
                                            "Bed linens",
                                            "Carbon alarm",
                                            "Check-in lockbox",
                                            "Coffee maker",
                                            "Dishwasher",
                                            "Fireplace",
                                            "Refrigerator",
                                            "Security cameras",
                                            "Smoke alarm",
                                            "Iron",
                                            "Hangers",

                                        ].map((item) => (
                                            <div className="col-md-3" key={item}>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" />
                                                    <label className="form-check-label">{item}</label>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
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

            <div className="container mt-0 mb-5">
                <h2 className="text-center text-muted mb-4">Today’s Luxury Listings</h2>
                <p className="text-center text-muted mb-4" style={{ marginTop: "2px" }}>
                    Thousands of luxury home enthusiasts just like you visit our website.
                </p>

                <div className="row g-4">
                    {properties.map((item, index) => (
                        <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                            <div className="pro-card">

                                <div className="pro-image">
                                    <img src={item.img} alt="property" />

                                    <div className="pro-badges">
                                        <span className="pro-badge featured">Featured</span>
                                        <span className="pro-badge sale">For Sale</span>
                                    </div>

                                    <div className="pro-hover">
                                        <span><i className="fa-regular fa-bookmark"></i></span>
                                        <span><i className="fa-solid fa-magnifying-glass"></i></span>
                                    </div>
                                </div>

                                <div className="pro-content">
                                    <h5>{item.title}</h5>

                                    <p className="pro-address">
                                        <i className="bi bi-geo-alt"></i> {item.address}
                                    </p>

                                    <div className="pro-info">
                                        <span><b>{item.beds}</b> Beds</span>
                                        <span><b>{item.baths}</b> Baths</span>
                                        <span><b>{item.sqft}</b> Sqft</span>
                                    </div>

                                    <hr />

                                    <div className="pro-footer">
                                        <h4 className="pro-price">{item.price}</h4>
                                        <span className="pro-compare">⇄ Compare</span>
                                        <button className="pro-btn">Details</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <section className="discover-section">
                <div className="container text-center">
                    <h2 className="discover-title">Discover how we can help</h2>
                    <p className="discover-subtitle">
                        Thousands of luxury home enthusiasts just like you visit our website.
                    </p>

                    <div className="discover-tabs">
                        {["Buying", "Rating", "Selling"].map((tab) => (
                            <button
                                key={tab}
                                className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Cards */}
                    <div className="row mt-5">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="discover-card">
                                <div className="icon">
                                    <i className="fas fa-search-dollar"></i>
                                </div>
                                <h5>Find out how much you can afford</h5>
                                <p>
                                    We’ll help you estimate your budget range. Save to your buyer
                                    profile to help in your search
                                </p>
                                <button className="learn-btn">Learn More</button>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="discover-card">
                                <div className="icon">
                                    <i className="fas fa-home"></i>
                                </div>
                                <h5>Understand your monthly costs</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                                    sollicitudin ipsum eu massa facilisis.
                                </p>
                                <button className="learn-btn">Learn More</button>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="discover-card">
                                <div className="icon">
                                    <i className="fas fa-chart-line"></i>
                                </div>
                                <h5>Get help with your down payment</h5>
                                <p>
                                    In fermentum dignissim mauris et blandit. Fusce efficitur libero
                                    sit amet ullamcorper.
                                </p>
                                <button className="learn-btn">Learn More</button>
                            </div>
                        </div>
                    </div>

                    <p className="chat-text">
                        Looking to spotlight a unique property with expert marketing?
                        <span> Let’s chat</span>
                    </p>
                </div>
            </section>



        </>
    );
};

export default Home;

