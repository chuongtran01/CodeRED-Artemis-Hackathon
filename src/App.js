import React, { useState } from "react";

import Form from './components/Form';
import AccidentList from "./components/AccidentList";
import AccidentMap from "./components/AccidentMap";

import Npc from './assets/npc.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'mapbox-gl/dist/mapbox-gl.css';

const App = () => {

  const [locInput, setLocInput] = useState("");
  const [descInput, setDescInput] = useState("");
  const [timeInput, setTimeInput] = useState("");

  const [accidents, setAccidents] = useState([]);

  return (
    <>
      <AccidentMap />
      <AccidentList accidents = {accidents} setAccidents = {setAccidents}/>
      <Form 
        locInput = {locInput}
        descInput = {descInput}
        timeInput = {timeInput}
        setLocInput = {setLocInput}
        setDescInput = {setDescInput}
        setTimeInput = {setTimeInput}
        accidents = {accidents}
        setAccidents = {setAccidents}
      />
      
    </>
  );
}

export default App;
