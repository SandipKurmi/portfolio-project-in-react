import React from 'react'
import { Link } from 'react-router-dom'
import Slider from '../inc/Slider'
import VMC from './inc/Vmc'

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

            <section className="section bg-c-light border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading">Our Services</h3>
                            <div className="underline mx-auto"> </div>
                        </div>
                        <div className="col-md-4 ">
                            <h6>Our Vision</h6>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam temporibus tempora quia porro quas earum accusamus consequatur ad reiciendis rerum beatae asperiores hic ut voluptates incidunt, </p>
                        </div>
                        <div className="col-md-4 ">
                            <h6>Our Mission</h6>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam temporibus tempora quia porro quas earum accusamus consequatur ad reiciendis rerum beatae asperiores hic ut voluptates incidunt, </p>
                        </div>
                        <div className="col-md-4 ">
                            <h6>Our Core values</h6>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam temporibus tempora quia porro quas earum accusamus consequatur ad reiciendis rerum beatae asperiores hic ut voluptates incidunt, </p>
                        </div>
                    </div>
                </div>
            </section>
        </>


    )
}

export default Home