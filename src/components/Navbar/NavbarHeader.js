import React from 'react'

import {
    Nav,
    NavLink,
    NavMenu,
  } from './NavbarElements';

import {Link} from 'react-scroll'

function NavbarHeader() {

    return (
        <>
            <Nav>       
                <NavMenu>
                    <Link activeClass="active" to="home" spy={true} smooth={'linear'} className="navbar-head" activeClass="active-navbar-head" duration={1000}>
                        Home
                    </Link>

                    <Link activeClass="active" to="projects" spy={true} smooth={'linear'} className="navbar-head" activeClass="active-navbar-head" duration={1000}>
                        Projects
                    </Link>

                    <Link activeClass="active" to="ourteam" spy={true} smooth={'linear'} className="navbar-head" activeClass="active-navbar-head" duration={1000}>
                        Our Team
                    </Link>

                    <Link activeClass="active" to="aboutus" spy={true} smooth={'linear'} className="navbar-head" activeClass="active-navbar-head" duration={1000}>
                        About Us
                    </Link>

                    <Link activeClass="active" to="footer" spy={true} smooth={'linear'} className="navbar-head" activeClass="active-navbar-head" duration={1000}>
                        Contact
                    </Link>
                </NavMenu>
            </Nav>

        </>
    )

}

export default NavbarHeader;