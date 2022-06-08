import React from 'react'
import About1 from '.././images/about1.svg'
import About2 from '.././images/about2.svg'
import About3 from '.././images/about3.svg'
import About4 from '.././images/about4.svg'
import About5 from '.././images/about5.svg'

const AboutSlider = () => {
    return (
        <div id="carouselExampleIndicators" class="carousel slide m" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>

            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={About1} class="d-block w-100 h-670.5px" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={About2} class="d-block w-100 h-670.5px" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={About3} class="d-block w-100 h-670.5px" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={About4} class="d-block w-100 h-670.5px" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={About5} class="d-block w-100 h-670.5px" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default AboutSlider