import React from 'react';
import "./products.css"

import product_s2_1 from "../../assets/img/DGH_232.jpg"
import product_s2_2 from "../../assets/img/DGH_48.jpg"
import product_s2_3 from "../../assets/img/DGH_8.jpg"
import product_s2_4 from "../../assets/img/DGH_77.jpg"
import product_s2_5 from "../../assets/img/DGH_59.jpg"
import product_s2_6 from "../../assets/img/DGH_52.jpg"
import product_s2_7 from "../../assets/img/DGH_152.jpg"
import product_s2_8 from "../../assets/img/DGH_166.jpg"
import product_s2_9 from "../../assets/img/DGH_70.jpg"
import product_s2_10 from "../../assets/img/DGH_227.jpg"

import product_slide_1 from "../../assets/img/150A0773.jpg"
import product_slide_2 from "../../assets/img/150A0791.jpg"
import product_slide_3 from "../../assets/img/150A0878.jpg"

import success from "../../assets/icon/success.png"
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";

import home_header_1 from "../../assets/img/DGH_86.jpg";
import home_header_2 from "../../assets/header/DGH_145.jpg";
import home_header_3 from "../../assets/header/150A0757.jpg";
import home_header_4 from "../../assets/header/150A0765.jpg";

import {CONTACT} from "../../utils/const.jsx";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Products = () => {
    const {t} = useTranslation()
    return (
        <>
            <div className="Home">
                <span className={"opacity_container"}></span>
                <div className="home_box container">
                    <h1 data-aos="fade-up">{t("products.products_header_title")}</h1>
                </div>
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={home_header_1} alt=""/></SwiperSlide>
                    <SwiperSlide><img src={home_header_2} alt=""/></SwiperSlide>
                    <SwiperSlide><img src={home_header_3} alt=""/></SwiperSlide>
                    <SwiperSlide><img src={home_header_4} alt=""/></SwiperSlide>
                </Swiper>
            </div>

            <div className="container">
                <section className="about_s3 product_s1">
                    <div className="row justify-content-between ">
                        <div className="col-lg-6 about_s3_left" data-aos="fade-up">
                            <h3><span></span> {t("products.product_s1.subtitle")}</h3>
                            <h2>{t("products.product_s1.title")}</h2>
                        </div>
                        <div className="col-lg-6 about_s3_right" data-aos="fade-up">
                            <p> {t("products.product_s1.description")}
                                <ul>
                                    <li><img src={success} alt=""/> {t("products.product_s1.desc_item_1")}</li>
                                    <li><img src={success} alt=""/>{t("products.product_s1.desc_item_2")} </li>
                                    <li><img src={success} alt=""/>{t("products.product_s1.desc_item_3")}</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <section className=" product_s2  container">
                <div className="product_s2_box container">
                    <div className="product_s2_box_right">
                        <img src={product_s2_1} alt=""/>
                        <span className="product_s2_box_opacity"></span>
                        <div className="product_s2_box_text">
                            <h3 dangerouslySetInnerHTML={{__html:t("products.product_s2.item_1.title")}}></h3>
                            <p dangerouslySetInnerHTML={{__html:t("products.product_s2.item_1.desc")}}></p>
                        </div>
                    </div>
                    <div className="product_s2_box_left">
                        <div className="product_s2_box_left_top">
                            <div className="product_s2_box_left_item">
                                <img src={product_s2_2} alt=""/>
                                <span className="product_s2_box_opacity"></span>
                                <div className="product_s2_box_text">
                                    <h3 dangerouslySetInnerHTML={{__html:t("products.product_s2.item_2.title")}}></h3>
                                    <p dangerouslySetInnerHTML={{__html:t("products.product_s2.item_2.desc")}}></p>
                                </div>
                            </div>
                            <div className="product_s2_box_left_item">
                                <img src={product_s2_3} alt=""/>
                                <span className="product_s2_box_opacity"></span>
                                <div className="product_s2_box_text">
                                    <h3 dangerouslySetInnerHTML={{__html:t("products.product_s2.item_3.title")}}></h3>
                                    <p dangerouslySetInnerHTML={{__html:t("products.product_s2.item_3.desc")}}></p>
                                </div>
                            </div>
                        </div>
                        <div className="product_s2_box_left_bottom">
                            <div className="product_s2_box_left_item">
                                <img src={product_s2_4} alt=""/>
                                <span className="product_s2_box_opacity"></span>
                                <div className="product_s2_box_text">
                                    <h3 dangerouslySetInnerHTML={{__html:t("products.product_s2.item_4.title")}}></h3>
                                    <p dangerouslySetInnerHTML={{__html:t("products.product_s2.item_4.desc")}}></p>
                                </div>
                            </div>
                            <div className="product_s2_box_left_item">
                                <img src={product_s2_5} alt=""/>
                                <span className="product_s2_box_opacity"></span>
                                <div className="product_s2_box_text">
                                    <h3 dangerouslySetInnerHTML={{__html:t("products.product_s2.item_5.title")}}></h3>
                                    <p dangerouslySetInnerHTML={{__html:t("products.product_s2.item_5.desc")}}></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product_s2_box container">
                    <div className="product_s2_box_left">
                        <div className="product_s2_box_left_top">
                            <div className="product_s2_box_left_item">
                                <img src={product_s2_6} alt=""/>
                                <span className="product_s2_box_opacity"></span>
                                <div className="product_s2_box_text">
                                    <h3 dangerouslySetInnerHTML={{__html:t("products.product_s2.item_6.title")}}></h3>
                                    <p dangerouslySetInnerHTML={{__html:t("products.product_s2.item_6.desc")}}></p>
                                </div>
                            </div>
                            <div className="product_s2_box_left_item">
                                <img src={product_s2_7} alt=""/>
                                <span className="product_s2_box_opacity"></span>
                                <div className="product_s2_box_text">
                                    <h3 dangerouslySetInnerHTML={{__html:t("products.product_s2.item_7.title")}}></h3>
                                    <p dangerouslySetInnerHTML={{__html:t("products.product_s2.item_7.desc")}}></p>
                                </div>
                            </div>
                        </div>
                        <div className="product_s2_box_left_bottom">
                            <div className="product_s2_box_left_item">
                                <img src={product_s2_8} alt=""/>
                                <span className="product_s2_box_opacity"></span>
                                <div className="product_s2_box_text">
                                    <h3 dangerouslySetInnerHTML={{__html:t("products.product_s2.item_8.title")}}></h3>
                                    <p dangerouslySetInnerHTML={{__html:t("products.product_s2.item_8.desc")}}></p>
                                </div>
                            </div>
                            <div className="product_s2_box_left_item">
                                <img src={product_s2_9} alt=""/>
                                <span className="product_s2_box_opacity"></span>
                                <div className="product_s2_box_text">
                                    <h3 dangerouslySetInnerHTML={{__html:t("products.product_s2.item_9.title")}}></h3>
                                    <p dangerouslySetInnerHTML={{__html:t("products.product_s2.item_9.desc")}}></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product_s2_box_right">
                        <img src={product_s2_10} alt=""/>
                        <span className="product_s2_box_opacity"></span>
                        <div className="product_s2_box_text">
                            <h3 dangerouslySetInnerHTML={{__html:t("products.product_s2.item_10.title")}}></h3>
                            <p dangerouslySetInnerHTML={{__html:t("products.product_s2.item_10.desc")}}></p>
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
                                    <img className="d-block w-100" src={product_slide_1} alt="First slide"/>
                                    <span className="slide_opacity"></span>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={product_slide_2} alt="Second slide"/>
                                    <span className="slide_opacity"></span>

                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={product_slide_3} alt="Third slide"/>
                                    <span className="slide_opacity"></span>
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
                            <h1>{t("products.product_s3.title")}</h1>
                            <p>{t("products.product_s3.subtitle")}</p>
                            <Link to={CONTACT}>{t("products.product_s3.btn")}</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Products;