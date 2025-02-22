import React, {useEffect, useState} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {ABOUT, CONTACT, HOME, PRODUCTION, PRODUCTS} from "../../utils/const.jsx";
import "./navbar.css";
import {CloseOutlined, DownOutlined, MenuOutlined} from "@ant-design/icons";
import logo from "../../assets/logo.png"
import {Dropdown, Space} from "antd";
import {languages} from "../../utils/lang/langs.jsx";
import {useTranslation} from "react-i18next";
import {useLanguage} from "../../utils/lang/LangContext.jsx";


const Navbar = ({onlyIcon = true  }) => {
    const location = useLocation();
    const currentPath = location.pathname;
    const isActive = (path) => currentPath === path ? "active" : "";
    const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 1000px)').matches);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const {handleLanguageChange, selectedLanguage} = useLanguage();
    const { t } = useTranslation();

    useEffect(() => {
        const handleResize = (e) => {
            setIsMobile(e.matches);
        };

        const windowMatch = window.matchMedia('(max-width: 1000px)');
        windowMatch.addEventListener('change', handleResize);


        return () => windowMatch.removeEventListener('change', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav>

            <div className="nav_box container">
                <Link to={HOME} className="nav_logo">
                    <img src={logo} alt=""/>
                </Link>
                <div className={`nav_menu ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li className={isActive(HOME)} onClick={toggleMenu}><Link to={HOME}>{t("navbar.home")}</Link></li>
                        <li className={isActive(ABOUT)} onClick={toggleMenu}><Link to={ABOUT}>{t("navbar.about")}</Link></li>
                        <li className={isActive(PRODUCTS)} onClick={toggleMenu}><Link to={PRODUCTS}>{t("navbar.products")}</Link></li>
                        <li className={isActive(PRODUCTION)} onClick={toggleMenu}><Link to={PRODUCTION}>{t("navbar.production")}</Link></li>
                        <li className={isActive(CONTACT)} onClick={toggleMenu}><Link to={CONTACT}>{t("navbar.contact")}</Link></li>

                        <li className={"nav_dropdown"}>
                            <Dropdown
                                menu={{
                                    items: languages,
                                    onClick: handleLanguageChange,
                                }}
                                style={{zIndex: 9999, cursor: "pointer"}}
                            >
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        {onlyIcon ? (
                                            <span style={{cursor: "pointer" , display:"flex" , alignItems:"center"}}>{selectedLanguage.icon} <p >{selectedLanguage.label} </p></span>
                                        ) : (
                                            <>
                                                {selectedLanguage.icon} {selectedLanguage.label} <DownOutlined/>
                                            </>
                                        )}
                                    </Space>
                                </a>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
                <div className="navburger" onClick={toggleMenu}>
                    {isMenuOpen ? <CloseOutlined/> : <MenuOutlined/>}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
