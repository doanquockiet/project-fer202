import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Teas } from '../../data/tea'
import Header from '../Layout/Header'

export default function Tea() {
    const navigate =useNavigate()
  return (
    <div className='container'>
        <Header/>
    <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 container-j">
      {Teas.map((newpage) => (
        <Col key={newpage.id} className="news-card">
          <Card style={{height:'500px', border:'none'}} onClick ={() => navigate(`/tea/${newpage?.id}`)}>
            <Card.Img variant="top" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',height: '300px',objectFit: 'cover', height:'300px', borderRadius:'5px'}} src={newpage.image} />
            <Card.Body>
              <Card.Title style={{fontSize:'18px', textAlign:'start'}}>{newpage.title}</Card.Title>
              <Card.Text style={{textAlign:"start"}}>{newpage.price}</Card.Text>
             </Card.Body>
             <div className='' style={{marginLeft:'10px', marginRight:'10px' , marginBottom:'10px', justifyContent:'space-between', display:'flex'}}>
             </div>
            
            </Card>
        </Col>
      ))}
    </Row>
  </div>
  )
}
