import React from 'react'
import './Owl.css'

function Carousel() {
    return (
        <div>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
            <img src="/assets/img/cover.jpg" class="d-block w-100" alt="..."/>
       </div>
      <div class="carousel-item" data-bs-interval="2000">
          <img src="/assets/img/cover.jpg" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
           <img src="/assets/img/cover.jpg" class="d-block w-100" alt="..."/>
      </div>
    </div>
  <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
</div>
        </div>
    )
}

export default Carousel