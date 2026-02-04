import "../Home6.css";
import logo from "../assets/logo.png";
import heroBg from "../assets/herohome.jpeg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import footerlogo from "../assets/logo2.png";

import img1 from "../assets/house1.jpg";
import img2 from "../assets/house2.jpg";
import img3 from "../assets/house3.jpg";
import img4 from "../assets/house4.jpg";

import mainImg from "../assets/main-image.jpg";
import sideImg from "../assets/side-image.jpg";

import p1 from "../assets/blog-grid-1.jpg";
import p2 from "../assets/blog-grid-2.jpg";
import p3 from "../assets/blog-grid-3.jpg";
import p4 from "../assets/box-house1.jpg";
import p5 from "../assets/box-house2.jpg";
import p6 from "../assets/box-house3.jpg";
import p7 from "../assets/box-house4.jpg";
import p8 from "../assets/box-house5.jpg";
import p9 from "../assets/box-house6.jpg";
import p10 from "../assets/boxlist1.jpg";
import p11 from "../assets/boxlist2.jpg";
import p12 from "../assets/boxlist3.jpg";

import agent1 from "../assets/agent1.jpg";
import agent2 from "../assets/agent2.jpg";
import agent3 from "../assets/agent3.jpg";

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

const images = [img1, img2, img3, img4];
const projects = [
    { id: "01", title: "Accy apartment for rent", img: p1 },
    { id: "02", title: "Mirror house sudd", img: p2 },
    { id: "03", title: "Aruna grandview residences at sinar valley", img: p3 },
    { id: "04", title: "Whispering pines lakeview estate", img: p4 },
    { id: "05", title: "Gorgeous Apartment Building", img: p5 },
    { id: "06", title: "Whispering pines lakeview estate", img: p6 },
    { id: "07", title: "Golden valley hillside retreat", img: p7 },
    { id: "08", title: "Seaside breeze luxury residence", img: p8 },
    { id: "09", title: "Reverbend grove country villa", img: p9 },
    { id: "10", title: "Seaside breeze luxury residence", img: p10 },
    { id: "11", title: "Accy apartment for rent", img: p11 },
    { id: "12", title: "Gorgeous Apartment Building", img: p12 },
];
const agents = [
    {
        name: "Jacob Jones",
        role: "Local property",
        img: agent1,
    },
    {
        name: "Jacob Jones",
        role: "Local property",
        img: agent2,
    },
    {
        name: "Jacob Jones",
        role: "Local property",
        img: agent3,
    },
];

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

