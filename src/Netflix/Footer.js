import React from "react";

const Footer = () => {
  return (
    <>
      <div
        class="row p-5"
        style={{
          backgroundColor: "black",
          width: "auto",
          height: "auto",
          margin: "0px"
        }}
      >
        <div class="col-xs-6 col-sm-4 text-white">
          <h6 className="text-white mb-3">NETFLIX</h6>
          <ul className="list-unstyled">
            <li className="mb-2">
              <div>
                <i class="fa fa-map-marker mr-2" aria-hidden="true"></i>
                First floor,Omi House,
                <li className="ml-3">Plot #564-A33,</li>
                <li className="ml-3">Road #564, Jubliee Hills, </li>
                <li className="ml-3">Hyderabad-500033, Telangana.</li>
              </div>
            </li>
            <li className="mb-2">
              <a
                href="webshop@netflix.com"
                style={{
                  color: "white",
                  fontstyle: "oblique",
                  textDecoration: "none"
                }}
              >
                <div>
                  <i className="fa fa-envelope-o mr-2" aria-hidden="true"></i>
                  ramana.kvr@netflix.com
                </div>
              </a>
            </li>
            <li>
              <div>
                <i
                  className="fa fa-mobile mr-2"
                  aria-hidden="true"
                  style={{ fontSize: "16px" }}
                ></i>
                8790038833 / 0884-77373773{" "}
              </div>
            </li>
          </ul>
        </div>

        <div class="col-xs-6 col-sm-4">
          <h6 className="text-white mb-3">LINKS</h6>
          <ul className="text-white list-unstyled footer-content">
            <li>
              <div>
                <i class="fa fa-arrow-right mr-1" aria-hidden="true"></i>
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  About Us
                </a>
              </div>
            </li>
            <li>
              <div>
                <i class="fa fa-arrow-right mr-1" aria-hidden="true"></i>
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  FAQ
                </a>
              </div>
            </li>
            <li>
              <div>
                <i class="fa fa-arrow-right mr-1" aria-hidden="true"></i>
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  Contact
                </a>
              </div>
            </li>
            <li>
              <div>
                <i class="fa fa-arrow-right mr-1" aria-hidden="true"></i>

                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  Terms and Conditions
                </a>
              </div>
            </li>
            <li>
              <div>
                <i class="fa fa-arrow-right mr-1" aria-hidden="true"></i>

                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  Activities
                </a>
              </div>
            </li>
            <li>
              <div>
                <i class="fa fa-arrow-right mr-1" aria-hidden="true"></i>

                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  Privacy Policy
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div class="col-xs-6 col-sm-4">
          <h6 className="text-white mb-3">FOLLOW US ON</h6>
          <ul className="text-white list-unstyled footer-content">
            <li>
              <div className="mb-1">
                <i
                  style={{ fontSize: "17px", color: "#3366ff" }}
                  class="fab mr-1"
                >
                  &#xf09a;
                </i>
                Facebook
              </div>
            </li>
            <li>
              <div className="mb-1">
                <i
                  style={{ fontSize: "17px", color: "#3399ff" }}
                  class="fab mr-1"
                >
                  &#xf099;
                </i>
                Twitter
              </div>
            </li>
            <li>
              <div className="mb-1">
                <i
                  style={{ fontSize: "17px", color: "#990000" }}
                  class="fab mr-1"
                >
                  &#xf16d;
                </i>
                Instagram
              </div>
            </li>
            <li>
              <div>
                <i
                  style={{ fontSize: "17px", color: "#3399ff" }}
                  class="fab mr-1"
                >
                  {" "}
                  &#xf3fe;
                </i>
                Telegram
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
