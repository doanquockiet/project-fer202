import React from 'react'
import { Teas } from '../../data/tea'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export default function ProductTea() {
    const navigate = useNavigate();
  return (
    <div> 
    <div>
    <Row className="row-cols-1 row-cols-md-2 row-cols-lg-6 container-j">
      {Teas.map((newpage) => (
        <Col key={newpage.id} className="news-card mb-4">
          <Card style={{height:'300px', border:'none'}}  onClick={() => navigate(`/tea/${newpage?.id}`)}>
            <Card.Img variant="top" src={newpage.image} />
            <Card.Body>
              <Card.Title>{newpage.title}</Card.Title>
              <Card.Text>{newpage.price}</Card.Text>
              </Card.Body>
             <div className='' style={{marginLeft:'10px', marginRight:'10px' , marginBottom:'10px', justifyContent:'space-between', display:'flex'}}>
             </div>
            </Card>
        </Col>
      ))}
    </Row>
  </div>
  </div>
  )
}

