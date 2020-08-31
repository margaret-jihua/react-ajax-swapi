import React from 'react'
import {Link} from 'react-router-dom'
import PilotList from './PilotList'

export default function StarshipPage (props) {
    let starship = props.location.state
    return (
        <div className="shipDiv">
            {starship ?
            <>
                <p>NAME: {starship.name}</p>
                <p>MODEL: {starship.model}</p>
                <PilotList pilots={starship.pilots} />
                <Link to={{pathname:'/'}} className='returnBtn'>RETURN</Link>
            </>
            : <h3>loading...</h3>
            }
        </div>
    )
}

