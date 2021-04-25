import React from "react";
import { useState,useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Editcategory({onSubmitt, id}) {
    
    const [title,setTitle] = useState();
    const [categorylink,setCategorylink] = useState();
    const [image,setFile] = useState();
  const [state,setState] = useState();
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
    
    function onSubmitt(obj)
    {
      obj.preventDefault();
      const detail ={
        title:title,
        image:image,
        link:categorylink
      }
      console.log(detail)
      axios
      .patch(`http://localhost:9000/api/updateCate/${id}`,detail)
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
    useEffect(() => {
       // console.log(id)
        axios
          .get(`http://localhost:9000/api/Category/${id}`)
          .then((res) => {
              //console.log(res.data.info)
            if (res.data.msg === "Success") {
            const  { title,image, link } = res.data.info[0];

            setTitle(title)
            setFile(image)
            setCategorylink(link)
            
            }
          })
          .catch((err) => {
            console.log("problem in login : " + err);
          });
      }, []);
   
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
          
          <button class="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  );
}

export default Editcategory;
