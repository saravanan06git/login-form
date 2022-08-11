import React from "react";
import Axios from "axios";

function PostForm(){

    const [data, setData] = useState();

    function handle(e){
        const newData ={...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }
    return(
        <>
                    <h1 className="text-center fw-bold py-5">Weather Forcastes Listing</h1>
                    <form className="fw-bold text-center">
                        <div className="mb-4">
                        <label className="fs-3 pe-4">TimePoint</label>
                        <input type="number" className="text-center fw-bold fs-3" onChange={(e)=>handle(e)} id="timepoint" value={data.timepoint}/>
                        </div>
                        <div className="mb-4">
                        <label className="fs-3 pe-4">Tranceperancy</label>
                        <input type="number" className="text-center fw-bold fs-3" onChange={(e)=>handle(e)} id="transparency" value={data.transparency}/>
                        </div>
                        <div className="mb-4">
                        <label className="fs-3 pe-4">Wind10m-Direction</label>
                        <input type="text" className="text-center fw-bold fs-3" onChange={(e)=>handle(e)} id="direction" value={data.wind10m.direction}/>
                        </div>
                        <div className="mb-4">
                        <label className="fs-3 pe-4">Wind10m-Speed</label>
                        <input type="number" className="text-center fw-bold fs-3" onChange={(e)=>handle(e)} id="speed" value={data.wind10m.speed}/>
                        </div>
                        <div className="mb-4">
                        <label className="fs-3 pe-4">Temperature</label>
                        <input type="number" className="text-center fw-bold fs-3" onChange={(e)=>handle(e)} id="temp2m" value={data.temp2m}/>
                        </div>
                        <div className="text-center">
                        {/* <button onClick={closeModal} className="px-5 m-auto py-2 rounded-pill mt-4 fw-bold bg-danger text-white border-0">Back</button> */}
                        <button className="px-5 m-auto py-2 rounded-pill mt-4 fw-bold bg-success text-white border-0 mx-3">Save</button>
                        </div>
                    </form>                    
            </>
    )
}

export default PostForm