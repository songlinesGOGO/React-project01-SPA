import React, { Component } from "react";
import project01 from "./img/project-01.jpg";
import project02 from "./img/project-02.jpg";
import project03 from "./img/project-03.jpg";
import project04 from "./img/project-04.jpg";
import project05 from "./img/project-05.jpg";
import project06 from "./img/project-06.jpg";


class Projects extends Component {
  render() {
    return (
<div id="projects">
  <div className="content">
    <div id="project" class="project">
      <h1>Our Projects</h1>
      <p>Do you want to save horses in danger? There are three ways you can do to save them.<br />
      Please don't hasitate to contact us today, horses are waiting for you.
      </p>
      <div class="row">
        <div class="col-md-6">
          <div class="thumbnail">
            <h2>Adaption 2022 Spring/Summer</h2>
            <div class="caption">
              <p>Horses are good friends of humans. If it's your dream to live with horses, you might consider adapting them.<br />
              Horses are good friends of humans. If it's your dream to live with horses, you might consider adapting them.<br />
              <br />
              Please feel free to contact us. If it's your dream to live with horses, you might consider adapting them.
              </p>
              <img src={project01} alt="Los Angeles"></img>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="thumbnail">
            <h2>Charity Festival in Amsterdam</h2>
            <div class="caption">
              <p>We always appreciate your donation to help us rescue horses. Your donation help them have proper medication.<br />
              <br />
              Horses are good friends of humans. If it's your dream to live with horses, you might consider adapting them. We always appreciate your donation to help us rescue horses. Your donation help them have proper medication.
              </p>
              <img src={project02} alt="Los Angeles"></img>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="thumbnail">
            <h2>Meet Rescued Horses 2022</h2>
            <div class="caption">
              <p>Do you want to see our horses? Of course you can! Please register in advance, you're always welcome.<br />
              Horses are good friends of humans. If it's your dream to live with horses, you might consider adapting them.<br /><br />
              Horses are good friends of humans. If it's your dream to live with horses, you might consider adapting them.
              </p>
              <img src={project03} alt="Los Angeles"></img>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="thumbnail">
            <h2>Adaption 2021 Autumn/Witer</h2>
            <div class="caption">
              <p>Horses are good friends of humans. If it's your dream to live with horses, you might consider adapting them. Horses are good friends of humans. If it's your dream to live with horses, you might consider adapting them.<br /><br />
              Horses are good friends of humans. If it's your dream to live with horses, you might consider adapting them.</p>
              <img src={project04} alt="Los Angeles"></img>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="thumbnail">
            <h2>Adaption 2021 Spring/Summer</h2>
            <div class="caption">
              <p>Horses are good friends of humans. If it's your dream to live with horses, you might consider adapting them.<br />
              <br />
              Horses are good friends of humans. If it's your dream to live with horses, you might consider adapting them.
              </p>
              <img src={project05} alt="Los Angeles"></img>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="thumbnail">
            <h2>Charity Concerts in NewYork</h2>
            <div class="caption">
              <p>We always appreciate your donation to help us rescue horses. Your donation help them have proper medication.<br />
              Horses are good friends of humans.<br /><br />
              If it's your dream to live with horses, you might consider adaption.<br />
              </p>
              <img src={project06} alt="Los Angeles"></img>
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
 
export default Projects;