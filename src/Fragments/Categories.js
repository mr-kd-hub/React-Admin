import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import Editcategory from "./Editcategory";
import Addcategory from "./Addcategory";
import { Modal, Button as BTN, Form } from "react-bootstrap";

const cssStyle = {
  width: "130px",
  height: "265px",
};

function Categories() {
  const [state, setState] = useState();
  const [show, setShow] = useState(false);
  const [cid, setCid] = useState();

  const handleClose = () => setShow(false);
  const handleShow = (idd) => {
  //  console.log(idd);
    setCid(idd);
    setShow(true);
  };

  const onLoginFormSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/showCategoryAdmin")
      .then((res) => {
        // console.log(res.data)
        if (res.data.msg === "Success") {
          setState(res.data.user);
        }
      })
      .catch((err) => {
        console.log("problem in login : " + err);
      });
  }, []);
  function onUpdate(id, status) {
    // obj.preventDefault()
    let a, b;
    if (status) {
      a = "Activate";
      b = "Deactive";
    } else {
      a = "Deactivate";
      b = "Active";
    }
    if (
      window.confirm(
        `This Product is currently ${b} ,Are You Sure Want To ${a} ????`
      )
    ) {
      axios
        .patch(`http://localhost:9000/api/statusCategory/${status}/${id}`)
        .then((res) => {
          //console.log(res.data)
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
          //   window.location.reload();
        })
        .catch((err) => {
          console.log("Error in Upadate status Api Call");
        });
    }
  }
  // function onEdit(id)
  // {

  // }
  function onDelete(id) {
    if (window.confirm("Are You Sure?")) {
      axios
        .delete(`http://localhost:9000/api/deleteCategory/${id}`)
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
          console.log("Error in Delete Product Api Call");
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
                        <a href={cardInfo.link} target="_blank">
                          <img
                            style={cssStyle}
                            class="card-img-top img-fluid d-block mx-auto"
                            src={cardInfo.image}
                            alt="Card image cap"
                          />
                        </a>
                        <div className="card-body">
                          <h5 className="card-title">{cardInfo.title}</h5>
                          <button
                            to="#"
                            className="btn btn-outline-info mr-2"
                            onClick={() => handleShow(cardInfo._id)}
                          >
                            Edit
                          </button>

                          {cardInfo.status ? (
                            <>
                              <button
                                className="btn btn-outline-success mr-2"
                                onClick={() => onUpdate(cardInfo._id, false)}
                              >
                                Deactivate
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                className="btn btn-success mr-2"
                                onClick={() => onUpdate(cardInfo._id, true)}
                              >
                                Activate
                              </button>
                            </>
                          )}

                          <button
                            className="btn btn-danger"
                            onClick={() => onDelete(cardInfo._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            <Modal show={show} onHide={handleClose} style={{ zIndex: 8378273}}>
              <Modal.Header closeButton>
                <Modal.Title>Update Record</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Editcategory onSubmit={onLoginFormSubmit} id={cid} />
              </Modal.Body>
              <Modal.Footer>
                <BTN variant="secondary" onClick={handleClose}>
                  Close Modal
                </BTN>
              </Modal.Footer>
            </Modal>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Categories;
