import React, { useEffect, useState } from 'react'
import header_1 from '../../images/header_1.svg'
import header_2 from '../../images/header_2.svg'
import header_3 from '../../images/header_3.svg'
import logo_1 from '../../images/logoM.png'

import { FaChevronUp, FaChevronDown } from 'react-icons/fa/index';
import { ArrowLink } from './BanerElementsM'

const banerDivStyle = {
    width: '74.87vw',
    height: '97.1vw',
    position: 'relative',
    left: '7.24vw',
    top: '24vw',
    overflow: 'auto',
    zIndex: -10,
    borderRadius: '3vw 3vw 3vw 3vw',

}

const banerStyle = {
    width: '74.87vw',
    height: '97.1vw',
    paddingTop: '7.3vw',
    paddingBottom: '2vw',
    position: 'relative',
    borderRadius: '3vw 3vw 3vw 3vw',

}

const banerStyleIn = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -10,
    borderRadius: '3vw 3vw 3vw 3vw',

}

const banerDivTextStyle = {
    width: '75vw',
    height: '63.7vw',
    borderRadius: '3vw 3vw 3vw 3vw',

    position: 'absolute',
    top: '104vw',
    left: '7.1vw',
    lineHeight: '2.04',
    overflow: 'auto',
    zIndex: '-1'
}

const banerTextStyle = {
    width: '75vw',
    height: '63.7vw',
    borderRadius: '3vw 3vw 3vw 3vw',
    zIndex: '-1'
}

const banerTextHeadingStyle = {
    padding: '6.28vw 28.98vw 0px 14vw',
    fontFamily: 'Mon',
    fontSize: '3.86vw',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.32,
    letterSpacing: 'normal',
    textAlign: 'left'
}

const banerTextBodyStyle = {
    padding: '2.72vw 7.08vw 0px 14vw',
    fontFamily: 'Roboto',
    fontSize: '2.41vw',
    fontWeight: '300',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 2.6,
    letterSpacing: 'normal',
    textAlign: 'left'
}

const logoStyle = {
    //width: '8.85vw',
    height: '13.56vw',
    position: 'absolute',
    top: '7.5vw',
    left: '7.24vw',
    zIndex: 20
}

const image_caption = {
    fontFamily: 'Montserrat',
    fontSize: '4.10vw',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    position: 'absolute',
    right: '7.7053vw',
    zIndex: 20,
    display: 'flex'
}

const vertical_line = {
    border: '0.241vw solid #073e65',
    color: '#073e65',
    position: 'absolute',
    right: '9.873vw',
    height: '12.27vw',
}

const arrow_style = {
    position: 'absolute',
    right: '7.6vw',
    width: '4.44vw'
}


