import React, { useEffect } from 'react'
import '../components/product.css'
import { Col, Row } from 'react-bootstrap'
import consumer from '../Images/image98.png';
import home_decore from '../Images/image92.png';
import { Datastr, Datastr2 } from './Data';
// import AOS from 'aos'; import 'aos/dist/aos.css'

const Product = () => {
    return (
        <div>
            <div className='container'>
                <div className='content_box d-flex' >
                    <h1 className='product_heading'>Home and outdor</h1>
                    <div className='product_main' data-aos="flip-left">
                        <img src={home_decore} alt='home_decore' />
                        <div className='source_btn'>
                            <h3>Home and <br />outdore</h3>
                            <button>Source now</button>
                        </div>
                    </div>
                    <Row>
                        {Datastr.map((data) => {
                            return (
                                <Col lg={3} md={3} sm={5} key={data} className='d-flex col_box'>
                                    <div className='product_text'>
                                        <h3>{data.heading}</h3>
                                        <p>
                                            {data.per}
                                        </p>
                                        <span>{data.span}</span>
                                    </div>
                                    <div className='product_img'>
                                        <img src={data.img} alt='sofa' data-aos="flip-left" />
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
                <div className=' content_box d-flex'>
                    <h1 className='product_heading'>Consumer electronics</h1>
                    <div className='product_main' data-aos="flip-left">
                        <img src={consumer} alt='home_decore' />
                        <div className='source_btn'>
                            <h3>Consumer <br />electronics and<br /> gadgets</h3>
                            <button>Source now</button>
                        </div>
                    </div>
                    <Row>
                        {Datastr2.map((data2) => {
                            return (
                                <Col lg={3} md={3} sm={5} key={data2} className='d-flex col_box'>
                                    <div className='product_text'>
                                        <h3>{data2.heading}</h3>
                                        <p>
                                            {data2.per}
                                        </p>
                                        <span>{data2.span}</span>
                                    </div>
                                    <div className='product_img'>
                                        <img src={data2.img} alt='sofa' data-aos="flip-left" />
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
