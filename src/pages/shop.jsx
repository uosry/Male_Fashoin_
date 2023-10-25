import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Lodiong from "./Lodiong";
const Shop = ({ addto_cart }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://data-api-yv91.onrender.com/products",
    }).then((data) => setProduct(data.data));
  }, []);

  return (
    <div className="container text-center">
      {product.length > 0 ? (
        <div className="row gap-3 ">
          {product.map((item) => (
            <div className=" col-md-auto col-sm-6 d-flex justify-content-center" key={item.id}>
              <Card
                onClick={()=>addto_cart(item)}
                className="col-md-auto col-3  btn btn-outline-light p-2"  
                style={{ width: "13rem", border: "none" }}
              >
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title >
                    {item.sort}
                  </Card.Title>
                  <Card.Text>{item.name}</Card.Text>
                  <Card.Text>
                    {item.price}
                    {"$"}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <Lodiong />
      )}{" "}
    </div>
  );
};

export default Shop;
