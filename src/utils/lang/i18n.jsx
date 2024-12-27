import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import homeTranslations from "./translations/homeTranslate.jsx";
import aboutTranslations from "./translations/aboutTranslate.jsx";
import productsTranslations from "./translations/productsTranslate.jsx";
import contactTranslate from "./translations/contactTranslate.jsx";
import productionTranslate from "./translations/productionTranslate.jsx";

const resources = {
    ru: {
        translation: {
            home: homeTranslations.ru,
            about: aboutTranslations.ru,
            products:productsTranslations.ru,
            production:productionTranslate.ru,
            contact: contactTranslate.ru,

            navbar:{
                home:"Главная",
                about:"О нас",
                products:"Продукция",
                production:"Производство",
                contact:"Контакты",
            },

            footer:{
                    footer_s1:{
                        title:"Не упустите возможность создать нечто особенное – ваш идеальный продукт ждет вас!",
                        subtitle:"Мы готовы предложить вам решения.",
                        btn:"Контакты"
                    },
                    footer_s2:{
                        title_1:"свяжитесь С НАМИ",
                        title_2:"ИНТЕРНЕТ РЕСУРСЫ",
                        title_3:"НАША ПОЧТА",
                        title_1_info:"Наша компания находится в самом удобном месте, а благодаря нашим интернет-ресурсам ваш заказ будет принят мгновенно!",
                        title_3_info:"Мы всегда на связи — пишите нам!",
                        btn:"Отправить сообщение"
                    }
            },


            open_eye:"Открыть",
            contact_us:"Свяжитесь с нами"
        },
    },
    en: {
        translation: {
            home: homeTranslations.en,
            about: aboutTranslations.en,
            products:productsTranslations.en,
            production:productionTranslate.en,
            contact: contactTranslate.en,

            navbar:{
                home:"Home",
                about:"About",
                products:"Products",
                production:"Production",
                contact:"Contacts",
            },
            footer:{
                footer_s1:{
                    title:"Don't miss the opportunity to create something special - your ideal product is waiting for you!",
                    subtitle:"We are ready to offer you solutions.",
                    btn:"CONTACTS"
                },
                footer_s2:{
                    title_1:"Contact US",
                    title_2:"INTERNET RESOURCES",
                    title_3:"OUR MAIL",
                    title_1_info:"Our company is located in the most convenient place, and thanks to our Internet resources, your order will be accepted instantly!",
                    title_3_info:"We are always in touch - write to us!",
                    btn:"Send a message"
                }
            },
            open_eye:"View",
            contact_us:"Contact us"
        },
    },
};

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: "ru",
        interpolation: {
            escapeValue: false,
        },
        resources,
    });

export default i18n;
