import React from "react";
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Addcategory() {
    const [status,setStatus] = useState();
    const [feature_to_home,setFeaturetohome] = useState();
    const [title,setTitle] = useState();
    const [categorylink,setCategorylink] = useState();
    const [file,setFile] = useState();
  

    function onFileChange(obj)
    {
        setFile(obj.target.value) 
    }
    function onCategorylinkChange(obj)
    {
        setCategorylink(obj.target.value)
    }
    function onTitleChange(obj)
    {
        setTitle(obj.target.value)
    }
    function onFeature_to_homeChange(obj)
    {
        setFeaturetohome(obj.target.value)
    }
    function onStatusChange(obj)
    {
        setStatus(obj.target.value)
    }
  return (      
    <div>
        <ToastContainer />
      <div className="container">
        <form method="post">
          <div class="form-group">
            <label for="exampleFormControlInput1">Title</label>
            <input
            onChange={onTitleChange}
            value={title}
              name="title"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Shirt"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlFile1">Image</label>
            <input
              onChange={onFileChange}
              type="file"
              class="form-control-file"
              id="exampleFormControlFile1"
              value={file}
              name="image"
            />
            {file}
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">
              Product Category Link
            </label>
            <textarea
            onChange={onCategorylinkChange}
            value={categorylink}
              name="productcategorylink"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div className="form-group">
            <label class="form-check-label mr-4" for="inlineRadio1">
              Status
            </label>
            <div class="form-check form-check-inline">
              <input
                onChange={onStatusChange}
                class="form-check-input"
                type="radio"
                name="Status"
                id="inlineRadio1"
                value="true"
              />
              <label class="form-check-label" for="inlineRadio1">
                Active
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
              onChange={onStatusChange}
                class="form-check-input"
                type="radio"
                name="Status"
                id="inlineRadio2"
                value="false"
              />
              <label class="form-check-label" for="inlineRadio2">
                Deactive
              </label>
            </div>
            {status}
          </div>
          <div className="form-group">
            <label class="form-check-label mr-2" for="inlineRadio1">
              Feature To Home
            </label>
            <div class="form-check form-check-inline">
              <input
              onChange={onFeature_to_homeChange}
                class="form-check-input"
                type="radio"
                name="feature_to_home"
                id="inlineRadio1"
                value="true"
              />
              <label class="form-check-label" for="inlineRadio1">
                Yes
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
              onChange={onFeature_to_homeChange}
                class="form-check-input"
                type="radio"
                name="feature_to_home"
                id="inlineRadio2"
                value="false"
              />
              <label class="form-check-label" for="inlineRadio2">
                No
              </label>
            </div>
            {feature_to_home}
          </div>
          <button class="btn btn-primary">Add Category</button>
        </form>
      </div>
    </div>
  );
}

export default Addcategory;
