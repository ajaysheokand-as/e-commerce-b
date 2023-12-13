import React from 'react'
import '../components/reco_item.css'
import { Col, Container } from 'react-bootstrap'
import { Data_rec } from './Data'

function Reco_item() {
    return (
        <>
            <Container>
                <div className='recommended_items'>
                    <h1>Recommended items</h1>
                    <div className='content_box_rec '>
                        <div className='row width-1170'>
                            {/* row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 */}
                            {Data_rec.map((data) => {
                                return (
                                    <Col key={data}>
                                        <div className='col_boxs'>
                                            <div className='img_and_text'>
                                                <div className='img_box'>
                                                    <img src={data.img} alt='img' />
                                                </div>
                                                <div className='text_box'>
                                                    <span>{data.span}</span>
                                                    <h5>{data.heading}</h5>
                                                    <button className='btn btn-success reco_item_btn'>Buy now</button>
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

export default Reco_item
