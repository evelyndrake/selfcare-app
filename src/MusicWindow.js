import React, { Component, useEffect, useState } from 'react';
import './XP.css';
import './MusicWindow.css';




export default function MusicWindow() {

    return( 
        <div className='Message-box'>
            <div style={{ width: 500 }} className="window">
                <div className="title-bar">
                    <div className="title-bar-text">Music</div>
                    <div className="title-bar-controls">
                        <button aria-label="Close" />
                    </div>
                </div>
                    <div className="Window-body">
                    <div className="field-row" style={{ justifyContent: "center" }}>
                    <iframe width="100%" height="250" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1656786391&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div><a href="https://soundcloud.com/evelyn-drake-200190693" title="Evelyn Drake" target="_blank"></a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
    
