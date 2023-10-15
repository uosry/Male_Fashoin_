import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
const Shop = ({addtocart}) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://prodect.onrender.com/products/",
    }).then((data) => setProduct(data.data));
  }, []);

  return (
    <div className="container text-center">
      <div className="row gap-3 ">
        {product.map((item) => (
          <Card
            onClick={() => addtocart(item)}
            className="col-md-auto col-4  btn btn-outline-light p-2 g-col-6  "
            key={item.id}
            style={{ width: "13rem", border: "none" }}
          >
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
              <Card.Title>{item.sort}</Card.Title>
              <Card.Text>{item.name}</Card.Text>
              <Card.Text>
                {item.price}
                {"$"}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
