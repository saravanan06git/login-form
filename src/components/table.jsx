import React,{useState,useEffect} from "react";

const Table = () => {
    const [alldata,useStates]=useState([]);
    const myapi= async() =>{
       const myapi = await fetch('https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0')
            .then((response) => response.json())
            .then(data => useStates(data.dataseries))
    }
     useEffect(()=>{
      myapi();
     },[])

console.log(alldata);

    return (
    <div className="pt-5 ">
    <table className="m-auto table table-striped w-75">
        <thead className="bg-dark text-white">
            <tr>
            <th>S.No</th>  
            <th>timepoint</th>
            <th>thansparency</th>
            <th> wind10m - direction</th>
            <th>wind10m-speed</th>
            <th>temp2m as temperature</th>
            </tr>
        </thead>
        <tbody>
            {
                alldata.map((value,id)=>(         
                        <tr key={id}>
                            <td className="fw-bold fs-5">{id+1}</td>
                            <td className="fw-bold fs-5">{value.timepoint}</td>
                            <td className="fw-bold fs-5">{value.transparency}</td>
                            <td className="fw-bold fs-5">{value.wind10m.direction}</td>               
                            <td className="fw-bold fs-5">{value.wind10m.speed}</td>
                            <td className="fw-bold fs-5">{value.temp2m}</td>
                        </tr>
                )      
                )      
            }
        </tbody>
    </table>
    </div>
    );
}

export default Table

// timepoint, transparency, wind10m - direction,wind10m-speed ,temp2m as temperature