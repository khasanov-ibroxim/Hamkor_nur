import React from 'react';
import "./products.css"

import product_s2_1 from "../../assets/products/product_s2_1.webp"
import product_s2_2 from "../../assets/products/product_s2_2.webp"
import product_s2_3 from "../../assets/products/product_s2_3.webp"
import product_s2_4 from "../../assets/products/product_s2_4.webp"
import product_s2_5 from "../../assets/products/product_s2_5.webp"
import product_s2_6 from "../../assets/products/product_s2_6.webp"
import product_s2_7 from "../../assets/products/product_s2_7.webp"
import product_s2_8 from "../../assets/products/product_s2_8.webp"
import product_s2_9 from "../../assets/products/product_s2_9.webp"
import product_s2_10 from "../../assets/products/product_s2_10.webp"


const Products = () => {

    return (
        <>
            <section className="product_header">
                <span className="opacity_about"></span>
                <div className="about_header_text">
                    <h1>ПРОДУКЦИЯ</h1>
                </div>
            </section>

            <div className="container">
                <section className="about_s3 product_s1">
                    <div className="row justify-content-between ">
                        <div className="col-lg-6 about_s3_left" data-aos="fade-up">
                            <h3><span></span> Превосходство в качестве и эстетике</h3>
                            <h2>ВЕТ-БЛЮ КРАСТ ФИНИШНАЯ КОЖА</h2>
                        </div>
                        <div className="col-lg-6 about_s3_right" data-aos="fade-up">
                            <p> Это типы кожи или виды кожаной продукции, которые различаются по методам обработки и
                                свойствам. Все эти термины относятся к разным этапам и разновидностям кожевенного
                                производства:
                                <ul>
                                    <li>Вет-Блю — кожа, полученная от молодых животных, часто используется в
                                        производстве высококачественных изделий.
                                    </li>
                                    <li>Краст — кожа, прошедшая начальную обработку дублением, но ещё не подвергшаяся
                                        финишной отделки
                                    </li>
                                    <li>
                                        Финишная обработка кожи — это заключительный этап обработки кожи после дубления
                                        (краст), в ходе которого ей придается окончательный вид, прочность и
                                        эстетические характеристики.
                                    </li>
                                </ul>
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
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel"
                             data-bs-interval="3000">
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