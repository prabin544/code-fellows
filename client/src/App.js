import React,{useEffect} from 'react';
import NavbarPage from './components/NavbarPage';
import Home from './components/Home';
import ProfilePage from './components/ProfilePage'
import {  BrowserRouter as Router, Route } from "react-router-dom";
import {connect} from 'react-redux';
import {fetchUserAction} from './actions/myaction'
import TrendingNews from './components/TrendingNews';
import Contact from './components/Contact';

function App(props) {
  useEffect(()=>{
    props.fetch_user()
  },[])
  return (
    <Router>
      <NavbarPage />
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/news" component={TrendingNews} />
        <Route exact path="/contact" component={Contact} />
    </Router>
  );
}
const mapDispatchToProps = (dispatch) =>{
  return{
    fetch_user:()=>{dispatch(fetchUserAction())}
  }
}
export default connect(null,mapDispatchToProps)(App);
