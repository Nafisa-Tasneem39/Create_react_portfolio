import React, { Component } from 'react'

class Footer extends Component{
    justclick() {

        alert('the button has been clicked!')
    }
    render(){
        return(
            <div style={{backgroundColor:`black`,color:`white`,marginLeft:'200px',marginRight:'200px',marginTop:'100px'}}> 
            <div style={{display:`inline-block`,marginLeft:`100px`,float:"left"}}>
                <h3>Address </h3>
                <p>Rajuk Uttara Apartment,Uttara,Dhaka</p>
                <h3>Github</h3>
                <a style={{textDecoration:'none'}} href="https://github.com/Nafisa-Tasneem39">
                <p style={{color:`white`}}>www.github.com/Nafisa-Tasneem39</p>
                </a>
            </div>
            <div className="foot" style={{display:`inline-block`,marginLeft:'100px',color:`white`}}>
                <ul style={{color:`white`}}>
                   <li>
                <h3>LinkedIn</h3>
                <a style={{textDecoration:'none'}} href="https://www.linkedin.com/in/nafisa-tasneem-a4a01a161/">
                <p>www.linkedin.com/Nafisa Tasneem</p></a>
                </li>
                
                
               <li>
               <h3>Facebook</h3> <a style={{textDecoration:'none'}} href="https://www.facebook.com/Nafisa.tasneem06/">
                <p>www.facebook.com/Nafisa.tasneem06</p></a>
                </li>
                
                <li>
                <h3>Email</h3>
                <p style={{color:`white`}}>nafisatasneem87@gmail.com</p>
                </li>
                
                </ul>
            </div>

           
        </div>
        )
    }
}

export default Footer;