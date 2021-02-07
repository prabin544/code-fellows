import React from 'react';
import profilepic from './assets/prabin.jpg'
import { MDBContainer, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

const ProfileCard = () => {
  return (
    <MDBContainer>
    <MDBRow>
      <MDBCol>
      <MDBCol> 
      <MDBCol md='4'>
        <MDBCard>
          <MDBCardImage
            hover
            overlay='white-light'
            className='card-img-top'
            src={profilepic}
            alt='man'
          />

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>Prabin Singh</strong>
            </MDBCardTitle>

            <p className='font-weight-bold blue-text'>Web developer</p>

            <MDBCardText>
              Hi, My name is Prabin Singh. {' '}
            </MDBCardText>

            <MDBCol md='12' className='d-flex justify-content-center'>
              <MDBBtn rounded floating color='fb'>
                <MDBIcon size='lg' fab icon='facebook-f'></MDBIcon>
              </MDBBtn>

              <MDBBtn rounded floating color='tw'>
                <MDBIcon size='lg' fab icon='twitter'></MDBIcon>
              </MDBBtn>

              <MDBBtn rounded floating color='dribbble'>
                <MDBIcon size='lg' fab icon='dribbble'></MDBIcon>
              </MDBBtn>
            </MDBCol>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      </MDBCol>
      </MDBCol>
    </MDBRow>

    </MDBContainer>
  )
}

export default ProfileCard;