import React from 'react';
import Nav from './components/nav/Nav';
import Left from "./components/left/Left";
import Middle from"./components/middle/Middle";
import Right from "./components/right/Right";


import './css/main.css'
// import { tsConstructorType } from '@babel/types';


function App(){
  
   return (
    <div id="main" className="app">
    <div id="one"><Nav/></div>
    <div id="bottom">
    <div id="two"><Left/></div>
    <div id="three"><Middle/></div>
    <div id="four"><Right/></div>
    </div>
    
    </div>
  );
 }
export default App;