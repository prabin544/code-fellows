import React from 'react';
import { useGoogleLogout } from 'react-google-login';

const clientId =
  '865591724824-9b5q7vtk8bmpbc60a6029dc8fiod6jor.apps.googleusercontent.com';

function LoginOutButton() {
  const onLogoutSuccess = (res) => {
    console.log('Logged out Success');
    alert('Logged out Successfully ✌');
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    // <button onClick={signOut} className="button">
    //   <img src="icons/google.svg" alt="google login" className="icon"></img>

    //   <span className="buttonText">Sign out</span>
    // </button>
    <i class="fas fa-sign-out-alt" onClick={signOut}></i>
  );
}

export default LoginOutButton;




// import React from 'react';
// import { useAuth0 } from "@auth0/auth0-react";

// const LoginOutButton = () =>{
//   const { logout } = useAuth0();
//   return(
//     <i class="fas fa-sign-out-alt" onClick= {() => logout()}></i>
//   )
// }

// export default LoginOutButton