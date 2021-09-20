import React from 'react'
import { info } from '../../teamMembersInfo'
 
const main_style = {
    width: '100%',
    height: '100%',
    paddingLeft: '4.896vw',
    paddingRight: '2.81vw',
    paddingTop: '7.25vw'
}

const name_style = {
    fontFamily: 'Roboto',
    fontSize: '3.62vw',
    fontWeight: '900',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#073e65',

    float: 'left',
    marginRight: '16.63vw'
}

const title_style = {
    fontFamily: 'Montserrat',
    fontSize: '3.62vw',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'right',
    color: '#073e65',

}

const number_style = {
    fontFamily: 'Montserrat',
    fontSize: '3.62vw',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#073e65',

    marginTop: '2.8vw',

}

const email_style = {
    fontFamily: 'Montserrat',
    fontSize: '3.62vw',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#073e65',

    marginTop: '2.8 vw',

}

const text_style = {
    height: '60vw',
    paddingRight: '1vw',
    fontFamily: 'Montserrat',
    fontSize: '2.3vw',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#073e65',

    marginTop: '6.8vw',
    overflowY: 'scroll',

}

function TeamMemberCard(props) {

    var member = parseInt(props.member) - 1;
    var data = info[member];
    var border;

    border = '4vw 4vw 4vw 4vw'

    return(
        <>
            <div style={Object.assign({}, main_style, {backgroundColor: data.backgroundColor, borderRadius: border})}>
                <div style={name_style} > {data.name} </div>
                <div style={title_style}> {data.title} </div>   
                <div style={number_style}> {data.number} </div>   
                <div style={email_style}> {data.email} </div>  
                <div class="style-scroller2" style={Object.assign({}, text_style, {backgroundColor: data.backgroundColor})}> {data.text} </div> 
            </div>
        </>
    )
}

export default TeamMemberCard;