import "../Home7.css";
import logo from "../assets/logo.png";
import heroBg from "../assets/herohome.jpeg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import heroImg from "../assets/home2box6.jpg";
import user1 from "../assets/home2t1.jpg";
import user2 from "../assets/home2t2.jpg";
import user3 from "../assets/home2t3.jpg";
import user4 from "../assets/testimonials-3.jpg";

import imgMain from "../assets/home7img1.jpg";
import imgSmall from "../assets/home7img2.jpg";

import help1 from "../assets/help1.jpg";
import help2 from "../assets/help2.jpg";
import help3 from "../assets/help3.jpg";

import img1 from "../assets/home2box1.jpg";
import img2 from "../assets/home2box2.jpg";
import img3 from "../assets/home2box3.jpg";
import img4 from "../assets/home2box4.jpg";
import img5 from "../assets/home2box5.jpg";
import img6 from "../assets/home2box6.jpg";

import galleryImg1 from "../assets/gallery-1.jpg";
import galleryImg2 from "../assets/gallery-2.jpg";

import bloggrid1 from "../assets/blog-grid-1.jpg";
import bloggrid2 from "../assets/blog-grid-2.jpg";
import bloggrid3 from "../assets/blog-grid-3.jpg";

import contactBg from "../assets/banner-1.jpg";

import logo1 from "../assets/vector1.png";
import logo2 from "../assets/vector2.png";
import logo3 from "../assets/vector3.png";
import logo4 from "../assets/vector4.png";
import logo5 from "../assets/vector5.png";

import footerlogo from "../assets/logo2.png";


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

const listings = [
    { img: img1, featured: true, sale: false },
    { img: img2, featured: false, sale: false },
    { img: img3, featured: true, sale: true },
    { img: img4, featured: false, sale: false },
    { img: img5, featured: true, sale: true },
    { img: img6, featured: true, sale: true },
];

