import React from 'react'
import { useEffect,useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Site() {
    return (
        <div>
             <div>
        <ToastContainer />
      <div className="container">
        <form method="post">
          <div class="form-group">
            <label for="exampleFormControlInput1">Email id</label>
            <input
              name="email"
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Shirt"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Mobile Number</label>
            <input
              name="monumber"
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Shirt"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">About us</label>
            <textarea
              name="productlink"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Instagram Link</label>
            <input
              name="instagram"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Instagram"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Facebook Link</label>
            <input
              name="facebook"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Facebook"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Twitter Link</label>
            <input
              name="twitter"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Twitter"
            />
          </div>
          <button class="btn btn-primary">Update</button>
        </form>
      </div>
    </div>
        </div>
    )
}

export default Site
