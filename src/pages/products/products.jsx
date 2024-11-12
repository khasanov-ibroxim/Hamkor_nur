import React from 'react';
import "./products.css"

import product_s2_1 from "../../assets/imgs/products/product_s2_1.png"
import product_s2_2 from "../../assets/imgs/products/product_s2_2.png"
import product_s2_3 from "../../assets/imgs/products/product_s2_3.png"
import product_s2_4 from "../../assets/imgs/products/product_s2_4.png"
import product_s2_5 from "../../assets/imgs/products/product_s2_5.png"
import product_s2_6 from "../../assets/imgs/products/product_s2_6.png"
import product_s2_7 from "../../assets/imgs/products/product_s2_7.png"
import product_s2_8 from "../../assets/imgs/products/product_s2_8.png"
import product_s2_9 from "../../assets/imgs/products/product_s2_9.png"
import product_s2_10 from "../../assets/imgs/products/product_s2_10.png"


const Products = () => {

    return (
        <>
            <section className="product_header">
                <span className="opacity_about"></span>
                <div className="about_header_text">
                    <h1>Products</h1>
                </div>
            </section>

            <div className="container">
                <section className="about_s3 product_s1">
                    <div className="row justify-content-between ">
                        <div className="col-lg-6 about_s3_left" data-aos="fade-up">
                            <h3><span></span> Craft Presentation</h3>
                            <h2>Our Products Recycle Craft</h2>
                        </div>
                        <div className="col-lg-6 about_s3_right" data-aos="fade-up">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum. Aenean at facilisis diam. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <section className=" product_s2">
                <div className="product_s2_box">
                    <div className="product_s2_box_right">
                        <img src={product_s2_1} alt=""/>
                        <span className="product_s2_box_opacity"></span>
                        <div className="product_s2_box_text">
                            <h3>Fashion Clothing</h3>
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                    </div>
                    <div className="product_s2_box_left">
                        <div className="product_s2_box_left_top">
                            <div className="product_s2_box_left_item">
                                <img src={product_s2_2} alt=""/>
                                <span className="product_s2_box_opacity"></span>
                                <div className="product_s2_box_text">
                                    <h3>Jewellery</h3>
                                    <p>Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                            <div className="product_s2_box_left_item">
                                <img src={product_s2_3} alt=""/>
                                <span className="product_s2_box_opacity"></span>
                                <div className="product_s2_box_text">
                                    <h3>Ceramics</h3>
                                    <p>Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                        </div>
                        <div className="product_s2_box_left_bottom">
                            <div className="product_s2_box_left_item">
                                <img src={product_s2_4} alt=""/>
                                <span className="product_s2_box_opacity"></span>
                                <div className="product_s2_box_text">
                                    <h3>Furniture</h3>
                                    <p>Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                            <div className="product_s2_box_left_item">
                                <img src={product_s2_5} alt=""/>
                                <span className="product_s2_box_opacity"></span>
                                <div className="product_s2_box_text">
                                    <h3>Home Decor</h3>
                                    <p>Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product_s2_box">
                    <div className="product_s2_box_left">
                        <div className="product_s2_box_left_top">
                            <div className="product_s2_box_left_item">
                                <img src={product_s2_6} alt=""/>
                                <span className="product_s2_box_opacity"></span>
                                <div className="product_s2_box_text">
                                    <h3>Leather Craft</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur</p>
                                </div>
                            </div>
                            <div className="product_s2_box_left_item">
                                <img src={product_s2_7} alt=""/>
                                <span className="product_s2_box_opacity"></span>
                                <div className="product_s2_box_text">
                                    <h3>Woven Craft</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur</p>
                                </div>
                            </div>
                        </div>
                        <div className="product_s2_box_left_bottom">
                            <div className="product_s2_box_left_item">
                                <img src={product_s2_8} alt=""/>
                                <span className="product_s2_box_opacity"></span>
                                <div className="product_s2_box_text">
                                    <h3>Sculpturing</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur</p>
                                </div>
                            </div>
                            <div className="product_s2_box_left_item">
                                <img src={product_s2_9} alt=""/>
                                <span className="product_s2_box_opacity"></span>
                                <div className="product_s2_box_text">
                                    <h3>Clay Craft</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product_s2_box_right">
                        <img src={product_s2_10} alt=""/>
                        <span className="product_s2_box_opacity"></span>
                        <div className="product_s2_box_text">
                            <h3>Accesories</h3>
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                    </div>

                </div>
            </section>

            <section className="product_s3 container">
                <div className="row">
                    <div className="col-lg-6" data-aos="fade-left">
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel"  data-bs-interval="3000">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0"
                                        className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1"
                                        aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2"
                                        aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={product_s2_1} alt="First slide"/>
                                    <span className="slide_opacity"></span>
                                    <div className="slide_text">
                                        <h1>Custom Painting</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={product_s2_2} alt="Second slide"/>
                                    <span className="slide_opacity"></span>
                                    <div className="slide_text">
                                        <h1>Custom Painting</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={product_s2_3} alt="Third slide"/>
                                    <span className="slide_opacity"></span>
                                    <div className="slide_text">
                                        <h1>Custom Painting</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                                    </div>
                                </div>
                            </div>

                            <button className="carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>
                    <div className="col-lg-6" data-aos="fade-right">
                        <div className="product_s3_text">
                            <h1>Designed Experiences Made for Everybody’s Taste</h1>
                            <p>Tell us what you need and we will come back to you with a quote.</p>
                            <a href="#">Custom now</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Products;