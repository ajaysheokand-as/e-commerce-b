import React from 'react'
import { Col, Row } from 'react-bootstrap'
import home_decore from '../Images/image92.png';
import { Datastr } from './Data';

const Product = () => {
    return (
        <div>
            <div className='container'>
                <div className='content_box d-flex' >
                    <div>
                        <img src={home_decore} alt='home_decore' />
                    </div>
                    <Row>
                        {Datastr.map((data) => {
                            return (
                                <Col lg={3} key={data} className='d-flex'>
                                    <div>
                                        <h3>{data.headind}</h3>
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
            </div>
        </div>
    )
}

export default Product
