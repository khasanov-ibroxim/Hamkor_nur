import React from 'react';
import "./home.css";
import home_s3_1 from "../../assets/img/natural-leather-animal-fur-texture.jpg"
import home_s3_2 from "../../assets/img/150A1861.jpg"
import home_s3_3 from "../../assets/img/home_s3_3.jpg"
import home_s3_4 from "../../assets/img/150A1786.jpg"
import home_s3_5 from "../../assets/img/150A1942.jpg"
import home_s3_6 from "../../assets/img/150A1934.jpg"

import home_s4_1 from "../../assets/icon/koja.png"
import home_s4_2 from "../../assets/icon/assartiment.png"
import home_s4_3 from "../../assets/icon/podxod.png"
import home_s4_4 from "../../assets/icon/eco.png"
import home_s4_5 from "../../assets/icon/opit.png"
import home_s4_6 from "../../assets/icon/reputatsiya.png"

import home_s5 from "../../assets/img/150A1795.jpg"
import home_header_1 from "../../assets/img/DGH_86.jpg"
import home_header_2 from "../../assets/img/DGH_232.jpg"
import home_header_3 from "../../assets/img/150A0704.jpg"

import success from "../../assets/icon/success.png"

import {Helmet} from "react-helmet-async";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import {Link} from "react-router-dom";
import {ArrowRightOutlined, EyeOutlined} from "@ant-design/icons";
import {Image} from "antd";
import {CONTACT, PRODUCTION} from "../../utils/const.jsx";
import {useTranslation} from "react-i18next";

