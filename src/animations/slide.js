import React from 'react'
import './slide.css'
import Animation from './animation'

export default function Slide({children, direction, duration, delay}) {
    
    return (
        <Animation type="slide" children={children} direction={direction} duration={duration} delay={delay}></Animation>
    )
}
