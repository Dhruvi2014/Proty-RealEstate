import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import "../Style.css";
import logo from "../assets/logo.png";
import heroBg from "../assets/herohome.jpeg";
import homeImg from "../assets/home-img1.jpg";
import boxhouse1 from "../assets/box-house1.jpg";
import boxhouse2 from "../assets/box-house2.jpg";
import boxhouse3 from "../assets/box-house3.jpg";
import boxhouse4 from "../assets/box-house4.jpg";
import boxhouse5 from "../assets/box-house5.jpg";
import boxhouse6 from "../assets/box-house6.jpg";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img7.jpg";
import img7 from "../assets/img6.jpg";

import boxlist1 from "../assets/boxlist1.jpg";
import boxlist2 from "../assets/boxlist2.jpg";
import boxlist3 from "../assets/boxlist3.jpg";
import boxlist4 from "../assets/boxlist4.jpg";
import footerlogo from "../assets/logo2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import agent from "../assets/person-1.png";
import logo1 from "../assets/vector1.png";
import logo2 from "../assets/vector2.png";
import logo3 from "../assets/vector3.png";
import logo4 from "../assets/vector4.png";
import logo5 from "../assets/vector5.png";

import bloggrid1 from "../assets/blog-grid-1.jpg";
import bloggrid2 from "../assets/blog-grid-2.jpg";
import bloggrid3 from "../assets/blog-grid-3.jpg";

