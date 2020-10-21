import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthLogin } from "../../redux/actions/Auth";
import { SidebarAuth } from "../../components";
import "../../assets/css/login.css";
// import {login} from '../../utils/index'

const Content = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.Auth);

  const handleSubmit = (e) => {
    // console.log(e)
    e.preventDefault();
    dispatch(
      AuthLogin({
        email: email,
        password: password,
        history: props.history,
      })
    );
  };
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 p-5  w-100">
      <div className="pr-5">
        <div className="text-left h4">
          Start Accessing Banking Needs With All Devices and All Platforms With
          30.000+ Users
        </div>
        <p className="text-left nunito-grey">
          Transfering money is eassier than ever, you can access Zwallet
          wherever you are. Desktop, laptop, mobile phone? we cover all of that
          for you!
        </p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input-group mt-5">
            <label htmlFor="email" className="text-white">
              a
            </label>

            <input
              type="email"
              name="email"
              id="email"
              className="form-control form-group form-login flat-form"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group mt-5">
            <label htmlFor="password" className="text-white">
              a
            </label>

            <input
              type="password"
              name="password"
              id="password"
              className="form-control form-group form-login flat-form"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              src="/assets/image/eye-crossed.svg"
              alt="showpassword"
              className="show-password"
            />
          </div>
          <small className="d-flex flex-row-reverse p-3 ">
            <a href="forgot">Forgot password ?</a>
          </small>
          {loading ? (
            <button
              type="submit"
              disabled={true}
              name="btLogin"
              className="btn bg-dark-grey-zwallet radius-10 p-2 w-100 mt-5"
            >
              Loading
            </button>
          ) : (
            <button
              type="submit"
              name="btLogin"
              className="btn bg-dark-grey-zwallet radius-10 p-2 w-100 mt-5"
            >
              Login
            </button>
          )}

          <div className="text-center mt-3 ">
            Don't have an account ? Let's &nbsp;
            <a className="primary-zwallet" href="sign-up.html">
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

const ContentLogin = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <SidebarAuth />
        <Content />
      </div>
    </div>
  );
};

export default ContentLogin;
