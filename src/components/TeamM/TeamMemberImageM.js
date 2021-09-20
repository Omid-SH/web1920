import React from 'react'
import image_c_1 from '../../images/person_c_1.svg'
import image_c_2 from '../../images/person_c_2.svg'
import image_c_3 from '../../images/person_c_3.svg'
import image_c_4 from '../../images/person_c_4.svg'

import { FaTimes } from 'react-icons/fa/index';

const image_big_style = {
    width: '86.4vw', 
    height: '84vw', 
    objectFit: 'cover',
}

const cancle_icon_style = {
    position: 'absolute',
    top: '8.45vw',
    color: '#fff',
    fontSize: '4.76vw'
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

    border = '4vw 4vw 4vw 4vw';
    iconPropery = Object.assign({}, cancle_icon_style, {iconPropery}, {right: '2.6vw'});

    return (
        <>
            <img style={Object.assign({}, image_big_style, {borderRadius: border})} src={image}/>
            <FaTimes style={iconPropery} onClick={props.cancleFunction} />
        </>
    )
}

export default TeamMemberImage;