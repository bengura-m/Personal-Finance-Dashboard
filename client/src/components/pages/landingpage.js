import React from 'react'
import Loginbutton from '../loginbutton'
import Login from '../login'
import Header from '../landingpage/header'

export default function Landingpage (){
    return(
        <div className= "landingpage">
            <div class="divider"></div>
            <div class="section">
                <Header/>
                <Login/>
                <Loginbutton/> 
            </div>    
        </div>
    )
}