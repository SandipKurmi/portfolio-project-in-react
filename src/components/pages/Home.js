import React from 'react'
import { Link } from 'react-router-dom'
import Slider from '../inc/Slider'
import VMC from './inc/Vmc'
import service1 from '../images/service1.jpg'
import service2 from '../images/service2.jpg'
import service3 from '../images/services4.jpg'

const Home = () => {
    return (
        <>
            <Slider />
            <section className="section">
                <div className="container">
                    <div className="col-md-12 text-center">
                        <h3 className="main-heading">Our Company</h3>
                        <div className="underline mx-auto"> </div>
                        <p>As fellow graduate students at MIT in 2004, Brian and Dharmesh noticed a shift in the way people shop and buy. Consumers were no longer tolerating interruptive bids for their attention — in fact, they'd gotten really, really good at ignoring them.
                            From this shift, a company was born: HubSpot. It was founded on "inbound", the notion that people don't want to be interrupted by marketers or harassed by salespeople — they want to be helped.
                            Today, the inbound movement continues to empower businesses around the world to stop interrupting, start helping, and return their focus to the customer.?</p>
                        <Link to="/about" className="btn btn-warning shadow">Read More</Link>
                    </div>
                </div>
            </section>
            {/* our vision misssion and values */}
            <VMC />


            {/* our services */}
            <section className="section bg-c-light border-top mt-">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading">Our Services</h3>
                            <div className="underline mx-auto"> </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="card shadow">
                                <img src={service1} className="w-60 h-100px border-bottom" alt="Services" />
                                <div className="card-body">
                                    <h6>Service 1</h6>
                                    <div className="underline"></div>
                                    <p>Sales CRM software to help you get deeper insights into prospects, automate the tasks you hate, and close more deals faster.</p>
                                    <Link to="/" className="btn btn-warning shadow">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="card shadow">
                                <img src={service2} className="w-60 h-100px border-bottom" alt="Services" />
                                <div className="card-body">
                                    <h6>Service 2</h6>
                                    <div className="underline"></div>
                                    <p>Sales CRM software to help you get deeper insights into prospects, automate the tasks you hate, and close more deals faster.</p>
                                    <Link to="/" className="btn btn-warning shadow">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="card shadow">
                                <img src={service3} className="w-60 h-100px border-bottom" alt="Services" />
                                <div className="card-body">
                                    <h6>Service 3</h6>
                                    <div className="underline"></div>
                                    <p>Content management software that’s flexible for marketers, powerful for developers, and gives customers a personalized, secure experience.</p>
                                    <Link to="/" className="btn btn-warning shadow">Read More</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>


    )
}

export default Home