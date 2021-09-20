import React from 'react'
import { aboutUs } from "../Info";
import logo from "../images/logo.png";

const pStyle = {
    position: 'center',
    width: '70vw',
    height: '100%',
    marginRight: '3.64vw',
    paddingRight: '1.67vw',
    fontFamily: 'Montserrat',
    fontSize: '3vw',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#073e65',
    overflowY: 'scroll',
    marginTop: '8vw',
    float: 'center',
    marginLeft: 'auto', 
    marginRight: 'auto'
}

function AboutUsM(props) {

    return(
        <>
        <div style={{width: '100vw'}}>

            <div style={{width: '100vw', height: '40vw'}}>
                <img src={logo} style={{width: '40vw', height: '40vw', float: 'center', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop:'1.35vw'}} />
            </div>

            <div style={{width: '100vw', height: '53vw'}}>
                <div class="style-scroller" style={pStyle}> {aboutUs} </div>
            </div>
        </div>
        </>
    )
}

export default AboutUsM;