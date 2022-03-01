import React from 'react';
import { Carousel } from 'react-bootstrap';
import './css/carousel.css';
import Image1 from './assets/fullColor/goblinfisher.png';
import Image2 from './assets/fullColor/Himiko.png';
import Image3 from './assets/fullColor/Mousekateer.png';
import Image4 from './assets/fullColor/ShyGirl.png';
import Image5 from './assets/fullColor/SwampWizard.png';
import Image6 from './assets/fullColor/Thing.png';


function CarouselComponent() {
  return (
    <div id='carousel-container'>
      <Carousel className="carousel">
        <Carousel.Item>
          <div className='item-container'>
            <img
              className="d-block w-100"
              src={Image1}
              alt="Goblin Fisher"
            />
            <Carousel.Caption>
              <h3>Goblin Fisher</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className='item-container'>
            <img
              className="d-block w-100"
              src={Image2}
              alt="Himiko"
            />

            <Carousel.Caption>
              <h3>Himiko</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className='item-container'>
            <img
              className="d-block w-100"
              src={Image3}
              alt="Mouse-kateer"
            />

            <Carousel.Caption>
              <h3>Mouse-kateer</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className='item-container'>
            <img
              className="d-block w-100"
              src={Image4}
              alt="ShyGirl"
            />
            <Carousel.Caption>
              <h3>ShyGirl</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className='item-container'>
            <img
              className="d-block w-100"
              src={Image5}
              alt="Swamp Wizard"
            />
            <Carousel.Caption>
              <h3>Swamp Wizard</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className='item-container'>
            <img
              className="d-block w-100"
              src={Image6}
              alt="Thing"
            />
            <Carousel.Caption>
              <h3>Thing</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CarouselComponent
