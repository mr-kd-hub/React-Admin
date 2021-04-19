import React from "react";
import axios from "axios";
import { useState,useContext } from "react";
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../context/auth";

export default function Login() {
  const context = useContext(AuthContext);
  const history = useHistory();
  //login
  const [emailLogin, setEmailLogin] = useState();
  const [passwordLogin, setPasswordLogin] = useState();

  function onEmailChangeL(obj) {
    setEmailLogin(obj.target.value);
  }

  function onPasswordChangeL(obj) {
    setPasswordLogin(obj.target.value);
  }
  function onLogin(obj) {
    obj.preventDefault();

    const detail = {
      email: emailLogin,
      password: passwordLogin,
      is_staff:1
    };

    //LoginAPI called
    axios
      .post("http://localhost:9000/api/login", detail)
      .then((res) => {
        //context.login(res.data);
        //console.log(res.data)
        if (res.data.success) {
         
         if(res.data.flag)
         {
            localStorage.setItem("token", res.data.token);
            context.login(res.data);
            history.push('/'); 
         }
         else
         {
            toast.error("You Are Not Admin!!!!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
         }
          
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
          //alert('Please Enter Correct Detail');
        }
      })
      .catch((err) => {
        console.log("problem in login : " + err);
      });

    //field will be reset
    setEmailLogin("");
    setPasswordLogin("");
  }
  //login end
  return (
    <>
    <ToastContainer />
    <h1>Admin</h1>
    <div className="container jumbotron mt-4">
      <form onSubmit={onLogin}>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={onEmailChangeL}
            value={emailLogin}
            name="emailLogin"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={onPasswordChangeL}
            value={passwordLogin}
            name="passwordLogin"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Login
        </button>
      </form>
      </div>
    </>
  );
}
