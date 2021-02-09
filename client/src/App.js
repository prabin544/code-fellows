import React,{useEffect} from 'react';
import NavbarPage from './components/NavbarPage';
import Home from './components/Home';
import Profile from './components/Profile';
import {  BrowserRouter as Router, Route } from "react-router-dom";
import {connect} from 'react-redux';
import {fetchUserAction} from './actions/myaction'

function App(props) {
  useEffect(()=>{
    props.fetch_user()
  },[])
  return (
    <Router>
      <NavbarPage />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}
const mapDispatchToProps = (dispatch) =>{
  return{
    fetch_user:()=>{dispatch(fetchUserAction())}
  }
}
export default connect(null,mapDispatchToProps)(App);
