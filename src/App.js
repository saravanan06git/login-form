import React from "react";
import './App.css';
import { Counter } from './components/counter';
import {Routes,Route} from 'react-router-dom';
import {Output} from './components/success';
// import Table from "./components/table";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Counter/>}/>
    <Route path="/dashboard" element={<Output/>}/>
    </Routes>
  );
}

export default App;