const testimonials = [
    {
        img: "https://randomuser.me/api/portraits/women/44.jpg",
        text: "Proin auctor, mauris at tristique ullamcorper, nunc nisi sagittis velit, eget blandit dolor arcu sed ante.",
        name: "Ronald Richards",
        role: "CEO Themesflat",
    },
    {
        img: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "Fusce euismod varius massa, id viverra nisl semper ut. Aliquam felis eros, eleifend non faucibus at.",
        name: "Ronald Richards",
        role: "CEO Themesflat",
    },
    {
        img: "https://randomuser.me/api/portraits/women/65.jpg",
        text: "Proin auctor, mauris at tristique ullamcorper, nunc nisi sagittis velit, eget blandit dolor arcu sed ante.",
        name: "Courtney Henry",
        role: "CEO Themesflat",
    },
    {
        img: "https://randomuser.me/api/portraits/men/45.jpg",
        text: "Aliquam felis eros, eleifend non faucibus at. Fusce euismod varius massa.",
        name: "Albert Flores",
        role: "Manager",
    },
    {
        img: "https://randomuser.me/api/portraits/women/12.jpg",
        text: "Nunc nisi sagittis velit, eget blandit dolor arcu sed ante.",
        name: "Jenny Wilson",
        role: "Founder",
    },
    {
        img: "https://randomuser.me/api/portraits/men/76.jpg",
        text: "Mauris at tristique ullamcorper, nunc nisi sagittis velit.",
        name: "Brooklyn Simmons",
        role: "Designer",
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

export default function Home6() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        if (index < testimonials.length - 3) {
            setIndex(index + 1);
        }
    };

    const prevSlide = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    const rowOneLogos = [logo1, logo2, logo3, logo4, logo5];
    const rowTwoLogos = [logo5, logo4, logo3, logo2, logo1];

    return (
        <>

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

                                <button className="btn btn-outline rounded-pill px-4" style={{ color: "#ff7a00", borderColor: "#ff7a00" }}>
                                    Explore Listing
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

            <section className="home7-hero-wrapper">
                <div className="container text-center">

                    <h1 className="home7-mask-title">
                        PROTY
                    </h1>

                    <p className="home7-subtitle">
                        WE ARE A LEADING REAL ESTATE AGENCY SPECIALIZING <br />
                        IN CONNECTING CLIENTS WITH THEIR <br />
                        DREAM PROPERTIES.
                    </p>

                    <div className="home7-btn-group">
                        <button className="home7-btn-primary">
                            Explore our homes <i className="fas fa-arrow-right"></i>
                        </button>

                        <button className="home7-btn-outline">
                            Meet an expert <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>

                </div>
            </section>

            <section className="home7-hero-section">
                <div
                    className="home7-hero-bg"
                    style={{ backgroundImage: `url(${heroImg})` }}
                >
                    <div className="home7-hero-overlay"></div>

                    <div className="container home7-hero-content">
                        <div className="home7-hero-tags">
                            <span>Residential Sales and Leasing<i className="fa-solid fa-arrow-right"></i></span>
                            <span>Commercial Real Estate <i className="fa-solid fa-arrow-right"></i></span>
                            <span>Property Management <i className="fa-solid fa-arrow-right"></i></span>
                            <span>Investment Advisory <i className="fa-solid fa-arrow-right"></i></span>
                            <span>12 Year of experience <i className="fa-solid fa-arrow-right"></i></span>
                        </div>

                        <div className="home7-hero-clients">
                            <span className="home7-client-count">1200+ Happy Clients</span>
                            <div className="home7-client-avatars">
                                <img src={user1} alt="" />
                                <img src={user2} alt="" />
                                <img src={user3} alt="" />
                                <img src={user4} alt="" />
                            </div>
                        </div>

                        <h1 className="home7-hero-title">
                            Our success is driven by our passion for real estate and our
                            dedication to exceeding client expectations.
                        </h1>
                    </div>
                </div>
            </section>

            <section className="home7-about-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="home7-about-content">
                                <h2>
                                    We pride ourselves on our extensive market knowledge and
                                    commitment to client satisfaction.
                                </h2>

                                <p>
                                    At Proty, we're more than just a real estate company; we're
                                    architects of dreams, crafting spaces where life flourishes and
                                    businesses thrive. With a rich history spanning 12 years, we've
                                    established ourselves as a trusted leader in the real estate
                                    market, renowned for our unwavering commitment to excellence,
                                    innovation, and client satisfaction.
                                </p>

                                <button className="home7-about-btn">
                                    Explore our homes
                                    <i className="fa-solid fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="home7-about-images">
                                <div className="home7-main-img">
                                    <img src={imgMain} alt="main" />
                                </div>

                                <div className="home7-small-img">
                                    <img src={imgSmall} alt="small" />
                                </div>
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

            <section className="homepage7-listing-section">
                <div className="container">
                    <div className="homepage7-heading text-center">
                        <h2>Discover best listing</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit
                            amet dapibus justo. Nam nec libero diam.
                        </p>
                    </div>

                    <div className="row mt-5">
                        {listings.map((item, index) => (
                            <div
                                className="col-lg-4 col-md-6 col-sm-12 mb-4"
                                key={index}
                            >
                                <div className="homepage7-card">
                                    <div className="homepage7-img">
                                        <img src={item.img} alt="listing" />

                                        <div className="homepage7-badges">
                                            {item.featured && (
                                                <span className="badge-featured">Featured</span>
                                            )}
                                            {item.sale && (
                                                <span className="badge-sale">For Sale</span>
                                            )}
                                        </div>

                                        {/* Hover icons */}
                                        <div className="homepage7-hover-icons">
                                            <span>
                                                <i className="fa-regular fa-bookmark"></i>
                                            </span>
                                            <span>
                                                <i className="fa-solid fa-magnifying-glass"></i>
                                            </span>
                                        </div>

                                        <div className="homepage7-price">$8.600</div>
                                    </div>

                                    <div className="homepage7-content">
                                        <h5>Elegant studio flat</h5>
                                        <p>
                                            <i className="fa-solid fa-location-dot"></i>
                                            102 Ingraham St, Brooklyn, NY 11237
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="home7-testimonial-section">
                <div className="container text-center">
                    <h2 className="home7-title">What our customers says</h2>
                    <p className="home7-subtitle">
                        We are committed to building long-term relationships with our clients
                        based on trust and integrity.
                    </p>

                    <div className="home7-slider-wrapper">


                        <div className="home7-slider">
                            <div
                                className="home7-slider-track"
                                style={{ transform: `translateX(-${index * 33.333}%)` }}
                            >
                                {testimonials.map((item, i) => (
                                    <div className="home7-card" key={i}>
                                        <img src={item.img} alt="user" />
                                        <p>{item.text}</p>

                                        <div className="home7-stars">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>

                                        <h5>{item.name}</h5>
                                        <span>{item.role}</span>
                                    </div>
                                ))}
                            </div>
                        </div>


                    </div>


                    <div className="home7-navigation">
                        <button className="home7-nav-btn" onClick={prevSlide}>
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>

                        <div className="home7-dots">
                            {testimonials.slice(0, testimonials.length - 2).map((_, i) => (
                                <span
                                    key={i}
                                    className={`home7-dot ${index === i ? "active" : ""}`}
                                    onClick={() => setIndex(i)}
                                ></span>
                            ))}
                        </div>

                        <button className="home7-nav-btn" onClick={nextSlide}>
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </section>

            <section className="home7-gallery-section">
                <div className="container">
                    <div className="home7-gallery-header">
                        <div>
                            <h2>Explore our gallery</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit
                                amet dapibus justo. Nam nec libero diam. Pellentesque vel
                                efficitur justo. Ut at ipsum turpis.
                            </p>
                        </div>

                        <a href="#" className="home7-gallery-btn">
                            See all agent
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>

                    <div className="row g-4 home7-gallery-images">
                        <div className="col-lg-6 col-md-12">
                            <div className="home7-gallery-card">
                                <img src={galleryImg1} alt="Gallery 1" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="home7-gallery-card">
                                <img src={galleryImg2} alt="Gallery 2" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="insight-section">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title">Our latest news and blog</h2>
                        <p className="section-subtitle">
                            We are committed to building long-term relationships with our clients based on trust and integrity.
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

            <section className="home7-contact-section">
                <div className="container-fluid">
                    <div className="home7-contact-wrapper">
                        <div
                            className="home7-contact-bg"
                            style={{ backgroundImage: `url(${contactBg})` }}
                        ></div>

                        <div className="home7-contact-card">
                            <h3>Get in touch</h3>
                            <p>
                                We'll get to know you to understand your selling goals, explain
                                the selling process so you know what to expect.
                            </p>

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
                                        <button type="submit" className="home7-contact-btn">
                                            Contact our experts
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
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