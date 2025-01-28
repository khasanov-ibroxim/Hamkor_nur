import React, {useCallback, useEffect, useRef, useState} from 'react';
import "./about.css"
import about_s2_1 from "../../assets/img/150A1873.jpg"
import about_s2_2 from "../../assets/img/150A1914.jpg"
import {Helmet} from "react-helmet-async";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import about_header_2 from "../../assets/img/150A1957.jpg";
import about_header_3 from "../../assets/img/150A1976.jpg";
import about_header_4 from "../../assets/header/150A1880.jpg";
import about_header_5 from "../../assets/header/150A1927.jpg";
import Globe from "../../component/globe/index.tsx";
import {useTranslation} from "react-i18next";
import {Image} from "antd";


import serteficat from "../../assets/img/sertefikat.jpg"

const About = () => {
    const [visibleSertefikat, setVisibleSertefikat] = useState(false);
    const {t} = useTranslation();



    return (
        <>
            <Helmet>
                <title>О Нас - Hamkor Nur Savdo</title>
                <meta name="description"
                      content="Мы гордимся тем, что сочетаем традиционные методы обработки кожи с инновационными технологиями для создания продукции высочайшего качества."/>
                <meta name="keywords"
                      content="кожа, кожевенное производство, Hamkor Nur Savdo, обработка кожи, дубление, краска, контроль качества"/>
                <meta name="author" content="HAMKOR NUR SAVDO"/>
                <meta property="og:title" content="О Нас - Hamkor Nur Savdo"/>
                <meta property="og:description"
                      content="Мы гордимся тем, что сочетаем традиционные методы обработки кожи с инновационными технологиями для создания продукции высочайшего качества."/>
                <meta property="og:image" content={about_s2_1}/>
                <meta property="og:url" content="https://yourwebsite.com/about"/>
            </Helmet>
            <section className="about_header">
                <span className="opacity_about"></span>
                <div className="about_header_text">
                    <h1>{t("about.about_header")}</h1>
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
                    <SwiperSlide><img src={about_header_2} alt=""/></SwiperSlide>
                    <SwiperSlide><img src={about_header_3} alt=""/></SwiperSlide>
                    <SwiperSlide><img src={about_header_4} alt=""/></SwiperSlide>
                    <SwiperSlide><img src={about_header_5} alt=""/></SwiperSlide>
                </Swiper>
            </section>

            <section className={"about_s1 container "}>
                <div className="row justify-content-around">
                    <div className="col-lg-5">
                        <div className="about_s1_title">
                            <h2>{t("about.about_s1.title_1")}</h2>
                            <span></span>
                        </div>
                        <div className="about_s1_text">
                            <p>{t("about.about_s1.title_1_info")}</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="about_s1_title">
                            <h2>{t("about.about_s1.title_2")}</h2>
                            <span></span>
                        </div>
                        <div className="about_s1_text">
                            <p>{t("about.about_s1.title_2_info")}</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="about_s1_title">
                            <h2>{t("about.about_s1.title_3")}</h2>
                            <span></span>
                        </div>
                        <div className="about_s1_text">
                            <p>{t("about.about_s1.title_3_info")}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about_s2 overflow-hidden container">
                <div className="row justify-content-center align-items-center">

                    <div className="col-lg-6" data-aos="fade-right">
                        <img src={about_s2_1} alt=""/>
                    </div>
                    <div className="col-lg-6" data-aos="fade-left">
                        <div className="about_s2_text">
                            <div className="about_s2_text_title">
                                <p>{t("about.about_s2.subtitle")}</p>

                            </div>
                            <h1>{t("about.about_s2.title_1")}</h1>

                        </div>
                    </div>

                    <div className="col-lg-6" data-aos="fade-right">
                        <div className="about_s2_text">
                            <div className="about_s2_text_title">
                                <p>{t("about.about_s2.subtitle")}</p>
                            </div>
                            <h1>{t("about.about_s2.title_2")}</h1>

                        </div>

                    </div>
                    <div className="col-lg-6" data-aos="fade-left">
                        <img src={about_s2_2} alt=""/>
                    </div>
                </div>
            </section>
            <div className="container">
                <section className="about_s3">
                    <div className="row justify-content-between ">
                        <div className="col-lg-6 about_s3_left" data-aos="fade-up">
                            <h3><span></span> {t("about.about_s3.subtitle")}</h3>
                            <h2>{t("about.about_s3.title")}</h2>
                            <button onClick={() => setVisibleSertefikat(true)}>{t("about.about_s3.btn")}</button>

                        </div>
                        <div className="col-lg-6 about_s3_right" data-aos="fade-up">
                            <p>{t("about.about_s3.info")}</p>

                        </div>
                    </div>
                </section>
            </div>
            <Image
                width={200}
                style={{display: 'none'}}
                src={serteficat}
                preview={{
                    visible:visibleSertefikat,
                    src: serteficat,
                    onVisibleChange: (value) => {
                        setVisibleSertefikat(value);
                    },
                }}
            />
            <section className={"globs"}>
                <Globe/>
            </section>

            <section className='number' >
                <span className="number_opacity"></span>
                <div className="number_box ">
                    <div className="row " data-aos="fade-right" style={{width: "100%"}}>
                        <div className="col-lg-3">
                            <p className='count'>5</p>
                            <p className="last">{t("about.number.item_1")}</p>
                        </div>
                        <div className="col-lg-3">
                            <p className='count'>5 <span>{t("about.number.component")}
                                <br/>{t("about.number.month")}</span></p>
                            <p className="last">{t("about.number.item_2")}</p>
                        </div>
                        <div className="col-lg-3">
                            <p className='count'>7 <span>{t("about.number.component")}
                                <br/>{t("about.number.month")}</span></p>
                            <p className="last">{t("about.number.item_3")}</p>
                        </div>
                        <div className="col-lg-3">
                            <p className='count'>4</p>
                            <p className="last">{t("about.number.item_4")}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;