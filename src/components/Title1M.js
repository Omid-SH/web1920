import React from 'react'

function Title1M(props) {

    const text_style = {
        width: '8.75vw',
        height: '2.5vw',
        margin: '0 0 0 28px',
        fontFamily: 'Montserrat',
        fontSize: '4.35vw',
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
        <svg height="5.31vw" width="100vw" >
            <line x1="0" y1="50%" x2={props.linewidth + '%'} y2="50%" style={{stroke:props.color, strokeWidth:'1vw'}} />
            <circle cx={(parseInt(props.linewidth) + 4) + '%'} cy="50%" r="0.6vw" strokeWidth="0" fill={props.color} />
            <text x={(parseInt(props.linewidth) + 8) + '%'} y="77.08%" fill={props.color} style={text_style}>{props.text}</text>
        </svg>
        </>
    )
}

export default Title1M;