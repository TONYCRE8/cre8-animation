import React from 'react'
import './bounce.css'

export default function Bounce({children, direction, duration, delay}) {
    const dir = direction;
    //come back to this
    var transition =`bounce-${dir}`
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