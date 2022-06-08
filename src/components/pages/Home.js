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
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi laboriosam error deserunt nemo iste sint similique quam placeat ipsum quidem perspiciatis cupiditate minus eaque atque, adipisci fuga impedit sunt sequi! Ipsa ex ratione numquam eligendi ut expedita magnam ad dicta error! Inventore nihil sunt corporis earum eaque ex soluta similique ullam ipsum architecto neque nostrum porro, repudiandae nemo at doloremque repellendus voluptates sit incidunt? Dolorem perferendis cum praesentium similique, quidem optio delectus, tenetur autem distinctio soluta explicabo iusto consequuntur eveniet, odit incidunt culpa alias ea. Molestiae rem iusto id facilis, eveniet, dolor laborum aliquid corporis non ducimus veniam, recusandae veritatis?</p>
                        <Link to="/about" className="btn btn-warning shadow">Read More</Link>
                    </div>
                </div>
            </section>
            {/* our vision misssion and values */}
            <VMC />


            {/* our services */}
            <section className="section bg-c-light border-top">
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
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in ducimus velit commodi, repellat iste.</p>
                                    <Link to="/services" className="btn btn-warning shadow">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="card shadow">
                                <img src={service2} className="w-60 h-100px border-bottom" alt="Services" />
                                <div className="card-body">
                                    <h6>Service 2</h6>
                                    <div className="underline"></div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in ducimus velit commodi, repellat iste.</p>
                                    <Link to="/services" className="btn btn-warning shadow">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="card shadow">
                                <img src={service3} className="w-60 h-100px border-bottom" alt="Services" />
                                <div className="card-body">
                                    <h6>Service 3</h6>
                                    <div className="underline"></div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in ducimus velit commodi, repellat iste.</p>
                                    <Link to="/services" className="btn btn-warning shadow">Read More</Link>
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