import React, { useEffect, useState } from 'react'

import {
    Nav,
    NavMenu,
  } from './NavbarElementsM';

import {Link} from 'react-scroll'
import navC from '../../images/navC.png'
import navO from '../../images/navO.png'

const navigationStyle = {
    position: 'absolute',
    right: '6.42vw',
    zIndex: '999',
    top: '6.54vw'
}

function NavbarHeaderM() {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if(isOpen) {
            document.getElementById('c_icon').style.animation = 'makeRightBoxOut 1s linear forwards';
            document.getElementById('c_icon').style.visibility = 'hidden';
            document.getElementById('mobile_menu').style.visibility = 'visible';
            document.getElementById('mobile_menu').style.animation = 'fadeIn 1s linear forwards';

        } else {
            document.getElementById('mobile_menu').style.animation = 'makeRightBoxOut 1s linear forwards';
            document.getElementById('mobile_menu').style.visibility = 'hidden';
            document.getElementById('c_icon').style.visibility = 'visible';
            document.getElementById('c_icon').style.animation = 'fadeIn 1s linear forwards';
        }
    });

    return (
            <Nav>       
                <NavMenu id={'mobile_menu'}>

                    <Link id={'link1'} activeClass="active" to="home" spy={true} smooth={'linear'} className="navbar-head1" activeClass="active-navbar-head1" duration={1000}>
                        Home
                    </Link>

                    <Link id={'link2'} activeClass="active" to="projects" spy={true} smooth={'linear'} className="navbar-head1" activeClass="active-navbar-head1" duration={1000}>
                        Projects
                    </Link>

                    <Link id={'link3'} activeClass="active" to="ourteam" spy={true} smooth={'linear'} className="navbar-head1" activeClass="active-navbar-head1" duration={1000}>
                        Our Team
                    </Link>

                    <Link id={'link4'} activeClass="active" to="aboutus" spy={true} smooth={'linear'} className="navbar-head1" activeClass="active-navbar-head1" duration={1000}>
                        About Us
                    </Link>

                    <Link id={'link5'} activeClass="active" to="footer" spy={true} smooth={'linear'} className="navbar-head1" activeClass="active-navbar-head1" duration={1000}>
                        Contact
                    </Link>

                    <img src={navO}  className={'navbar-head11'} onClick={() => {setIsOpen(false);}}/>  

                </NavMenu>

                <img id={'c_icon'} src={navC} style={navigationStyle} onClick={() => {setIsOpen(true);}}/>  

            </Nav> 
    )

}

export default NavbarHeaderM;