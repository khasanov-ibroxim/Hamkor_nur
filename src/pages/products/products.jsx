import React from 'react';
import "./products.css"

import product_s2_1 from "../../assets/img/DGH_232.webp"
import product_s2_2 from "../../assets/img/DGH_48.webp"
import product_s2_3 from "../../assets/img/DGH_8.webp"
import product_s2_4 from "../../assets/img/DGH_77.webp"
import product_s2_5 from "../../assets/img/DGH_59.webp"
import product_s2_6 from "../../assets/img/DGH_52.webp"
import product_s2_7 from "../../assets/img/DGH_152.webp"
import product_s2_8 from "../../assets/img/DGH_166.webp"
import product_s2_9 from "../../assets/img/DGH_70.webp"
import product_s2_10 from "../../assets/img/DGH_227.webp"

import product_slide_1 from "../../assets/img/150A0773.webp"
import product_slide_2 from "../../assets/img/150A0791.webp"
import product_slide_3 from "../../assets/img/150A0878.webp"

import success from "../../assets/icon/success.png"
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import home_header_1 from "../../assets/img/DGH_86.webp";
import home_header_2 from "../../assets/img/DGH_138(1)(1).png";
import {CONTACT} from "../../utils/const.jsx";
import {Link} from "react-router-dom";

const Products = () => {

    return (
        <>
            <div className="Home">
                <span className={"opacity_container"}></span>
                <div className="home_box container">
                    <h1 data-aos="fade-up">Продукция</h1>
                </div>
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 7000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={home_header_1} alt=""/></SwiperSlide>
                    <SwiperSlide><img src={home_header_2} alt=""/></SwiperSlide>
                </Swiper>
            </div>

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
                                    <li><img src={success} alt=""/> Вет-Блю — кожа, полученная от молодых животных, часто используется в
                                        производстве высококачественных изделий.
                                    </li>
                                    <li><img src={success} alt=""/>Краст — кожа, прошедшая начальную обработку дублением, но ещё не подвергшаяся
                                        финишной отделки
                                    </li>
                                    <li><img src={success} alt=""/>
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

            <section className=" product_s2  container">
                <div className="product_s2_box container">
                    <div className="product_s2_box_right">
                        <img src={product_s2_1} alt="" />
                        <span className="product_s2_box_opacity"></span>
                        <div className="product_s2_box_text">
                            <h3>КОЖЕВЕННОЕ ПРОИЗВОДСТВО</h3>
                            <p>Вдохновляемся природой для создания долговечных изделий.</p>
                        </div>
                    </div>
                    <div className="product_s2_box_left">
                        <div className="product_s2_box_left_top">
                            <div className="product_s2_box_left_item">
                                <img src={product_s2_2} alt="" />
                                <span className="product_s2_box_opacity"></span>
                                <div className="product_s2_box_text">
                                    <h3>ИСКУССТВО КОЖИ</h3>
                                    <p>Создаем будущее из традиций и натуральных материалов.</p>
                                </div>
                            </div>
                            <div className="product_s2_box_left_item">
                                <img src={product_s2_3} alt="" />
                                <span className="product_s2_box_opacity"></span>
                                <div className="product_s2_box_text">
                                    <h3>ЭКОЛОГИЧНОЕ ПРОИЗВОДСТВО</h3>
                                    <p>Кожа в гармонии с природой.</p>
                                </div>
                            </div>
                        </div>
                        <div className="product_s2_box_left_bottom">
                            <div className="product_s2_box_left_item">
                                <img src={product_s2_4} alt="" />
                                <span className="product_s2_box_opacity"></span>
                                <div className="product_s2_box_text">
                                    <h3>ТЕХНОЛОГИИ И ТРАДИЦИИ</h3>
                                    <p>Соединяем инновации <br/> с ремеслом прошлого.</p>
                                </div>
                            </div>
                            <div className="product_s2_box_left_item">
                                <img src={product_s2_5} alt="" />
                                <span className="product_s2_box_opacity"></span>
                                <div className="product_s2_box_text">
                                    <h3>НАТУРАЛЬНАЯ <br/> КОЖА-ВЫБОР НА ВЕКА</h3>
                                    <p>Эстетика, прочность и индивидуальность в каждом изделии.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product_s2_box container">
                    <div className="product_s2_box_left">
                        <div className="product_s2_box_left_top">
                            <div className="product_s2_box_left_item">
                                <img src={product_s2_6} alt="" />
                                <span className="product_s2_box_opacity"></span>
                                <div className="product_s2_box_text">
                                    <h3>КОЖА, КОТОРАЯ РАССКАЗЫВАЕТ ИСТОРИЮ</h3>
                                    <p>Воплощение <br/> вашей уникальности.</p>
                                </div>
                            </div>
                            <div className="product_s2_box_left_item">
                                <img src={product_s2_7} alt="" />
                                <span className="product_s2_box_opacity"></span>
                                <div className="product_s2_box_text">
                                    <h3>ВОПЛОЩЕНИЕ ВАШИХ ИДЕЙ</h3>
                                    <p>Кожевенное производство на заказ</p>
                                </div>
                            </div>
                        </div>
                        <div className="product_s2_box_left_bottom">
                            <div className="product_s2_box_left_item">
                                <img src={product_s2_8} alt="" />
                                <span className="product_s2_box_opacity"></span>
                                <div className="product_s2_box_text">
                                    <h3>ПУТЬ КОЖИ</h3>
                                    <p>Кожа в движении</p>
                                </div>
                            </div>
                            <div className="product_s2_box_left_item">
                                <img src={product_s2_9} alt="" />
                                <span className="product_s2_box_opacity"></span>
                                <div className="product_s2_box_text">
                                    <h3>КОЖА, КОТОРАЯ ВДОХНОВЛЯЕТ</h3>
                                    <p>Тонкая работа мастеров для тех, кто ценит уникальность.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product_s2_box_right">
                        <img src={product_s2_10} alt="" />
                        <span className="product_s2_box_opacity"></span>
                        <div className="product_s2_box_text">
                            <h3>ДИЗАЙН И ДОЛГОВЕЧНОСТЬ</h3>
                            <p>Мы создаем стиль, который останется с вами надолго.</p>
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
                                    <img className="d-block w-100" src={product_slide_1} alt="First slide" />
                                    <span className="slide_opacity"></span>
                                    <div className="slide_text">
                                        {/*<h1>ДИЗАЙН И ДОЛГОВЕЧНОСТЬ</h1>*/}
                                        {/*<p>Мы создаем стиль, который останется с вами надолго.</p>*/}
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={product_slide_2} alt="Second slide" />
                                    <span className="slide_opacity"></span>
                                    <div className="slide_text">
                                        {/*<h1>ИСКУССТВО КОЖИ</h1>*/}
                                        {/*<p>Создаем будущее из традиций и натуральных материалов.</p>*/}
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={product_slide_3} alt="Third slide" />
                                    <span className="slide_opacity"></span>
                                    <div className="slide_text">
                                        {/*<h1>ЭКОЛОГИЧНОЕ ПРОИЗВОДСТВО</h1>*/}
                                        {/*<p>Кожа в гармонии с природой.</p>*/}
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
                            <h1>МЫ СТРЕМИМСЯ К СОВЕРШЕНСТВУ В КАЖДОМ ПРОЦЕССЕ</h1>
                            <p>  Каждый наш продукт будет служить вам долгие годы</p>
                            <Link to={CONTACT}>Свяжитесь с нами</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Products;