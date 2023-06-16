import React from 'react';
import HeaderStyle from '../styles/Header.css';
import ProfileIcon from '../images/dec69613a281de18ed76a786810bc8a9.jpg';
import MenuIcon from '../images/app-menu-16.png'
function header(){
    return(
        < div className='Header'>
            <div className='align-right'>
                <a href='https://gmail.com'>Gmail</a>
                <a href='https://www.google.com/maps'>Mapa</a>
                <img src={MenuIcon} className='Menu-Icon'/>
                <img src={ProfileIcon} className='Profile-Icon'/>
                </div>
        </div> 
    );
}

export default header;