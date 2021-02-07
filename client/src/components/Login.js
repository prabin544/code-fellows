import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { MDBIcon } from "mdbreact";
import { Redirect } from "react-router-dom";

// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
  '865591724824-9b5q7vtk8bmpbc60a6029dc8fiod6jor.apps.googleusercontent.com';

function LoginButton() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    // <button onClick={signIn} className="button">
    //   <img src="icons/google.svg" alt="google login" className="icon"></img>

    //   <span className="buttonText">Sign in with Google</span>
    // </button>
    <MDBIcon fab icon="google-plus-g" onClick={signIn}/>
  );
}

export default LoginButton;





// import React from 'react';
// import { useAuth0 } from "@auth0/auth0-react";
// import { MDBIcon } from "mdbreact";

// const LoginButton = () =>{
//   const { user, isAuthenticated } = useAuth0();
//   const { loginWithRedirect } = useAuth0();
//   return(
//     <MDBIcon fab icon="google-plus-g" onClick= {() => loginWithRedirect()}/>
//   )
// }

// export default LoginButton