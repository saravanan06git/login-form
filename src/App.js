import React from "react";
import './App.css';
import { Login } from './components/login';
import {Routes,Route} from 'react-router-dom';
import {WelcomePage} from './components/welcomepage';
// import Table from "./components/table";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
    <Route path="/dashboard" element={<WelcomePage/>}/>
    </Routes>
  );
}

export default App;
