import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap'


const Profilepage = (props) => {
  console.log("props",props)

  if(!props.user){
    props.history.push('/')
  }

  const [userdata,setUserData] = useState({
    name:"loading",
    picture:""
  })

  useEffect(()=>{
    
    if(props.user){
      setUserData({
        name:props.user.username,
        picture:props.user.picture,
        email:props.user.email
      })
    }
    
  },[])
    
  return(
    <Container>
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={userdata.picture} />
          <Card.Body>
            <Card.Title>{userdata.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{userdata.email}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  )
}

const mapStateToProps = (state) => {
  return{
    user:state.auth
  }
}

export default connect(mapStateToProps)(Profilepage);