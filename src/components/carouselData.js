import React from 'react';

// custom CSS starts
import '../styles/carouselData01.css';
// custom CSS ends

// Carousel Starts
import { Carousel } from 'react-bootstrap';
// carouselimg
import carouselimg1 from './images/carousel/1.jpg';
import carouselimg2 from './images/carousel/2.jpg';
import carouselimg3 from './images/carousel/3.jpg';
import carouselimg4 from './images/carousel/4.jpg';
// Carousel Ends


const Carousel01 = () => {
    const items = [
        {
            src: carouselimg1,
            altText: 'Arac Polywrap manufacturing facility',
            caption: 'Packaging films, made for performance.',
            description: 'Flexible packaging solutions for the products and industries that move us.',
        },
        {
            src: carouselimg2,
            altText: 'Stretch film rolls',
            caption: 'Protection that keeps goods moving.',
            description: 'Reliable stretch and shrink films for your supply chain.',
        },
        {
            src: carouselimg3,
            altText: 'Products packaged with protective film',
            caption: 'Flexible solutions for changing needs.',
            description: 'Thoughtfully engineered films for a wide range of applications.',
        },
        {
            src: carouselimg4,
            altText: 'Agricultural film protecting crop rows',
            caption: 'Supporting a more productive harvest.',
            description: 'Agricultural film solutions designed for modern farming.',
        }
    ];

    return (
            <Carousel className="hero-carousel" interval={6000} pause="hover">
                {items.map((item, index) => (
                <Carousel.Item key={item.src}>
                    <img
                    className="d-block w-100 carouselData01Img"
                    src={item.src}
                    alt={item.altText}
                    />
                    <Carousel.Caption>
                    <p className="hero-eyebrow">Arac Polywrap Limited</p>
                    <h1>{item.caption}</h1>
                    <p className="hero-description">{item.description}</p>
                    <a className="hero-cta" href="#Product">
                        Explore our products <span aria-hidden="true">→</span>
                    </a>
                    </Carousel.Caption>
                </Carousel.Item>
                ))}
            </Carousel>
    );
}

export default Carousel01;
