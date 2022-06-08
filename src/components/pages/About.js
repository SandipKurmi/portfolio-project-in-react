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
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi laboriosam error deserunt nemo iste sint similique quam placeat ipsum quidem perspiciatis cupiditate minus eaque atque, adipisci fuga impedit sunt sequi! Ipsa ex ratione numquam eligendi ut expedita magnam ad dicta error! Inventore nihil sunt corporis earum eaque ex soluta similique ullam ipsum architecto neque nostrum porro, repudiandae nemo at doloremque repellendus voluptates sit incidunt? Dolorem perferendis cum praesentium similique, quidem optio delectus, tenetur autem distinctio soluta explicabo iusto consequuntur eveniet, odit incidunt culpa alias ea. Molestiae rem iusto id facilis, eveniet, dolor laborum aliquid corporis non ducimus veniam, recusandae veritatis?</p>
                        <Link to="/" className="btn btn-warning shadow">Read More</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About