import React from "react";
import logo from "../data/footer-logo.png";
import prt from "../data/payment.png";
import pic_1 from "../data/clients/client-1.png";
import pic_2 from "../data/clients/client-5.png";
import pic_3 from "../data/clients/client-3.png";
import pic_4 from "../data/clients/client-4.png";
const Footer = () => {
  return (
    <div className="w-100 bg bg-dark container row" style={{minWidth:"100%"}}>
      <div className="container w-100">
        <footer
          className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top  bg-dark w-100"
          data-bs-theme="dark"
        >
          <div className="col mb-3 d-flex flex-column align-items-baseline justify-content-evenly">
            <p className="text-body-secondary mt-3">
              <img src={logo} />
            </p>
            <p className="text-body-secondary mt-5">
              <img src={prt} />
            </p>
          </div>

          <div className="col mb-3"></div>
          
          <div className="d-flex justify-content-between col-sm-12 ">
            
            
            <div className="d-flex flex-column mt-2 ">
              <img src={pic_1}  className="mt-2" />
              <img src={pic_3}  className="mt-2" />
            </div>
            <div className="d-flex flex-column mt-2">
              <img src={pic_2} className="mt-2" />
              <img src={pic_4}  className="mt-2" />
            </div>
          </div>

          <div className="col mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-body-secondary">Home</a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-body-secondary">Features</a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-body-secondary">Pricing</a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-body-secondary">FAQs</a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-body-secondary">About</a>
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-body-secondary">Home</a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-body-secondary">Features</a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-body-secondary">Pricing</a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-body-secondary">FAQs</a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-body-secondary">About</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
