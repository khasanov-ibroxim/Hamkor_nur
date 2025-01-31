import React from 'react';
import "./production.css"
import {useParams} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import home_header_1 from "../../assets/update/150A7077.jpg";
import home_header_2 from "../../assets/header/150A1905.jpg";
import home_header_3 from "../../assets/img/home_s3_3.jpg";
import home_header_4 from "../../assets/update/150A7036_full.jpg";
import home_s5_1 from "../../assets/img/150A0757.jpg";
import home_s5_2 from "../../assets/img/150A0765.jpg";

import home_s3_1 from "../../assets/img/natural-leather-animal-fur-texture.jpg"
import home_s3_2 from "../../assets/img/150A1861.jpg"
import home_s3_3 from "../../assets/img/home_s3_3.jpg"
import home_s3_4 from "../../assets/update/150A7036.jpg"
import home_s3_5 from "../../assets/update/photo_2025-01-25_11-32-35.jpg"
import home_s3_6 from "../../assets/img/150A1934.jpg"
import {useTranslation} from "react-i18next";

const Production = () => {
    const {id} = useParams();
    const {t} = useTranslation();
    return (
        <div>
            <div className="Home">
                <span className={"opacity_container"}></span>
                <div className="home_box container">
                    <h1 data-aos="fade-up">{t("production.production_header_title")}</h1>
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

            <div className="container mt-5 d-flex justify-content-center align-items-center overflow-hidden">
                <div className="home_section6">
                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-right">
                            <img src={home_s5_1} alt=""/>
                        </div>
                        <div className="col-lg-4" data-aos="fade-up">
                            <div className="home_section6_text">
                                <div
                                    className="home_section5_text_title justify-content-center align-items-center text-center">
                                    <h1>{t("production.production_s2.title")}</h1>
                                    <span></span>
                                </div>
                                <p>{t("production.production_s2.description")}</p>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="fade-left">
                            <img src={home_s5_2} alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="production_s3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1>{t("production.production_s3.left")}</h1>
                        </div>
                        <div className="col-lg-6 production_s3_item">
                            <p>{t("production.production_s3.right")}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="production_s4 container">
                <section className="home_section5 overflow-hidden production_s4_item">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6" data-aos="fade-right">
                            <img src={home_s3_1} alt=""/>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left">
                            <div className="home_section5_text">
                                <div className="home_section5_text_title">
                                    <h1>{t("production.production_s4.item_1.title")}</h1>
                                    <span></span>
                                </div>
                                <p>{t("production.production_s4.item_1.info")}</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="home_section5 overflow-hidden production_s4_item">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6" data-aos="fade-left">
                            <div className="home_section5_text">
                                <div className="home_section5_text_title">
                                    <h1>{t("production.production_s4.item_2.title")}</h1>
                                    <span></span>
                                </div>
                                <p>{t("production.production_s4.item_2.info")}</p>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-right">
                            <img src={home_s3_3} alt=""/>
                        </div>
                    </div>
                </section>
                <section className="home_section5 overflow-hidden production_s4_item">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6" data-aos="fade-right">
                            <img src={home_s3_5} alt=""/>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left">
                            <div className="home_section5_text">
                                <div className="home_section5_text_title">
                                    <h1>{t("production.production_s4.item_3.title")}</h1>
                                    <span></span>
                                </div>
                                <p>{t("production.production_s4.item_3.info")}</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="home_section5 overflow-hidden production_s4_item">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6" data-aos="fade-left">
                            <div className="home_section5_text">
                                <div className="home_section5_text_title">
                                    <h1>{t("production.production_s4.item_4.title")} </h1>
                                    <span></span>
                                </div>
                                <p>{t("production.production_s4.item_4.info")}</p>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-right">
                            <img src={home_s3_2} alt=""/>
                        </div>
                    </div>
                </section>
                <section className="home_section5 overflow-hidden production_s4_item">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6" data-aos="fade-right">
                            <img src={home_s3_4} alt=""/>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left">
                            <div className="home_section5_text">
                                <div className="home_section5_text_title">
                                    <h1>{t("production.production_s4.item_5.title")}</h1>
                                    <span></span>
                                </div>
                                <p>{t("production.production_s4.item_5.info")}</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="home_section5 overflow-hidden production_s4_item">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6" data-aos="fade-left">
                            <div className="home_section5_text">
                                <div className="home_section5_text_title">
                                    <h1>{t("production.production_s4.item_6.title")}</h1>
                                    <span></span>
                                </div>
                                <p>{t("production.production_s4.item_6.info")}</p>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-right">
                            <img src={home_s3_6} alt=""/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Production;