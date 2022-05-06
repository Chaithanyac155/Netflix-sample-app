import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      disabled: true
      // message:""
    };
  }

  handlePassword(e) {
    if (e.target.value.length >= 8) {
      this.setState({
        disabled: false
      });
    }
  }

  changeMessage(e) {
    alert("Registered Successfully.");
  }

  render() {
    return (
      <>
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6  col-xl-6 mx-auto">
            <div
              class="mx-auto rounded-0 mb-1 mt-1 bg-secondary"
              style={{
                height: "auto",
                width: "auto",
                border: "4px solid grey"
              }}
            >
              <div class="mx-auto" style={{ width: "18rem" }}>
                <h4 class="card-title  text-center font-weight-bold mb-2 mt-3">
                  <span className="logo-title">SIGNUP</span>
                </h4>

                <div className="text-center">
                  <i
                    class="fa fa-user"
                    style={{ color: "red", padding: "1px", fontSize: "70px" }}
                  ></i>
                  <h6 className="text-white mb-3">Upload DP</h6>
                </div>
                <input
                  className="ml-5 mb-3"
                  required
                  type="file"
                  style={{ height: "40px" }}
                />

                <div class="form-group input-group mb-4">
                  <div class="input-group-prepend" style={{ color: "green" }}>
                    <span class="input-group-text">
                      {" "}
                      <i
                        class="fa fa-user"
                        style={{
                          color: "blue",
                          padding: "1px",
                          fontSize: "23px"
                        }}
                      ></i>{" "}
                    </span>
                  </div>
                  <input
                    name=""
                    class="form-control"
                    maxLength="35"
                    pattern="[a-z|A-Z| ]+"
                    title="please enter name in alphabets"
                    placeholder="enter your name"
                    type="text"
                    style={{ height: "40px" }}
                    required
                  ></input>
                </div>
                <div class="form-group input-group mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      {" "}
                      <i
                        class="fa fa-envelope"
                        style={{
                          color: "orange",
                          padding: "0px",
                          fontSize: "20px"
                        }}
                      ></i>{" "}
                    </span>
                  </div>
                  <input
                    name=""
                    class="form-control"
                    placeholder="abc@gmail.com"
                    required
                    type="email"
                    style={{ height: "40px" }}
                  ></input>
                </div>
                <div class="form-group input-group mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      {" "}
                      <i
                        class="fa fa-phone"
                        style={{
                          color: "#006600",
                          padding: "1px",
                          fontSize: "23px"
                        }}
                      ></i>{" "}
                    </span>
                  </div>

                  <input
                    name=""
                    class="form-control"
                    pattern="[0-9]{10}"
                    maxLength="10"
                    title="please enter the 10 digit mobile number"
                    placeholder="10 digit mobile number"
                    required
                    type="tel"
                    style={{ height: "40px" }}
                  ></input>
                </div>

                <div class="form-group input-group mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      {" "}
                      <i
                        class="fa fa-lock"
                        style={{
                          color: "black",
                          padding: "1px",
                          fontSize: "23px"
                        }}
                      ></i>{" "}
                    </span>
                  </div>
                  <input
                    class="form-control"
                    onChange={(e) => this.handlePassword(e)}
                    pattern=".{8,}"
                    title="please enter 8 or more digits"
                    placeholder="password must be atleast 8 digits"
                    required
                    type="password"
                    style={{ height: "40px" }}
                  ></input>
                </div>

                <div className="mt-4 mb-3">
                  <button
                    type="button"
                    class="btn btn-primary"
                    disabled={this.state.disabled}
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    SignUP
                  </button>

                  <div
                    class="modal fade bg-dark"
                    id="exampleModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            SignUp Form
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <p>Registered Successfully</p>
                        </div>
                        <div class="modal-footer">
                          <Link to="/login">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              OK
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button type="reset" className="btn btn-danger float-right">
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </>
    );
  }
}

export default SignupForm;
