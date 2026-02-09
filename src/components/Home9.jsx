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

import list1 from "../assets/boxlist1.jpg";
import list2 from "../assets/boxlist2.jpg";
import list3 from "../assets/boxlist3.jpg";
import list4 from "../assets/boxlist4.jpg";

import property from "../assets/gallery-1.jpg";
import agent from "../assets/testimonials-6.jpg"

import agent1 from "../assets/home2person1.jpg";
import agent2 from "../assets/agent4.jpg";
import agent3 from "../assets/home-2-person.png";

import img1 from "../assets/blog-grid-1.jpg";
import img2 from "../assets/blog-grid-2.jpg";
import img3 from "../assets/blog-grid-3.jpg";
import img4 from "../assets/boxlist1.jpg";

import user1 from "../assets/testimonials-1.jpg";
import user2 from "../assets/testimonials-2.jpg";
import user3 from "../assets/testimonials-3.jpg";

import logo1 from "../assets/vector1.png";
import logo2 from "../assets/vector2.png";
import logo3 from "../assets/vector3.png";
import logo4 from "../assets/vector4.png";
import logo5 from "../assets/vector5.png";

import bloggrid1 from "../assets/blog-grid-1.jpg";
import bloggrid2 from "../assets/blog-grid-2.jpg";
import bloggrid3 from "../assets/blog-grid-3.jpg";

import footerlogo from "../assets/logo2.png";

const testimonials = [
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus faucibus lacinia. Nunc ac augue facilisis, vestibulum dolor sed, blandit lectus. Sed ac dolor et eros suscipit.",
        name: "Courtney Henry",
        role: "CEO & Founder at Themesflat",
        img: user1,
    },
    {
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
        name: "Albert Flores",
        role: "Real Estate Agent",
        img: user2,
    },
    {
        text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.",
        name: "Jenny Wilson",
        role: "Property Manager",
        img: user3,
    },
];

const properties = [
    {
        id: 1,
        title: "Nextgen riverside 152",
        address: "102 Ingraham St, Brooklyn, NY 11237",
        beds: 4,
        baths: 3,
        sqft: "1,484",
        price: "$1,250,000",
        image: list1,
    },
    {
        id: 2,
        title: "Nextgen riverside 152",
        address: "102 Ingraham St, Brooklyn, NY 11237",
        beds: 4,
        baths: 3,
        sqft: "1,484",
        price: "$1,250,000",
        image: list2,
    },
    {
        id: 3,
        title: "Nextgen riverside 152",
        address: "102 Ingraham St, Brooklyn, NY 11237",
        beds: 4,
        baths: 3,
        sqft: "1,484",
        price: "$1,250,000",
        image: list3,
    },
    {
        id: 4,
        title: "Nextgen riverside 152",
        address: "102 Ingraham St, Brooklyn, NY 11237",
        beds: 4,
        baths: 3,
        sqft: "1,484",
        price: "$1,250,000",
        image: list4,
    },
];

const agents = [
    {
        id: 1,
        name: "Jacob Jones",
        role: "Local property",
        img: agent1,
    },
    {
        id: 2,
        name: "Jacob Jones",
        role: "Local property",
        img: agent2,
    },
    {
        id: 3,
        name: "Jacob Jones",
        role: "Local property",
        img: agent3,
    },
];

