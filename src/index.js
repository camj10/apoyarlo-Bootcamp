import React from 'react';
import ReactDOM from 'react-dom/client';
import {PersonCard} from './PersonCard'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <PersonCard lastName="Perez" firstName="Juan" age={20} hairColor= "brown"></PersonCard>
    <PersonCard lastName="Piris" firstName="Juan" age={22} hairColor= "black"></PersonCard>
    <PersonCard lastName="Franco" firstName="Maria" age={24} hairColor= "brown"></PersonCard>
    <PersonCard lastName="Fretez" firstName="Juliana" age={21} hairColor= "black"></PersonCard>
  </div>
);


