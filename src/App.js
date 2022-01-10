import React ,{useState,useEffect} from 'react'
import Header from './routes/Header'
import {Link} from "react-router-dom"
import Characters from './routes/Characters'
import Locations from './routes/Locations'
import TopBar from "./routes/TopBar"
const App = (props) => {
const characters = props.items
const locations=props.locations
  return (
    <div>
<TopBar/>
   

    </div>
  )
}

export default App
