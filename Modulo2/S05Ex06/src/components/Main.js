import React from "react";

import googleLogo from '../images/0025.png';
import micIcon from '../images/7123011_google_mic_icon.png'
import  '../styles/Main.css'
import Button from './Button'

function main(){
    return(
        <React.Fragment>
            {/* react fragment é como uma tab vazia */}
            <div className="Main">
                <img src={googleLogo} className='Main-Logo' alt="Google Logo"/>
                <div className='Input-box'>
                    <input className='User-Input'></input>
                    <img src={micIcon} className='Mic-Icon' alt="microphone icon. Enable Icon onclick"/>
                </div>
                <div className="buttons">
                    <Button prop1='Pesquisa Google' prop2='Google Search'/>
                    <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                        <Button prop1='Estou com Sorte' prop2 = 'I`m lucky'/>
                    </a>
                </div>
            </div>
        
        </React.Fragment>
    
    )
}

export default main;
