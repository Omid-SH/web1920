import React from 'react'
import { aboutUs } from "../Info";
import logo from "../images/logo.png";

const pStyle = {
    width: '57.5vw',
    height: '100%',
    marginRight: '3.64vw',
    paddingRight: '1.67vw',
    fontFamily: 'Montserrat',
    fontSize: '1.51vw',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#073e65',
    float: 'left',
    overflowY: 'scroll',
}

function AboutUs(props) {

    return(
        <>
        <div style={{width: '100vw', height: '28.7vw'}}>

            <div style={{width: '38.8vw', height: '100%', float: 'left'}}>
                <img src={logo} style={{width: '26vw', height: '26vw', float: 'center', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop:'1.35vw'}} />
            </div>

            <div class="style-scroller" style={pStyle}> {aboutUs} </div>
            
        </div>
        </>
    )
}

export default AboutUs;