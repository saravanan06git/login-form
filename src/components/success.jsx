import React from "react";
import {Link} from "react-router-dom"

export let Output = () => {
  return  (
    <div className="text-center mt-5 pt-5">
    <Link to="/"><button>Back to Login</button></Link>
  <h1 className="mt-5">Welcome</h1>
  </div>
  )
}
