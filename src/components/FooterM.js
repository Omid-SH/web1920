import React from 'react'
import {footer_back} from '../config'
import Seperator from './Seperator';
import Title1M from './Title1M';

const linkStyle = {
    height: '1.667vw',
    fontFamily: 'Montserrat',
    fontSize: '3.17vw',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#ffffff',
    flex: '50%'
}

const headingStyle = {
    fontFamily: 'Montserrat',
    fontSize: '4.53vw',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '2.67',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#ffffff',
    marginTop: '13.93vw'    
}

const liStyle = {
    marginTop: '6.8vw',
    padding: '0',
    display: 'flex',
    flexWrap: 'wrap'
}

const liStyleFirst = {
    marginTop: '1.71875vw',
    padding: '0'
}

const liStyleFirst2 = {
    marginTop: '3.15vw',
    marginBottom: '2.7vw',
    padding: '0',
    display: 'flex',
    flexWrap: 'wrap'    
}

const buttonStyle = {
    width: '38.32vw',
    height: '9.91vw',
    padding: '0 7px 0 1px',
    borderRadius: '1.0416vw',
    backgroundColor: '#ffffff',

    fontFamily: 'Montserrat',
    fontSize: '2.94vw',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#073e65',
    borderRadius:'2vw',
    float:'center',
    margin:'0 auto'
}

const copyright = {
    float: 'center',
    marginRight: '4.27vw',
    fonFamily: 'Montserrat',
    fontSize: '2.82vw',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#ffffff',
    margin:'0 auto',
    paddingTop: '3.62vw',
    paddingBottom: '4.62vw'
}

function FooterM(props) {

    return(
        <>
            <div style={{width: '100vw', backgroundColor: footer_back, paddingTop:'4.01vw'}}>

                <Title1M linewidth='20.18' text='Contact Info' color='#fff' />

                <div style={{width: '100vw', backgroundColor: footer_back, paddingTop:'2.5vw', paddingLeft:'17.7vw'}}>

                    <ul style={{listStyleType: 'none', margin: '0', padding: '0'}}>

                        <li style={liStyleFirst}>
                            <a style={linkStyle}>404.500.8961</a>
                        </li>
                        <li style={liStyle}>
                            <a style={linkStyle}>info@KapcoPropertiesLLC.com</a>
                        </li>
                        <div style={{width: '50vw', paddingTop: '5vw'}}>
                            <li style={liStyle}>
                                <a style={linkStyle}>1870 The Exchange SE #250 Atlanta, GA 30339</a>
                            </li>
                        </div>

                    </ul>

                    <p style={headingStyle}> Quick links </p>

                    <ul style={{listStyleType: 'none', margin: '0', padding: '0'}}>

                        <li style={liStyleFirst2}>
                            <a style={linkStyle}>Properties</a>
                            <a style={linkStyle}>Services</a>
                        </li>

                        <li style={liStyle}>
                            <a style={linkStyle}>Contact</a>
                            <a style={linkStyle}>Media</a>
                        </li>

                    </ul>

                </div>

            </div>

            <div style={{width: '100vw', backgroundColor: footer_back}}>
                    <div style={{width: '78.6%', float: 'center', margin:'0 auto', paddingTop:'12vw', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <button style={buttonStyle} onClick={props.openCard} >Schedule a meeting</button>
                    </div>

                    <div style={{width: '78.6%', height: '55.6vw', float: 'center', margin:'0 auto', paddingTop:'6.2vw', paddingBottom:'4.6vw'}}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.361356160109!2d-84.48089458478879!3d33.906098180646026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f511a86bb88f11%3A0x9c3c1303ab5dbc0d!2s1870%20The%20Exchange%20SE%20UNIT%20250%2C%20Atlanta%2C%20GA%2030339%2C%20USA!5e0!3m2!1sen!2suk!4v1614263567833!5m2!1sen!2suk" width="100%" height="100%" style={{border:'0',borderRadius:'2vw'}} allowfullscreen="" loading="lazy"></iframe>
                    </div>
            </div>

            <div style={{width: '100%', float: 'left', paddingTop:'6.2vw', backgroundColor: footer_back}}>
                <svg height="0.45vw" width="100vw" style={{backgroundColor: '#fff'}}> </svg>
                <p style={copyright}>COPYRIGHT 2021 - Kapco Properties LLC</p>
            </div>
        </>
    )
}

export default FooterM;