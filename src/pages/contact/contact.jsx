import React from 'react';
import './contact.css'
import contact_form from '../../assets/contact/contact_form.webp';
import {Helmet} from "react-helmet-async";

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Связь с нами - Ваш путь к качеству</title>
                <meta name="description" content="Свяжитесь с нами, чтобы обсудить идеи и решения для вашего бизнеса. Мы всегда готовы к диалогу и обмену идеями." />
                <meta name="keywords" content="контакт, форма связи, Ташкент, качественная продукция, обсуждение идей, кожа, кожевенное производство" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <section className="contact_header">
                <span className="opacity_about"></span>
                <div className="about_header_text">
                    <h1>СВЯЗЬ С НАМИ: ВАШ ПУТЬ К КАЧЕСТВУ</h1>
                </div>
            </section>

            <section className="contact_form container">
                <div className="row d-flex justify-content-between">
                    <div className="col-lg-5">
                        <img src={contact_form} alt=""/>
                    </div>
                    <div className="col-lg-7">
                        <form action="#">
                            <div className="contact_form_title">
                                <h1>ЕСТЬ ИДЕИ И ВОПРОСЫ? НАПИШИТЕ НАМ!</h1>
                                <p>Мы всегда готовы к диалогу и обмену идеями. Свяжитесь с нами — и мы обязательно найдем для вас решение.</p>
                            </div>
                            <input type="text" placeholder={"Имя"} required/>
                            <input type="email" placeholder={"Электронная почта"} required/>
                            <textarea rows={"5"} placeholder={"Сообщение"}/>
                            <button type={"submit"}>
                                Отправить сообщение
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <div className="container">
                <section className={"contact_address row justify-content-between"}>

                    <div className="col-lg-5">
                        <div className="contact_address_first_title">
                            <span></span>
                            <h2>ГДЕ НАС НАЙТИ!</h2>
                        </div>
                        <h1>АДРЕС ДЛЯ ТЕХ, КТО ЦЕНИТ КАЧЕСТВО</h1>
                        <p>
                            Мы находимся по адресу, который открывает двери в уникальный мир кожы. Заходите и убедитесь
                            в этом сами!
                        </p>
                    </div>
                    <div className="col-lg-5">
                        <h3>АДРЕС</h3>
                        <h6 className="contact_address_address"><a href="">Ташкентская область, город Ахангаран, участок
                            В6</a></h6>
                        <h6 className="contact_address_address"><a href="tel:+998702010023">+998 70 201 00 23</a></h6>
                        <h6>Индекс: 110300</h6>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Contact;