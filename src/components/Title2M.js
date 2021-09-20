import React from 'react'

function Title2M(props) {

    const text_style = {
        width: '120px',
        height: '24px',
        margin: '0 0 0 28px',
        fontFamily: 'Montserrat',
        fontSize: '15px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '2.67',
        letterSpacing: 'normal',
        textAlign: 'left',
        color: props.color
    
    }

    return(
        <>
        <svg height="30px" width="100vw" >
            <line x1="0" y1="15px" x2='50px' y2="15px" style={{stroke:props.color, strokeWidth:'3px'}} />
            <circle cx='70px' cy="15px" r="2.9px" strokeWidth="0" fill={props.color} />
            <text x='90px' y="20px" fill={props.color} style={text_style}>{props.text}</text>
        </svg>
        </>
    )
}

export default Title2M;