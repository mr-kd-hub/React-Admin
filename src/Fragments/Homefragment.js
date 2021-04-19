import React from "react";
import '../homepage.css'
function Homefragment() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div class="col-md-3">
            <div class="card-counter primary">
              <i class="fa fa-code-fork"></i>
              <span class="count-numbers">0</span>
              <span class="count-name">Products</span>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card-counter danger">
            <i class="fa fa-linode" aria-hidden="true"></i>
              <span class="count-numbers">0</span>
              <span class="count-name">Category</span>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card-counter success">
            <i class="fa fa-commenting" aria-hidden="true"></i>
              <span class="count-numbers">0</span>
              <span class="count-name">Feedback</span>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card-counter info">
            <i class="fa fa-users" aria-hidden="true"></i>
              <span class="count-numbers">0</span>
              <span class="count-name">Customers</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homefragment;
