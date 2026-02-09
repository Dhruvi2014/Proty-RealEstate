import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../Home10.css";
import logo from "../assets/logo.png";

import heroImg from "../assets/herohome.jpeg";
import thumbImg from "../assets/boxlist2.jpg";

import logo1 from "../assets/vector1.png";
import logo2 from "../assets/vector2.png";
import logo3 from "../assets/vector3.png";
import logo4 from "../assets/vector4.png";
import logo5 from "../assets/vector5.png";

import img1 from "../assets/gallery-1.jpg";
import img2 from "../assets/gallery-2.jpg";
import img3 from "../assets/home2box1.jpg";
import img4 from "../assets/home2box2.jpg";
import img5 from "../assets/home2box3.jpg";
import img6 from "../assets/home2box4.jpg";

import agent from "../assets/testimonials-1.jpg";
import heroBg from "../assets/banner-1.jpg";

import help1 from "../assets/help1.jpg";
import help2 from "../assets/help2.jpg";
import help3 from "../assets/help3.jpg";

import imgMain from "../assets/boxlist1.jpg";
import imgSmall from "../assets/boxlist2.jpg";

import p1 from "../assets/help1.jpg";
import p2 from "../assets/help2.jpg";
import p3 from "../assets/help3.jpg";
import p4 from "../assets/home2box6.jpg";

import agent0 from "../assets/testimonials-2.jpg";
import agent1 from "../assets/home2person1.jpg";
import agent2 from "../assets/home2person2.jpg";
import agent3 from "../assets/home2person3.jpg";
import agent4 from "../assets/home2person4.jpg";

import bloggrid1 from "../assets/blog-grid-1.jpg";
import bloggrid2 from "../assets/blog-grid-2.jpg";
import bloggrid3 from "../assets/blog-grid-3.jpg";

import footerlogo from "../assets/logo2.png";


const logos = [
    { image: logo1 },
    { image: logo2 },
    { image: logo3 },
    { image: logo4 },
    { image: logo5 },
];

const properties = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
    { id: 6, img: img6 },
];

const propertiessale = [
    { id: 1, img: p1 },
    { id: 2, img: p2 },
    { id: 3, img: p3 },
    { id: 4, img: p4 },
];

const helpData = [
    {
        title: "Buy or rent a property",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        img: help1,
    },
    {
        title: "Advertise your property",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        img: help2,
    },
    {
        title: "Advertise your property",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        img: help3,
    },
];

const agents = [
    {
        img: agent1,
        name: "Leslie Alexander",
        role: "Sale agent",
    },
    {
        img: agent2,
        name: "Leslie Alexander",
        role: "Sale agent",
    },
    {
        img: agent3,
        name: "Leslie Alexander",
        role: "Sale agent",
    },
    {
        img: agent4,
        name: "Leslie Alexander",
        role: "Sale agent",
    },
];

const propertiesbest = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        title: "Gorgeous Apartment Building",
        address: "102 Ingraham St, Brooklyn, NY 11237",
        price: "$8.600",
        bed: 3,
        bath: 3,
        sqft: "4,043",
        type: "Studio",
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1613977257363-707ba9348227",
        title: "Luxury Modern Bedroom",
        address: "21 Jump St, New York, NY",
        price: "$7.200",
        bed: 2,
        bath: 2,
        sqft: "3,100",
        type: "Apartment",
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        title: "Minimal Interior Home",
        address: "Sunset Blvd, California",
        price: "$9.100",
        bed: 4,
        bath: 3,
        sqft: "5,000",
        type: "Villa",
    },
];

const leftTestimonials = [
    {
        id: 1,
        name: "Cody Fisher",
        role: "CEO Themesflat",
        img: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "Aenean orci lorem, pharetra ac imperdiet eget, tristique ac magna.",
    },
    {
        id: 2,
        name: "Ralph Edwards",
        role: "CEO Themesflat",
        img: "https://randomuser.me/api/portraits/men/45.jpg",
        text: "Morbi accumsan nulla id neque rutrum, et tempus dui venenatis.",
    },
];

