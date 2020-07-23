import React from 'react'
import GoogleLogin from 'react-google-login';
const responseGoogle = (response) => {
  console.log(response);
}

export default function login () {
    return (
        <GoogleLogin
            clientId = "48600319385-8f5n46c68kuhloqku14oc2p8d4f9ikak.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        // >
        //     <FontAwesome name='google'/>
        //     <span> Login with Google</span>
        />

    )
}