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

import product_slide_1 from "../../assets/img/DGH_138.webp"


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
                                    <p>Соединяем инновации с ремеслом прошлого.</p>
                                </div>
                            </div>
                            <div className="product_s2_box_left_item">
                                <img src={product_s2_5} alt="" />
                                <span className="product_s2_box_opacity"></span>
                                <div className="product_s2_box_text">
                                    <h3>НАТУРАЛЬНАЯ КОЖА-ВЫБОР НА ВЕКА</h3>
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
                                    <p>Воплощение вашей уникальности.</p>
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
                                    <img className="d-block w-100" src={product_s2_2} alt="Second slide" />
                                    <span className="slide_opacity"></span>
                                    <div className="slide_text">
                                        {/*<h1>ИСКУССТВО КОЖИ</h1>*/}
                                        {/*<p>Создаем будущее из традиций и натуральных материалов.</p>*/}
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={product_s2_3} alt="Third slide" />
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