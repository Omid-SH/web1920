import React from 'react'
import {footer_back} from '../config'
import Seperator from './Seperator';
import Title1 from './Title1';

const linkStyle = {
    height: '1.667vw',
    fontFamily: 'Montserrat',
    fontSize: '1.354vw',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#ffffff'
}

const headingStyle = {
    fontFamily: 'Montserrat',
    fontSize: '2.031vw',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '2.67',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#ffffff',
    marginBottom: '1.519vw'    
}

const liStyle = {
    marginTop: '2.7vw',
    marginBottom: '2.7vw',
    padding: '0'
}

const liStyleFirst = {
    marginTop: '1.71875vw',
    marginBottom: '2.7vw',
    padding: '0'
}

const liStyleFirst2 = {
    marginTop: '3.15vw',
    marginBottom: '2.7vw',
    padding: '0'
}

const buttonStyle = {
    width: '15.104vw',
    height: '3.958vw',
    borderRadius: '1.0416vw',
    border: 'solid 3px #ffffff',
    backgroundColor: '#ffffff',

    fontFamily: 'Montserrat',
    fontSize: '1.1vw',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    color: '#073e65'
}

const copyright = {
    float: 'right',
    marginRight: '4.27vw',
    fonFamily: 'Montserrat',
    fontSize: '0.885vw',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#ffffff'
}
function Footer(props) {

    return(
        <>
            <div style={{width: '100vw', height: '40vw',margin:'0', backgroundColor: footer_back}}>


                <div style={{width: '83%', height: '85.62%', backgroundColor: footer_back, float: 'left', paddingTop:'4.01vw'}}>

                    <Title1 linewidth='47' text='Contact Info' color='#fff' />

                    <div style={{width: '56.6%', height: '100%', backgroundColor: footer_back, float: 'left', paddingTop:'2.5vw'}}>
                        
                        <div style={{width: '78.6%', height: '21.95vw', float: 'center', margin:'0 auto', position:'relative'}}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.361356160109!2d-84.48089458478879!3d33.906098180646026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f511a86bb88f11%3A0x9c3c1303ab5dbc0d!2s1870%20The%20Exchange%20SE%20UNIT%20250%2C%20Atlanta%2C%20GA%2030339%2C%20USA!5e0!3m2!1sen!2suk!4v1614263567833!5m2!1sen!2suk" width="100%" height="100%" style={{border:'0',borderRadius:'1.04vw'}} allowfullscreen="" loading="lazy"></iframe>
                        </div>

                    </div>

                    <div style={{width: '38.55%', height: '100%', backgroundColor: footer_back, float: 'right', paddingTop:'2.5vw'}}>

                        <ul style={{listStyleType: 'none', margin: '0', padding: '0'}}>

                        <li style={liStyleFirst}>
                            <a style={linkStyle}>404.500.8961</a>
                        </li>
                        <li style={liStyle}>
                            <a style={linkStyle}>info@KapcoPropertiesLLC.com</a>
                        </li>
                        <li style={liStyle}>
                            <a style={linkStyle}>1870 The Exchange SE #250 <br /> Atlanta, GA 30339</a>
                        </li>
                        <li style={liStyle}>
                            <button style={buttonStyle} onClick={props.openCard} >Schedule a meeting</button>
                        </li>

                        </ul>

                    </div>

                </div>

                <div style={{width: '17%', height: '85.62%', float: 'left', backgroundColor: footer_back, paddingTop:'2.5vw'}}>
                    
                    <p style={headingStyle}> Quick links </p>

                    <ul style={{listStyleType: 'none', margin: '0', padding: '0'}}>

                    <li style={liStyleFirst2}>
                        <a style={linkStyle}>Properties</a>
                    </li>
                    <li style={liStyle}>
                        <a style={linkStyle}>Services</a>
                    </li>
                    <li style={liStyle}>
                        <a style={linkStyle}>Contact</a>
                    </li>
                    <li style={liStyle}>
                        <a style={linkStyle}>Media</a>
                    </li>

                    </ul>

                </div>

                <div style={{width: '100%', height: '15.38%', float: 'left'}}>
                    <svg height="0.104vw" width="100vw" style={{backgroundColor: '#fff'}}>
                    </svg>
                    <p style={copyright}>COPYRIGHT 2021 - Kapco Properties LLC</p>
                </div>
            </div>
        </>
    )
}

export default Footer;