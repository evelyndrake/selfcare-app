import React, { Component, useEffect, useState } from 'react';
import './XP.css';
import './SeasonWindow.css';

export default function AffirmationWindow() {
    return( 
        <div className='Message-box'>
            <div style={{ width: 200 }} className="window">
                <div className="title-bar">
                    <div className="title-bar-text">Season</div>
                    <div className="title-bar-controls">
                        <button aria-label="Close" />
                    </div>
                </div>
                <div className="Window-body">
                <fieldset>
                <div className="field-row">
                    <input id="radio17" type="radio" name="fieldset-example2"/>
                    <label for="radio17">Autumn<img className="Season-icon" src='https://cdn3.emoji.gg/emojis/9664-orange-pumpkin.png'/></label>
                </div>
                <div className="field-row">
                    <input id="radio18" type="radio" name="fieldset-example2"/>
                    <label for="radio18">Winter<img className="Season-icon" src='https://cdn3.emoji.gg/emojis/8814_santashat.png'/></label>
                </div>
                <div className="field-row">
                    <input id="radio19" type="radio" name="fieldset-example2"/>
                    <label for="radio19">Spring<img className="Season-icon" src='https://cdn3.emoji.gg/emojis/9057-tropic-flower3.png'/></label>
                </div>
                <div className="field-row">
                    <input id="radio20" type="radio" name="fieldset-example2"/>
                    <label for="radio20">Summer<img className="Season-icon" src='https://cdn3.emoji.gg/emojis/5089-usapopsicle.png'/></label>
                </div>
                </fieldset>
                </div>
            </div>
        </div>
    )
}
    
