import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const LoginForm = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 mx-auto">
          <div
            className="mx-auto mt-4 mb-3 rounded-0 bg-dark"
            style={{ width: "auto", height: "auto", border: "4px solid grey" }}
          >
            <div className="p-3 mt-4">
              <div className="flex">
                <div className="mb-3 d-flex justify-content-center font-weight-normal float-right">
                  <span className="logo-title">LOGIN</span>
                </div>
              </div>
              <input
                type="email"
                id="inputEmail"
                className="form-control"
                style={{ height: "46px" }}
                placeholder="Email address"
                required
              />
              <br />
              <input
                type="password"
                id="inputPassword"
                pattern=".{8,}"
                title="please enter 8 or more digits"
                className="form-control"
                style={{ height: "46px" }}
                placeholder="Password"
                required
              />{" "}
              <br />
              <Link to="/" style={{ textDecoration: "none" }}>
                <div className="text-danger">Forgot password?</div>
                <button class="btn btn-success btn-block" type="submit">
                  <i class="fas fa-sign-in-alt"></i> LogIn
                </button>
              </Link>
              <br />
              <div className="mb-2 mt-3 float-right text-white">
                Don't have account?
              </div>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <button class="btn btn-primary  btn-block" type="button">
                  <i class="fas fa-user-plus"></i> SignUp
                </button>
              </Link>
            </div>
          </div>{" "}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default LoginForm;
