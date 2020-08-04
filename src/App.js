import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Directory from './Directory';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1> main App </h1>
      <swtich>
        <Route exact path = "/" component ={Home}/>
        <Route exact path ='/Directory' component ={Directory}/>
        <Route path = '/Directory/:id' component = {Profile}/>
      </swtich>
     </div>
  );
}

export default App;
