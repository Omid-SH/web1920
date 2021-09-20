import React from 'react'
import { info } from '../../projectsInfo'
import image_1 from '../../images/project_3_1.svg'
import image_2 from '../../images/project_3_2.svg'
import image_3 from '../../images/project_3_3.svg'
import image_4 from '../../images/project_3_4.svg'
import image_5 from '../../images/project_3_5.svg'
import image_6 from '../../images/project_3_6.svg'

const main_text_style = {
    width: '85.5vw',
    height: '103.14vw',
    paddingTop: '2.7vw'
}

const name_style = {
    fontFamily: 'Montserrat',
    fontSize: '3.86vw',
    fontWeight: '900',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#fff',

    marginLeft: '6.3vw'
}

const address_style = {
    fontFamily: 'Montserrat',
    fontSize: '3.62vw',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#fff',

    marginLeft: '6.3vw',
    marginTop: '4.1vw'
}

const price_style = {
    fontFamily: 'Montserrat',
    fontSize: '3.62vw',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#fff',

    marginLeft: '6.3vw',
    marginTop: '4.1vw'
}

const text_style = {
    height: '43.48vw',
    paddingRight: '1vw',
    fontFamily: 'Montserrat',
    fontSize: '2.41vw',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#fff',
    position:'inline block',

    marginLeft: '6.3vw',
    marginTop: '4.1vw',
    marginRight: '3.2vw',
    overflowY: 'scroll',
}

const gallery_style = {
    //width: '72.9vw',
    width: '85.5vw',
    
    height: '28.57vw',
    overflowX: 'auto', 
    overflowY: 'hidden', 
    whiteSpace: 'nowrap',
    position: 'absolute',
    bottom: '-10vw',
    //marginLeft: '6.3vw',
    //marginRight: '6.3vw'
}

const gallery_item = {
    width: '28.57vw',
    height: '28.57vw',
    margin: '1vw',
    borderRadius: '3vw',
}

function ProjectCard (props) {

    var project = parseInt(props.project) - 1;
    var data = info[project];

    return(
        <>
            <div style={Object.assign({}, main_text_style, {backgroundColor: data.backgroundColor, borderRadius: '3vw 3vw 3vw 3vw'})}>
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