import t1 from "../assets/testimonials-1.jpg";
import t2 from "../assets/testimonials-2.jpg";
import t3 from "../assets/testimonials-3.jpg";
import t4 from "../assets/testimonials-4.jpg";
import t5 from "../assets/testimonials-5.jpg";
import t6 from "../assets/testimonials-6.jpg";


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

    const cards = [
        { img: img1, col: "col-lg-3 col-md-6" },
        { img: img2, col: "col-lg-3 col-md-6" },
        { img: img3, col: "col-lg-3 col-md-6" },
        { img: img4, col: "col-lg-3 col-md-6" },
        { img: img5, col: "col-lg-3 col-md-6" },
        { img: img6, col: "col-lg-6 col-md-12" },
        { img: img7, col: "col-lg-3 col-md-6" },
    ];

    const propertiesdata = [boxlist1, boxlist2, boxlist3, boxlist4];
    const logos = [logo1, logo2, logo3, logo4, logo5];

    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        let scrollAmount = 0;

        const slide = () => {
            scrollAmount += 1;
            if (scrollAmount >= slider.scrollWidth / 2) {
                scrollAmount = 0;
            }
            slider.scrollLeft = scrollAmount;
        };

        const interval = setInterval(slide, 20);
        return () => clearInterval(interval);
    }, []);

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

    const testimonialsData = [
        {
            name: "Annette Black",
            role: "CEO Themesflat",
            text: "Aenean orci lorem, pharetra ac imperdiet eget, tristique ac magna. In aliquet efficitur turpis, et posuere tellus commodo at. Morbi accumsan nulla id neque rutrum, et tempus dui venenatis. Quisque dapibus metus ligula, id tempor nisl interdum vitae.",
            image: t1,
        },
        {
            name: "Floyd Miles",
            role: "CEO Themesflat",
            text: "In hac habitasse platea dictumst. Sed eleifend aliquam dui quis convallis. Sed aliquet eros sit amet metus rhoncus bibendum nec vel nunc. Nullam ac dapibus enim. Nulla rhoncus ante ante, nec lacinia turpis consectetur non. Vivamus sit amet nunc leo.",
            image: t2,
        },
        {
            name: "Jacob Jones",
            role: "CEO Themesflat",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam tempus urna id interdum. Proin iaculis erat id sapien venenatis convallis. Nam et ullamcorper nibh. Nulla malesuada consectetur sem ut varius. Fusce ornare tortor non maximus volutpat. Integer at consequat turpis, vel aliquam neque. Suspendisse quis odio felis. Quisque volutpat bibendum maximus. In porttitor semper ultrices.",
            image: t3,
        },
        {
            name: "Eleanor Pena",
            role: "CEO Themesflat",
            text: "In hac habitasse platea dictumst. Sed eleifend aliquam dui quis convallis...",
            image: t4,
        },
        {
            name: "Cody Fisher",
            role: "CEO Themesflat",
            text: "My experience with property management services has exceeded expectations. They efficiently manage properties with a professional and attentive approach in every situation. I feel reassured that any issue will be resolved promptly and effectively.",
            image: t5,
        },
        {
            name: "Ralph Edwards",
            role: "CEO Themesflat",
            text: "Quisque tincidunt, nunc vitae maximus lobortis...",
            image: t6,
        },
    ];
    const [visible, setVisible] = useState(3);

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
                                <i className="fa-solid fa-arrow-up-wide-short"></i>
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

            <section className="loan-section">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-6 col-md-12">
                            <h2 className="loan-title">
                                Do you need a home loan?<br />Get pre-approved
                            </h2>
                            <p className="loan-desc">
                                Find a lender who can offer competitive mortgage rates and help
                                you with pre-approval.
                            </p>

                            <div className="row g-3 mt-4">
                                <div className="col-md-6">
                                    <label>Total Amount</label>
                                    <input type="number" className="form-control" defaultValue="1000" />
                                </div>

                                <div className="col-md-6">
                                    <label>Down Payment</label>
                                    <div className="d-flex gap-2">
                                        <input type="number" className="form-control" defaultValue="2000" />
                                        <span className="percentage-box">20%</span>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <label>Interest Rate</label>
                                    <input type="text" className="form-control" defaultValue="0" />
                                </div>

                                <div className="col-md-6">
                                    <label>Amortization Period (months)</label>
                                    <select className="form-select">
                                        <option>Select amortization period</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                </div>

                                <div className="col-md-6">
                                    <label>Property Tax</label>
                                    <input type="text" className="form-control" defaultValue="$3000" />
                                </div>

                                <div className="col-md-6">
                                    <label>Home Insurance</label>
                                    <input type="text" className="form-control" defaultValue="$3000" />
                                </div>
                            </div>

                            <p className="estimate mt-4">
                                Your estimated monthly payment: <span>8000</span>
                            </p>

                            <div className="btn-group mt-3">
                                <button className="btn btn-calc">Calculate now</button>
                                <button className="btn btn-reset">Start over</button>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 text-center">
                            <div className="image-wrapper fade-in">
                                <img src={homeImg} alt="Home" className="img-fluid" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="neighborhoods">
                <div className="container">

                    <div className="text-center mb-5">
                        <h2 className="section-title">Explore The Neighborhoods</h2>
                        <p className="section-subtitle">
                            Find your dream apartment with our listing
                        </p>
                    </div>

                    <div className="row g-4">
                        {cards.map((item, index) => (
                            <div className={item.col} key={index}>
                                <div className="neighborhood-card">
                                    <img src={item.img} alt="neighborhood" />

                                    <div className="card-content">
                                        <h5>New York</h5>
                                        <button className="property-btn">
                                            2,491 Properties <i className="fa-solid fa-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <div className="container py-5">
                {/* Heading */}
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Open Houses Listings</h2>
                    <p className="text-muted">
                        Thousands of luxury home enthusiasts just like you visit our website.
                    </p>
                </div>

                <div className="row g-4">
                    {propertiesdata.map((img, index) => (
                        <div className="col-lg-6 col-md-12" key={index}>
                            <div className="openhouse-card d-flex flex-column flex-md-row">

                                <div className="openhouse-img">
                                    <span className="openhouse-badge">For Sale</span>

                                    <div className="openhouse-overlay">
                                        <i className="fa-regular fa-bookmark"></i>
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </div>

                                    <img src={img} alt="open house" />
                                </div>

                                <div className="openhouse-content">
                                    <h5 className="fw-semibold">Elegant studio flat</h5>

                                    <p className="text-muted mb-2">
                                        <i className="fa-solid fa-location-dot me-1"></i>
                                        Los Angeles, California 91604
                                    </p>

                                    <div className="openhouse-info">
                                        <span>
                                            <i className="fa-solid fa-bed"></i> Beds 4
                                        </span>
                                        <span>
                                            <i className="fa-solid fa-bath"></i> Baths 2
                                        </span>
                                        <span>
                                            <i className="fa-solid fa-ruler-combined"></i> Sqft 1150
                                        </span>
                                        <span>
                                            <i className="fa-solid fa-car"></i> Garage 2
                                        </span>
                                    </div>

                                    <div className="openhouse-price-row">
                                        <h5 className="openhouse-price">$8.600</h5>
                                        <button className="openhouse-btn">Details</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* DARK SECTION */}
            <section className="work-section">
                <h1 className="title">Let’s Work Together</h1>
                <p className="subtitle">
                    Thousands of luxury home enthusiasts just like you visit our website.
                </p>

                {/* LOGO SLIDER */}
                <div className="logo-slider" ref={sliderRef}>
                    <div className="logo-track">
                        {[...logos, ...logos].map((logo, index) => (
                            <div className="logo-card" key={index}>
                                <img src={logo} alt="real estate logo" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-wrapper">
                <div className="cta-card">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <h2>
                                Are You Selling Or <br /> Renting Your Property?
                            </h2>
                            <p>
                                Thousands of luxury home enthusiasts just like you visit our
                                website.
                            </p>
                            <button className="btn cta-btn">
                                Request your free appraisal
                            </button>
                        </div>

                        <div className="col-lg-6 col-md-12 text-center">
                            <img src={agent} className="agent-img" alt="agent" />
                        </div>
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

            <section className="testimonials-section">
                <div className="container">
                    <h2 className="section-title">Clients Testimonials</h2>
                    <p className="section-subtitle">
                        Thousands of luxury home enthusiasts just like you visit our website.
                    </p>

                    <div className="masonry">
                        {testimonialsData.slice(0, visible).map((item, index) => (
                            <div className="masonry-item" key={index}>
                                <div className="testimonial-card">
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>

                                    <p className="testimonial-text">{item.text}</p>

                                    <div className="client-info">
                                        <img src={item.image} alt={item.name} />
                                        <div>
                                            <h6>{item.name}</h6>
                                            <span>{item.role}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                    {visible < testimonialsData.length && (
                        <div className="text-center mt-5">
                            <button
                                className="btn show-more-btn"
                                onClick={() => setVisible(visible + 3)}
                            >
                                Show more...
                            </button>
                        </div>
                    )}
                </div>
            </section>

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
};

export default Home;

