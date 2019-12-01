import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import configureStore from './store';
import {initialState} from './reducers/rootReducer';
import {Provider} from 'react-redux'
import Home from './components/Home';
import {ShowLines, CreateLine} from './components/Lines';
import './App.css';

const store = configureStore(initialState);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/lines" exact component={ShowLines} />
          <Route path="/line/new" exact component={CreateLine} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
