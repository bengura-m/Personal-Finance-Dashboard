import React from 'react'
import Loginbutton from '../landingpage/loginbutton'
import Login from '../landingpage/login'
import Header from '../landingpage/header'
import LoginForm from '../landingpage/LoginForm'
import SignupForm from '../landingpage/SignupForm'
import 'fontsource-roboto';

export default function Landingpage (){
    return(
        <div className= "container">
            <div className="divider"></div>
            <div className="section">
                <Header/>
                {/* <LoginForm/> */}
                <Loginbutton/> 
                {/* <SignupForm/> */}
            </div>    
        </div>
    )
}