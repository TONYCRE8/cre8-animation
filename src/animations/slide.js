import React from 'react'
import './slide.css'

export default function Slide({children, direction, duration, delay}) {
    const dir = direction;
    var transition =`slide-${dir}`
    var dur = duration + "ms";
    var del = delay + "ms";
    if (duration == null) {
        dur = "1000ms"
    }
    if (delay == null) {
        del = 0
    }

    var style = {
        animationDuration: dur,
        animationDelay: del
    }
    
    return (
        <div className={transition} style={style}>
            {children}
        </div>
    )
}