const serviceData = [
    { id: 1, title: "Find the Best Agent for You", img: img1 },
    { id: 2, title: "Explore Great Neighborhoods", img: img2 },
    { id: 3, title: "Find highly rated apartments", img: img3 },
    { id: 4, title: "Search Recent Property Sales", img: img4 },
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

    const [activeItem, setActiveItem] = useState(null);
    const [active, setActive] = useState(0);

    const logos = [
        { image: logo1 },
        { image: logo2 },
        { image: logo3 },
        { image: logo4 },
        { image: logo5 },
    ];

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


            <section className="home9-section">
                <div className="container">
                    <div className="home9-header d-flex justify-content-between align-items-start flex-wrap">
                        <div>
                            <h2 className="home9-title">View our current property listing</h2>
                            <p className="home9-subtitle">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit
                                amet dapibus justo.
                            </p>
                        </div>
                        <button className="home9-view-btn">
                            View all listing <i className="fa-solid fa-arrow-up-right"></i>
                        </button>
                    </div>
                </div>

                <div className="home9-stack-wrapper">
                    {properties.map((item, index) => (
                        <div
                            key={item.id}
                            className="home9-property-card"
                        >
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-5 col-md-12">
                                        <h3 className="home9-property-title">{item.title}</h3>
                                        <p className="home9-property-address">
                                            <i className="fa-solid fa-location-dot"></i> {item.address}
                                        </p>

                                        <div className="home9-meta d-flex gap-5">
                                            <div>
                                                <h4>{item.beds}</h4>
                                                <span>
                                                    <i className="fa-solid fa-bed"></i> Beds
                                                </span>
                                            </div>
                                            <div>
                                                <h4>{item.baths}</h4>
                                                <span>
                                                    <i className="fa-solid fa-bath"></i> Baths
                                                </span>
                                            </div>
                                            <div>
                                                <h4>{item.sqft}</h4>
                                                <span>
                                                    <i className="fa-regular fa-square"></i> sqft
                                                </span>
                                            </div>
                                        </div>

                                        <div className="home9-price">{item.price}</div>
                                    </div>

                                    <div className="col-lg-7 col-md-12">
                                        <div className="home9-image-wrapper">
                                            <img src={item.image} alt="property" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="home9-wrapper1">
                <div className="container">

                    <div className="home9-features text-center">
                        <h2 className="home9-heading">Selling Your Home With Realty</h2>
                        <p className="home9-subheading">
                            We'll get to know you to understand your selling goals, and explain
                            the selling process so you know what to expect.
                        </p>

                        <div className="row justify-content-center mt-5">
                            {[
                                { icon: "fa-users", title: "Local Expertise" },
                                { icon: "fa-magnifying-glass", title: "Intuitive search" },
                                { icon: "fa-house", title: "We Get Results" },
                                { icon: "fa-thumbs-up", title: "Happy Clients" },
                            ].map((item, index) => (
                                <div className="col-lg-3 col-md-6 mb-4" key={index}>
                                    <div className="home9-feature-card">
                                        <div className="home9-feature-icon">
                                            <i className={`fa-solid ${item.icon}`}></i>
                                        </div>
                                        <h5>{item.title}</h5>
                                        <p>
                                            We are not loud, noisy and full of ourselves. As your agent,
                                            we know we work for you.
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="home9-property-section text-center">
                        <h2 className="home9-heading">The Best Real Estate For You</h2>
                        <p className="home9-subheading">
                            We'll get to know you to understand your selling goals, and explain
                            the selling process so you know what to expect.
                        </p>

                        <div className="home9-property-card0 mt-5">
                            <div className="row g-0 align-items-center">

                                <div className="col-lg-6">
                                    <img
                                        src={property}
                                        alt="property"
                                        className="home9-property-img"
                                    />
                                </div>

                                <div className="col-lg-6">
                                    <div className="home9-property-content">
                                        <h4>Nextgen riverside 152</h4>
                                        <p className="home9-location">
                                            <i className="fa-solid fa-location-dot"></i>
                                            102 Ingraham St, Brooklyn, NY 11237
                                        </p>

                                        <div className="home9-property-meta">
                                            <div>
                                                <h3>4</h3>
                                                <span>Beds</span>
                                            </div>
                                            <div>
                                                <h3>3</h3>
                                                <span>Baths</span>
                                            </div>
                                            <div>
                                                <h3>1,484</h3>
                                                <span>sqft</span>
                                            </div>
                                        </div>

                                        <div className="home9-price-row">
                                            <h2>$1,250,000</h2>
                                            <button className="home9-details-btn">
                                                Details <i className="fa-solid fa-arrow-right"></i>
                                            </button>
                                        </div>

                                        <div className="home9-agent-box">
                                            <img src={agent} alt="agent" />
                                            <div>
                                                <h6>Marvin McKinney</h6>
                                                <span>Local agent</span>
                                            </div>
                                        </div>

                                        <button className="home9-tour-btn">
                                            Request a tour
                                            <small>Earliest at 11:00 tomorrow</small>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="home9-agents-section">
                <div className="container">

                    {/* HEADER */}
                    <div className="home9-agents-header d-flex justify-content-between align-items-start flex-wrap">
                        <div>
                            <h2 className="home9-agents-title">
                                Agents Specializing in California
                            </h2>
                            <p className="home9-agents-subtitle">
                                Explore Property agents are here to help with all your buying,
                                renting and selling goals. Find the home of your dreams with an
                                expert you can trust.{" "}
                                <span className="home9-chat-link">Let’s chat</span>
                            </p>
                        </div>

                        <button className="home9-agents-btn">
                            See all gallery <i className="fa-solid fa-arrow-up-right"></i>
                        </button>
                    </div>

                    {/* AGENTS */}
                    <div className="row mt-5">
                        {agents.map((agent) => (
                            <div className="col-lg-4 col-md-6 mb-4" key={agent.id}>
                                <div className="home9-agent-card">
                                    <img
                                        src={agent.img}
                                        alt={agent.name}
                                        className="home9-agent-img"
                                    />

                                    <div className="home9-agent-info">
                                        <div>
                                            <h5>{agent.name}</h5>
                                            <span>{agent.role}</span>
                                        </div>

                                        <div className="home9-agent-actions">
                                            <a href="#">
                                                <i className="fa-solid fa-phone"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fa-solid fa-envelope"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <section className="home9srv-section">
                <div className="container">
                    <div className="row align-items-start">

                        <div className="col-lg-7">
                            <h2 className="home9srv-heading">
                                Have a look at our services
                            </h2>

                            <p className="home9srv-desc">
                                Our vision is to be the premier real estate company in New York,
                                recognized for excellence, innovation, and community impact.
                            </p>

                            <div className="home9srv-list">
                                {serviceData.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className={`home9srv-item ${activeItem?.id === item.id ? "home9srv-active" : ""
                                            }`}
                                        onClick={() => setActiveItem(item)}
                                    >
                                        <span className="home9srv-index">
                                            {String(index + 1).padStart(2, "0")}.
                                        </span>
                                        <h4 className="home9srv-text">{item.title}</h4>
                                    </div>
                                ))}

                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="home9srv-img-wrap">
                                {activeItem && (
                                    <img
                                        src={activeItem.img}
                                        alt="service"
                                        className="home9srv-preview-img"
                                    />
                                )}


                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="home9-testimonial-section">
                <div className="container text-center">
                    <h2 className="home9-testimonial-title">
                        What our customers says
                    </h2>

                    <p className="home9-testimonial-subtitle">
                        Our vision is to be the premier real estate company in New York,
                        recognized for our unwavering commitment to excellence, innovation,
                        and community impact.
                    </p>

                    <div className="home9-testimonial-wrapper">
                        {testimonials.map((item, index) => {
                            let position = "next";

                            if (index === active) position = "active";
                            if (
                                index === active - 1 ||
                                (active === 0 && index === testimonials.length - 1)
                            ) {
                                position = "prev";
                            }

                            return (
                                <div
                                    className={`home9-testimonial-card ${position}`}
                                    key={index}
                                >
                                    <p className="home9-testimonial-text">{item.text}</p>

                                    <div className="home9-testimonial-user">
                                        <img src={item.img} alt="user" />
                                        <div>
                                            <h6>{item.name}</h6>
                                            <span>{item.role}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                    </div>

                    <div className="home9-testimonial-dots">
                        {testimonials.map((_, i) => (
                            <span
                                key={i}
                                className={i === active ? "active" : ""}
                                onClick={() => setActive(i)}
                            ></span>
                        ))}
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
                            Explore Property agents are here to help with all your buying, renting and selling goals.<br></br>
                            Find the home of your dreams with an expert you can trust. Let’s chat                        </p>
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
            <footer className="footer">
                <div className="container">
                    <div className="footer-top d-flex flex-column flex-md-row justify-content-between align-items-center">
                        <div className="footer-logo">
                            <img src={footerlogo} alt="logo" />
                        </div>

                        <div className="footer-contact0">
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

                    <div className="row footer-main0">
                        <div className="col-lg-3 col-md-6">
                            <h5>About us</h5>
                            <ul>
                                <li><i className="fas fa-angle-right" style={{ color: "#f89b3c" }}></i> Contact</li>
                                <li><i className="fas fa-angle-right" style={{ color: "#f89b3c" }}></i> Why choose us?</li>
                                <li><i className="fas fa-angle-right" style={{ color: "#f89b3c" }}></i> Customer reviews</li>
                                <li><i className="fas fa-angle-right" style={{ color: "#f89b3c" }}></i> Our team</li>
                                <li><i className="fas fa-angle-right" style={{ color: "#f89b3c" }}></i> Careers with realty</li>
                                <li><i className="fas fa-angle-right" style={{ color: "#f89b3c" }}></i> Work with us</li>
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
                                <li><i className="fas fa-angle-right" style={{ color: "#f89b3c" }}></i> Terms of use</li>
                                <li><i className="fas fa-angle-right" style={{ color: "#f89b3c" }}></i> Privacy policy</li>
                                <li><i className="fas fa-angle-right" style={{ color: "#f89b3c" }}></i> Our services</li>
                                <li><i className="fas fa-angle-right" style={{ color: "#f89b3c" }}></i> Contact support</li>
                                <li><i className="fas fa-angle-right" style={{ color: "#f89b3c" }}></i> Pricing plans</li>
                                <li><i className="fas fa-angle-right" style={{ color: "#f89b3c" }}></i> FAQs</li>
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
                            <button className="subscribe-btn0">Subscribe</button>

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