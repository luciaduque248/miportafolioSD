import forjaGIF from "../../assets/img/forja.gif";
import Virtuosa from "../../assets/img/virtuosa.gif";
import AnimalandiaBStrap from "../../assets/img/bootstrap.gif";
import AnimalandiaHTML from "../../assets/img/animalandia.gif";
import Frida from "../../assets/img/frida.gif";

import html from "../../assets/img/html.png";
import css from "../../assets/img/css.png";
import js from "../../assets/img/javascript.png";
import bootstrap from "../../assets/img/boostrap.png";

import React, { Component } from "react";
import Slider from "react-slick";

import "./carousel.css";

export default class Responsive extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="slide">
                <Slider {...settings}>
                    <div className="images-carousel forja">
                        <img src={forjaGIF} alt="cargando..." width="340vw" height="200px" />
                        <figure>
                            <div className="revelador">
                                <p>Hecho con:</p>
                                <div className="apps-projects">
                                    <img src={html} alt="html" className="img-html" />
                                    <img src={css} alt="css" className="img-css" />
                                    <img src={js} alt="js" className="img-js" />
                                </div>
                            </div>
                        </figure>
                    </div>
                    <div className="images-carousel virtuosa">
                        <img src={Virtuosa} alt="cargando..." width="340vw" height="200px" />
                        <figure>
                            <div className="revelador">
                                <p>Hecho con:</p>
                                <div className="apps-projects">
                                    <img src={html} alt="html" className="img-html" />
                                    <img src={css} alt="css" className="img-css" />
                                </div>
                            </div>
                        </figure>
                    </div>
                    <div className="images-carousel animalandiaBTP">
                        <img src={AnimalandiaBStrap} alt="cargando..." width="340vw" height="200px" />
                        <figure>
                            <div className="revelador">
                                <p>Hecho con:</p>
                                <div className="apps-projects">
                                    <div className="bootstrap">
                                        <img src={bootstrap} alt="bootstrap" className="img-bootstrap" />
                                    </div>
                                    <img src={css} alt="css" className="img-css" />
                                </div>
                            </div>
                        </figure>
                    </div>
                    <div className="images-carousel animaladiaHTML">
                        <img src={AnimalandiaHTML} alt="cargando..." width="340vw" height="200px" />
                        <figure>
                            <div className="revelador">
                                <p>Hecho con:</p>
                                <div className="apps-projects">
                                    <img src={html} alt="html" className="img-html" />
                                    <img src={css} alt="css" className="img-css" />
                                </div>
                            </div>
                        </figure>

                    </div>
                    <div className="images-carousel frida">
                        <img src={Frida} alt="cargando..." width="340vw" height="200px" />
                        <figure>
                            <div className="revelador">
                                <p>Hecho con:</p>
                                <div className="apps-projects">
                                    <img src={html} alt="html" className="img-html" />
                                    <img src={css} alt="css" className="img-css" />
                                </div>
                            </div>
                        </figure>

                    </div>

                </Slider>
            </div>
        );
    }
}

