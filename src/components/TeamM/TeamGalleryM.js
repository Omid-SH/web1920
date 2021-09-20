import React, { useEffect, useState } from 'react'

import image_1 from '../../images/person_1.svg'
import image_2 from '../../images/person_2.svg'
import image_3 from '../../images/person_3.svg'
import image_4 from '../../images/person_4.svg'

import TeamMemberCard from './TeamMemberCardM'
import TeamMemberImage from './TeamMemberImageM';

const image_Style = {
    width: '86.4vw', 
    height: '40vw', 
    objectFit: 'cover',
    position: 'relative',
    //filter: 'grayscale(100%)'
}

const image_caption = {
    position: 'absolute',
    bottom: '1.823vw',
    left: '5.885vw',
    fontFamily: 'Montserrat',
    fontSize: '3.85vw',
    fontWeight: '900',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '2.04',
    letterSpacing: 'normal',
    color: '#ffffff',
    zIndex: '5',
    pointerEvents: 'none'
}

const big_div_left = {
    background: '#1A2A38',
    width: '86.4vw',
    height: '84vw',
    display: 'flex',
    borderRadius: '4vw 4vw 4vw 4vw',
    left: '6.8vw',
    position: 'absolute',
    transition: 'visibility 1500ms',
    zIndex: '10',
    visibility: 'hidden'

}

const big_div_right = {
    background: '#1A2A38',
    width: '86.4vw',
    height: '107vw',
    display: 'flex',
    borderRadius: '4vw 4vw 4vw 4vw',
    position: 'absolute',
    right: '6.8vw',
    top: '54vw',
    transition: '1500ms',
    zIndex: '11',
    visibility: 'hidden'
}

function TeamGalleryM(props) {

    const [selectedMember, setSelectedMember] = useState('1');

    useEffect(() => {
    });
    
    function imgOnMouseClick(i) {

        setSelectedMember(i);
        
        document.getElementById('bigDivLeft').style.visibility = 'visible';
        document.getElementById('bigDivLeft').style.animation = 'fadeIn 1.5s linear forwards';

        document.getElementById('bigDivRight').style.visibility = 'visible';
        document.getElementById('bigDivRight').style.animation = 'fadeIn 1.5s linear forwards';
    }

    function cancleOnMouseClick(i) {

            document.getElementById('bigDivLeft').style.animation = 'makeRightBoxOut 0.5s linear forwards';
            document.getElementById('bigDivLeft').style.visibility = 'hidden';

            document.getElementById('bigDivRight').style.animation = 'makeRightBoxOut 0.5s linear forwards';
            document.getElementById('bigDivRight').style.visibility = 'hidden';
    }

    function imgOnMouseEnter(i) {
        /*
        document.getElementById('image_' + i).style.animation = 'makeImageColorful1 1s linear forwards';
        document.getElementById('caption_image_' + i).style.animation = 'makeFontSizeBigger1 1s linear forwards';
        */
    }


    function imgOnMouseOut(i) {
        /*
        document.getElementById('image_' + i).style.animation = '';
        document.getElementById('image_' + i).style.filter = 'grayscale(100%)';

        document.getElementById('caption_image_' + i).style.animation = '';
        document.getElementById('caption_image_' + i).style.fontSize = '1.66vw';
        */
    }

    let LeftContent;
    let RightContent;

    LeftContent = <TeamMemberImage member = {selectedMember} cancleFunction = {() => {cancleOnMouseClick(selectedMember);}}/>
    RightContent = <TeamMemberCard id ={'memberCard'} member = {selectedMember} />    

    return(
        <>
        <div style={{width: '100vw', height: '160vw', paddingRight: '6.8vw', paddingLeft: '6.8vw', position: 'relative'}}>

            <div id={'bigDivLeft'} style={big_div_left} >
                {LeftContent}
            </div>
            <div id={'bigDivRight'} style={big_div_right} >
                {RightContent}
            </div>

            <div id={'container_1'} class="container" style={{position: 'relative', width: '100%'}} onClick={() => {imgOnMouseClick('1');}} onMouseEnter={() => {imgOnMouseEnter('1');}} onMouseOut={() => {imgOnMouseOut('1');}}>

            <img id={'image_1'} style={Object.assign({}, image_Style, {borderRadius: '4vw 4vw 0 0'})} src={image_1}/>
            <div id={'caption_image_1'} style={image_caption}>Jason Chaliff</div>

            </div>

            <div class="container" style={{position: 'relative', width: '100%'}} onClick={() => {imgOnMouseClick('2');}} onMouseEnter={() => {imgOnMouseEnter('2');}} onMouseOut={() => {imgOnMouseOut('2');}}>

            <img id={'image_2'} style={Object.assign({}, image_Style)} src={image_2} />
            <div id={'caption_image_2'} style={image_caption}>Rebecca Freedman</div>

            </div>

            <div class="container" style={{position: 'relative', width: '100%'}} onClick={() => {imgOnMouseClick('3');}} onMouseEnter={() => {imgOnMouseEnter('3');}} onMouseOut={() => {imgOnMouseOut('3');}}>

            <img id={'image_3'} style={Object.assign({}, image_Style)} src={image_3} />
            <div id={'caption_image_3'} style={image_caption}>Jane Mark</div>

            </div>

            <div class="container" style={{position: 'relative', width: '100%'}} onClick={() => {imgOnMouseClick('4');}} onMouseEnter={() => {imgOnMouseEnter('4');}} onMouseOut={() => {imgOnMouseOut('4');}}>

            <img id={'image_4'} style={Object.assign({}, image_Style, {borderRadius: '0 0 4vw 4vw'})} src={image_4} />
            <div id={'caption_image_4'} style={image_caption}>Jared Siegel</div>

            </div>

            
        </div>

        </>
    )
}

export default TeamGalleryM;