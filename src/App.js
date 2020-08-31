import React, {useState, useEffect} from 'react';
import './style.css'
import axios from 'axios'

import {
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom'

import StarshipPage from './StarshipPage'

function App() {
  const [starships, SetStarships] = useState('')

  useEffect (() => {      
    let url = 'https://swapi.dev/api/starships'
    axios.get(url)
    .then(res => {
      // console.log(res.data);
      SetStarships(res.data.results)
      // console.log(starships);
    })
    .catch(err => console.log(err))
  })

  // THIS SAYS TypeERROR "MAP IS NOT A FUNCTION"

  // let starshipLinks = starships.map(starship => {
  //   return(
  //    <Link
  //     to={{
  //       pathname: '/starship',
  //       state: starship
  //     }}
  //     key={starship.name}
  //   >
  //     {starship.name}
  //   </Link>
  //     )})

console.log(starships);// THIS GETS CONTINUOUS CALLS
console.log(starships[0].name);// THIS GIVES UNDEFINE

  return (
    <Router>
      <nav>
        STAR WARS STARSHIPS
      </nav>
      {/* THIS SAYS TypeERROR "MAP IS NOT A FUNCTION" */}

      {/* {starships.map((starship,i) => (
        <Link>{starship[0]}</Link>
      ))} */}
      {/* <div><Link to='/starship'>{starships[0].name}</Link></div> */}
      {/* <div>{starshipLinks}</div> */}
      <Route path='/starship' render={({location}) => 
                  <StarshipPage location={location}/>
      }/>
    </Router>
  );
}

export default App;
