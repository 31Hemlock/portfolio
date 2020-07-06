import logo from './img/background.png';
import './App.css';


import React, { Component } from 'react';
import Sidebar from './Sidebar'

import Home from './Home'
import ElectronChess from './ElectronChess'
import PyDataManipulation from './PyDataManipulation';
import MachineLearning from './MachineLearning';
import Excel from './Excel'
import Powershell from './Powershell'
import Flow from './Flow'
import SQL from './SQL'
import VisualStudio from './VisualStudio'



import { Text, View } from 'react';
import { Dimensions } from 'react';

import { BrowserRouter as Router, Link, Route} from 'react-router-dom'
import WebcommerceProject from './WebcommerceProject';
import MyWebsite from './MyWebsite';



function App(props) {
  // Populate the main page.
  var winHeight = window.innerHeight;
  var winWidth = window.innerWidth;

  var display = 'landscape'
  return (
      <Router>
        <>
        <img src={logo} className="background" alt="logo" />
        <div className="App">
            <div id='sidebar'><Sidebar orient={{display}}/></div>
            <div id='content' style={{backgroundColor: '#e6e6e6', marginBottom: "0px"}}>
              <Route exact={true} path="/">
                <Home/>
              </Route>
              <Route path="/electron-chess-analytics">
                <ElectronChess/>
              </Route>
              <Route path="/python-data-manipulation">
                <PyDataManipulation/>
              </Route>
              <Route path="/machine-learning">
                <MachineLearning/>
              </Route>
              <Route path="/excel-formulas">
                <Excel/>
              </Route>
              <Route path="/powershell">
                <Powershell/>
              </Route>
              <Route path="/flow">
                <Flow/>
              </Route>
              <Route path="/sql-webcommerce">
                <SQL/>
              </Route>
              <Route path="/webcommerce-project">
                <WebcommerceProject/>
              </Route>
              <Route path="/my-website">
                <MyWebsite/>
              </Route>
              <Route path="/visual-studio">
                <VisualStudio/>
              </Route>


            </div>
         </div>
         </>
      </Router>
  )
}

export default App;