function BanerM() {

    var pSelectedBaner = '1';
    const [selectedBaner, setSelectedBaner] = useState('1');
    var windowWidth = window.innerWidth;

    function changeBanerPosition(element, to, duration) {
        /*
        var start = (parseInt(from) - 1) * 0.516 * windowWidth;
        var end = (parseInt(to) - 1) * 0.516 * windowWidth;

        console.log('start:', start);
        console.log('end:', end);

        var change = start - end;
        var count = 0;
        for(var i = start; i < end; i++) {
            console.log('i:', i);
            setTimeout(function(){ document.getElementById('baner').scrollTop = i; }, 10);
            //count += 1;
            //document.getElementById('baner').scrollTop = i;
            console.log('count:', count);

        }*/

        var start = element.scrollTop,
            change = to - start,
            currentTime = 0,
            increment = 20;
            
        var animateScroll = function(){        
            currentTime += increment;
            var val = Math.easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if(currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    }

    Math.easeInOutQuad = function (t, b, c, d) {
        t /= d/2;
          if (t < 1) return c/2*t*t + b;
          t--;
          return -c/2 * (t*(t-2) - 1) + b;
      };

    useEffect(() => {

        changeBanerPosition(document.getElementById('baner'), (parseInt(selectedBaner) - 1) * 0.973 * windowWidth, 1000);
        changeBanerPosition(document.getElementById('banerTextBox'), (parseInt(selectedBaner) - 1) * 0.637 * windowWidth, 1000);

        //document.getElementById('baner').scrollTop = (parseInt(selectedBaner) - 1) * 0.516 * windowWidth;
        //document.getElementById('banerTextBox').scrollTop = (parseInt(selectedBaner) - 1) * 0.26667 * windowWidth;

        if (selectedBaner == '1') {
            document.getElementById('arrow_top').style.display = 'none';
        } else {
            document.getElementById('arrow_top').style.display = 'initial';
        }

        if (selectedBaner == '3') {
            document.getElementById('arrow_bottom').style.display = 'none';
        } else {
            document.getElementById('arrow_bottom').style.display = 'initial';
        }

        for(var i = 1; i<=3; i++) {
            document.getElementById('button_' + String(i)).classList.remove('active')
        }
        document.getElementById('button_' + selectedBaner).classList.add('active')

        pSelectedBaner = selectedBaner;
    })

    function buttonOnClick(i) {
        setSelectedBaner(i);        
    }

    return (
        <>
            <div class="container" style={{position: 'absolute', width: '100vw', top: '-0px'}} >

                <div className={'hideScroller'} style={banerDivStyle} id={'baner'}>
                    <div style={banerStyle}> <img id={'baner1'} style={banerStyleIn} src={header_1}/> </div> 
                    <div style={banerStyle}> <img id={'baner2'} style={banerStyleIn} src={header_2}/> </div> 
                    <div style={banerStyle}> <img id={'baner3'} style={banerStyleIn} src={header_3}/> </div>
                </div>

                <img style={logoStyle} src={logo_1}/>  

                <div className={'hideScroller'} style={banerDivTextStyle} id={'banerTextBox'}>
                    <div style={Object.assign({}, banerTextStyle, {backgroundColor: '#E6E7E6', color: '#073E65'})} >
                        <div style={banerTextHeadingStyle}>
                            Property & Asset Management
                        </div>
                        <div style={banerTextBodyStyle}>
                            Kapco Properties Group performs property and asset management services with a view toward maximizing near and long term value for the benefit of project owners. We believe good management is not merely reactive. Rather, we proactively seek opportunity to uphold tenant and user relationships as a means of value creation.
                        </div>
                    </div>

                    <div style={Object.assign({}, banerTextStyle, {backgroundColor: '#7D7D7D', color: '#fff'})} >
                        <div style={banerTextHeadingStyle}>
                            Construction Management
                        </div>
                        <div style={banerTextBodyStyle}>
                            Kapco Properties Group brings a holistic and deal-focused approach to third party construction management. Our decision making process is informed by a detailed understanding of the nuts and bolts of the construction process while maintaining the financial objectives of our investor and development partners.
                        </div>
                    </div>

                    <div style={Object.assign({}, banerTextStyle, {backgroundColor: '#15292A', color: '#fff'})} >
                        <div style={banerTextHeadingStyle}>
                            Acquisition & Land Development
                        </div>
                        <div style={banerTextBodyStyle}>
                            Kapco Properties LLC Group seeks opportunities
                            in all real estate asset classeswith an emphasis
                            on ground-up and value-add retailoffice, and
                            residential projects.Our combined years of experience
                            and sophistication allow Kapco Properties LLC Group
                            to create and harvest maximum value for our development
                            and economic stakeholders.
                        </div>
                    </div>

                </div>

                <FaChevronUp id={'arrow_top'} style={Object.assign({}, arrow_style, {top: '36.4vw'})} onClick={() => {buttonOnClick(String((parseInt(selectedBaner) - 1)))}} />
                <FaChevronDown id={'arrow_bottom'} style={Object.assign({}, arrow_style, {top: '50.87vw'})} onClick={() => {buttonOnClick(String((parseInt(selectedBaner) + 1)))}} />

                <div style={Object.assign({}, image_caption, {top: '65.68vw', right:'7.971vw'})}>
                    <ArrowLink id={'button_1'} onClick={() => {buttonOnClick(1)}}>01</ArrowLink>
                </div>

                <div style={Object.assign({}, vertical_line, {top: '76.213vw'})}></div>

                <div style={Object.assign({}, image_caption, {top: '91.237vw'})}>
                    <ArrowLink id={'button_2'} onClick={() => {buttonOnClick(2)}}>02</ArrowLink>
                </div>

                <div style={Object.assign({}, vertical_line, {top: '101.74vw'})}></div>

                <div style={Object.assign({}, image_caption, {top: '116.79vw'})}>
                    <ArrowLink id={'button_3'} onClick={() => {buttonOnClick(3)}}>03</ArrowLink>
                </div>
            </div>
        </>
    )
}

export default BanerM;