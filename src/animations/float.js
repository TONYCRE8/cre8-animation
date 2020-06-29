import React from 'react'
import './float.css'
import Animation from './animation'

export default function Float({children, repeat, duration, delay}) {
    return (
        <Animation type="float" children={children} repeat="infinite" duration={duration} delay={delay}></Animation>
    )
}