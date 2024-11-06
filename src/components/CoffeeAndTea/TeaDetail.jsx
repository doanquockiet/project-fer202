import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Teas } from "../../data/tea";
import { Button, Card, CardText } from "react-bootstrap";
import Header from "../Layout/Header";
import ProductTea from "./ProductTea";
import Footer from "../Layout/Footer";



export default function TeaDetail() {
  const { id } = useParams();
    const newpage =Teas.find((newpage) => newpage?.id == id);
    console.log(newpage);
    const navigate =useNavigate()
  
  return (
    <div>
      <Header/>
      <div className="container p-4" >
       <Card style={{border:'1px solid white', textAlign:'start', display:'flex', flexDirection: 'row'}} >
                <Card.Img variant="top" src={newpage.image} style={{width:'50%'}} />
                <Card.Body  >
                  <Card.Title>{newpage.title}</Card.Title>
                  <Card.Text style={{color:'red'}}>{newpage.price}</Card.Text>
                  <CardText> Date: {newpage?.date}</CardText>
                  <Button style={{ width:'100%', backgroundColor:'orange', border:'1px solid orange', fontWeight:'bold'}}  onClick ={() => navigate(`/`)} >Đặt Giao Tận Nơi </Button>
                 </Card.Body>
                 </Card>
                 <img style={{width:'80px', marginTop:'20px'}} src={newpage.image}/>
              <hr/>
              <h2 style={{textAlign:'start'}}> Mô Tả Sản Phẩm</h2> 
              <CardText>{newpage.description}</CardText>
           <hr/>
           <h2>Sản Phẩm Liên Quan</h2>
           <ProductTea/>
    </div>
    <Footer/>
    </div>
  );
}
