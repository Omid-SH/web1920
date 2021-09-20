import React, { useState } from 'react'
import image_1 from '../../images/project_1.svg'
import image_2 from '../../images/project_2.svg'
import image_3 from '../../images/project_3.svg'
import image_4 from '../../images/project_4.svg'
import ProjectCard from './ProjectCardM'
import ProjectImage from './ProjectImageM'

const image_Style = {
    width: '100%', 
    height: '40.82vw', 
    objectFit: 'cover'
}

const big_div_down = {
    background: '#fff',
    width: '85.5vw',
    height: '103.14vw',
    display: 'flex',
    borderRadius: '3vw 3vw 3vw 3vw',
    position: 'absolute',
    left: '-100vw',
    top: '61.84vw',
    transition: '1500ms',
    zIndex: '11',
}

const big_div_top = {
    background: '#1A2A38',
    width: '85.5vw',
    height: '47.1875vw',
    display: 'flex',
    borderRadius: '3vw 3vw 3vw 3vw',
    position: 'absolute',
    right: '7.25vw',
    transition: '1500ms',
    zIndex: '10',
    visibility: 'hidden'
}

function ProjectGalleryM(props) {

    const [selectedProject, setSelectedProject] = useState('1');

    function imgOnMouseClick(i) {
        setSelectedProject(i);
        document.getElementById('bigDivLeftGallery').style.left = '7.25vw';

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

            <div id={'bigDivLeftGallery'} style={big_div_down} >
                <ProjectCard project={selectedProject}/>
            </div>
            <div id={'bigDivRightGallery'} style={big_div_top} >
                <ProjectImage project={selectedProject} cancleFunction = {() => cancleOnMouseClick()} />
            </div>

            <div style={{width: '100vw', height: '163.28vw', padding: '0 7.25vw 0 7.25vw'}}>
                <img  style={Object.assign({}, image_Style, {borderRadius: '4vw 4vw 0 0'})} src={image_1} onClick={() => {imgOnMouseClick('1');}}/>
                <img  style={image_Style} src={image_2} onClick={() => {imgOnMouseClick('2');}}/>
                <img  style={image_Style} src={image_3} onClick={() => {imgOnMouseClick('3');}}/>
                <img  style={Object.assign({}, image_Style, {borderRadius: '0 0 4vw 4vw'})} src={image_4} onClick={() => {imgOnMouseClick('4');}}/>
            </div>
        </div>
    )
}

export default ProjectGalleryM;