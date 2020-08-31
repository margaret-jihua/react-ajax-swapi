import React from'react'
import Pilot from './Pilot'

export default function PilotList (props) {
    let pilotList = props.pilots[0] ?
        props.pilots.map((pilot, idx) => {
            return <Pilot key={`in-${idx}`} pilotUrl={pilot} />
        })
        : <p>No Pilots</p>
    return (
        <>
        {pilotList}
        </>
    )
}