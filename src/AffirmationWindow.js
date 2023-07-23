import React, { Component, useEffect, useState } from 'react';
import './XP.css';
import './AffirmationWindow.css';

const affirmations = [
    "I am worthy of love.",
    "I am enough.",
    "I am beautiful.",
    "I am strong.",
    "I am capable.",
    "I am loved.",
    "I am safe.",
    "I am powerful."
];

let affirmation = '';

function getAffirmation() {
    let temp = affirmations[Math.floor(Math.random() * affirmations.length)];
    while (temp === affirmation) {
        temp = affirmations[Math.floor(Math.random() * affirmations.length)];
    }
    return temp;
}

affirmation = getAffirmation();

function characterTyped() {
    const text = document.getElementById('text21').value;
    if (text.toLowerCase() === affirmation.toLowerCase()) {
        affirmation = getAffirmation();
        document.getElementById('text21').value = "";
    }
}

export default function AffirmationWindow() {
    
    const [input, setInput] = useState('');
    return(
        
        <div className='Message-box'>
            <div style={{ width: 600 }} className="window">
                <div className="title-bar">
                    <div className="title-bar-text">Your Affirmation</div>
                    <div className="title-bar-controls">
                        <button aria-label="Close" />
                    </div>
                </div>
                <div className="Window-body">
                    <p key={affirmation} id="affirmationLabel" style={{ textAlign: "center"}}>{affirmation}</p>
                    <div className="field-row" style={{ justifyContent: "center"}}>
                        <input id="text21" type="text" value={input} onInput={characterTyped} onChange={e => setInput(e.target.value)} />
                    </div>
                    <div className="field-row" style={{ justifyContent: "center"}}>
                    </div>
                </div>
            </div>
        </div>
    )
}
    
