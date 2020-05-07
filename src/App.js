import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import {connect} from 'react-redux'
import Welcome from './pages/walcome'
import Profile from './pages/profile'

function App ({dark}) {
  return (
    <div style={{backgroundColor:dark?'#222222':'#e9e9e9',width:'100%'}}>
      <Switch>
        <Route path={'/'} exact component={Welcome} />
        <Route path={'/user/profile'} exact component={Profile} />
      </Switch>
    </div>
  );
}

const stp = ({reducer}) => {
  return {
    dark: reducer.dark
  }
}

export default connect(stp) (App);
