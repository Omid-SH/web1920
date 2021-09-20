import React from 'react'
import { info } from '../../projectsInfo'
import image_1 from '../../images/project_3_1.svg'
import image_2 from '../../images/project_3_2.svg'
import image_3 from '../../images/project_3_3.svg'
import image_4 from '../../images/project_3_4.svg'
import image_5 from '../../images/project_3_5.svg'
import image_6 from '../../images/project_3_6.svg'

const main_text_style = {
    width: '100%',
    height: '38.59vw',
    paddingTop: '2.7vw'
}

const name_style = {
    fontFamily: 'Montserrat',
    fontSize: '2.34vw',
    fontWeight: '900',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#fff',

    float: 'left',
    marginLeft: '6.3vw'
}

const address_style = {
    fontFamily: 'Montserrat',
    fontSize: '1.4vw',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#fff',

    float: 'left',
    marginLeft: '6.3vw',
    marginTop: '1.66vw'
}

const price_style = {
    fontFamily: 'Montserrat',
    fontSize: '1.4vw',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#fff',

    float: 'left',
    marginLeft: '6.3vw',
    marginTop: '1.72vw'
}

const text_style = {
    height: '17.24vw',
    paddingRight: '1vw',
    fontFamily: 'Montserrat',
    fontSize: '1.04vw',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#fff',

    marginLeft: '6.3vw',
    marginTop: '12.3vw',
    marginRight: '3.2vw',
    overflowY: 'scroll',
}

const gallery_style = {
    width: '43.7vw',
    height: '13.125vw',
    overflowX: 'auto', 
    overflowY: 'hidden', 
    whiteSpace: 'nowrap',
    position: 'absolute',
    bottom: '0',
    marginLeft: '6.3vw'
}

const gallery_item = {
    width: '13.125vw',
    height: '13.125vw',
    margin: '0.1vw',
    borderRadius: '1vw',
}

function ProjectCard (props) {

    var project = parseInt(props.project) - 1;
    var data = info[project];

    return(
        <>
            <div style={Object.assign({}, main_text_style, {backgroundColor: data.backgroundColor, borderRadius: '1.04vw 0 0 1.04vw'})}>
                <div style={name_style} > {data.name} </div>
                <div style={address_style}> {data.address} </div>   
                <div style={price_style}> {data.price} </div>   
                <div class="style-scroller3" style={Object.assign({}, text_style, {backgroundColor: data.backgroundColor})}> {data.text} </div> 
            </div>

            <div class="container" style={Object.assign({}, gallery_style)}>  
                {}  
                <img src={image_1} style={gallery_item}/>    
                <img src={image_2} style={gallery_item}/>    
                <img src={image_3} style={gallery_item}/>    
                <img src={image_4} style={gallery_item}/>    
                <img src={image_5} style={gallery_item}/>    
                <img src={image_6} style={gallery_item}/>    
            </div>

        </>
    )
}

export default ProjectCard;