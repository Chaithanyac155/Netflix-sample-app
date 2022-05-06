import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ContactUs from "./ContactUs";
import Movies from "./Movies";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const Header = () => {
  return (
    <Router>
      <div>
        <nav class="navbar navbar-expand-md bg-dark navbar-dark rounded-0">
          <Link
            className="navbar-brand  ml-3"
            to="/"
            style={{
              color: "#f48f00",
              fontSize: "1.5rem",
              fontFamily: "sans-serif"
            }}
          >
            Netflix
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse mr-5 justify-content-end"
            id="collapsibleNavbar"
          >
            <ul class="navbar-nav">
              <li class="nav-item ml-3">
                <Link class="nav-link text-white" to="/home">
                  Home
                </Link>
              </li>
              <li class="nav-item ml-3">
                <Link class="nav-link text-white" to="/contactus">
                  ContactUs
                </Link>
              </li>
              <li class="nav-item ml-3">
                <Link class="nav-link text-white" to="/login">
                  Login
                </Link>
              </li>
              <li class="nav-item ml-3">
                <Link class="nav-link text-white" to="/signup">
                  SignUp
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Route path="/" exact strict component={Movies}></Route>

        <Route path="/home" exact strict component={Movies}></Route>

        <Route path="/contactus" exact strict component={ContactUs}></Route>

        <Route path="/login" exact strict component={LoginForm}></Route>

        <Route path="/signup" exact strict component={SignupForm}></Route>
      </div>
    </Router>
  );
};
export default Header;
