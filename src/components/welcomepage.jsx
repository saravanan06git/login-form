import React from "react";
import {Link} from "react-router-dom";
import { TableData } from "./TableData";

export const WelcomePage = () => {
  return  (
    <div className="text-center mt-5 pt-5">
    <Link to="/"><button className="py-2 px-5 rounded-pill fw-bold text-white bg-success">Sign Out</button></Link>
  <h1 className="mt-5 fw-bold text-capitalize w-50 h-50 m-auto bg-warning py-5 rounded-pill">Welcome login Page</h1>
  {/* <Table/> */}
  <TableData/>
  </div>
  )
}
