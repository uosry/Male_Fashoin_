import React from "react";
import bg from "../data/hero/hero-1.jpg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import pic_1 from "../data/banner/banner-1.jpg";
import pic_2 from "../data/banner/banner-2.jpg";
import pic_3 from "../data/banner/banner-3.jpg";
import pic_1_ from "../data/product/product-4.jpg";
import pic_2_ from "../data/product/product-10.jpg";
import pic_3_ from "../data/product/product-1.jpg";
import pic_4_ from "../data/product/product-11.jpg";
import bg_2 from  "../data/about-us.jpg";
import Card from 'react-bootstrap/Card';
const Home = () => {
  return (
    <div>
      <div
        className=""
        style={{
          minHeight: "100vh",
          minWidth: "100%",
          backgroundImage: ` url(${bg})`,
          backgroundSize: "Cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex-column flex-column align-items-center   p-3 ">
          <h5 className="text-red-700 text-lg mb-9 ">summer collection</h5>
          <h4 className="text-5xl mb-9">Fall-Winter</h4>
          <h1 className=" mb-9">collection 2023</h1>
          <p className="mb-9">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae,
            est.
          </p>
          <Link>
            <Button color="red" className="flex ">
              read more
              <span>
                <BsArrowRight className="text-xl" />
              </span>{" "}
            </Button>
          </Link>
        </div>
      </div>

      <div>
        <div className="">
          <div className="">
            <h1 className="">clothing collection 2023</h1>
            <Link className=" "> shop now </Link>
            <img src={`${pic_1}`} />
          </div>

          <div className="absolute top-96 right-28 mt-40 flex ">
            <h1 className="">
              Accessories
              <Link className=" "> shop now </Link>
            </h1>
            <img src={`${pic_2}`} />
          </div>

          <div className="absolute top-96 left-12  mt-32 flex  ">
            <img src={`${pic_3}`} />
            <h1 className="">shoses spring 2023</h1>

            <Link className=" "> shop now </Link>
          </div>
          <div className="">dsaasdas</div>
        </div>
      </div>
      <div  
        className=""
        style={{
          minHeight: "7vh",
          minWidth: "100%",
          backgroundImage: ` url(${bg_2})`,
          backgroundSize: "Cover",
          backgroundPosition: "center",
        }}
      >
           <h1 className="text-center text-light" > free shipping . 30 days return or refund guarantee  </h1>


      </div>
      <div className="d-flex justify-content-evenly w-100 mt-3">

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic_3_} />
      <Card.Body>
        <Card.Title>shoose</Card.Title>
        <Card.Text>
        
         
        </Card.Text>
        
      </Card.Body>
    </Card>
 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic_4_} />
      <Card.Body>
        <Card.Title>bag</Card.Title>
        <Card.Text>
        
         
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic_1_} />
      <Card.Body>
        <Card.Title>T-shirt</Card.Title>
        <Card.Text>
        
         
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic_2_} />
      <Card.Body>
        <Card.Title>Accessories</Card.Title>
        <Card.Text>
        
         
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>
    </div>
  );
};

export default Home;
