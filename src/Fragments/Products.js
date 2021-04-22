import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const cssStyle = {
  width: "130px",
  height: "265px",
};

function Products() {
  const [state, setState] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/showProductAdmin")
      .then((res) => {
        // console.log(res.data)
        if (res.data.msg === "Success") {
          setState(res.data.product);
        }
      })
      .catch((err) => {
        console.log("problem in login : " + err);
      });
  }, []);
  function onUpdate(id, status) {
    let a,b;
    if (status) {
      a = "Activate";
      b = "Deactive"
    } else {
      a = "Deactivate";
      b  = "Active"
    }
    if (window.confirm(`This Product is currently ${b} ,Are You Sure Want To ${a} ????`)) {
      axios
      .patch(`http://localhost:9000/api/statusProduct/${status}/${id}`)
      .then((res)=>{
          //console.log(res.data)
            // if(res.data.success)
            // {
                toast.success(res.data.msg, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                  // window.location.reload();
          
      })
      .catch((err)=>{
          console.log("Error in Upadate status Api Call")
      });
    }
  }

  function onDelete(id) {
    if (window.confirm("Are You Sure?")) {
      axios
        .delete(`http://localhost:9000/api/deleteProduct/${id}`)
        .then((res) => {
          if (res.data.success) {
            toast.success(res.data.msg, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            // window.location.reload();
          } else {
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
            console.log("Error in Delete Product Api Call")
        });
    }
  }
  return (
    <div>
      <ToastContainer />
      <div className="container">
        <section className="lattest-product-area pb-40 category-list">
          <div className="row">
            {state &&
              state.map((cardInfo, index) => {
                return (
                  <>
                    <div className="col-sm-4 single-product mb-4">
                      <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                          <iframe
                            className="img-fluid d-block mx-auto"
                            style={cssStyle}
                            marginwidth="0"
                            marginheight="0"
                            scrolling="no"
                            frameborder="0"
                            src={cardInfo.flipkart_link}
                          ></iframe>
                          <div className="card-text">
                            {cardInfo.status ? (
                              <>
                                <Link
                                  to="#"
                                  className="btn btn-outline-success mr-2"
                                  onClick={() => onUpdate(cardInfo._id, false)}
                                >
                                  Deactivate
                                </Link>
                              </>
                            ) : (
                              <>
                                <Link
                                  to="#"
                                  className="btn btn-success mr-2"
                                  onClick={() => onUpdate(cardInfo._id, true)}
                                >
                                  Activate
                                </Link>
                              </>
                            )}

                            <Link
                              to="#"
                              className="btn btn-danger"
                              onClick={() => onDelete(cardInfo._id)}
                            >
                              Delete
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Products;