const Home = () => {
    const {t} = useTranslation();

    return (
        <>
            <Helmet>
                {/* Sahifa sarlavhasi */}
                <title>HAMKOR NUR SAVDO - Мастера кожевенного ремесла</title>
                {/* Umumiy meta teglar */}
                <meta name="description"
                      content="HAMKOR NUR SAVDO — мастера кожевенного ремесла: от сырья до совершенства. Высокое качество, широкий ассортимент, экологичность и индивидуальный подход."/>
                <meta name="keywords"
                      content="кожа, кожевенное производство, Hamkor Nur Savdo, обработка кожи, дубление, краска, контроль качества"/>
                <meta name="author" content="HAMKOR NUR SAVDO"/>
            </Helmet>
            <div className="Home">
                <span className={"opacity_container"}></span>
                <div className="home_box container">
                    <h1 data-aos="fade-up">{t("home.home_header_title")}</h1>
                    <p data-aos="fade-up">{t("home.home_header_subtitle")}</p>
                    <Link to={CONTACT} data-aos="fade-up">{t("contact_us")}</Link>
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
                </Swiper>
            </div>
            <div className="container">
                <section className="home_section2">
                    <div className="row justify-content-between ">
                        <div className="col-lg-6 home_section2_left" data-aos="fade-up">
                            <h3><span></span> {t("home.home_s2.home_title")}</h3>
                            <h2>{t("home.home_s2.home_subtitle")}</h2>

                        </div>
                        <div className="col-lg-6 home_section2_right" data-aos="fade-up">
                            <h3>{t("home.home_s2.home_right_title")}</h3>
                            <p>{t("home.home_s2.home_info_1")}</p>
                            <p>{t("home.home_s2.home_info_2")}</p>
                        </div>
                    </div>
                </section>
            </div>
            <section className="home_section3">
                <div className="container">
                    <div className="home_section4_title" style={{marginBottom: "100px"}} data-aos="fade-up">
                        <h1>{t("home.home_s3.title")}</h1>
                        <span></span>
                    </div>
                    <div className="row  justify-content-around align-items-center">
                        <div className="col-lg-4">
                            <div className="home_section3_item" data-aos="fade-up">
                                <div className="home_section3_item_icon">
                                    <ArrowRightOutlined/>
                                </div>
                                <div className="home_section3_item_img">
                                    <Image src={home_s3_1} alt="ДОБЫЧА И ПОДГОТОВКА СЫРЬЯ"
                                           preview={{
                                               mask: <div className={"preview_box"}><EyeOutlined/> <span>{t("open_eye")}</span>
                                               </div>
                                           }}/>
                                </div>
                                <div className="home_section3_item_text">
                                    <h2>{t("home.home_s3.item_title_1")}</h2>
                                    <Link to={PRODUCTION}>{t("home.home_s3.btn")} <ArrowRightOutlined/></Link>
                                </div>
                            </div>
                            <div className="home_section3_item" data-aos="fade-up">
                                <div className="home_section3_item_icon">
                                    <ArrowRightOutlined/>
                                </div>
                                <div className="home_section3_item_img">
                                    <Image src={home_s3_2} alt="КРАСКА"
                                           preview={{
                                               mask: <div className={"preview_box"}><EyeOutlined/> <span>{t("open_eye")}</span>
                                               </div>
                                           }}
                                    />
                                </div>
                                <div className="home_section3_item_text">
                                    <h2>{t("home.home_s3.item_title_2")}</h2>

                                    <Link to={PRODUCTION}>{t("home.home_s3.btn")} <ArrowRightOutlined/></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="home_section3_item" data-aos="fade-up">
                                <div className="home_section3_item_icon">
                                    <ArrowRightOutlined/>
                                </div>
                                <div className="home_section3_item_img">
                                    <Image src={home_s3_3} alt="ДУБЛЕНИЕ"
                                           preview={{
                                               mask: <div className={"preview_box"}><EyeOutlined/> <span>{t("open_eye")}</span>
                                               </div>
                                           }}
                                    />
                                </div>
                                <div className="home_section3_item_text">
                                    <h2>{t("home.home_s3.item_title_3")}</h2>

                                    <Link to={PRODUCTION}>{t("home.home_s3.btn")} <ArrowRightOutlined/></Link>
                                </div>

                            </div>
                            <div className="home_section3_item" data-aos="fade-up">
                                <div className="home_section3_item_icon">
                                    <ArrowRightOutlined/>
                                </div>
                                <div className="home_section3_item_img">
                                    <Image src={home_s3_4} alt="ОБРАБОТКА И ОТДЕЛКА" style={{objectFit: "cover"}}
                                           preview={{
                                               mask: <div className={"preview_box"}><EyeOutlined/> <span>{t("open_eye")}</span>
                                               </div>
                                           }}
                                    />
                                </div>
                                <div className="home_section3_item_text">
                                    <h2>{t("home.home_s3.item_title_4")}</h2>

                                    <Link to={PRODUCTION}>{t("home.home_s3.btn")} <ArrowRightOutlined/></Link>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="home_section3_item" data-aos="fade-up">
                                <div className="home_section3_item_icon">
                                    <ArrowRightOutlined/>
                                </div>
                                <div className="home_section3_item_img">
                                    <Image src={home_s3_5} alt="МЕХАНИЧЕСКАЯ ОБРАБОТКА"
                                           preview={{
                                               mask: <div className={"preview_box"}><EyeOutlined/> <span>{t("open_eye")}</span>
                                               </div>
                                           }}
                                    />
                                </div>
                                <div className="home_section3_item_text">
                                    <h2>{t("home.home_s3.item_title_5")}</h2>
                                    <Link to={PRODUCTION}>{t("home.home_s3.btn")} <ArrowRightOutlined/></Link>
                                </div>

                            </div>
                            <div className="home_section3_item" data-aos="fade-up">
                                <div className="home_section3_item_icon">
                                    <ArrowRightOutlined/>
                                </div>
                                <div className="home_section3_item_img">
                                    <Image src={home_s3_6} alt="КОНТРОЛЬ КАЧЕСТВА"
                                           preview={{
                                               mask: <div className={"preview_box"}><EyeOutlined/> <span>{t("open_eye")}</span>
                                               </div>
                                           }}
                                           style={{objectFit: "cover"}}/>
                                </div>
                                <div className="home_section3_item_text">
                                    <h2>{t("home.home_s3.item_title_6")}</h2>
                                    <Link to={PRODUCTION}>{t("home.home_s3.btn")} <ArrowRightOutlined/></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container d-flex justify-content-center align-items-center">
                <section className={"home_section4"}>
                    <div className="home_section4_title" data-aos="fade-up">
                        <h1>{t("home.home_s4.title")}</h1>
                        <span></span>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="home_section4_item" data-aos="fade-up">
                                <div className="home_section4_item_img">
                                    <img src={home_s4_1} alt=""/>
                                </div>
                                <h3>{t("home.home_s4.item_1.title")}</h3>
                                <p>{t("home.home_s4.item_1.info")}</p>
                            </div>
                            <div className="home_section4_item" data-aos="fade-up">
                                <div className="home_section4_item_img">
                                    <img src={home_s4_2} alt=""/>
                                </div>
                                <h3>{t("home.home_s4.item_2.title")}</h3>
                                <p>{t("home.home_s4.item_2.info")}</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="home_section4_item" data-aos="fade-up">
                                <div className="home_section4_item_img">
                                    <img src={home_s4_3} alt=""/>
                                </div>
                                <h3>{t("home.home_s4.item_3.title")}</h3>
                                <p>{t("home.home_s4.item_3.info")}</p>
                            </div>
                            <div className="home_section4_item" data-aos="fade-up">
                                <div className="home_section4_item_img">
                                    <img src={home_s4_4} alt=""/>
                                </div>
                                <h3>{t("home.home_s4.item_4.title")}</h3>
                                <p>{t("home.home_s4.item_4.info")}</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="home_section4_item" data-aos="fade-up">
                                <div className="home_section4_item_img">
                                    <img src={home_s4_5} alt=""/>
                                </div>
                                <h3>{t("home.home_s4.item_5.title")}</h3>
                                <p>{t("home.home_s4.item_5.info")}</p>
                            </div>
                            <div className="home_section4_item" data-aos="fade-up">
                                <div className="home_section4_item_img">
                                    <img src={home_s4_6} alt=""/>
                                </div>
                                <h3>{t("home.home_s4.item_6.title")}</h3>
                                <p>{t("home.home_s4.item_6.info")}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className="home_section5 d-flex justify-content-center align-items-center overflow-hidden">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6" data-aos="fade-right">
                        <img src={home_s5} alt=""/>
                    </div>
                    <div className="col-lg-6" data-aos="fade-left">
                        <div className="home_section5_text">
                            <div className="home_section5_text_title">
                                <h1>{t("home.home_s5.title")}:</h1>
                                <span></span>
                            </div>
                            <p>
                                <ul>
                                    <li><img src={success} alt=""/>{t("home.home_s5.item_1")}</li>
                                    <li><img src={success} alt=""/>{t("home.home_s5.item_2")}</li>
                                    <li><img src={success} alt=""/>{t("home.home_s5.item_3")}</li>
                                    <li><img src={success} alt=""/>{t("home.home_s5.item_4")}</li>
                                    <li><img src={success} alt=""/>{t("home.home_s5.item_5")}</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={"home_section_box_info"}>
                <div className="container">
                    <div className="home_section_box_info_box">
                        <div className="home_section_box_info_item">
                                <span className={"home_section_box_info_item_i"} data-aos="fade-right">
                                    <span className="home_section_box_info_item_opacity"></span>
                                   <h1>{t("home.home_box.item_1")}</h1>
                                </span>

                        </div>
                        <div className="home_section_box_info_item">
                            <span className={"home_section_box_info_item_i"} data-aos="fade-up">
                                  <span className="home_section_box_info_item_opacity"></span>
                                <h1>{t("home.home_box.item_2")}</h1>

                            </span>

                        </div>
                        <div className="home_section_box_info_item">
                            <span className={"home_section_box_info_item_i"} data-aos="fade-right">
                                <span className="home_section_box_info_item_opacity"></span>
                                <h1>{t("home.home_box.item_3")}</h1>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home_section7">
                <span className="home_section7_opacity"></span>
            </section>


        </>

    );
};

export default Home;
