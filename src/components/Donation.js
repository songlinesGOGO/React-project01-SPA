import React, { Component } from "react";

class Donation extends Component {
  render() {
    return (

<div className="content">
<div id="donation" class="donation">
  <h1>Donation</h1>
  <p>Do you want to save horses in danger? There are three ways you can do to save them.<br />
  Please don't hasitate to contact us today, horses are waiting for you.
  </p>

  <div id="donation-row" class="row well">
    <div class="donate-left">
    <div class="col-sm-7">
    <h2>Your action save horses.</h2>
    <p>Help us rescue horses. There are at least one hundred hourses waiting for rescue every year, and not all of them area rescued. Your action matters.<br /><br />
    With 60€ you can feed one horse for two month, or help one horse having emergency treatment.</p>

      <div class="progress">
        <div class="progress-bar" role="progressbar" aria-valuenow="64"
        aria-valuemin="0" aria-valuemax="100" style={{width:"64%"}}>      
          <div id="myProgress">
          <div id="myBar">64%</div>
          </div>
        </div>
      </div>

      <div class="row progress-text">
        <div class="col-sm-4">
        <span>64%</span><br />Funded
        </div>
        <div class="col-sm-4 donate-span-middle">
        <span>€12,800</span><br />Raised
        </div>
        <div class="col-sm-4 donate-span-right">
        <span>€6,400</span><br />Required
        </div>
      </div>

    </div>
    </div>

    <div class="col-sm-4 donate-right">
      <h3>Select Amount</h3>

      <div class="donate-btn">

        <label class="control-label">15€
          <input type="radio" name="amount"></input>
        </label>
        <label>30€
          <input type="radio" name="amount"></input>
        </label>
        <label>60€
          <input type="radio" name="amount"></input>
        </label>
        <br />
        <label>90€
          <input type="radio" name="amount"></input>
        </label>
        <label>150€
          <input type="radio" name="amount"></input>
        </label>
        <label>200€
          <input type="radio" name="amount"></input>
        </label>
        <label>250€
          <input type="radio" name="amount"></input>
        </label>
        <label>300€
          <input type="radio" name="amount"></input>
        </label>
        <label>400€
          <input type="radio" name="amount"></input>
        </label>

        <div class="donate-amount-text">
        Other amount:&nbsp;
        <input type="text"></input>
        </div>

      </div>

      <button type="button" class="btn btn-success">Continue</button>

    </div>
  </div>

</div>
</div>
    );
  }
}
export default Donation;