import React, { Component } from "react";
import gallery01 from "./img/gallery-01-small.jpg";
import gallery02 from "./img/gallery-02-small.jpg";
import gallery03 from "./img/gallery-03-small.jpg";
import gallery04 from "./img/gallery-04-small.jpg";
import gallery05 from "./img/gallery-05-small.jpg";
import gallery06 from "./img/gallery-06-small.jpg";
import gallery07 from "./img/gallery-07-small.jpg";
import gallery08 from "./img/gallery-08-small.jpg";
import gallery09 from "./img/gallery-09-small.jpg";

class Gallery extends Component {
  render() {
    return (
<div>
<div className="content">
<div id="gallery" class="gallery">
  <h1>Rescued Horses Gallery</h1>
  <p>Do you want to save horses in danger? There are three ways you can do to save them.<br />
  Please don't hasitate to contact us today, horses are waiting for you.
  </p>

  <div class="row">
    <div class="col-md-4">
      <div class="thumbnail">
        <img src={gallery01} alt="Kelly" style={{width:"100%"}} ></img>
      </div>
    </div>

    <div class="col-md-4">
      <div class="thumbnail">
        <img src={gallery02} alt="Lika" style={{width:"100%"}}></img>
      </div>
    </div>

    <div class="col-md-4">
      <div class="thumbnail">
        <img src={gallery03} alt="David" style={{width:"100%"}}></img>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-md-4">
      <div class="thumbnail">
        <img src={gallery04} alt="Kelly" style={{width:"100%"}}></img>
      </div>
    </div>

    <div class="col-md-4">
      <div class="thumbnail">
        <img src={gallery05} alt="Lika" style={{width:"100%"}}></img>
      </div>
    </div>

    <div class="col-md-4">
      <div class="thumbnail">
        <img src={gallery06} alt="David" style={{width:"100%"}}></img>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-md-4">
      <div class="thumbnail">
        <img src={gallery07} alt="Kelly" style={{width:"100%"}}></img>
      </div>
    </div>

    <div class="col-md-4">
      <div class="thumbnail">
        <img src={gallery08} alt="Lika" style={{width:"100%"}}></img>
      </div>
    </div>

    <div class="col-md-4">
      <div class="thumbnail">
        <img src={gallery09} alt="David" style={{width:"100%"}}></img>
      </div>
    </div>
  </div>

</div>
</div>
</div>
    );
  }
}
 
export default Gallery;