export default function Home6() {
    const [index, setIndex] = useState(0);
    const [propertyCount, setPropertyCount] = useState(0);
    const [agentCount, setAgentCount] = useState(0);

    useEffect(() => {
        let p = 0;
        let a = 0;

        const timer = setInterval(() => {
            if (p < 250) p += 5;
            if (a < 470) a += 10;

            setPropertyCount(p);
            setAgentCount(a);

            if (p >= 250 && a >= 470) clearInterval(timer);
        }, 25);

        return () => clearInterval(timer);
    }, []);

    const nextIndex = (index + 1) % images.length;
    const prevIndex = index === 0 ? images.length - 1 : index - 1;

    const [protyAnimate, setProtyAnimate] = useState(false);

    useEffect(() => {
        setTimeout(() => setProtyAnimate(true), 200);
    }, []);
    const protyServicesData = [
        {
            title: "Residential Sales and Leasing",
            desc: "Assisting clients in buying, selling, and leasing residential properties such as houses, apartments, and condominiums.",
            image:
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            icon: "fa-house"
        },
        {
            title: "Commercial Real Estate Services",
            desc: "Facilitating transactions related to commercial properties such as office buildings, retail spaces, industrial warehouses, land for development.",
            image:
                "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6",
            icon: "fa-building"
        },
        {
            title: "Property Management",
            desc: "Managing properties on behalf of owners, including tenant screening, rent collection, maintenance, and financial reporting.",
            image:
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
            icon: "fa-house"
        }
    ];
    const [active, setActive] = useState(0);

    return (
        <>
            <div className="home6-page-bg">

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

                                    <button className="btn btn-outline rounded-pill px-4" style={{ color: "#ff7a00", borderColor: "#ff7a00" }}>
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

                </div>
                <section className="hero-section">
                    <div className="container-fluid">
                        <div className="row align-items-center">

                            <div className="col-lg-6 hero-left text-white">
                                <h1>
                                    Find the home that <br />
                                    <span>best fits</span> your finances
                                </h1>

                                <div className="mini-preview">
                                    <img src={img1} alt="preview" />
                                </div>


                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Maecenas ultrices sapien dolor.
                                </p>

                                <button className="hero-btn">
                                    See property <i className="fas fa-arrow-right"></i>
                                </button>

                                <div className="hero-stats">
                                    <div>
                                        <h2>{propertyCount}+</h2>
                                        <p>Property Available</p>
                                    </div>
                                    <div>
                                        <h2>{agentCount}+</h2>
                                        <p>Local Agent</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 hero-right">

                                <div className="image-wrapper">
                                    <div className="image-card">
                                        <img
                                            src={images[index]}
                                            alt="property"
                                            className="main-image"
                                        />
                                    </div>
                                </div>

                                <div className="slider-nav-beside">

                                    <div className="nav-pill prev" onClick={() => setIndex(prevIndex)}>
                                        <img src={images[prevIndex]} alt="prev" />
                                        <span className="arrow">
                                            <i className="fas fa-arrow-left"></i>
                                        </span>
                                    </div>

                                    <div className="nav-pill next active" onClick={() => setIndex(nextIndex)}>
                                        <img src={images[nextIndex]} alt="next" />
                                        <span className="arrow">
                                            <i className="fas fa-arrow-right"></i>
                                        </span>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <div className="proty-searchbar-wrapper proty-search-anim" style={{ backgroundColor: "#1c1f24" }}>
                    <div className="proty-searchbar-box">

                        <div className="proty-search-input">
                            <i className="fas fa-search"></i>
                            <input
                                type="text"
                                placeholder="What to look for?"
                            />
                        </div>

                        <button className="proty-search-btn">
                            Search property
                            <i className="fas fa-arrow-right ms-2"></i>
                        </button>

                    </div>
                </div>

                <section className="proty-hero-wrapper">

                    <div className="container-fluid">

                        <div className="row align-items-center g-5">

                            <div className="col-lg-5 proty-hero-left proty-anim-left">
                                <h1 className="proty-hero-title">
                                    Find the home that <br /> best fits your finances
                                </h1>

                                <p className="proty-hero-desc">
                                    At Proty, we're more than just a real estate company; we're architects
                                    of dreams, crafting spaces where life flourishes and businesses thrive.
                                </p>

                                <div className="proty-hero-contact">
                                    <div className="proty-contact-row">
                                        <i className="fas fa-phone"></i>
                                        <span>(603) 555-0123</span>
                                    </div>
                                    <div className="proty-contact-row">
                                        <i className="fas fa-envelope"></i>
                                        <span>proty-support@gmail.com</span>
                                    </div>
                                </div>

                                <button className="proty-hero-btn">
                                    More about <i className="fas fa-arrow-right ms-2"></i>
                                </button>
                            </div>

                            <div className="col-lg-4 proty-hero-center proty-anim-zoom">
                                <div className="proty-main-img-box">
                                    <img src={mainImg} alt="Main house" />
                                </div>
                            </div>

                            <div className="col-lg-3 proty-hero-right proty-anim-right">
                                <h5 className="proty-expertise-title">Our Expertise:</h5>
                                <p className="proty-expertise-text">
                                    We offer a comprehensive suite of real estate services for diverse needs.
                                </p>

                                <ul className="proty-expertise-list">
                                    <li><i className="fas fa-check-circle"></i> Residential Sales & Leasing</li>
                                    <li><i className="fas fa-check-circle"></i> Commercial Real Estate</li>
                                    <li><i className="fas fa-check-circle"></i> Property Management</li>
                                    <li><i className="fas fa-check-circle"></i> Investment Advisory</li>
                                </ul>

                                <div className="proty-side-img-box">
                                    <img src={sideImg} alt="Side house" />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="proty-services-section">
                    <div className="container text-center">

                        <h2 className={`proty-services-heading ${protyAnimate ? "proty-show" : ""}`}>
                            Have a look at our services
                        </h2>

                        <p className={`proty-services-subheading ${protyAnimate ? "proty-show" : ""}`}>
                            Our vision is to be the premier real estate company recognized for excellence,
                            innovation, and lasting value for our clients and communities.
                        </p>

                        <div className="row justify-content-center mt-5">
                            {protyServicesData.map((item, index) => (
                                <div className="col-lg-4 col-md-6 mb-4" key={index}>
                                    <div className={`proty-service-card ${protyAnimate ? "proty-show" : ""}`}>

                                        <div className="proty-service-icon">
                                            <i className={`fa-solid ${item.icon}`}></i>
                                        </div>

                                        <div className="proty-service-image">
                                            <img src={item.image} alt={item.title} />
                                        </div>

                                        <h5 className="proty-service-title">{item.title}</h5>
                                        <p className="proty-service-text">{item.desc}</p>

                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="proty-services-btn mt-4">
                            View all services <i className="fa-solid fa-arrow-right ms-2"></i>
                        </button>

                    </div>
                </section>

                <section className="home6-section">
                    <div className="container">

                        <div className="home6-header text-center">
                            <h2>Discovery our Latest Projects</h2>
                            <p>
                                We are proud to present our recently completed projects, each
                                meticulously crafted with exceptional quality and attention to
                                detail, setting new standards for modern living
                            </p>
                        </div>

                        <div className="home6-grid-fixed">

                            <div className="card card-1"><img src={p1} /><Overlay id="01" title="Accy apartment for rent" /></div>
                            <div className="card card-2"><img src={p2} /><Overlay id="02" title="Mirror house sudd" /></div>
                            <div className="card card-3"><img src={p3} /><Overlay id="03" title="Aruna grandview residences at sinar valley" /></div>
                            <div className="card card-4"><img src={p4} /><Overlay id="04" title="Whispering pines lakeview estate" /></div>
                            <div className="card card-5"><img src={p5} /><Overlay id="05" title="Gorgeous Apartment Building" /></div>

                            <div className="card card-6"><img src={p6} /><Overlay id="06" title="Whispering pines lakeview estate" /></div>
                            <div className="card card-7"><img src={p7} /><Overlay id="07" title="Golden valley hillside retreat" /></div>
                            <div className="card card-8"><img src={p8} /><Overlay id="08" title="Seaside breeze luxury residence" /></div>

                            <div className="home6-cta-card">
                                <i className="fa-solid fa-location-dot"></i>
                                <h5>PROTY</h5>
                                <p>
                                    Discover our wide selection of properties and find the one that
                                    suits you best
                                </p>
                                <button>
                                    View all project <i className="fa-solid fa-arrow-right"></i>
                                </button>
                            </div>

                            <div className="card card-9"><img src={p9} /><Overlay id="09" title="Reverbend grove country villa" /></div>
                            <div className="card card-10"><img src={p10} /><Overlay id="10" title="Seaside breeze luxury residence" /></div>
                            <div className="card card-11"><img src={p11} /><Overlay id="11" title="Accy apartment for rent" /></div>
                            <div className="card card-12"><img src={p12} /><Overlay id="12" title="Gorgeous Apartment Building" /></div>

                        </div>
                    </div>
                </section>

                <section className="home6-agents-section">
                    <div className="container">
                        <p className="home6-agents-text text-center">
                            Our vision is to be the premier real estate company in New York,
                            recognized for our unwavering commitment to excellence, innovation,
                            and community impact.
                        </p>

                        <div className="row justify-content-center mt-5">
                            {agents.map((agent, index) => (
                                <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
                                    <div className="home6-agent-card">
                                        <div className="home6-agent-img">
                                            <img src={agent.img} alt="agent" />

                                            <div className="home6-agent-social">
                                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a href="#"><i className="fab fa-x-twitter"></i></a>
                                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                                <a href="#"><i className="fab fa-instagram"></i></a>
                                            </div>
                                        </div>

                                        <div className="home6-agent-info">
                                            <h5>{agent.name}</h5>
                                            <p>{agent.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-4">
                            <button className="home6-view-btn">
                                View all services <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </section>

                <section className="home6-testimonial-section">
                    <div className="container text-center">
                        <h2 className="home6-testimonial-title">
                            What our customers says
                        </h2>

                        <p className="home6-testimonial-subtitle">
                            Our vision is to be the premier real estate company in New York,
                            recognized for our unwavering commitment to excellence, innovation,
                            and community impact.
                        </p>

                        <div className="home6-testimonial-wrapper">
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
                                        className={`home6-testimonial-card ${position}`}
                                        key={index}
                                    >
                                        <p className="home6-testimonial-text">{item.text}</p>

                                        <div className="home6-testimonial-user">
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

                        <div className="home6-testimonial-dots">
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

                <section className="logo-section container" style={{ backgroundColor: "" }}>
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


                <section className="insight-section" style={{ backgroundColor: "#1c1f24" }}>
                    <div className="container">
                        <div className="text-center mb-5">
                            <h2 className="section-title" style={{ color: "#fff" }}>Insight & Opinion</h2>
                            <p className="section-subtitle" style={{ color: "#fff" }}>
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
                                                <i className="fa-regular fa-clock" style={{ color: "#fff" }}></i>
                                                <span style={{ color: "#fff" }}>{blog.date}</span>
                                            </div>

                                            <h4 style={{ color: "#fff" }}>{blog.title}</h4>

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

                <section className="git-section">
                    <div className="container">
                        <div className="row align-items-center g-5">

                            <div className="col-lg-6">
                                <h2 className="git-title">Get In Touch</h2>
                                <p className="git-desc">
                                    Estimate your payment with our easy-to-use loan calculator.
                                    Then get pre-qualified to buy by a local lender.
                                </p>

                                <div className="git-info">
                                    <div className="git-info-item">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <div>
                                            <span>Office address</span>
                                            <p>102 Ingraham St, Brooklyn, NY 11237</p>
                                        </div>
                                    </div>

                                    <div className="git-info-item">
                                        <i className="fas fa-phone-alt"></i>
                                        <div>
                                            <span>Office address</span>
                                            <p className="git-phone">(603) 555-0123</p>
                                        </div>
                                    </div>

                                    <div className="git-info-item">
                                        <i className="fas fa-envelope"></i>
                                        <div>
                                            <span>Email us</span>
                                            <p className="git-email">themesflat@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT FORM */}
                            <div className="col-lg-6">
                                <div className="git-form-box">
                                    <h4>Request a call back</h4>
                                    <p>
                                        We'll get to know you to understand your selling goals,
                                        explain the selling process so you know what to expect.
                                    </p>

                                    <form>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <input
                                                    type="text"
                                                    className="form-control git-input"
                                                    placeholder="Your name"
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <input
                                                    type="email"
                                                    className="form-control git-input"
                                                    placeholder="Email"
                                                />
                                            </div>
                                            <div className="col-12">
                                                <input
                                                    type="text"
                                                    className="form-control git-input"
                                                    placeholder="Your phone number"
                                                />
                                            </div>
                                            <div className="col-12">
                                                <textarea
                                                    rows="4"
                                                    className="form-control git-input"
                                                    placeholder="Your message"
                                                ></textarea>
                                            </div>
                                            <div className="col-12">
                                                <button className="git-btn">
                                                    Contact our experts <i className="fas fa-arrow-right"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>

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
            </div>
        </>
    )
}

const Overlay = ({ id, title }) => (
    <div className="card-overlay">
        <span>{id}</span>
        <h6>{title}</h6>
        <div className="card-icon">
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </div>
    </div>
);
