//import React from 'react'

import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setLoginCustomer } from "../../ReduxSlices/customerLogin";

const Login = () => {
  const loginDash = useNavigate();
  const disptch = useDispatch();
  const logSign = useSelector((state) => state.loginCustomer.cuslogin);

  function handleChange(e) {
    const { name, value } = e.target;
    //setSignIn({...signIn,[e.target.name]:e.target.value})
    disptch(setLoginCustomer({ key: name, value }));
  }
  const [selectRole, setSelectRole] = useState("");
  const storeSessiom = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value));
  };

  const changeRole = (e) => {
    const selection = e.target.value;
    setSelectRole(selection);
  };
  const toDash = async (e) => {
    e.preventDefault();

    try {
      if (selectRole === "/Hire") {
        const response = await axios.post(
          "http://localhost:9092/login",
          logSign
        );
        if (response.data.success) {
          storeSessiom("userLogin", logSign);
          loginDash("/Hire");
          window.location.reload;
        } else {
          alert("Incorrect Username or Passwword");
        }
      } else if (selectRole === "/Job-Post") {
        const response = await axios.post(
          "http://localhost:9092/login/driver",
          logSign
        );
        if (response.data.success) {
          storeSessiom("userLogin", logSign);
          loginDash("/Job-Post");
          window.location.reload;
        } else {
          alert("Incorrect Username or Passwword");
        }
      }
    } catch (err) {
      console.error("Incorrect Username or Password", err);
    }
  };
  return (
    <div className="Login">
      <div className="login-form">
        <form>
          <h2>Login To Access our Features</h2>
          <input
            type="text"
            placeholder="Username"
            name="user"
            onChange={handleChange}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <br />
          <select name="role" value={selectRole} onChange={changeRole}>
            <option value={""}>Login As</option>
            <option value={"/Hire"}>Customer</option>
            <option value={"/Job-Post"}>Driver</option>
          </select>
          <br />
          <button onClick={toDash}>Log In</button>
          <br />
          <Link to={"/Forgot"}>Forgot Password ?</Link>
          <br />
          <p>
            Don`t have an account ?<Link to={"/Personal-Info"}>Register!</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
