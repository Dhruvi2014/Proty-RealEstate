import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../Home8.css";
import logo from "../assets/logo.png";

import heroBg from "../assets/herohome.jpeg";
import img1 from "../assets/house1.jpg";
import img2 from "../assets/house2.jpg";
import img3 from "../assets/house3.jpg";
import img4 from "../assets/house4.jpg";
import img5 from "../assets/house1.jpg";
import img6 from "../assets/house2.jpg";
import img7 from "../assets/house3.jpg";
import img8 from "../assets/house4.jpg";

import aboutImg1 from "../assets/home7img2.jpg";
import aboutImg2 from "../assets/home7img1.jpg";

import bg1 from "../assets/house1.jpg";
import bg2 from "../assets/house2.jpg";
import bg3 from "../assets/house3.jpg";
import agentImg from "../assets/testimonials-6.jpg";

import logo1 from "../assets/vector1.png";
import logo2 from "../assets/vector2.png";
import logo3 from "../assets/vector3.png";
import logo4 from "../assets/vector4.png";
import logo5 from "../assets/vector5.png";

import property1 from "../assets/box-house1.jpg";
import property2 from "../assets/box-house2.jpg";
import property3 from "../assets/box-house3.jpg";
import property4 from "../assets/box-house4.jpg";

import user1 from "../assets/testimonials-1.jpg";
import user2 from "../assets/testimonials-2.jpg";
import user3 from "../assets/testimonials-3.jpg";

import agent1 from "../assets/home2person1.jpg";
import agent2 from "../assets/home2person2.jpg";
import agent3 from "../assets/home2person3.jpg";
import agent4 from "../assets/home2person4.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];
const counters = [
    { id: 1, label: "Dream house", value: 950 },
    { id: 2, label: "Happy clients", value: 2200 },
    { id: 3, label: "Local Agent", value: 470 },
    { id: 4, label: "Property Available", value: 2500 },
];

const logos = [
    { image: logo1 },
    { image: logo2 },
    { image: logo3 },
    { image: logo4 },
    { image: logo5 },
];

