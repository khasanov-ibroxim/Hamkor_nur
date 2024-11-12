import React, {useCallback, useEffect, useRef, useState} from 'react';
import "./about.css"
import about_s2_1 from "../../assets/about/about_s2_1.webp"
import about_s2_2 from "../../assets/about/about_s2_2.webp"

const About = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Function to handle counting for each count
    const startCounting = useCallback(() => {
        const timer1 = setInterval(() => {
            setCount1((prevCount) => {
                if (prevCount < 250) {
                    return prevCount + 1;
                } else {
                    clearInterval(timer1);
                    return prevCount;
                }
            });
        }, 10);

        const timer2 = setInterval(() => {
            setCount2((prevCount) => {
                if (prevCount < 18) {
                    return prevCount + 1;
                } else {
                    clearInterval(timer2);
                    return prevCount;
                }
            });
        }, 100);

        const timer3 = setInterval(() => {
            setCount3((prevCount) => {
                if (prevCount < 173) {
                    return prevCount + 1;
                } else {
                    clearInterval(timer3);
                    return prevCount;
                }
            });
        }, 10);

        const timer4 = setInterval(() => {
            setCount4((prevCount) => {
                if (prevCount < 2) {
                    return prevCount + 1;
                } else {
                    clearInterval(timer4);
                    return prevCount;
                }
            });
        }, 100);

        return () => {
            clearInterval(timer1);
            clearInterval(timer2);
            clearInterval(timer3);
            clearInterval(timer4);
        };
    }, []);

    // Intersection Observer to detect when the section is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing once the section is visible
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Start counting when the section becomes visible
    useEffect(() => {
        if (isVisible) {
            startCounting();
        }
    }, [isVisible, startCounting]);
    return (
        <>
            <section className="about_header">
                <span className="opacity_about"></span>
                <div className="about_header_text">
                    <h1>About us</h1>
                </div>
            </section>

            <section className={"about_s1 container "}>
                <div className="row ">
                    <div className="col-lg-5">
                        <div className="about_s1_title">
                            <h2>We make what we love</h2>
                            <span></span>
                        </div>
                        <div className="about_s1_text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="about_s1_title">
                            <h2>new ideas</h2>
                            <span></span>
                        </div>
                        <div className="about_s1_text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="about_s1_title">
                            <h2>new spirit</h2>
                            <span></span>
                        </div>
                        <div className="about_s1_text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about_s2 overflow-hidden">
                <div className="row justify-content-center align-items-center">

                    <div className="col-lg-6" data-aos="fade-right">
                        <img src={about_s2_1} alt=""/>
                    </div>
                    <div className="col-lg-6" data-aos="fade-left">
                        <div className="about_s2_text">
                            <div className="about_s2_text_title">
                                <p>New Division</p>

                            </div>
                            <h1>The crafting furniture house Decoration</h1>
                            <a href="#">View More</a>
                        </div>
                    </div>

                    <div className="col-lg-6" data-aos="fade-right">
                        <div className="about_s2_text">
                            <div className="about_s2_text_title">
                                <p>New Division</p>
                            </div>
                            <h1>recycle rubbish crafting Fashion Apparel</h1>
                            <a href="#">View More</a>
                        </div>

                    </div>
                    <div className="col-lg-6" data-aos="fade-left">
                        <img src={about_s2_2} alt=""/>
                    </div>
                </div>
            </section>
            <div className="container">
                <section className="about_s3">
                    <div className="row justify-content-between ">
                        <div className="col-lg-6 about_s3_left" data-aos="fade-up">
                            <h3><span></span> About Workshop</h3>
                            <h2>Let's be creative together</h2>
                        </div>
                        <div className="col-lg-6 about_s3_right" data-aos="fade-up">
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

            <section className='number' ref={sectionRef}>
                <span className="number_opacity"></span>
                <div className="number_box ">
                    <div className="row " data-aos="fade-right" style={{width:"100%"}}>
                        <div className="col-lg-3">
                            <p className='count'>{count1}</p>
                            <p className="last"> Projects</p>
                        </div>
                        <div className="col-lg-3">
                            <p className='count'>{count2}</p>
                            <p className="last">Divisions</p>
                        </div>
                        <div className="col-lg-3">
                            <p className='count'>{count3}</p>
                            <p className="last">New Design</p>
                        </div>
                        <div className="col-lg-3">
                            <p className='count'>2</p>
                            <p className="last">branch store</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;