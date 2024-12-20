import React, {useState} from "react";
import "./contact.css";
import contactFormImage from "../../assets/img/150A0695.jpg";
import {Helmet} from "react-helmet-async";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import contactHeader1 from "../../assets/img/150A0784.jpg";
import contactHeader2 from "../../assets/img/150A0785.jpg";

const contactData = [
    {
        id: 1,
        name: "Производство - Ахангаран",
        address_name: "Республика Узбекистан",
        address: "Ташкентская область , г.Ахангаран, участок В6",
        telephone: "+998 70 201 00 23",
        index: "110300",
        address_url: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2885.0402375058584!2d69.652333!3d40.925115000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDU1JzMwLjQiTiA2OcKwMzknMDguNCJF!5e1!3m2!1sru!2s!4v1732637783498!5m2!1sru!2s",
        map_url: "https://maps.google.com/maps?q=40.925115,69.652334&ll=40.925115,69.652334&z=16"
    },
    {
        id: 2,
        name: "Шоу рум - г.Ташкент",
        address_name: "Республика Узбекистан",
        address: "г.Ташкент , <br/> Шайхантахурский район , <br/> м.Ибн Сино - 1, 21 дом",
        telephone: "+998 90 022 60 00",
        telephone2: "+998 90 975 08 54",
        index: "110300",
        address_url: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2867.0368135724198!2d69.16743!3d41.335812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDIwJzA4LjkiTiA2OcKwMTAnMDIuOCJF!5e1!3m2!1sru!2s!4v1732721753219!5m2!1sru!2s",
        map_url: "https://maps.google.com/maps?q=41.335813,69.167431&ll=41.335813,69.167431&z=16"
    },
    {
        id: 3,
        name: "Шоу рум - Андижан",
        address_name: "Республика Узбекистан",
        address: "Андижанский область, <br/> улица Бобиршох  145 дом , <br/> Ориентир напротив ХБК",
        telephone: "+998 97 273 10 03",
        index: "110300",
        address_url: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2890.6947855265726!2d72.332715!3d40.795421000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDQ3JzQzLjUiTiA3MsKwMTknNTcuOCJF!5e1!3m2!1sru!2s!4v1732773121570!5m2!1sru!2s",
        map_url: "https://maps.google.com/maps?q=40.795422,72.332715&ll=40.795422,72.332715&z=16"
    },
    {
        id: 3,
        name: "Шоу рум - Наманган",
        address_name: "Республика Узбекистан",
        address: "г.Наманган, <br/> улица Маргилан 136-дом ",
        telephone: "+998 91 366 66 19",
        index: "110300",
        address_url: "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5764.949939867095!2d71.677349!3d40.983841!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDU5JzAxLjgiTiA3McKwNDAnMzguNSJF!5e1!3m2!1sru!2s!4v1734643914454!5m2!1sru!2s",
        map_url: "https://maps.google.com/maps?q=40.983841,71.677349&ll=40.983841,71.677349&z=16"
    },
    {
        id: 4,
        name: "Офис - Россия, Ростовская область",
        address_name: "Россия, Ростовская область",
        telephone: "+7 918 554 60 46",
        telephone2: "+7 961 425 05 65",
        email: "hamkor.nur.russia@yandex.ru",
        address: "<br/>Привокзальная улица, 9Б, <br/> Ростов-на-Дону",
        address_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2593.629692103994!2d39.693573799999996!3d47.2150488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3b93d70c7a3d9%3A0x1c58014831b2f8b3!2z0YPQuy4g0JLQsNCz0YPQu9C10LLRgdC60L7Qs9C-LCA5LCDQoNC-0YHRgtC-0LIt0L3QsC3QlNC-0L3Rgywg0KDQvtGB0YLQvtCy0YHQutCw0Y8g0L7QsdC7Liwg0KDQvtGB0YHQuNGPLCAzNDQwMDE!5e1!3m2!1sru!2s!4v1733586083387!5m2!1sru!2s",
        map_url: "https://maps.app.goo.gl/5jM5AcJn4pWrzqGA6"
    },
];