const properties = [
    { img: property1 },
    { img: property2 },
    { img: property3 },
    { img: property4 },
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


export default function Home6() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    const [count, setCount] = useState(counters.map(() => 0));

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) =>
                prev.map((num, i) =>
                    num < counters[i].value
                        ? Math.min(num + Math.ceil(counters[i].value / 40), counters[i].value)
                        : num
                )
            );
        }, 40);

        return () => clearInterval(interval);
    }, []);

    const bgImages = [bg1, bg2, bg3];
    const [activeBg, setActiveBg] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveBg((prev) => (prev + 1) % bgImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const testimonials = [
        {
            name: "Annette Black",
            role: "CEO Themesflat",
            text:
                "My experience with property management services has exceeded expectations. They efficiently manage properties with professionalism.",
            img: user1,
        },
        {
            name: "Cody Fisher",
            role: "CEO Themesflat",
            text:
                "Aenean orci lorem, pharetra ac imperdiet eget, tristique ac magna. In aliquet efficitur turpis.",
            img: user2,
        },
        {
            name: "Jacob Jones",
            role: "CEO Themesflat",
            text:
                "Vivamus at nisl ornare, vulputate turpis finibus, posuere metus.",
            img: user3,
        },
        {
            name: "Annette Black",
            role: "CEO Themesflat",
            text:
                "My experience with property management services has exceeded expectations. They efficiently manage properties with professionalism.",
            img: user1,
        },
        {
            name: "Cody Fisher",
            role: "CEO Themesflat",
            text:
                "Aenean orci lorem, pharetra ac imperdiet eget, tristique ac magna. In aliquet efficitur turpis.",
            img: user2,
        },
        {
            name: "Jacob Jones",
            role: "CEO Themesflat",
            text:
                "Vivamus at nisl ornare, vulputate turpis finibus, posuere metus.",
            img: user3,
        },
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

                                        <li><Link to="/">Home Page 1</Link></li>
                                        <li><Link to="/home2">Home Page 2</Link></li>
                                        <li><Link to="/home3">Home Page 3</Link></li>
                                        <li><Link to="/home4">Home Page 4</Link></li>
                                        <li><Link to="/home5">Home Page 5</Link></li>
                                        <li><Link to="/home6">Home Page 6</Link></li>
                                        <li><Link to="/home7">Home Page 7</Link></li>
                                        <li><Link to="/home8">Home Page 8</Link></li>
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

                            <button className="btn btn-outline-warning rounded-pill px-4">
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

            <section
                className="home7-hero-section"
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <div className="home7-overlay"></div>

                <div className="container">
                    <div className="row align-items-center">
                        {/* LEFT CONTENT */}
                        <div className="col-lg-6">
                            <h1 className="home7-hero-title">
                                Find nearby <br /> luxurious estates
                            </h1>
                            <p className="home7-hero-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Maecenas ultrices sapien dolor, non consequat risus feugiat eu.
                            </p>

                            {/* Thumbnail Slider */}
                            <div className="home7-thumb-wrapper">
                                <button className="home7-thumb-btn" onClick={prevSlide}>
                                    <i className="fa-solid fa-chevron-left"></i>
                                </button>

                                <div className="home7-thumb-slider">
                                    <div
                                        className="home7-thumb-track"
                                        style={{
                                            transform: `translateX(-${index * 110}px)`,
                                        }}
                                    >
                                        {images.map((img, i) => (
                                            <img
                                                key={i}
                                                src={img}
                                                alt="property"
                                                className={`home7-thumb-img ${index === i ? "active" : ""
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <button className="home7-thumb-btn" onClick={nextSlide}>
                                    <i className="fa-solid fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>

                        {/* RIGHT FORM */}
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

            <section className="home8-wrapper">
                <div className="container">

                    {/* Heading */}
                    <div className="home8-heading text-center">
                        <h2>Market leader in real estate</h2>
                        <p>
                            At Proty, we’re more than just a real estate company; we’re architects
                            of dreams, crafting spaces where life flourishes and businesses thrive.
                        </p>
                    </div>

                    {/* Counters */}
                    <div className="row home8-counter-row">
                        {counters.map((item, index) => (
                            <div className="col-lg-3 col-md-6" key={item.id}>
                                <div className="home8-counter-box">
                                    <h3>{count[index]}+</h3>
                                    <p>{item.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* About Section */}
                    <div className="row home8-about align-items-center">
                        <div className="col-lg-6 position-relative">
                            <img src={aboutImg1} className="home8-img-main" alt="about" />
                            <img src={aboutImg2} className="home8-img-overlay" alt="about" />
                        </div>

                        <div className="col-lg-6">
                            <h3>Welcome to Proty</h3>
                            <p>
                                At Proty, we’re more than just a real estate company; we’re architects
                                of dreams, crafting spaces where life flourishes and businesses thrive.
                            </p>

                            <ul className="home8-list">
                                <li><i className="fa fa-check-circle"></i> Nam malesuada risus non tortor laoreet fringilla.</li>
                                <li><i className="fa fa-check-circle"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li><i className="fa fa-check-circle"></i> Ut malesuada dolor convallis erat iaculis varius.</li>
                                <li><i className="fa fa-check-circle"></i> Sed ultrices erat in nisi pulvinar tristique.</li>
                            </ul>

                            <button className="home8-btn">
                                Explore our homes <i className="fa fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>

                </div>
            </section>

            <section
                className="home8-hero"
                style={{ backgroundImage: `url(${bgImages[activeBg]})` }}
            >
                <div className="home7-overlay"></div>

                <div className="container home8-content">
                    <div className="row justify-content-end">
                        <div className="col-lg-5 col-md-8">
                            <div className="home8-card">
                                <h3>Nextgen riverside 152</h3>
                                <p className="home8-location">
                                    <i className="fa fa-map-marker-alt"></i>
                                    102 Ingraham St, Brooklyn, NY 11237
                                </p>

                                <div className="home8-info">
                                    <div>
                                        <h4>4</h4>
                                        <p><i className="fa fa-bed"></i> Beds</p>
                                    </div>
                                    <div>
                                        <h4>3</h4>
                                        <p><i className="fa fa-bath"></i> Baths</p>
                                    </div>
                                    <div>
                                        <h4>1,484</h4>
                                        <p><i class="fa-regular fa-square-caret-up"></i> sqft</p>
                                    </div>
                                </div>

                                <h2 className="home8-price">$1,250,000</h2>

                                <div className="home8-agent">
                                    <img src={agentImg} alt="agent" />
                                    <div>
                                        <h6>Marvin McKinney</h6>
                                        <span>Local agent</span>
                                    </div>
                                </div>

                                <button className="home8-btn">
                                    Request a tour
                                    <span>Earliest at 11:00 tomorrow</span>
                                </button>
                            </div>
                        </div>
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

            <section className="home8-property-section">
                <div className="container-fluid">
                    <div className="home8-header text-center">
                        <h2>Explore the latest property listings</h2>
                        <p>
                            Proin auctor, mauris at tristique ullamcorper, nunc nisi sagittis
                            velit, eget blandit dolor arcu sed ante.
                        </p>
                    </div>

                    <div className="row g-4">
                        {properties.map((item, index) => (
                            <div className="col-lg-3 col-md-6" key={index}>
                                <div className="home8-card">
                                    <div className="home8-img-wrapper">
                                        <img src={item.img} alt="property" />

                                        <div className="home8-badges">
                                            <span className="featured">Featured</span>
                                            <span className="sale">For Sale</span>
                                        </div>

                                        <div className="home8-hover-icons">
                                            <span><i className="fa-regular fa-bookmark"></i></span>
                                            <span><i class="fa-solid fa-magnifying-glass-plus"></i></span>
                                        </div>
                                    </div>

                                    <div className="home8-card-body">
                                        <h5>Elegant studio flat</h5>
                                        <p className="home8-location">
                                            <i className="fa-solid fa-location-dot"></i>
                                            102 Ingraham St, Brooklyn, NY 11237
                                        </p>

                                        <div className="home8-info">
                                            <span><i className="fa-solid fa-house"></i> Studio</span>
                                            <span><i className="fa-solid fa-bed"></i> 3</span>
                                            <span><i className="fa-solid fa-bath"></i> 3</span>
                                            <span><i className="fa-solid fa-ruler-combined"></i> 4,043 Sqft</span>
                                        </div>

                                        <div className="home8-footer">
                                            <h6>$8,600</h6>
                                            <span>December 20, 2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="proty-ts-section">
                <div className="proty-ts-strips">
                    <div className="proty-ts-strip proty-ts-strip-orange">
                        Proty Real Estate * Best Listing * Proty Real Estate * Best Listing * Proty Real Estate *
                        Best Listing * Proty Real Estate * Best Listing * Proty Real Estate *
                        Best Listing * Proty Real Estate * Best Listing *
                        Best Listing * Proty Real Estate * Best Listing * Proty Real Estate *
                    </div>
                    <div className="proty-ts-strip proty-ts-strip-black">
                        Best Listing * Proty Real Estate * Best Listing * Proty Real Estate * Best Listing * Proty Real Estate * Best Listing * Proty Real Estate *
                        Best Listing * Proty Real Estate * Best Listing * Proty Real Estate *
                        Best Listing * Proty Real Estate * Best Listing * Proty Real Estate *
                    </div>
                </div>
                <br></br><br></br>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="proty-ts-title">Customer Reviews</h2>
                        <p className="proty-ts-subtitle">
                            We are committed to building long-term relationships based on trust
                            and integrity.
                        </p>
                    </div>

                    <div className="row g-4 proty-ts-animation-wrapper">
                        {testimonials.map((item, index) => (
                            <div className="col-lg-4 col-md-6" key={index}>
                                <div className="proty-ts-card">
                                    <div className="proty-ts-stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>

                                    <p className="proty-ts-text">{item.text}</p>

                                    <div className="proty-ts-user">
                                        <img src={item.img} alt={item.name} />
                                        <div>
                                            <h6>{item.name}</h6>
                                            <span>{item.role}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
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

        </>
    )
}
