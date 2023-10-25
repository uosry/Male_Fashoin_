import React from "react";
import Container from "react-bootstrap/Container";
import logo from "../data/logo.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import { GoSignOut } from "react-icons/go";
import Login from './../pages/Login';

const Header = ({ cart }) => {
  const sign_out = useNavigate("");
  const signout = () => {
    localStorage.clear();
    sign_out("/login");
  };
  return (
    <div>
      {" "}
      <Navbar
        expand="lg"
        className="bg-dark d-flex justify-content-evenly "
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            <img src={logo} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to={"/"}>
                Home
              </Nav.Link>
            {
              localStorage.name===undefined &&  <Nav.Link as={Link} to={"/login"}>
              Login
            </Nav.Link>
            }
              {localStorage.role === "admin" && (
                <Nav.Link as={Link} to={"/admin"}>
                  Dashboard
                </Nav.Link>
              )}

              {
                <Nav.Link as={Link} to={"/shop"}>
                  Shop
                </Nav.Link>
              }
            </Nav>
            <Nav className="ms-auto text-light d-flex w-25 justify-content-evenly fs-4">
              <div>
                <Link className="text-light" to={"/cart"}>
                  <BsFillCartCheckFill />
                </Link>
                <span className="rounded">{cart.length}</span>
              </div>
              <div>
                <Link className="text-light">
                  {localStorage.name !==undefined &&<GoSignOut onClick={signout} />}
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
