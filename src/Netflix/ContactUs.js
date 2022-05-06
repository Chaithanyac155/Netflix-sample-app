import React from "react";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <>
      <div class="row p-5">
        <div class="col-xs-6 col-sm-3">
          <h4>
            <i class="fa fa-map-marker mr-2" aria-hidden="true"></i>
            <span style={{ color: "#800000" }}>Address</span>
          </h4>
          <ul className="list-unstyled">
            <li>67-2-5,</li>
            <li>Ashok Nagar,</li>
            <li>Kakinada East,</li>
            <li>Godavari District,</li>
            <li className="mb-3">Andhra Pradesh.</li>

            <li>First floor, Omi</li>
            <li>House,</li>
            <li>Plot #564-A33</li>
            <li>Road #92, Jubliee Hills,</li>
            <li>Hyderabad-</li>
            <li>500033.</li>
          </ul>
        </div>

        <div class="col-xs-6 col-sm-3">
          <h4>
            <i className="fa fa-mobile mr-2" aria-hidden="true"></i>
            <span style={{ color: "#800000" }}>Phone</span>
          </h4>
          <ul className="list-unstyled">
            <li>0884-2345237</li>
          </ul>
        </div>

        <div class="col-xs-6 col-sm-3">
          <h4>
            <i className="fa fa-envelope-o mr-2" aria-hidden="true"></i>
            <span style={{ color: "#800000" }}>Email</span>
          </h4>
          <ul className="list-unstyled">
            <li>ramana.kvr@netflix.com</li>
          </ul>
        </div>
        <div class="col-xs-6 col-sm-3">
          <h5 style={{ color: "#800000" }} className="mb-4">
            GET IN TOUCH
          </h5>
          <form>
            <input
              type="text"
              class="form-control"
              placeholder="Name"
              id="name"
              required
            />
            <br />
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              id="email"
              required
            />
            <br />
            <input
              type="tel"
              class="form-control"
              placeholder="Phone"
              id="phone"
              required
            />{" "}
            <br />
            <textarea
              class="form-control"
              rows="2"
              id="comment"
              placeholder="Message"
              required
            />{" "}
            <br />
            <button type="submit" className="btn btn-success">
              Submit
              <i style={{ fontSize: "17px", color: "white" }} class="fab ml-1">
                {" "}
                &#xf3fe;
              </i>
            </button>
          </form>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
