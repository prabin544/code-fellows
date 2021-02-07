import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NavbarPage from './components/NavBar'
import LandingPage from './components/LandingPage'
import NewsPage from './components/News'
import ContactPage from "./components/ContactPage";

function App() {
  return (
      <Router>
        <NavbarPage />
        
        <Switch>
          <Route exact path="/"><LandingPage /></Route>
          <Route exact path="/news"><NewsPage /></Route>
          <Route exact path="/contact"><ContactPage /></Route>
        </Switch>
      </Router>
  );
}

export default App;
