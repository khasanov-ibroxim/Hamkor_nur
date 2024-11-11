import React from 'react';
import "./home.css";
import home_s3_1 from "../../assets/imgs/home/home_s3_1.png"
import home_s3_2 from "../../assets/imgs/home/home_s3_2.png"
import home_s3_3 from "../../assets/imgs/home/home_s3_3.png"
import home_s3_4 from "../../assets/imgs/home/home_s3_4.png"
import home_s3_5 from "../../assets/imgs/home/home_s3_5.png"
import home_s3_6 from "../../assets/imgs/home/home_s3_6.png"

import home_s4_1 from "../../assets/imgs/home/home_s4_1.png"
import home_s4_2 from "../../assets/imgs/home/home_s4_2.png"
import home_s4_3 from "../../assets/imgs/home/home_s4_3.png"
import home_s4_4 from "../../assets/imgs/home/home_s4_4.png"
import home_s4_5 from "../../assets/imgs/home/home_s4_5.png"
import home_s4_6 from "../../assets/imgs/home/home_s4_6.png"

import home_s5 from "../../assets/imgs/home/home_s5.png"


const Home = () => {
    return (
        <>
            <div className="Home">
                <span className={"opacity_container"}></span>
                <div className="home_box container">
                    <h1 data-aos="fade-up">Craft Something Beautiful</h1>
                    <p data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis.
                        Maecenas eu lacus suscipit, sollicitudin lacus sed, eleifend est.</p>
                    <button data-aos="fade-up">Request a product</button>
                </div>

            </div>
            <div className="container">
                <section className="home_section2">
                    <div className="row justify-content-between ">
                        <div className="col-lg-6 home_section2_left" data-aos="fade-up">
                            <h3><span></span> Let's Introduce</h3>
                            <h2>Innovative design is our passion</h2>
                            <a href="#">Custom Now</a>
                        </div>
                        <div className="col-lg-6 home_section2_right" data-aos="fade-up">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.</p>

                            <p>
                                Quisque sollicitudin ante ac ex mattis gravida. Cras feugiat commodo feugiat. Phasellus
                                gravida enim non purus posuere, nec varius ex gravida.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <section className="home_section3">
                <div className="container">
                    <div className="row justify-content-around  align-items-center">
                        <div className="col-lg-3">
                            <div className="home_section3_item" data-aos="fade-up">
                                <div className="home_section3_item_img">
                                    <img src={home_s3_1} alt=""/>
                                </div>
                                <h2>home decor</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipiscing elit Ut elit tellus luctus
                                    nec.</p>
                            </div>
                            <div className="home_section3_item" data-aos="fade-up">
                                <div className="home_section3_item_img">
                                    <img src={home_s3_2} alt=""/>
                                </div>
                                <h2>sculpturing</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipiscing elit Ut elit tellus luctus
                                    nec.</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="home_section3_item" data-aos="fade-up">
                                <div className="home_section3_item_img">
                                    <img src={home_s3_3} alt=""/>
                                </div>
                                <h2>Jewellery</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipiscing elit Ut elit tellus luctus
                                    nec.</p>
                            </div>
                            <div className="home_section3_item" data-aos="fade-up">
                                <div className="home_section3_item_img">
                                    <img src={home_s3_4} alt=""/>
                                </div>
                                <h2>Ceramics</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipiscing elit Ut elit tellus luctus
                                    nec.</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="home_section3_item" data-aos="fade-up">
                                <div className="home_section3_item_img">
                                    <img src={home_s3_5} alt=""/>
                                </div>
                                <h2>leather craft</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipiscing elit Ut elit tellus luctus
                                    nec.</p>
                            </div>
                            <div className="home_section3_item" data-aos="fade-up">
                                <div className="home_section3_item_img">
                                    <img src={home_s3_6} alt=""/>
                                </div>
                                <h2>Fashion</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipiscing elit Ut elit tellus luctus
                                    nec.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container d-flex justify-content-center align-items-center">
                <section className={"home_section4"}>
                    <div className="home_section4_title" data-aos="fade-up">
                        <h1>Why Choose us</h1>
                        <span></span>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="home_section4_item" data-aos="fade-up">
                                <div className="home_section4_item_img">
                                    <img src={home_s4_1} alt=""/>
                                </div>
                                <h3>CREATIVE SOLUTION</h3>
                                <p>Lorem ipsum dolor sit amet
                                    consectetur, adipiscing elit Ut elit tellus luctus.</p>
                            </div>
                            <div className="home_section4_item" data-aos="fade-up">
                                <div className="home_section4_item_img">
                                    <img src={home_s4_2} alt=""/>
                                </div>
                                <h3>FUNCTIONAL DESIGN</h3>
                                <p>Lorem ipsum dolor sit amet
                                    consectetur, adipiscing elit Ut elit tellus luctus.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="home_section4_item" data-aos="fade-up">
                                <div className="home_section4_item_img">
                                    <img src={home_s4_3} alt=""/>
                                </div>
                                <h3>SUPERIOR QUALITY</h3>
                                <p>Lorem ipsum dolor sit amet
                                    consectetur, adipiscing elit Ut elit tellus luctus.</p>
                            </div>
                            <div className="home_section4_item" data-aos="fade-up">
                                <div className="home_section4_item_img">
                                    <img src={home_s4_4} alt=""/>
                                </div>
                                <h3>WORLDWIDE DELIVERY</h3>
                                <p>Lorem ipsum dolor sit amet
                                    consectetur, adipiscing elit Ut elit tellus luctus.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="home_section4_item" data-aos="fade-up">
                                <div className="home_section4_item_img">
                                    <img src={home_s4_5} alt=""/>
                                </div>
                                <h3>SPEED PRODUCTION</h3>
                                <p>Lorem ipsum dolor sit amet
                                    consectetur, adipiscing elit Ut elit tellus luctus.</p>
                            </div>
                            <div className="home_section4_item" data-aos="fade-up">
                                <div className="home_section4_item_img">
                                    <img src={home_s4_6} alt=""/>
                                </div>
                                <h3>PREMIUM PACKAGING</h3>
                                <p>Lorem ipsum dolor sit amet
                                    consectetur, adipiscing elit Ut elit tellus luctus.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className="home_section5 overflow-hidden">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6" data-aos="fade-right">
                        <img src={home_s5} alt=""/>
                    </div>
                    <div className="col-lg-6" data-aos="fade-left">
                        <div className="home_section5_text">
                            <div className="home_section5_text_title">
                                <h1>Let's talk Our History</h1>
                                <span></span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Lectus arcu ben dum at varius. Ut porttitor leo a
                                diam. Pe na tibus et magnis dis. Ut enim ad minim veniam, quis no strud ex ercitation
                                ullamco laboris nisi ut aliquip ex ea commodo con sequat. Duis aute irure dolor in
                                reprehenderit.
                            </p>
                            <p>
                                Excepteur sint occaecat cupidatat non proident. Elementum nisi quis eleifend quam
                                adipiscing vitae proin sagittis. Viverra mauris in aliquam sem fringilla ut morbi
                                tincidunt augue eget dolor.
                            </p>
                            <a href="#">Reade More</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container d-flex justify-content-center align-items-center overflow-hidden">
                <div className="home_section6">
                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-right">
                            <img src={home_s3_1} alt=""/>
                        </div>
                        <div className="col-lg-4" data-aos="fade-up">
                            <div className="home_section6_text">
                                <div className="home_section5_text_title justify-content-center align-items-center text-center">
                                    <h1>Recycle Rubbish becoming crafts</h1>
                                    <span></span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Lectus arcu ben dum at varius. Ut
                                    porttitor leo a diam. Pe na tibus et magnis dis. Ut enim ad minim veniam, quis no
                                    strud ex ercitation ullamco laboris nisi ut aliquip ex ea commodo con sequat. </p>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="fade-left">
                            <img src={home_s3_2} alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <section className="home_section7">
                <span className="home_section7_opacity"></span>
            </section>

            <section className="home_section8 container overflow-hidden">
                <div className="row d-flex justify-content-between">
                    <div className="col-lg-8 home_section8_text" data-aos="fade-right">
                        <h2>Found Something Interesting?</h2>
                        <p>WE CAN MAKE ANYTHING YOU CAN IMAGINE!</p>
                    </div>
                    <div className="col-lg-4 home_section8_button" data-aos="fade-left">
                        <a href="#">Contact Us</a>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Home;
