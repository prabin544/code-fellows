import React, { useState } from "react";
import { Button, Jumbotron, Container } from 'react-bootstrap';
import CarouselPage from './CarouselPage';
import { FcGoogle } from "react-icons/fc";
import { Icon, InlineIcon } from '@iconify/react';
import wavingHand from '@iconify-icons/emojione/waving-hand';

const Home = () => {

  return(
      <>
        <Jumbotron fluid>
            <h1>Hello <Icon icon={wavingHand} /></h1>
            <p>
                This is a simple React project, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
                <Button variant="primary" >Learn more<FcGoogle/></Button>
                
            </p>
        </Jumbotron>
        <Container style={{height: "20%"}}>
            <CarouselPage />
        </Container>
        
      </>

  )
  
}

export default Home;