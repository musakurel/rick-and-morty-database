import React,{ useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Characters from "./routes/Characters"
import Character from "./routes/Character"
import Locations from "./routes/Locations"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Index = () => {
  const [pagenum, setPagenum] = useState(1);

  const [items, setItems]= useState()
  useEffect( () => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${pagenum}`).then((response) => {
      if (response) {
        return response.json();
      }throw response
    })
    .then(item => {setItems(item.results)})
  },[pagenum]);

  const [locations, setLocations]= useState()
  useEffect( () => {
    fetch("https://rickandmortyapi.com/api/location").then((response) => {
      if (response) {
        return response.json();
      }throw response
    })
    .then(item => {setLocations(item.results)})
  },[]);



   

  return (
    <div>
      <Router>
        <Routes>
          <Route path="characters" element={<Characters pagenum={pagenum} setPagenum={setPagenum} items={items} />}/>
          <Route path="characters/:characterId" element={<Character setPagenum={setPagenum} pagenum={pagenum} items={items}  />}/>
          <Route path="locations" element={<Locations items={items}  locations={locations}/>}/>
          <Route path="locations/:locationsId" element={<Locations locations={locations}/>}/>
          <Route path="/" element={<Characters pagenum={pagenum} setPagenum={setPagenum} items={items} />}/>
        </Routes>
      </Router>
    </div>
  )
}




ReactDOM.render(
    <Index />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

