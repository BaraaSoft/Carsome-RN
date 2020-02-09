import React, { Component } from 'react';


/** Redux Setup **/
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import thunk from 'redux-thunk';

import { ScreenOrientation } from 'expo';
import LaunchPage from './src/LaunchPage';


class App extends Component {
  componentDidMount() {
    ScreenOrientation.unlockAsync()
  }
  render() {
    return (

      <Provider store={createStore(reducers, applyMiddleware(thunk))}>
        <LaunchPage />
      </Provider>

    );
  }
}

export default App




