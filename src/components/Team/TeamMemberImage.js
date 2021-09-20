import React from 'react'
import image_c_1 from '../../images/person_c_1.svg'
import image_c_2 from '../../images/person_c_2.svg'
import image_c_3 from '../../images/person_c_3.svg'
import image_c_4 from '../../images/person_c_4.svg'

import { FaTimes } from 'react-icons/fa/index';

const image_big_style = {
    width: '50vw', 
    height: '36vw', 
    objectFit: 'cover',
}

const image_caption = {
    position: 'absolute',
    bottom: '1.823vw',
    left: '5.885vw',
    fontFamily: 'Montserrat',
    fontSize: '1.66vw',
    fontWeight: '900',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '2.04',
    letterSpacing: 'normal',
    color: '#ffffff',
    zIndex: '5',
    pointerEvents: 'none'
}

const cancle_icon_style = {
    position: 'absolute',
    bottom: '28.45vw',
    color: '#fff',
    fontSize: '1.71vw'
}

function TeamMemberImage(props) {

    var image;
    var name;

    switch (props.member) {
        case '1':
            image = image_c_1;
            name = 'Jason Chaliff';
            break;
        case '2':
            image = image_c_2;
            name = 'Rebecca Freedman';
            break;
        case '3':
            image = image_c_3;
            name = 'Jane Mark';
            break;
        case '4':
            image = image_c_4;
            name = 'Jared Siegel';
            break;
    }

    var member = parseInt(props.member) - 1;
    var border;
    var iconPropery;
    if(member == 0 || member == 2) {
        border = '1.04vw 0 0 1.04vw';
        iconPropery = Object.assign({}, cancle_icon_style, {iconPropery}, {left: '2.6vw'});
    } else {
        border = '0 1.04vw 1.04vw 0';
        iconPropery =Object.assign({}, cancle_icon_style, {iconPropery}, {right: '2.6vw'});
    }

    return (
        <>
            <img style={Object.assign({}, image_big_style, {borderRadius: border})} src={image}/>
            <div style={image_caption}>{name}</div>
            <FaTimes style={iconPropery} onClick={props.cancleFunction} />
        </>
    )
}

export default TeamMemberImage;