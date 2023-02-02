import React from 'react'
import { sliderData } from './sliderData'
import { Carousel } from 'flowbite-react'


function LandingSlider() {

    const showCarousel = sliderData.map((slide, index)=> {
		return (
			<div key={index} className="ease-in-out " data-carousel-slide>
                <img src={slide.image} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="slider"/>
            </div>
        )    
    })    
 
    return(
        <div className="container mx-auto h-56 sm:h-64 xl:h-80 2xl:h-96 relative m-8 overflow-hidden">
            <Carousel slideInterval={5000} data-carousel="slide">
                {showCarousel}
            </Carousel>
        </div>
    )
}
export default LandingSlider
