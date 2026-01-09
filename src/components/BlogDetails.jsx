import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Style.css";
import blogImg from "../assets/blog-grid-1.jpg";
import userImg from "../assets/blog-grid-1.jpg";

import listing1 from "../assets/listing1.jpg";
import listing2 from "../assets/listing2.jpg";
import listing3 from "../assets/listing3.jpg";


const BlogDetails = () => {
    const { id } = useParams();

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
                                        <span><i class="fa-regular fa-calendar"></i>Feb 16, 2024</span>
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

                            <div className="agent-card">
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






        </>
    );
};

export default BlogDetails;
