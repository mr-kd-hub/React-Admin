import React from "react";
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Addcategory() {
    const [status,setStatus] = useState();
    const [title,setTitle] = useState();
    const [categorylink,setCategorylink] = useState();
    const [image,setFile] = useState();
  

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
    function onStatusChange(obj)
    {
        setStatus(obj.target.value)
    }
    function onSubmitt(obj)
    {
      obj.preventDefault();
      const detail ={
        title:title,
        image:image,
        link:categorylink,
        status:status,
        feature_to_home : true,
      }
      axios
      .post("http://localhost:9000/api/addCategory",detail)
      .then((res)=>{
          if(res.data.success)
          {
            toast.success(res.data.msg, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setTitle("")
            setFile("")
            setCategorylink("")
          }
          else
          {
            toast.error(res.data.msg, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
      })
      .catch((err)=>{
        console.log("Error in add category api call..")
      });
    }
  return (      
    <div>
        <ToastContainer />
      <div className="container">
        <form method="post" onSubmit={onSubmitt}>
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
              type="text"
              class="form-control-file"
              placeholder="Add Image Link"
              value={image}
              name="image"
            />
            {image}
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
          </div>
          <button class="btn btn-primary">Add Category</button>
        </form>
      </div>
    </div>
  );
}

export default Addcategory;
