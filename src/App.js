import React, { Component } from 'react';
import Left1 from "./components/left1/Left1";
import Right1 from "./components/right1/Right1";
import Middle1 from "./components/middle1/Middle1";
import Left2 from"./components/left2/Left2";
import Right2 from './components/right2/Right2';
import Middle2 from './components/middle2/Middle2';
import Nav from './components/nav/Nav';


import './css/main.css'
import { tsConstructorType } from '@babel/types';


function App(){
  
   return (
    <div id="main" className="cell-14">
    <div id="one"><Nav></Nav></div>
    <div id="two"><Left1></Left1></div>
    <div id="three"><Left2></Left2></div>
    <div id="four"><Middle1></Middle1></div>
    <div id="five"><Middle2></Middle2></div>
    <div id="six"><Right1></Right1></div>
    <div id="seven"><Right2></Right2></div>
    
    </div>
  );
 }
export default App;
