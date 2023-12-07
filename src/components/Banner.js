import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import '../components/banner.css'
import { Databnr } from './Data'
import banner_img from '../Images/banner_img.png'
import avtar_img from '../Images/Avatar.png'
import AOS from 'aos'; import 'aos/dist/aos.css';
import "@fontsource/inter";
import "@fontsource/inter/400.css";

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
                                <img src={banner_img} alt='img' />
                                <div className='bnner_text_btn' data-aos="fade-up-right">
                                    <h5>Latest trending</h5>
                                    <h2>Electronic items</h2>
                                    <button type="button" className="btn btn-light">Learn more</button>
                                </div>
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