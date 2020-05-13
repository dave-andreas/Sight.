import React, {useEffect} from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {checklogin,darkmode} from './redux/action'
import Welcome from './pages/walcome'
import Profile from './pages/profile'
import Setting from './pages/setting'

function App ({darkmode,darkuser,dark,checklogin,login}) {

  useEffect (() => {
    checklogin()
    if (darkuser === 1) {
      darkmode()
    }
  })
  
  // if (login) {
  //   return (
  //     <div style={{backgroundColor:dark?'#222222':'#e9e9e9',width:'100%'}}>
  //       <Switch>
  //         <Route path={'/'} exact component={Welcome} />
  //         <Route path={'/user/profile'} exact component={Profile} />
  //         <Route path={'/user/setting'} exact component={Setting} />
  //       </Switch>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div style={{backgroundColor:dark?'#222222':'#e9e9e9',width:'100%'}}>
  //       <Switch>
  //         <Route path={'/'} exact component={Welcome} />
  //         <Route path={'/user/profile'} exact component={Profile} />
  //         <Route path={'/user/setting'} exact component={Setting} />
  //       </Switch>
  //     </div>
  //   );
  // }
  return (
    <div style={{backgroundColor:dark?'#222222':'#e9e9e9',width:'100%'}}>
      <Switch>
        <Route path={'/'} exact component={Welcome} />
        <Route path={'/user/profile'} exact component={Profile} />
        <Route path={'/user/setting'} exact component={Setting} />
      </Switch>
    </div>
  );
}

const stp = ({reducer,authreducer}) => {
  return {
    dark: reducer.dark,
    login: authreducer.login,
    darkuser: authreducer.darkmode
  }
}

export default connect(stp,{checklogin,darkmode}) (App);
