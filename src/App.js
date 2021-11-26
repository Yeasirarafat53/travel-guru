import React, { createContext, useEffect, useState } from 'react';

import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import fakeData from '../src/Components/fakeData/fakedata';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Booking from './Components/Booking/Booking';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import Room from './Components/Room/Room';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


// import { Search } from 'react-bootstrap-icons';





export const UserContext = createContext();

function App(props) {

  const [loggedInUser, setLoggedInUser] = useState({});


  // console.log('app page props', props);

  return (


    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} className="background">
      
      <h3 style={{color: 'white'}} >email: {loggedInUser.email}</h3>
   
      {/* <h1>Name: {loggedInUser.name}</h1> */}

      <Router>
      <Header></Header>

        <Switch>
          
        <Route path="/home">
          <Home></Home>
        </Route>


        {/* <Route exact path="/booking">
                                 
                                  
                                      <Booking>
                                       </Booking>
                                      
                                        </Route> */}

        {/* <Route path="/booking/:id">
          <Booking place={fakeData} />
        </Route> */}

        <Route exact path="/booking"> 
            <Booking></Booking>
        </Route>

        {/* <Route path="/login">
          <Login></Login>
        </Route> */}

        <PrivateRoute exact path="/room">
          <Room></Room>
        </PrivateRoute>

        <Route path="/registration">
          <Registration></Registration>
        </Route>
        
          {/* <PrivateRoute path="/search">
            <Search />
          </PrivateRoute> */}

        <Route exact path="/">
          <Home></Home>
        </Route>

        {/* <Route path="*">
          <NoFound></NoFound>
        </Route> */}

      </Switch>
    </Router >

    </UserContext.Provider>

  );
}

export default App;
