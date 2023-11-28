import React from 'react'
import '../components/inquiry.css'
import { Container, Row, Col } from 'react-bootstrap'

function Inquiry() {
    return (
        <>
            <section className="pb-4 pt-4">
                <Container>
                    <div className='background'>
                        <Row>
                            <Col lg={6} md={6}>
                                <div className='text_box'>
                                    <h3>An easy way to send requests to all suppliers</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </Col>
                            <Col lg={6} md={6}>
                                <div className='inquiry_form'>
                                    <form>
                                        <h6 className="mb-3">Send quote to suppliers</h6>
                                        <div className='mb-3'>
                                            <input type="text" className="form-control" placeholder="What item you need?" />
                                        </div>
                                        <div className='mb-3'>
                                            <textarea class="form-control" placeholder="Type more details" rows="3"></textarea>
                                        </div>
                                        <div className='mb-3 d-flex' style={{ width: '250px' }}>
                                            <input type="number" className=" me-2 form-control" placeholder="Qty" />
                                            <select className='form-select'>
                                                <option>Litres</option>
                                                <option>kgs</option>
                                            </select>
                                        </div>
                                        <button class="btn btn-primary"> Send inquiry </button>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Inquiry
