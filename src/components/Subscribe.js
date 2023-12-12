import React from 'react'
import '../components/subscribe.css'
import mail_img from '../Images/email.png'

const Subscribe = () => {
    return (
        <>
            <section className="sectiom section_9">
                <div className="sec-9_heading">
                    <h2>Subscribe to Our Newsletter</h2>
                    <h3>Curated industry news.<br />Delivered once a month. We hate SPAM too!</h3>
                </div>
                <div className="form_banner">
                    <form className="subscribe_form">
                        <div className="sub_input_group">
                            <img src={mail_img} alt='mail' />
                            <input type="email" className="form_box" name="email" placeholder="Enter your email address" />
                            <button className="btn-3">Subscribe Now</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Subscribe
