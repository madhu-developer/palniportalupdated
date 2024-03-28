import React from 'react'
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { Signup } from './components/Signup';
import { Me } from './components/Me';
import { Attendance } from './components/Attendance';



const App = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/me" element={<Me/>}/>
      <Route path="/attendance" element={<Attendance/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App