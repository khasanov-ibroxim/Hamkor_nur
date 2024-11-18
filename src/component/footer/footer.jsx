import React from 'react';
import './footer.css'
import {useLocation} from "react-router-dom";


const Footer = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <>
            {currentPath === "/contact" ? "" : (
                <section className="home_section8 container overflow-hidden">
                    <div className="row d-flex justify-content-between">
                        <div className="col-lg-8 home_section8_text" data-aos="fade-right">
                            <h2>КАК ВЫБРАТЬ ПРАВИЛЬНУЮ КОЖУ ДЛЯ КОНКРЕТНОГО ИЗДЕЛИЯ?</h2>
                            <p>Мы готовы предложить вам решения.</p>
                        </div>
                        <div className="col-lg-4 home_section8_button" data-aos="fade-left">
                            <a href="#">КОНТАКТЫ</a>
                        </div>
                    </div>
                </section>
            )}

            <footer>
                <div className="footer_box">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="footer_item">
                                <h3>СВЯЖИСЬ С НАМИ</h3>
                                <p>Наша компания находится в самом удобном месте, а благодаря нашим интернет-ресурсам
                                    ваш заказ будет принят мгновенно!
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer_item">
                                <h3>ИНТЕРНЕТ РЕСУРСЫ</h3>
                                <div className="footer_item_social">
                                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="#"><i className="fa-brands fa-youtube"></i></a>
                                    <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer_item">
                                <h3>НАША ПОЧТА</h3>
                                <p>Мы всегда на связи — пишите нам!</p>
                                <div className="footer_item_send">
                                    <input type="text" placeholder={"email-hamkornur@gmail/com"}/>
                                    <button>отправить</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    );
};

export default Footer;