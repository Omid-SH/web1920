import React, { useState } from 'react'
import image_1 from '../../images/project_1.svg'
import image_2 from '../../images/project_2.svg'
import image_3 from '../../images/project_3.svg'
import image_4 from '../../images/project_4.svg'
import ProjectCard from './ProjectCard'
import ProjectImage from './ProjectImage'

const image_Style = {
    width: '25%', 
    height: '100%', 
    objectFit: 'cover'
}

const big_div_left = {
    background: '#fff',
    width: '50vw',
    height: '47.1875vw',
    display: 'flex',
    borderRadius: '1.04vw 0 0 1.04vw',
    position: 'absolute',
    left: '-100vw',
    transition: '1500ms',
    zIndex: '10',
}

const big_div_right = {
    background: '#1A2A38',
    width: '50vw',
    height: '47.1875vw',
    display: 'flex',
    borderRadius: '0 1.04vw 1.04vw 0',
    position: 'absolute',
    right: '0',
    transition: '1500ms',
    zIndex: '10',
    visibility: 'hidden'
}

function ProjectGallery(props) {

    const [selectedProject, setSelectedProject] = useState('1');

    function imgOnMouseClick(i) {
        setSelectedProject(i);
        document.getElementById('bigDivLeftGallery').style.left = '0';
        
        document.getElementById('bigDivLeftGallery').style.top = '-20%';
        document.getElementById('bigDivRightGallery').style.top = '-20%';

        document.getElementById('bigDivRightGallery').style.visibility = 'visible';
        document.getElementById('bigDivRightGallery').style.animation = 'fadeIn 1.5s linear forwards';
    }

    function cancleOnMouseClick(i) {
        document.getElementById('bigDivLeftGallery').style.left = '-100vw';
        document.getElementById('bigDivRightGallery').style.animation = 'makeRightBoxOut 0.5s linear forwards';
        document.getElementById('bigDivRightGallery').style.visibility = 'hidden';
    }

    return(
        <div style={{position: 'relative'}}>

        <div id={'bigDivLeftGallery'} style={big_div_left} >
            <ProjectCard project={selectedProject}/>
        </div>
        <div id={'bigDivRightGallery'} style={big_div_right} >
            <ProjectImage project={selectedProject} cancleFunction = {() => cancleOnMouseClick()} />
        </div>

        <div style={{width: '100vw', height: '31.67vw'}}>
            <img class="zoomGallery" style={Object.assign({}, image_Style, {borderRadius: '1.04vw 0 0 1.04vw'})} src={image_1} onClick={() => {imgOnMouseClick('1');}}/>
            <img class="zoomGallery" style={image_Style} src={image_2} onClick={() => {imgOnMouseClick('2');}}/>
            <img class="zoomGallery" style={image_Style} src={image_3} onClick={() => {imgOnMouseClick('3');}}/>
            <img class="zoomGallery" style={Object.assign({}, image_Style, {borderRadius: '0 1.04vw 1.04vw 0'})} src={image_4} onClick={() => {imgOnMouseClick('4');}}/>
        </div>
        </div>
    )
}

export default ProjectGallery;