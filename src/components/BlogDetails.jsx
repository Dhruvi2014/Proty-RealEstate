import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Style.css";
import blogImg from "../assets/blog-grid-1.jpg";
import userImg from "../assets/blog-grid-1.jpg";

import listing1 from "../assets/listing1.jpg";
import listing2 from "../assets/listing2.jpg";
import listing3 from "../assets/listing3.jpg";
import gridImg from "../assets/img1.jpg";

import bloggrid1 from "../assets/blog-grid-1.jpg";
import bloggrid2 from "../assets/blog-grid-2.jpg";
import bloggrid3 from "../assets/blog-grid-3.jpg";

import footerImg from "../assets/footerImg.png";
import logo from "../assets/logo2.png";

const BlogDetails = () => {
    const { id } = useParams();

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
            <section className="blog-details py-5">
                <div className="breadcrumb-wrapper py-3">
                    <div className="container">
                        <div className="breadcrumb">
                            <Link to="/" className="breadcrumb-home">Home</Link>
                            <span className="separator">›</span>
                            <span className="breadcrumb-current">Property Listing</span>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">

                        <div className="col-lg-8">
                            <h1 className="blog-title">
                                Building gains into housing stocks and how to trade the sector
                            </h1>

                            <div className="meta d-flex align-items-center gap-3 mb-3">
                                <span><i className="fa-regular fa-user"></i> Kathryn Murphy</span>
                                <span><i className="fa-regular fa-folder"></i> Furniture</span>
                                <span><i className="fa-regular fa-calendar"></i> 26 August, 2024</span>
                            </div>

                            <img src={blogImg} className="img-fluid rounded mb-4" alt="blog" />

                            <p>
                                The housing sector has long been a focal point for investors seeking
                                stability and growth. Understanding the dynamics of housing stocks
                                and effectively trading within this sector can lead to substantial gains.
                            </p>

                            <blockquote>
                                “Lower rates can boost homebuying activity, benefiting housing stocks,
                                while higher rates may have the opposite effect.”

                                <br></br>
                                <b>said Mike Fratantoni, MBA’s chief economist.</b>
                            </blockquote>

                            <p>
                                Pay close attention to economic indicators such as employment rates,
                                GDP growth, and consumer confidence.
                            </p>


                            <div className="row g-4 mb-4">
                                <div className="col-md-6">
                                    <img src={listing1} className="img-fluid rounded-4 w-100" alt="" />
                                </div>
                                <div className="col-md-6">
                                    <img src={listing2} className="img-fluid rounded-4 w-100" alt="" />
                                </div>
                            </div>

                            <h2 className="content-title">Identify Emerging Trends</h2>

                            <p>
                                Stay informed about emerging trends in the housing market, such as
                                the demand for sustainable homes, technological advancements, and
                                demographic shifts. Companies aligning with these trends may present
                                attractive investment opportunities.
                            </p>

                            <p>
                                Take a long-term investment approach if you believe in the stability
                                and growth potential of the housing sector. Look for companies with
                                solid fundamentals and a track record of success.
                            </p>

                            <div className="tags-share d-flex flex-wrap justify-content-between align-items-center mt-4">
                                <div className="tags">
                                    <span>Tags:</span>
                                    <button>Personal</button>
                                    <button>Business</button>
                                </div>

                                <div className="share">
                                    <span>Share this post:</span>
                                    <i className="fab fa-facebook-f"></i>
                                    <i className="fab fa-x-twitter"></i>
                                    <i className="fab fa-linkedin-in"></i>
                                    <i className="fab fa-instagram"></i>
                                </div>
                            </div>

                            <hr className="my-5" />

                            <h4 className="mb-4">Comment (4)</h4>

                            <div className="comment-box">
                                <div className="d-flex gap-3">
                                    <img src={userImg} className="comment-avatar" alt="" />

                                    <div className="flex-grow-1">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6 className="mb-0">Viola Lucas</h6>
                                                <small>August 15, 2023</small>
                                            </div>

                                            <div className="rating">
                                                ★★★★★
                                            </div>
                                        </div>

                                        <p className="mt-2">
                                            It’s really easy to use and it is exactly what I am looking for.
                                            A lot of good looking templates & it’s highly customizable.
                                            Live support is helpful, solved my issue in no time.
                                        </p>

                                        <div className="comment-images">
                                            <img src={listing1} alt="" />
                                            <img src={listing2} alt="" />
                                            <img src={listing3} alt="" />
                                        </div>

                                        <div className="comment-actions">
                                            <span><i className="far fa-thumbs-up"></i> Useful</span>
                                            <span><i className="far fa-thumbs-down"></i> Not helpful</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="comment-box mt-4">
                                <div className="d-flex gap-3">
                                    <img src={userImg} className="comment-avatar" alt="" />

                                    <div className="flex-grow-1">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6 className="mb-0">Viola Lucas</h6>
                                                <small>August 15, 2023</small>
                                            </div>

                                            <div className="rating">
                                                ★★★★★
                                            </div>
                                        </div>

                                        <p className="mt-2">
                                            It’s really easy to use and it is exactly what I am looking for.
                                            A lot of good looking templates & it’s highly customizable.
                                            Live support is helpful, solved my issue in no time.
                                        </p>


                                        <div className="comment-actions">
                                            <span><i className="far fa-thumbs-up"></i> Useful</span>
                                            <span><i className="far fa-thumbs-down"></i> Not helpful</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="comment-box mt-4">
                                <div className="d-flex gap-3">
                                    <img src={userImg} className="comment-avatar" alt="" />

                                    <div className="flex-grow-1">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6 className="mb-0">Viola Lucas</h6>
                                                <small>August 15, 2023</small>
                                            </div>

                                            <div className="rating">
                                                ★★★★★
                                            </div>
                                        </div>

                                        <p className="mt-2">
                                            It’s really easy to use and it is exactly what I am looking for.
                                            A lot of good looking templates & it’s highly customizable.
                                            Live support is helpful, solved my issue in no time.
                                        </p>


                                        <div className="comment-actions">
                                            <span><i className="far fa-thumbs-up"></i> Useful</span>
                                            <span><i className="far fa-thumbs-down"></i> Not helpful</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <button className="cmt-btn">
                                View All Comments
                            </button>

                            <div className="comment-form-wrapper">
                                <h2>Leave A Comment</h2>
                                <p className="subtitle">
                                    Your email address will not be published. Required fields are marked *
                                </p>

                                <form>
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <label>Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Your Name*"
                                            />
                                        </div>

                                        <div className="col-md-6 mb-4">
                                            <label>Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Your Email*"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-3 d-flex align-items-center gap-2">
                                        <input type="checkbox" className="form-check-input" />
                                        <span>Save your name, email for the next time review</span>
                                    </div>

                                    <div className="mb-4">
                                        <label>Comment</label>
                                        <textarea
                                            className="form-control"
                                            rows="5"
                                            placeholder="Your comment"
                                        ></textarea>
                                    </div>

                                    <button className="btn post-btn">
                                        Post Comment
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="sidebar-box">
                                <h5>Search Blog</h5>
                                <input type="text" className="form-control" placeholder="Search" />
                            </div>

                            <div className="sidebar-box">
                                <h5>Categories</h5>
                                <ul>
                                    <li>Market Updates (50)</li>
                                    <li>Buying Tips (69)</li>
                                    <li>Interior Inspiration (69)</li>
                                    <li>Investment Insights (25)</li>
                                    <li>Home Construction (12)</li>
                                </ul>
                            </div>

                            <div className="sidebar-box featured">
                                <h5>Featured Listings</h5>
                                <div className="featured-item">
                                    <img src={listing1} alt="" />
                                    <div>
                                        <p>Key Real Estate Trends to Watch in 2024</p>
                                        <span><i className="fa-regular fa-calendar"></i>Feb 16, 2024</span>
                                    </div>
                                </div>
                                <br></br><hr></hr>
                                <div className="featured-item">
                                    <img src={listing2} alt="" />
                                    <div>
                                        <p>Key Real Estate Trends to Watch in 2024</p>
                                        <span><i class="fa-regular fa-calendar"></i>Feb 16, 2024</span>
                                    </div>
                                </div>
                                <br></br><hr></hr>
                                <div className="featured-item">
                                    <img src={listing3} alt="" />
                                    <div>
                                        <p>Key Real Estate Trends to Watch in 2024</p>
                                        <span><i class="fa-regular fa-calendar"></i>Feb 16, 2024</span>
                                    </div>
                                </div>
                            </div>

                            <div className="sidebar-box newsletter-box mb-4">
                                <h4>Join Our Newsletter</h4>
                                <p>
                                    Signup to be the first to hear about exclusive deals, special offers
                                    and upcoming collections
                                </p>

                                <div className="newsletter-input">
                                    <input type="text" placeholder="Search" />
                                    <button>
                                        <i className="fas fa-paper-plane"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="sidebar-box tags-box">
                                <h4>Popular Tags</h4>

                                <div className="tags-list">
                                    <span>Property</span>
                                    <span>Office</span>
                                    <span>Finance</span>
                                    <span>Legal</span>
                                    <span>Market</span>
                                    <span>Invest</span>
                                    <span>Renovate</span>
                                </div>
                            </div>

                            <div
                                className="sidebar-box agent-card"
                                style={{ backgroundImage: `url(${gridImg})` }}
                            >
                                <h3>We can help you find a local real estate agent</h3>
                                <p>
                                    Connect with a trusted agent who knows the market inside out –
                                    whether you’re buying or selling.
                                </p>
                                <button className="btn btn-warning w-100">
                                    Connect with an agent
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

            <div className="container">
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

            <div className="footer-cta">
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
                            <div className="cta-search">
                                <input type="text" placeholder="Find your location agent" />
                                <i className="fas fa-search"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <div className="container">
                    <div className="footer-top d-flex flex-column flex-md-row justify-content-between align-items-center">
                        <div className="footer-logo">
                            <img src={logo} alt="logo" />
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

export default BlogDetails;
