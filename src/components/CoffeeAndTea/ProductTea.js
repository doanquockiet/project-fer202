import React from 'react'

import { Teas } from '../../data/tea'
import { Card, Col, Row } from 'react-bootstrap'

export default function ProuctTea() {
   
    return (
      <div className='container'>
      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-6 ">
        {Teas.map((newpage) => (
          <Col key={newpage.id} className="news-card">
            <Card style={{height:'400px', border:'none'}} >
              <Card.Img variant="top" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',height: '300px',objectFit: 'cover', height:'300px', borderRadius:'5px',}} src={newpage.image} />
              <Card.Body >
                <Card.Title style={{fontSize:'18px', textAlign:'start'}}>{newpage.title}</Card.Title>
                <Card.Text style={{textAlign:"start"}}>{newpage.price}</Card.Text>
               </Card.Body>
              </Card>
          </Col>
        ))}
      </Row>
    </div>
    )
  }