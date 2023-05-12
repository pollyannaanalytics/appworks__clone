import { animated, useSpring } from '@react-spring/web'
import React from 'react'

const PointMove = ({ n }) => {
    const { point } = useSpring({
        from: { point: 0 },
        point: n,
        delay: 0,
        config: {
            mass: 5, tension: 120, friction: 26
        },

    })
    return (
        <animated.div>{point.to((n) => n.toFixed(1))}</animated.div>
    )
}

export default PointMove