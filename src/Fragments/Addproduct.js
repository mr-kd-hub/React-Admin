import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Addproduct() {
  const [name, setName] = useState();
  const [productlink, setProductlink] = useState();
  const [category, setCategory] = useState();
  const [status, setStatus] = useState();
  const [feature_to_home, setFeaturetohome] = useState();
  const [state, setState] = useState([]) //load all category in dropdown
    useEffect(()=>{
        axios
        .get("http://localhost:9000/api/showCategorylistAdmin")
        .then((res) => {
         // console.log(res.data)
          if (res.data.msg==="Success") 
          {
              setState(res.data.categoryTitle) 
          }
        })
        .catch((err) => {
          console.log("problem in category fetch api called : " + err);
        });
      },[])
  function onFeature_to_homeChange(obj) {
    setFeaturetohome(obj.target.value);
  }
  function onStatusChange(obj) {
    setStatus(obj.target.value);
  }
  function onCategorychange(obj) {
    setCategory(obj.target.value);
  }
  function onProductlinkChange(obj) {
      let link=obj.target.value.trim();
    setProductlink(link.replaceAll("amp;",""));
  }
  function onNameChange(obj) {
    setName(obj.target.value);
  }
  function onSubmitt(obj) {
    obj.preventDefault();
    const detaill = {
      status: status,
      feature_to_home: feature_to_home,
      flipkart_link: productlink,
      category: category,
      name: name,
    };
    axios
      .post("http://localhost:9000/api/addProduct", detaill)
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          // alert("done")
          toast.success(res.data.msg, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setName("")
          setProductlink("")
        } else {
          //  alert("not done")
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
      .catch((err) => {
        console.log("problem in Contactup API CALLED" + err);
      });
     
  }
  return (
    <div>
        <ToastContainer />
      <div className="container">
        <form method="post" onSubmit={onSubmitt}>
          <div class="form-group">
            <label for="exampleFormControlInput1">Name</label>
            <input
              onChange={onNameChange}
              value={name}
              name="name"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Shirt"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Product Link</label>
            <textarea
              onChange={onProductlinkChange}
              value={productlink}
              name="productlink"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect2">Category</label>
            <select
              onChange={onCategorychange}
              name="category"
              className="form-control"
              id="exampleFormControlSelect2"
              value={category}
            >
                {
                   state && state.map((cardInfo,index)=>{
                    return (
                      <>    
                          <option value={cardInfo.title}>{cardInfo.title}</option>
                    </>
                    )
                  })
                }              
            </select>
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
                name="status"
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
                name="status"
                id="inlineRadio2"
                value="false"
              />
              <label class="form-check-label" for="inlineRadio2">
                Deactive
              </label>
            </div>
            {/* {status} */}
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
            {/* {feature_to_home} */}
          </div>
          <button class="btn btn-primary">Add Product</button>
        </form>
      </div>
    </div>
  );
}

export default Addproduct;
