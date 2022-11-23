import React, { Component } from "react";
import icon1 from "./img/icon-grass.png";
import icon2 from "./img/icon-home.png";
import icon3 from "./img/icon-money.png";
import carousel01 from "./img/carousel-01.jpg";
import carousel02 from "./img/carousel-05.jpg";
import carousel03 from "./img/carousel-04.jpg";



class Home extends Component {
  render() {
    return (
<div id="home">
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <div class="carousel-inner">
      
      <div class="item active">
        <img src={carousel01} alt="horse Kelly"></img>
        <div class="carousel-caption">
          <h1>Support</h1>
          <p>Your help would be very much appriciated.</p>
          <button type="button" class="btn btn-carousel"><a href="#/donation">Donate Now</a></button>
        </div>
      </div>

      <div class="item">
        <img src={carousel02} alt="horse KBella"></img>
        <div class="carousel-caption">
          <h1>Projects</h1>
          <p>We have adaption and charity events.</p>
          <button type="button" class="btn btn-carousel"><a href="#/projects">Check Projects</a></button>
        </div>
      </div>

      <div class="item">
        <img src={carousel03} alt="horse KDavid"></img>
        <div class="carousel-caption">
          <h1>Rescued Horses</h1>
          <p>They enjoy their second life.</p>
          <button type="button" class="btn btn-carousel"><a href="#/gallery">Gallery</a></button>
        </div>
      </div>

    </div>

    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

  <div className="content">
    <div id="about" class="about">
      <h1>What can we do to save horses?</h1>
      <p>Do you want to save horses in danger? There are three ways you can do to save them.<br />
      Please don't hasitate to contact us today, horses are waiting for you.
      </p>
      <div class="row">
        <div class="col-md-4">
          <div class="thumbnail">
            <div class="caption">
              <img src={icon2} alt="Los Angeles" style={{width:"40%"}}></img>
              <h2>Adaption</h2>
               <p>Horses are good friends of humans. If it's your dream to live with horses, you might consider adapting them.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="thumbnail">
            <div class="caption">
              <img src={icon3} alt="Los Angeles" style={{width:"40%"}}></img>
              <h2>Donation</h2>
              <p>We appreciate your donation to help us rescue horses. Your donation help them have proper medication.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="thumbnail">
            <div class="caption">
              <img src={icon1} alt="Los Angeles" style={{width:"40%"}}></img>
              <h2>Offer Pastureland</h2>
              <p>Do you have pastureland that you are not in need for a while? Horses are naturally in need of large pastureland.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    );
  }
}
export default Home;