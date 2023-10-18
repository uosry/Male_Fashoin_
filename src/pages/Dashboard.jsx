import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import BUtton from "react-bootstrap/Button";
// prodect.onrender.com/products
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
//
const Dashboard = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    data();
  }, []);

  const del = (item) => {
    console.log(item);
    Swal.fire({
      title: "Are you sure?",
      imageUrl: `${item.img} `,
      showDenyButton: true,
      imageWidth: 100,
      imageHeight: 200,
      showCancelButton: true,
      confirmButtonText: "yes",
      denyButtonText: `no`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");

        axios({
          method: "delete",
          url: `https://prodect.onrender.com/products/${item.id}`,
        }).then((data) => setProduct(data.data));
      }
    });

    data();
  };
  const view = (item) => {
    Swal.fire({
      imageUrl: `${item.img} `,
      title: `${item.name}`,
      showDenyButton: true,
      imageWidth: 100,
      imageHeight: 200,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");

        axios({
          method: "get",
          url: `https://prodect.onrender.com/products/${item.id}`,
        }).then((data) => setProduct(data.data));
      }
    });

    data();
  };

  const data = () => {
    axios({
      method: "get",
      url: "https://prodect.onrender.com/products",
    }).then((data) => setProduct(data.data));
  };
  return (
    <div className="bg bg-dark">
      <Table striped bordered hover variant="dark">
        <thead>
          <Link to={"/admin/add"} className="bg bg-light">
            {" "}
            <BUtton className="btn btn-success mt-3 mb-3 ">Add product</BUtton>
          </Link>
          <tr>
            <th className="text-center">product</th>
            <th className="text-center">price</th>
            <th className="text-center">opration</th>
          </tr>
        </thead>
        <tbody>
          {product &&
            product.map((item) => (
              <tr key={item.id}>
                <td className="w" width="15%">
                  <img src={item.img} width="30%" className="rounded-pill" />
                </td>
                <td>
                  {item.price}
                  {"$"}
                </td>

                <td>
                  <div className="d-flex justify-content-evenly algin-item-center">
                    <BUtton variant="success" onClick={() => view(item)}>
                      view
                    </BUtton>
                    <BUtton variant="primary">edit</BUtton>
                    <BUtton variant="danger" onClick={() => del(item)}>
                      del
                    </BUtton>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;
