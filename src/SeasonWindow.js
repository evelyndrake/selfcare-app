import React, { Component, useEffect, useState } from 'react';
import './XP.css';
import './SeasonWindow.css';




export default function SeasonWindow() {
    function useSeason(event) {
        let name = event.target.value;
        let bg = document.getElementById('bg');
        if (name === 'Autumn') {
            bg.style.backgroundImage = "url('https://photo-cdn2.icons8.com/IhnkwGFurJVHelwQH2KAiJz0FvVmK1xMdZrmKBw6hUc/rs:fit:1608:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi9jZjY3OGY0YWVl/NzE0YjI1OWFhNmMz/ODBjNWJjODBmMy5q/cGc.jpg')";
        } else if (name === 'Winter') {
            bg.style.backgroundImage = "url('https://photo-cdn2.icons8.com/1JSagt4r-yyRUcNYjEWDR3ooyy3j2W9XxjfzxnHFw50/rs:fit:1608:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvMTMxLzFkODBl/YWE2LTllN2MtNDli/YS1iOWE2LWZhOGU3/Njc5MjBkMC5qcGc.jpg')";
        } else if (name === 'Spring') {
            bg.style.backgroundImage = "url('https://photo-cdn2.icons8.com/feUuR8AgcEwx0THfQhAjld0Nid9cf9f9kcmGykYC3FU/rs:fit:1607:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvNzcxL2Q2N2M3/OWUxLWM0NTUtNGIy/Ny05MjFkLWU2ODZi/YTZlMGRlZS5qcGc.jpg')";
        } else if (name === 'Summer') {
            bg.style.backgroundImage = "url('https://photo-cdn2.icons8.com/sW5HVjUm2BorAg6AlWneVedgBihMBPMeSZBHVswVDJ0/rs:fit:2224:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi9iODRjNmQxNWUw/YzI0NDYzYmI5ODNm/ZmMxYmE1M2I0YS5q/cGc.jpg')";
        }
}

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
                <fieldset onChange={useSeason.bind(this)}>
                <div className="field-row">
                    <input id="radio17" type="radio" name="fieldset-1" value="Autumn" />
                    <label for="radio17">Autumn<img className="Season-icon" src='https://cdn3.emoji.gg/emojis/9664-orange-pumpkin.png'/></label>
                </div>
                <div className="field-row">
                    <input id="radio18" type="radio" name="fieldset-1" value="Winter"/>
                    <label for="radio18">Winter<img className="Season-icon" src='https://cdn3.emoji.gg/emojis/8814_santashat.png'/></label>
                </div>
                <div className="field-row">
                    <input id="radio19" type="radio" name="fieldset-1" value="Spring"/>
                    <label for="radio19">Spring<img className="Season-icon" src='https://cdn3.emoji.gg/emojis/9057-tropic-flower3.png'/></label>
                </div>
                <div className="field-row">
                    <input id="radio20" type="radio" name="fieldset-1" value="Summer"/>
                    <label for="radio20">Summer<img className="Season-icon" src='https://cdn3.emoji.gg/emojis/5089-usapopsicle.png'/></label>
                </div>
                </fieldset>
                </div>
            </div>
        </div>
    )
}
    
