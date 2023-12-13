import React from 'react'
import '../components/extra_service.css'
import { Data_ser } from './Data'
import { Col, Container } from 'react-bootstrap'

function Extra_service() {
    return (
        <>
            <Container>
                <div className='recommended_items mt-4'>
                    <h1 className='ser_heading mb-4'>Our extra services</h1>
                    <div className='content_box_ser'>
                        <div className='row'>
                            {Data_ser.map((data) => {
                                return (
                                    <Col lg={3} md={6} sm={12} key={data}>
                                        <div className='col_boxs_ser'>
                                            <div className='img_service'>
                                                <div className='img_box'>
                                                    <img src={data.img} alt='img' />
                                                    {/* <div className='service_icon'></div> */}
                                                </div>
                                                <div className='service_text'>
                                                    <h5>{data.heading}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Extra_service
