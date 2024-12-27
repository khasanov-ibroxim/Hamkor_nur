import React from 'react';
import './footer.css'
import {Link, useLocation} from "react-router-dom";
import {CONTACT} from "../../utils/const.jsx";
import {useTranslation} from "react-i18next";


const Footer = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const {t} = useTranslation();

    return (
        <>
            {currentPath === "/contact" ? "" : (
                <section className="home_section8  overflow-hidden">
                    <div className="container">
                        <div className="row d-flex justify-content-between">
                            <div className="col-lg-8 home_section8_text" data-aos="fade-right">
                                <h2>{t("footer.footer_s1.title")}</h2>
                                <p>{t("footer.footer_s1.subtitle")}</p>
                            </div>
                            <div className="col-lg-4 home_section8_button" data-aos="fade-left">
                                <Link to={CONTACT}>{t("footer.footer_s1.btn")}</Link>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <footer>
                <div className="footer_box">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="footer_item">
                                <h3>{t("footer.footer_s2.title_1")}</h3>
                                <p>{t("footer.footer_s2.title_1_info")}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer_item">
                                <h3>{t("footer.footer_s2.title_2")}</h3>
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
                                <h3>{t("footer.footer_s2.title_3")}</h3>
                                <p>{t("footer.footer_s2.title_3_info")}</p>
                                <div className="footer_item_send">
                                    <Link to={CONTACT} onClick={()=>{window.scroll(top)}}>{t("footer.footer_s2.btn")}</Link>
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