import React from 'react'
import './fade.css'
import Animation from './animation'

export default function Fade({children, direction, duration, delay}) {
    return (
        <Animation type="fade" children={children} direction={direction} duration={duration} delay={delay}></Animation>
    )
}
