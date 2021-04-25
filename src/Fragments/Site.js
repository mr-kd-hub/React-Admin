import React from 'react'
import { useEffect,useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Site() {
    const [email,setEmail] = useState();
    const [mobile,setMobile] = useState();
    const [aboutus1,setAboutus1] = useState();
    const [aboutus2,setAboutus2] = useState();
    const [instagram,setInstagram] = useState();
    const [facebook,setFacebook] = useState();
    const [twitter,setTwitter] = useState();
    const [bannerTitle,setBannertitle] = useState();
    const [bannersubTitle,setBannersubtitle] = useState();


    function onEmailChange(obj)
    {
        setEmail(obj.target.value)
    }
    function onMobileChange(obj)
    {
        setMobile(obj.target.value)
    }
    function onAboutus1Change(obj)
    {
        setAboutus1(obj.target.value)
    }
    function onAboutus2Change(obj)
    {
        setAboutus2(obj.target.value)
    }
    function onInstagramChange(obj)
    {
        setInstagram(obj.target.value)
    }
    function onFacebookChange(obj)
    {
        setFacebook(obj.target.value)
    }
    function onTwitterChange(obj)
    {
        setTwitter(obj.target.value)
    }
    function onBannertitleChange(obj)
    {
        setBannertitle(obj.target.value)
    }
    function onBannersubtitleChange(obj)
    {
        setBannersubtitle(obj.target.value)
    }
    function onSubmitt(obj,id="608535172fc387321482365e")
    {
        obj.preventDefault();
        const detail ={
            email:email,
            mobile:mobile,
            aboutus1:aboutus1,
            aboutus2:aboutus2,
            instagram:instagram,
            facebook:facebook,
            twitter:twitter,
            bannertitle:bannerTitle,
            bannersubtitle:bannersubTitle
          }
          axios
          .patch(`http://localhost:9000/api/updateSite/${id}`,detail)
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
    useEffect(()=>{
            axios
            .get("http://localhost:9000/api/showSite/608535172fc387321482365e")
            .then((res)=>{
                if(res)
                {
                    if (res.data.msg === "Success") 
                    {
                        const  { email, mobile, aboutus1, aboutus2, instagram, facebook, twitter, bannertitle, bannersubtitle } = res.data.setting[0];
                        setEmail(email)
                        setMobile(mobile)
                        setAboutus1(aboutus1)
                        setAboutus2(aboutus2)
                        setInstagram(instagram)
                        setFacebook(facebook)
                        setTwitter(twitter)
                        setBannertitle(bannertitle)
                        setBannersubtitle(bannersubtitle)
                    }
                }
            })
            .catch((err)=>{

            })
    },[])
    return (
        <div>
            <h3 class="container">Site Settings</h3>
             <div>
        <ToastContainer />
      <div className="container">
        <form method="post"  onSubmit={onSubmitt}>
          <div class="form-group">
            <label for="exampleFormControlInput1">Email id</label>
            <input
              name="email"
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              onChange={onEmailChange}
              value={email}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Mobile Number</label>
            <input
              name="mobile"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              onChange={onMobileChange}
              value={mobile}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">About us 1</label>
            <textarea
              name="aboutus1"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={onAboutus1Change}
              value={aboutus1}
            ></textarea>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">About us 2</label>
            <textarea
              name="aboutus2"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={onAboutus2Change}
              value={aboutus2}
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
              onChange={onInstagramChange}
              value={instagram}
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
              onChange={onFacebookChange}
              value={facebook}
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
              onChange={onTwitterChange}
              value={twitter}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Banner Title</label>
            <input
              name="bannertitle"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Title"
              onChange={onBannertitleChange}
              value={bannerTitle}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Banner Sub-Title</label>
            <input
              name="Bannersubtitle"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Sub-Title"
              onChange={onBannersubtitleChange}
              value={bannersubTitle}
            />
          </div>
          <button class="btn btn-success">Save Changes</button>
        </form>
      </div>
    </div>
        </div>
    )
}

export default Site
