import React, { Component } from "react";


class Footer extends Component {
  render() {
    return (
        <div id="footer">
        <nav class="navbar navbar-inverse navbar-bottom">
        <div class="container-fluid">
            <div class="row">
            <div class="col-md-4">
              <h3>Where to find us</h3>
              <p>
              At. International<br />
              PO Box 00001, Amsterdam<br />
              The Netherlands<br />          
              </p>
            </div>

            <div class="col-md-4">
            <h3>Contact Us</h3>
            <p>
              <span>P :</span><a href="tel:123.456.2222"> 123.456.2222</a><br />
              <span>F :</span> <a href="tel:123.456.2224"> 123.456.2224</a><br />
              <span>E :</span> <a href="mailto:sample@yoshikok.org">sample@yoshikok.org</a>       
              </p>
            </div>

            <div class="col-md-4">
            <h3>Newsletter</h3>
            <p>You can subscribe to our newsletter to get our recent updates.</p>
            <p>
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Your email address"></input>
                  <span class="input-group-btn">
                    <button class="btn btn-default" type="button"><span class="glyphicon glyphicon-envelope"></span></button>
                  </span>
                </div>
             </p>
            </div>
        </div>
        </div>
        </nav> 

      <div class="copyright-tag">Copyright © 2022 Equin Rescue. All Rights Reserved.</div>

      </div>
    );
  }
}
export default Footer;