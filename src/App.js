import React, { useState } from 'react';
import Login from './Components/login';
import AddDonation from './Components/addDonation';
import Donation from './Components/donation';
import Points from './Components/points';
import Router from './Components/router';
import { useDispatch} from 'react-redux';
import{initStudents}from'./store/studentSlice/studentAction'

function App() {
  
//   const dispatch=useDispatch();
// dispatch(initStudents)
  return(<>
    {/* <Login/>
    <AddDonation/>
    <Donation/>
    <Points/> */}
    <Router/>
  </>)
}

export default App;
