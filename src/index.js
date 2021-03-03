import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
// import * as serviceWorker from './servicesWorker'
import {RoomProvider} from './context'


ReactDOM.render(
  <RoomProvider>
    <React.StrictMode>
      <Router><App /></Router>
    </React.StrictMode>
  </RoomProvider>
  ,
  document.getElementById('root')
);

