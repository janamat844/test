import React from 'react'

function Gallery() {
    return (
        <div>
             <div class="row">
                <div class="col-md-4">
                <div class="thumbnail">
                  <a href="/w3images/lights.jpg">
                    <img src="/assets/img/1.jpg" alt="Lights" />
                    <div class="caption">
                        <p>Lorem ipsum...</p>
                   </div>
                  </a>
                </div>
              </div>
  <div class="col-md-4">
    <div class="thumbnail">
      <a href="/w3images/nature.jpg">
        <img src="/assets/img/1.jpg" alt="Nature"/>
        <div class="caption">
          <p>Lorem ipsum...</p>
        </div>
      </a>
    </div>
  </div>
  <div class="col-md-4">
    <div class="thumbnail">
      <a href="/w3images/fjords.jpg">
        <img src="/assets/img/1.jpg" alt="Fjords"/>
        <div class="caption">
          <p>Lorem ipsum...</p>
        </div>
      </a>
    </div>
  </div>
</div>
        </div>
    )
}

export default Gallery
