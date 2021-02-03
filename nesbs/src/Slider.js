import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from 'react-bootstrap';
import './Slider.css'

function Slider() {
    return (
        <div>
            <ReactBootstrap.Carousel>
  <ReactBootstrap.Carousel.Item className="block">
    <img
      className="image"
      src="../public/assets/img/1.jpg"
      alt="First slide"
    />
    <ReactBootstrap.Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </ReactBootstrap.Carousel.Caption>
  </ReactBootstrap.Carousel.Item>
  <ReactBootstrap.Carousel.Item className="block">
    <img
      className="image"
      src="../public/assets/img/1.jpg"
      alt="Third slide"
    />

    <ReactBootstrap.Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </ReactBootstrap.Carousel.Caption>
  </ReactBootstrap.Carousel.Item>
  <ReactBootstrap.Carousel.Item className="block">
    <img
      className="image" src="./public/assets/img/1.jpg" alt="Third slide"
    />

    <ReactBootstrap.Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </ReactBootstrap.Carousel.Caption>
    </ReactBootstrap.Carousel.Item>
    </ReactBootstrap.Carousel>
        </div>
    )
}

export default Slider