const rightTestimonials = [
    {
        id: 1,
        name: "Floyd Miles",
        role: "CEO Themesflat",
        img: "https://randomuser.me/api/portraits/women/44.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    },
    {
        id: 2,
        name: "Jacob Jones",
        role: "CEO Themesflat",
        img: "https://randomuser.me/api/portraits/women/68.jpg",
        text: "Vivamus at nisl ornare vulputate turpis finibus posuere metus.",
    },
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

export default function Home10() {
    const renderCard = (item, index) => (
        <div className="dh-testi-card" key={index}>
            <div className="dh-testi-stars">
                {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                ))}
            </div>

            <p className="dh-testi-text">{item.text}</p>

            <div className="dh-testi-user">
                <img src={item.img} alt="" />
                <div>
                    <h6>{item.name}</h6>
                    <span>{item.role}</span>
                </div>
            </div>
        </div>
    );

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

                            <button className="btn btn-outline-warning rounded-pill px-4">
                                Book a visit
                            </button>
                            <button className="btn btn-outline-warning rounded-pill px-4">
                                <i className="fa-solid fa-magnifying-glass"></i>
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

            <section className="home10-hero-section">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-6 col-md-12">
                            <div className="home10-hero-content">
                                <h1 className="home10-title">
                                    The path to your <br /> dream home
                                </h1>

                                <h5 className="home10-subtitle">Nextgen riverside 152</h5>

                                <p className="home10-location">
                                    <i className="fa-solid fa-location-dot"></i>
                                    102 Ingraham St, Brooklyn, NY 11237
                                </p>

                                <div className="home10-features">
                                    <div className="home10-feature-box">
                                        <h3>4</h3>
                                        <p>
                                            <i className="fa-solid fa-bed"></i> Beds
                                        </p>
                                    </div>

                                    <div className="home10-feature-box">
                                        <h3>3</h3>
                                        <p>
                                            <i className="fa-solid fa-bath"></i> Baths
                                        </p>
                                    </div>

                                    <div className="home10-feature-box">
                                        <h3>1,484</h3>
                                        <p>
                                            <i className="fa-solid fa-ruler-combined"></i> sqft
                                        </p>
                                    </div>
                                </div>

                                <div className="home10-thumb-card">
                                    <img src={thumbImg} alt="Property preview" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="home10-image-wrapper">
                                <img src={heroImg} alt="Hero property" />

                                <div className="home10-floating-card">
                                    <img src={thumbImg} alt="Studio flat" />
                                    <div>
                                        <h6>Elegant studio flat</h6>
                                        <p>
                                            <i className="fa-solid fa-location-dot"></i> New York, NY
                                        </p>
                                    </div>
                                    <span className="home10-arrow">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="logo-section container">
                <h2>We are trusted by leading company</h2>
                <p>We offer a comprehensive suite of real estate services, catering to a diverse<br></br>
                    clientele with varied needs and aspirations.</p>

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

            <section className="home10-section py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="home10-title">Premium properties by Proty</h2>
                        <p className="home10-subtitle">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>

                    <div className="row g-4">
                        {properties.map((item) => (
                            <div className="col-lg-4 col-md-6" key={item.id}>
                                <div className="home10-card">

                                    <div className="home10-img-wrapper">
                                        <img src={item.img} alt="property" />

                                        <div className="home10-badges">
                                            <span className="badge featured">Featured</span>
                                            <span className="badge sale">For Sale</span>
                                        </div>

                                        <div className="home10-price">$8,600</div>

                                        <div className="home10-hover-icons">
                                            <i className="fa-regular fa-heart"></i>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </div>
                                    </div>

                                    <div className="home10-content">
                                        <span className="home10-tag">Studio</span>
                                        <h5>Elegant studio flat</h5>
                                        <p>
                                            <i className="fa-solid fa-location-dot"></i>
                                            102 Ingraham St, Brooklyn, NY 11237
                                        </p>

                                        <div className="home10-footer">
                                            <div className="home10-user">
                                                <img src={agent} alt="agent" />
                                                <span>Courtney Henry</span>
                                            </div>
                                            <button className="home10-btn">Details</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section
                className="home7-hero-section"
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <div className="home7-overlay"></div>

                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-6">
                            <div className="home7-form-card">
                                <h3>Get in touch</h3>

                                <form>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label>Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Your name"
                                            />
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <label>Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Email"
                                            />
                                        </div>

                                        <div className="col-12 mb-3">
                                            <label>Phone number</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Your phone number"
                                            />
                                        </div>

                                        <div className="col-12 mb-4">
                                            <label>Message</label>
                                            <textarea
                                                className="form-control"
                                                rows="4"
                                                placeholder="Your message"
                                            ></textarea>
                                        </div>

                                        <div className="col-12">
                                            <button className="home7-form-btn">
                                                Contact our experts
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home7-help-section">
                <div className="container">
                    <div className="home7-help-header">
                        <h2>See how Proty can help</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit
                            amet dapibus justo. Nam nec libero diam. Pellentesque vel efficitur
                            justo. Ut at ipsum turpis.
                        </p>
                    </div>

                    <div className="row mt-5">
                        {helpData.map((item, index) => (
                            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
                                <div className="home7-help-card">
                                    <img src={item.img} alt="help" />

                                    <div className="home7-help-arrow">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>

                                    <div className="home7-help-overlay">
                                        <h5>{item.title}</h5>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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

            <section className="home10-sale-wrapper py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="home10-sale-heading">Best properties for sale</h2>
                        <p className="home10-sale-subtext">
                            Thousands of luxury home enthusiasts just like you visit our website.
                        </p>
                    </div>

                    <div className="row g-4">
                        {propertiessale.map((item) => (
                            <div className="col-lg-6" key={item.id}>
                                <div className="home10-sale-card">

                                    <div className="home10-sale-img-box">
                                        <img src={item.img} alt="property" />

                                        <div className="home10-sale-badges">
                                            <span className="home10-sale-badge featured">Featured</span>
                                            <span className="home10-sale-badge sale">For Sale</span>
                                        </div>

                                        <div className="home10-sale-hover-icons">
                                            <span className="home10-sale-icon">
                                                <i className="fa-regular fa-heart"></i>
                                            </span>
                                            <span className="home10-sale-icon">
                                                <i className="fa-solid fa-magnifying-glass"></i>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="home10-sale-content">
                                        <span className="home10-sale-type">
                                            <i className="fa-solid fa-house"></i> Studio
                                        </span>

                                        <h5>Elegant studio flat</h5>
                                        <p className="home10-sale-location">
                                            <i className="fa-solid fa-location-dot"></i> New York, NY
                                        </p>

                                        <div className="home10-sale-info">
                                            <span><i className="fa-solid fa-bed"></i> 3</span>
                                            <span><i className="fa-solid fa-bath"></i> 3</span>
                                            <span><i className="fa-solid fa-ruler-combined"></i> 4,043 Sqft</span>
                                        </div>

                                        <div className="home10-sale-footer">
                                            <div className="home10-sale-user">
                                                <img src={agent0} alt="agent" />
                                                <span>Courtney Henry</span>
                                            </div>
                                            <div className="home10-sale-price">$8.600</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            <section className="home8-agents-section py-5">
                <div className="container">

                    <div className="home8-heading-wrapper">

                        <div className="home8-heading-text">
                            <h2 className="home8-title">Agents Specializing in California</h2>

                            <p className="home8-subtitle">
                                Explore Property agents are here to help with all your buying,
                                renting and selling goals. Find the home of your dreams with an
                                expert you can trust.
                            </p>
                        </div>

                        <button className="home8-btn0">
                            See all agent
                            <i className="fa-solid fa-arrow-up-right-from-square ms-2"></i>
                        </button>

                    </div>


                    <div className="row g-4">
                        {agents.map((agent, index) => (
                            <div className="col-lg-3 col-md-6 col-12" key={index}>
                                <div className="home8-agent-card">

                                    <div className="home8-img-wrapper">
                                        <img src={agent.img} alt="agent" />

                                        <div className="home8-social">
                                            <i className="fa-brands fa-facebook-f"></i>
                                            <i className="fa-brands fa-x-twitter"></i>
                                            <i className="fa-brands fa-linkedin-in"></i>
                                            <i className="fa-brands fa-instagram"></i>
                                        </div>
                                    </div>

                                    <div className="text-center mt-3">
                                        <h5 className="home8-agent-name">{agent.name}</h5>
                                        <p className="home8-agent-role">{agent.role}</p>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <section className="dh-home10-wrapper">
                <div className="container">

                    <h2 className="dh-home10-heading">Best Property</h2>

                    {propertiesbest.map((item, index) => (
                        <div
                            className="dh-home10-property-card"
                            key={item.id}
                            style={{ top: `${100 + index * 40}px`, zIndex: index + 1 }}
                        >
                            <div className="dh-home10-image">
                                <img src={item.img} alt="property" />
                            </div>

                            <div className="dh-home10-content">

                                <div className="dh-home10-left">
                                    <h4>{item.title}</h4>

                                    <p className="dh-home10-location">
                                        <i className="fa-solid fa-location-dot"></i>
                                        {item.address}
                                    </p>

                                    <div className="dh-home10-meta">
                                        <span className="dh-home10-price">{item.price}</span>

                                        <span>
                                            <i className="fa-solid fa-bed"></i> {item.bed}
                                        </span>

                                        <span>
                                            <i className="fa-solid fa-bath"></i> {item.bath}
                                        </span>

                                        <span>
                                            <i className="fa-solid fa-ruler-combined"></i>{" "}
                                            {item.sqft} Sqft
                                        </span>
                                    </div>
                                </div>

                                <div className="dh-home10-right">
                                    <span className="dh-home10-tag">{item.type}</span>

                                    <button className="dh-home10-btn">Details</button>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="dh-testi-wrapper">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4">
                            <div className="dh-testi-left">
                                <h2>
                                    Trusted by thousands of people all across the globe
                                </h2>

                                <p>
                                    We are committed to building long-term relationships with our
                                    clients based on trust and integrity.
                                </p>

                                <h1 className="dh-testi-count">2.500+</h1>
                                <span>Happy Clients</span>

                                <div className="dh-testi-avatars">
                                    <img src="https://randomuser.me/api/portraits/women/1.jpg" />
                                    <img src="https://randomuser.me/api/portraits/men/2.jpg" />
                                    <img src="https://randomuser.me/api/portraits/women/3.jpg" />
                                    <img src="https://randomuser.me/api/portraits/men/4.jpg" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="dh-testi-slider">

                                <div className="dh-testi-col dh-testi-up">
                                    {[...leftTestimonials, ...leftTestimonials].map(renderCard)}
                                </div>

                                <div className="dh-testi-col dh-testi-down">
                                    {[...rightTestimonials, ...rightTestimonials].map(renderCard)}
                                </div>

                            </div>
                        </div>

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
