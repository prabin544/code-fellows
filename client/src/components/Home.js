import React, { useState } from "react";
import { Button, Jumbotron, Container, Row, Col, Card } from 'react-bootstrap';
import CarouselPage from './CarouselPage';
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Icon, InlineIcon } from '@iconify/react';
import wavingHand from '@iconify-icons/emojione/waving-hand';
import image from '../assets/login-image.jpg';
import ProfileUi from 'react-profile-card';
import './Home.css'
import profilepic from '../assets/prabin.jpg'
import { MdEmail } from "react-icons/md";
import ProfileCard from './ProfileCard'

const Home = () => {

  return(
    <>
        <div className="bg-dim full-bg-size" style={{backgroundImage: `url(${image})`}} />
        <Container className="portfolio">
            <Row md={{ span: 6, offset: 3 }}>
                <Col>
                    <Row>
                        <h4>Hi'll {<Icon icon={wavingHand} />} !!!</h4>
                    </Row>
                    <Row>
                        <p>
                            Hi, My name is Prabin Singh. I am from Keller, TX. I recently started as Full Stack Web Developer.
                            This is my first website and I will be adding different projects in portfolio section which is still on progress. 
                            So far this page contains News section which gives you trending news retrieved from New York Times. You are viewing React application running on Node.js express server application. 
                            powered by Google Auth. Dont worry, I will be accessing only you Name, email and your profile pic from Google database.
                        </p>
                    </Row>
                </Col>
                <Col md={{ span: 5}} className="profileCard">
                    <ProfileCard />
                </Col>
            </Row>
        </Container>
    </>
    )

}

export default Home;
