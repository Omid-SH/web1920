import React from 'react'

function Title2(props) {

    const text_style = {
        width: '120px',
        height: '24px',
        margin: '0 0 0 28px',
        fontFamily: 'Montserrat',
        fontSize: '20px',
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
            <line x1="0" y1="50%" x2='100px' y2="50%" style={{stroke:props.color, strokeWidth:'5px'}} />
            <circle cx='120px' cy="50%" r="3.9px" strokeWidth="0" fill={props.color} />
            <text x='140px' y="22px" fill={props.color} style={text_style}>{props.text}</text>
        </svg>
        </>
    )
}

export default Title2;