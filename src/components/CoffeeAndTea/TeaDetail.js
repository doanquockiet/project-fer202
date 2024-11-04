import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Teas } from '../../data/tea';
import { Button, Card, Col, Row } from 'react-bootstrap';
import ProuctTea from './ProductTea';

export default function TeaDetail() {
    const { id } = useParams();
    const newpage =Teas.find((newpage) => newpage?.id == id);
    console.log(newpage);
   const navigate =useNavigate()
  return (
    <div>
    <div className="container p-4" >
     <Card style={{border:'1px solid white', textAlign:'start', display:'flex', flexDirection: 'row'}} >
              <Card.Img variant="top" src={newpage.image} style={{width:'50%', borderRadius:'10px'}} />
              <Card.Body  >
                <Card.Title><h1>{newpage.title}</h1></Card.Title>
                <Card.Text style={{color:'orange'}}>{newpage.price}</Card.Text>
                <Button style={{ width:'100%', backgroundColor:'orange', border:'1px solid orange'}}  onClick ={() => navigate(`/`)} > Đặt giao tận nơi </Button>
                 <div style={{display:"flex"}}>
                 <Card.Text style={{border:'2px solid #DCDCDC',paddingTop:'7px', paddingLeft:'20px', color:'black' , borderRadius:'5px', width:'200px'}}> Đào Miếng + 10.000đ </Card.Text>
                <Card.Text style={{border:'2px solid #DCDCDC' , paddingTop:'9px', paddingLeft:'15px',color:'black' ,  width:'200px', borderRadius:'5px'}}> Sốt Caramel + 10.000đ </Card.Text>
                 </div>
                 <div style={{display:'flex'}}>
                 <Card.Text style={{border:'2px solid #DCDCDC' , paddingLeft:'20px',paddingTop:'8px',color:'black' ,  width:'200px', borderRadius:'5px'}}> Trái Vải + 10.000đ </Card.Text>
                 <Card.Text style={{border:'2px solid #DCDCDC' , paddingTop:"9px", paddingLeft:'30px', color:'black' , width:'300px', borderRadius:'5px'}}> Trân châu trắng + 10.000đ </Card.Text>
                 </div>
               </Card.Body>
               </Card>
               <Card.Img src={newpage.image} style={{width:'60px', marginTop:'20px'}}/>
               <div style={{marginTop:'30px', marginBottom:'100px'}}>
               <h1>Mô tả sản phẩm</h1>
               <Card.Text style={{fontSize:'20px'}}>{newpage.description}</Card.Text>
               </div>
               <hr />
               <h1>Sản Phẩm Liên Quan </h1>     
             <ProuctTea/>
    </div>
    </div>
  )
}