const Contact = () => {
    const [selectedContact, setSelectedContact] = useState(contactData[0]);

    const handleSelectChange = (e) => {
        const selectedId = e.target.value;
        const contact = contactData.find((c) => c.name === selectedId);
        setSelectedContact(contact);
    };

    return (
        <>
            <Helmet>
                <title>Связь с нами - Ваш путь к качеству</title>
                <meta
                    name="description"
                    content="Свяжитесь с нами, чтобы обсудить идеи и решения для вашего бизнеса. Мы всегда готовы к диалогу и обмену идеями."
                />
                <meta
                    name="keywords"
                    content="контакт, форма связи, Ташкент, качественная продукция, обсуждение идей, кожа, кожевенное производство"
                />
                <meta name="robots" content="index, follow"/>
            </Helmet>

            {/* Header Section */}
            <section className="contact_header">
                <span className="opacity_about"></span>
                <div className="about_header_text">
                    <h1>СВЯЗЬ С НАМИ: ВАШ ПУТЬ К КАЧЕСТВУ</h1>
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
                    <SwiperSlide>
                        <img src={contactHeader1} alt="Contact Header 1"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={contactHeader2} alt="Contact Header 2"/>
                    </SwiperSlide>
                </Swiper>
            </section>

            {/* Contact Form */}
            <section className="contact_form">
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        <div className="col-lg-5">
                            <img
                                src={contactFormImage}
                                alt="Contact Form"
                                style={{objectFit: "cover"}}
                            />
                        </div>
                        <div className="col-lg-7">
                            <form action="#">
                                <div className="contact_form_title">
                                    <h1>ЕСТЬ ИДЕИ И ВОПРОСЫ? НАПИШИТЕ НАМ!</h1>
                                    <p>
                                        Мы всегда готовы к диалогу и обмену идеями. Свяжитесь с нами
                                        — и мы обязательно найдем для вас решение.
                                    </p>
                                </div>
                                <input type="text" placeholder="Имя" required/>
                                <input type="email" placeholder="Электронная почта" required/>
                                <textarea rows="5" placeholder="Сообщение"/>
                                <button type="submit">Отправить сообщение</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Address Section */}
            <section className="contact_address">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-4">
                            <div className="contact_address_first_title">
                                <span></span>
                                <h2>ГДЕ НАС НАЙТИ!</h2>
                            </div>
                            <h1>АДРЕС ДЛЯ ТЕХ, КТО ЦЕНИТ КАЧЕСТВО</h1>
                            <p>
                                Мы находимся по адресу, который открывает двери в уникальный мир
                                кожы. Заходите и убедитесь в этом сами!
                            </p>
                        </div>
                        <div className="col-lg-4 contact_address_box">
                            <select
                                value={selectedContact.name}
                                onChange={handleSelectChange}
                            >
                                {contactData.map((contact) => (
                                    <option key={contact.id} value={contact.name}>
                                        {contact.name}
                                    </option>
                                ))}
                            </select>
                            <h6 className="contact_address_address">
                                <a href={selectedContact.map_url}
                                   dangerouslySetInnerHTML={{__html: selectedContact.address_name + ' , ' + selectedContact.address}}
                                >
                                </a>
                            </h6>
                            <h6 className="contact_address_address" style={{
                                lineHeight: "30px"
                            }}>
                                Телефон: <br/> <a
                                href={`tel:${selectedContact.telephone}`}>{selectedContact.telephone}</a>
                                <br/>
                                {selectedContact.telephone2 && (
                                    <><a
                                        href={`tel:${selectedContact.telephone2}`}>{selectedContact.telephone2}</a></>
                                )}
                            </h6>
                            {selectedContact.index &&
                            <h6 className="contact_address_address">

                                Индекс: {selectedContact.index}

                            </h6>}
                            {selectedContact.email &&
                            <a href={`mailto:${selectedContact.email}`} style={{
                                textDecoration: "none",
                                color:"white"
                            }} className="contact_address_address">

                                Почта: {selectedContact.email}

                            </a>}
                        </div>
                        <div className="col-lg-4 contact_address_map">
                            <iframe
                                src={selectedContact.address_url}
                                width="100%"
                                height="300px"
                                style={{borderRadius: "20px"}}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
