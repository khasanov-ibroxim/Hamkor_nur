import React from 'react';
import "./production.css"
import {useParams} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import home_header_1 from "../../assets/img/150A0745.webp";
import home_header_2 from "../../assets/img/150A0882.webp";
import home_header_3 from "../../assets/img/150A0704.webp";
import home_s5_1 from "../../assets/img/150A0757.webp";
import home_s5_2 from "../../assets/img/150A0765.webp";
import home_s5 from "../../assets/img/150A1873.webp";
import success from "../../assets/icon/success.png";

const Production = () => {
    const {id} = useParams();
    return (
        <div>
            <div className="Home">
                <span className={"opacity_container"}></span>
                <div className="home_box container">
                    <h1 data-aos="fade-up">производство</h1>
                </div>
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={home_header_1} alt=""/></SwiperSlide>
                    <SwiperSlide><img src={home_header_2} alt=""/></SwiperSlide>
                    <SwiperSlide><img src={home_header_3} alt=""/></SwiperSlide>
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
                                    <h1>Recycle Rubbish becoming crafts</h1>
                                    <span></span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Lectus arcu ben dum at varius. Ut
                                    porttitor leo a diam. Pe na tibus et magnis dis. Ut enim ad minim veniam, quis no
                                    strud ex ercitation ullamco laboris nisi ut aliquip ex ea commodo con sequat.

                                </p>
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
                            <h1>We help you design the life you want.</h1>
                        </div>
                        <div className="col-lg-6 production_s3_item">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id ex nec urna ullamcorper
                                pretium vitae id leo. Proin a est vestibulum, gravida nunc sed, sagittis leo. Fusce
                                ornare ipsum quis tellus varius, et lacinia elit viverra. Proin at ante lorem.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="production_s4 container">
                <section className="home_section5 overflow-hidden production_s4_item">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6" data-aos="fade-right">
                            <img src={home_s5} alt=""/>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left">
                            <div className="home_section5_text">
                                <div className="home_section5_text_title">
                                    <h1>We create Handcrafted Accesories</h1>
                                    <span></span>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="home_section5 overflow-hidden production_s4_item">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6" data-aos="fade-left">
                            <div className="home_section5_text">
                                <div className="home_section5_text_title">
                                    <h1>We create Handcrafted Accesories</h1>
                                    <span></span>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-right">
                            <img src={home_s5} alt=""/>
                        </div>
                    </div>
                </section>
                <section className="home_section5 overflow-hidden production_s4_item">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6" data-aos="fade-right">
                            <img src={home_s5} alt=""/>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left">
                            <div className="home_section5_text">
                                <div className="home_section5_text_title">
                                    <h1>We create Handcrafted Accesories</h1>
                                    <span></span>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Production;