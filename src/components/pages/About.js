import React from 'react'
import AboutSlider from '../inc/AboutSlider'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <>
            <AboutSlider />
            {/* create about paje with bootstrap and react */}
            <section className="section">
                <div className="container">
                    <div className="col-md-12 text-center">
                        <h3 className="main-heading">About Us</h3>
                        <div className="underline mx-auto"> </div>
                        <i className="bi bi-facebook"></i>
                        <p>There's this notion that to grow a business, you have to be ruthless. But we know there's a better way to grow. One where what's good for the bottom line is also good for customers. We believe businesses can grow with a conscience, and succeed with a soul — and that they can do it with inbound. That's why we've created an ecosystem uniting software, education, and community to help businesses grow better every day.</p>
                        <Link to="/" className="btn btn-warning shadow">Read More</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About