import React from 'react';
import './contact.css'
import contact_form from '../../assets/imgs/contact/contact_form.png';

const Contact = () => {
    return (
        <>
            <section className="contact_header">
                <span className="opacity_about"></span>
                <div className="about_header_text">
                    <h1>Contact us</h1>
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
                                <h1>Let's talk with us</h1>
                                <p>Tell us what you need and we will come back to you with a quote.</p>
                            </div>
                            <input type="text" placeholder={"Name"} required/>
                            <input type="email" placeholder={"Email"} required/>
                            <textarea rows={"5"} placeholder={"Message"}/>
                            <button type={"submit"}>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <section className={"contact_address row"}>

                <div className="col-lg-4">
                    <div className="contact_address_first_title">
                        <span></span>
                        <h2>Come and Prove it</h2>
                    </div>
                    <h1>Find our store</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id ex nec urna ullamcorper pretium
                        vitae id leo.
                    </p>
                </div>
                <div className="col-lg-3">
                    <h3>store 1</h3>
                    <h6 className="contact_address_address">254 Walt Whitman Road Brooklyn</h6>
                    <h6>MON-FRI 09:00 - 19:00, SAT-SUN 10:00 - 14:00</h6>
                    <h6>Phone: + 1 800 755 60 20</h6>
                    <h6>Email: contact@company.com</h6>
                </div>
                <div className="col-lg-3">
                    <h3>store 2</h3>
                    <h6 className="contact_address_address">175 North Maison Road Brooklyn</h6>
                    <h6>MON-FRI 09:00 - 19:00, SAT-SUN 10:00 - 14:00</h6>
                    <h6>Phone: + 1 800 755 60 20</h6>
                    <h6>Email: contact@company.com</h6>
                </div>

            </section>
        </>
    );
};

export default Contact;