import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Navigate, useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const Add = () => {
  const [name, setName] = useState("");
  const [img, setimg] = useState("");
  const [sort, setsort] = useState("");
  const [price, setprice] = useState("");
  const [lable, setlable] = useState("");
  const [check, setCheck] = useState(true);

  const [chekuser, setCheckuser] = useState(false);
  const [chekemail, setCheckemail] = useState(true);
  //   const[chekuser,setCheck]=useState(true)
  const rest = () => {
    setCheckemail(true);
    setCheckuser(false);
  };
  const Navigate = useNavigate();

  const handel = () => {
    if (name.length < 5) {
      rest();
      setCheckuser(true);
    }
  };
  const handleForm = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: "https://prodect.onrender.com/products/",

      data: {
        name,
        price,
        img,
        sort,
        lable
      },
    });
    setCheck(false);
    setTimeout(() => {
      Navigate("/admin");
    }, 1000);
  };

  return (
    <div>
      <Form onSubmit={handleForm}>
        <div className="d-flex justify-content-evenly bg bg-secondary">
          <Form.Group className="mb-3">
            <Form.Label>name</Form.Label>
            <Form.Control type="text" onChange={(e)=>{setName(e.target.value)}} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>price</Form.Label>
            <Form.Control type="text"  onChange={(e)=>{setprice(e.target.value)}} />
          </Form.Group>
        </div>

        <div className="d-flex justify-content-evenly bg bg-secondary">
          <Form.Group className="mb-3">
            <Form.Label>img</Form.Label>
            <Form.Control type="text"  onChange={(e)=>{setimg(e.target.value)}} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>sort</Form.Label>
            <Form.Control type="text"   onChange={(e)=>{setsort(e.target.value)}}/>
          </Form.Group>
        </div>

        <div className="d-flex justify-content-evenly bg bg-secondary">
          <Form.Group className="mb-3">
            <Form.Label>lable</Form.Label>
            <Form.Control type="text"  onChange={(e)=>{setlable(e)}} />
          </Form.Group>
        </div>
        {check ? (
          <Button variant="primary" type="submit">
            Submit
          </Button>
        ) : (
          <Spinner animation="border" role="status"></Spinner>
        )}
      </Form>
    </div>
  );
};

export default Add;
