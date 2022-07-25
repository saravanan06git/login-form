import React from "react"
import './App.css';
import { Counter } from './components/counter';
import {Routes,Route} from 'react-router-dom'
import {Output} from './components/success'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Counter/>}/>
    {/* <Counter/> */}
    <Route path="/dashboard" element={<Output/>}/>
    </Routes>
  );
}

export default App;
