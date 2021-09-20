import React from 'react'
import image_c_1 from '../../images/project_c_1.svg'
import image_c_2 from '../../images/project_c_2.svg'
import image_c_3 from '../../images/project_c_3.svg'
import image_c_4 from '../../images/project_c_4.svg'

import { FaTimes } from 'react-icons/fa/index';

const cancle_icon_style = {
    position: 'absolute',
    bottom: '42.7vw',
    color: '#fff',
    fontSize: '1.71vw',
    right: '2.6vw'
}

const image_big_style = {
    width: '50vw', 
    height: '47.1875vw', 
    objectFit: 'cover',
}

function ProjectImage (props) {

    var image;

    switch (props.project) {
        case '1':
            image = image_c_1;
            break;
        case '2':
            image = image_c_2;
            break;
        case '3':
            image = image_c_3;
            break;
        case '4':
            image = image_c_4;
            break;
    }

    return (
        <>
            <img style={Object.assign({}, image_big_style, {borderRadius: '0 1.04vw 1.04vw 0'})} src={image}/>
            <FaTimes style={cancle_icon_style} onClick={props.cancleFunction} />
        </>
    )
}

export default ProjectImage;