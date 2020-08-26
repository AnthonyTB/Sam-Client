import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Home, Review } from './Routes/';

const App: React.FC<any> = () => {
  return (
    <>
      <Route exact path='/' render={(routeProps) => <Home {...routeProps} />} />
      <Route
        path='/state-reviews/:Id'
        render={(routeProps) => <Review {...routeProps} />}
      />
      <Route
        path='/food-reviews/:Id'
        render={(routeProps) => <Review {...routeProps} />}
      />
    </>
  );
};

export default App;
