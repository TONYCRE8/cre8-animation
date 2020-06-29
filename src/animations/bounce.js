import React from 'react'
import './bounce.css'
import Animation from './animation'

export default function Bounce({children, direction, duration, delay}) {
    return (
        <Animation type="bounce" children={children} direction={direction} duration={duration} delay={delay} easing="cubic-bezier(.55,.25,.55,1.25)"></Animation>
    )
}