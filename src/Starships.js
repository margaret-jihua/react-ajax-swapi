import React, {useEffect, useState} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import axios from 'axios'
import './style.css'
import StarshipPage from './StarshipPage'
import Home from './Home'

function Starships() {
    let [starships, setStarships] = useState([])

    useEffect (() => {
        axios.get('http://swapi.dev/api/starships')
        .then(response => {
            setStarships(response.data.results)
        })
    },[])

    return (
        <>
            <header>STAR WARS STARSHIPS</header>
            <BrowserRouter>
                <Switch>
                    <Route
                        path='/starship'
                        render={({location}) => <StarshipPage location={location} /> }
                    />
                    <Route
                        exact path='/'
                        render={() => <Home starships={starships} /> }
                    />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Starships
