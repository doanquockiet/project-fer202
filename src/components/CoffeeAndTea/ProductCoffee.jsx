import React from 'react'
import { Coffees } from '../../data/coffee'
import { Card, Col, Row } from 'react-bootstrap'

export default function ProductCoffee() {
  return (
    <div>
      <div>
      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-6 container-j">
        {Coffees.map((newpage) => (
          <Col key={newpage.id} className="news-card mb-4">
            <Card style={{height:'300px', border:'none'}}>
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
