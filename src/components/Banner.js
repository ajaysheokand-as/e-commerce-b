import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import '../components/banner.css'
import { Databnr } from './Data'
import banner_img from '../Images/banner_img.png'
import avtar_img from '../Images/Avatar.png'
import banner_img2 from '../Images/main-phone.png'
import AOS from 'aos'; import 'aos/dist/aos.css';
import "@fontsource/inter";
import "@fontsource/inter/400.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Banner() {
    useEffect(() => {
        AOS.init({ duration: "1500" });
    }, [])
    return (
        <>
            <div className='container'>
                <div className='banner'>
                    <Row>
                        <Col lg={3} md={3} className='banner_list' >
                            {Databnr.map((lis) => {
                                return (
                                    <ul key={lis} className='ul_list' data-aos="zoom-out-left">
                                        <li> {lis.txt}</li>
                                    </ul>
                                )
                            })}
                        </Col>
                        <Col lg={7} md={7}>
                            <div className='banner_slide'>
                                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                    {/* <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div> */}
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={banner_img} className="d-block w-100" alt="..." />
                                            <div className='bnner_text_btn' data-aos="fade-up-right">
                                                <h5>Latest trending</h5>
                                                <h2>Electronic items</h2>
                                                <button type="button" className="btn btn-light">Learn more</button>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img src={banner_img2} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={banner_img} className="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                                {/* <img src={banner_img} alt='img' />
                                <div className='bnner_text_btn' data-aos="fade-up-right">
                                    <h5>Latest trending</h5>
                                    <h2>Electronic items</h2>
                                    <button type="button" className="btn btn-light">Learn more</button>
                                </div> */}
                            </div>
                        </Col>
                        <Col sm={2}>
                            <div className='login'>
                                <div className='avtar'>
                                    <div className='avtar_img d-flex'>
                                        <img src={avtar_img} alt='avt' />
                                        <h4>Hi, user  let’s get stated</h4>
                                    </div>
                                    <div className='login_btn'>
                                        <button type="button" className="btn btn-primary">Join Now</button>
                                        <button type="button" className="btn btn-light">Log in</button>
                                    </div>
                                </div>
                                <div className='IInd_div'>
                                    <div className='div_text'>
                                        <h4>Get US $10 off with a new supplier</h4>
                                    </div>
                                </div>
                                <div className='IIIrd_div'>
                                    <div className='div_text'>
                                        <h4>Send quotes with supplier preferences</h4>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div >
            </div >
        </>
    )
}

export default Banner
