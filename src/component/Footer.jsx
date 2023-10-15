import React from "react";
import logo from "../data/footer-logo.png";
import prt from "../data/payment.png";
const Footer = () => {
  return (
    <div className="w-100 bg bg-dark">
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