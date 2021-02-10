import React from 'react';
import profilepic from '../assets/prabin.jpg'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Card, Row, Col } from 'react-bootstrap';
import ProfileUi from 'react-profile-card';


function ProfileCard() {
  return (
    <Card bg="light" style={{width: '18rem'}}>
      <Card.Header></Card.Header>
        <ProfileUi 
          imgUrl={profilepic} 
          name='Prabin Singh' 
          designation='Developer' 
        />
      <Card.Footer>
        <Row>
          <Col>
          <a href="https://www.linkedin.com/in/prabinsingh/"><FaLinkedin /></a>
          </Col>
          <Col>
          <a href="https://github.com/prabin544"><FaGithub/></a>
          </Col>
          <Col>
          <a href="/contact"><MdEmail/></a>
          </Col>
        </Row>
        
      </Card.Footer>
    </Card>
  );
}
 
export default ProfileCard;