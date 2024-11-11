import React from 'react';
import './footer.css'


const Footer = () => {
    return (
        <footer>
            <div className="footer_box">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="footer_item">
                            <h3>ABOUT US</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="footer_item">
                            <h3>Connect With Us</h3>
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
                            <h3>Subscribe</h3>
                            <p>Sign up, you’ll love hearing from us. We promise!</p>
                            <div className="footer_item_send">
                                <input type="text" placeholder={"email@mail.com"}/>
                                <button>SEND</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;