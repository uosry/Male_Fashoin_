import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const Adite = () => {
  const [name, setName] = useState("");
  const [img, setimg] = useState("");
  const [sort, setsort] = useState("");
  const [price, setprice] = useState("");
  const [lable, setlable] = useState("");
  const [check, setCheck] = useState(true);
  const [chekuser, setCheckuser] = useState(false);
  const [chekemail, setCheckemail] = useState(true);
  const { id } = useParams();
  const a=useNavigate("")
  const rest = () => {
    setCheckemail(true);
    setCheckuser(false);
  };

  const handel = () => {
    if (name.length < 5) {
      rest();
      setCheckuser(true);
    }
  };
  useEffect(() => {
    axios({
      method: "get",
      url: `https://data-api-yv91.onrender.com/products/${id}`,
    }).then((data) => {
      console.log(data.data);
      setName(data.data.name);
      setsort(data.data.sort);
      setprice(data.data.price);
      setimg(data.data.img);
      setlable(data.data.lable);
    });
  }, []);
  const handleForm = (e) => {
    e.preventDefault();

    axios({
      method: "put",
      url: `https://data-api-yv91.onrender.com/products/${id}`,

      data: {
        name,
        price,
        img,
        sort,
        lable,
      },
    });
    setCheck(false);
    setTimeout(() => {
      a("/admin");
    }, 1000);
  };

  return (
    <div>
      <Form onSubmit={handleForm}>
        <div className="d-flex justify-content-evenly bg bg-secondary">
          <Form.Group className="mb-3">
            <Form.Label>name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>price</Form.Label>
            <Form.Control
              type="text"
              value={price}
              onChange={(e) => {
                setprice(e.target.value);
              }}
            />
          </Form.Group>
        </div>

        <div className="d-flex justify-content-evenly bg bg-secondary">
          <Form.Group className="mb-3">
            <Form.Label>img</Form.Label>
            <Form.Control
              type="text"
              value={img}
              onChange={(e) => {
                setimg(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>sort</Form.Label>
            <Form.Control
              type="text"
              value={sort}
              onChange={(e) => {
                setsort(e.target.value);
              }}
            />
          </Form.Group>
        </div>

        <div className="d-flex justify-content-evenly bg bg-secondary">
          <Form.Group className="mb-3">
            <Form.Label>lable</Form.Label>
            <Form.Control
              type="text"
              value={lable}
              onChange={(e) => {
                setlable(e);
              }}
            />
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

export default Adite;
