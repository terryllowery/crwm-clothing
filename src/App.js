import React from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

const JacketsPage = (props) => (
  <div>
    <h1>Jackets Page: {props}</h1>
  </div>
)

function App() {
  return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />
        <Route path='/shop/jackets' component={JacketsPage} />
    
      </Switch>
  );
}

export default App;
