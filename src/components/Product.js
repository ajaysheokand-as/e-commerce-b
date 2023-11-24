import React from 'react'
import '../components/product.css'
import { Col, Row } from 'react-bootstrap'
import consumer from '../Images/image98.png';
import home_decore from '../Images/image92.png';
import { Datastr, Datastr2 } from './Data';

const Product = () => {
    return (
        <div>
            <div className='container'>
                <div className='content_box d-flex' >
                    <div className='product_main'>
                        <img src={home_decore} alt='home_decore' />
                        <div className='source_btn'>
                            <h3>Home and <br />outdore</h3>
                            <button>Source now</button>
                        </div>
                    </div>
                    <Row>
                        {Datastr.map((data) => {
                            return (
                                <Col lg={3} key={data} className='d-flex'>
                                    <div className='product_text'>
                                        <h3>{data.heading}</h3>
                                        <p>
                                            {data.per}
                                        </p>
                                        <span>{data.span}</span>
                                    </div>
                                    <div>
                                        <img src={data.img} alt='sofa' />
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
                <div className=' content_box d-flex'>
                    <div className='product_main'>
                        <img src={consumer} alt='home_decore' />
                        <div className='source_btn'>
                            <h3>Consumer <br />electronics and<br /> gadgets</h3>
                            <button>Source now</button>
                        </div>
                    </div>
                    <Row>
                        {Datastr2.map((data2) => {
                            return (
                                <Col lg={3} key={data2} className='d-flex'>
                                    <div className='product_text'>
                                        <h3>{data2.heading}</h3>
                                        <p>
                                            {data2.per}
                                        </p>
                                        <span>{data2.span}</span>
                                    </div>
                                    <div>
                                        <img src={data2.img} alt='sofa' />
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Product
