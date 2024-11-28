import React from 'react';
import "./production.css"
import {useParams} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import home_header_1 from "../../assets/img/150A1914.webp";
import home_header_2 from "../../assets/img/150A1967.webp";
import home_s5_1 from "../../assets/img/150A0757.webp";
import home_s5_2 from "../../assets/img/150A0765.webp";

import home_s3_1 from "../../assets/img/sigr.webp"
import home_s3_2 from "../../assets/img/150A1861.webp"
import home_s3_3 from "../../assets/img/150A1789.webp"
import home_s3_4 from "../../assets/img/150A1786.webp"
import home_s3_5 from "../../assets/img/150A1942.webp"
import home_s3_6 from "../../assets/img/150A1873.webp"

const Production = () => {
    const {id} = useParams();
    return (
        <div>
            <div className="Home">
                <span className={"opacity_container"}></span>
                <div className="home_box container">
                    <h1 data-aos="fade-up">Производство</h1>
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
                            <img src={home_s3_1} alt=""/>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left">
                            <div className="home_section5_text">
                                <div className="home_section5_text_title">
                                    <h1>ДОБЫЧА И ПОДГОТОВКА СЫРЬЯ</h1>
                                    <span></span>
                                </div>
                                <p>
                                    Мы используем — шкуры крупного рогатого скота. Сначала шкура подвергается очистке и
                                    удалению ненужных тканей и загрязнений, что является первым шагом в получении
                                    качественного материала для дальнейшей обработки.
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
                                    <h1>ДУБЛЕНИЕ</h1>
                                    <span></span>
                                </div>
                                <p>На этом этапе кожа обрабатывается с помощью различных химических веществ или
                                    растительных экстрактов, чтобы сделать её устойчивой к воздействию влаги, плесени и
                                    других факторов. </p>
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
                                    <h1>МЕХАНИЧЕСКАЯ ОБРАБОТКА</h1>
                                    <span></span>
                                </div>
                                <p>После дубления кожа подвергается механической обработке, включая растяжку,
                                    выравнивание и прессование. Эти процедуры помогают улучшить текстуру кожи, придавая
                                    ей необходимую мягкость, эластичность и прочность.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="home_section5 overflow-hidden production_s4_item">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6" data-aos="fade-left">
                            <div className="home_section5_text">
                                <div className="home_section5_text_title">
                                    <h1>КРАСКА </h1>
                                    <span></span>
                                </div>
                                <p>Для улучшения внешнего вида и долговечности кожи используются различные технологии
                                    окрашивания. В зависимости от пожелания клиента.</p>
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
                                    <h1>ОБРАБОТКА И ОТДЕЛКА</h1>
                                    <span></span>
                                </div>
                                <p>На этом этапе кожа проходит финишную обработку, которая может включать различные виды
                                    отделки в зависимости от назначения и желаемых характеристик конечного продукта. Это
                                    может быть тиснение, нанесение лакового покрытия, создание текстурных эффектов или
                                    добавление защитных слоёв.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="home_section5 overflow-hidden production_s4_item">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6" data-aos="fade-left">
                            <div className="home_section5_text">
                                <div className="home_section5_text_title">
                                    <h1>КОНТРОЛЬ КАЧЕСТВА</h1>
                                    <span></span>
                                </div>
                                <p>Важной частью кожевенного производства является строгий контроль на каждом этапе. Мы
                                    внимательно следим за качеством сырья, точностью выполнения всех технологических
                                    операций и окончательной отделкой продукции, чтобы каждый клиент получил идеальный
                                    продукт.</p>
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