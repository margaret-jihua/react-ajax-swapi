import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Pilot (props) {
    let [pilot, setPilot] = useState({})

    useEffect(() => {
        axios.get(props.pilotUrl)
        .then(response => {
            setPilot(response)
        })
    },[])

    let pilotInfo = (pilot.data) ? <p>{pilot.data.name}</p>: <p>Loading</p>

    return(
        <>
        {pilotInfo}
        </>
    )
}