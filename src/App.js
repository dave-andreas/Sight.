import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Welcome from './pages/walcome'
import Profile from './pages/profile'

function App () {
  return (
    <div style={{backgroundColor:'#e9e9e9',position:'fixed',width:'100%',height:'100%'}}>
      <div style={{position:'fixed',width:'100%',height:'100%'}} />
      <Switch>
        <Route path={'/'} exact component={Welcome} />
        <Route path={'/user/profile'} exact component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
