import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import MovieList from './components/MovieList';
import Details from './components/Details';
import Default from './components/Default';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={MovieList}/>
          <Route path="/details" component={Details}/>
          <Route component={Default}/>
        </Switch>
        
      </React.Fragment>
    );
  }
}

export default App;
