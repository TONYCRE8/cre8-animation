import React, {useEffect, useRef} from 'react'

export default function Animation({children, type, direction, duration, delay, fill, easing, repeat}) {

    const ref = useRef()
    if (direction != undefined) {
        var transition =`${type}-${direction}`
    } else {
        var transition = type
    }
    var dur = duration + "ms";
    if (duration == undefined) {
        dur = "1000ms"
    }
    var del = delay + "ms";
    if (delay == undefined) {
        del = "0s"
    }
    var fill_mode = fill;
    if (fill_mode == undefined) {
        fill_mode = "both"
    }
    var reps = repeat
    if (reps == undefined) {
        reps = 1
    }
    var ease = easing
    if (ease == undefined) {
        ease = "ease-in-out"
    }

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio > 0) {
                    entry.target.style.animation = `${transition} ${dur} ${del} ${reps} both ${ease}`
                    entry.target.classList.add = `${transition}`
                    console.log(transition)
                    console.log('It works!')
                }
                else {
                    entry.target.classList.remove = `${transition}`
                }
            })
        })
        if (ref.current) {
            observer.observe(ref.current)
        }
    })

    return (
        <div ref={ref}>
            {children}
        </div>
    )
}
