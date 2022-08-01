import React,{useState,useEffect} from "react";

const Table = () => {
    //pagination-click
    const onClickPage = (event) =>{
        setPage(event.target.id)
        console.log(event.target.id);
    }
    const [alldata,setState]=useState([]);
    const [rowsPer]=useState([6,10,12]);
    const [myPage,setPage] = useState(1);
    const [perPage,setrowPage] = useState(5);
    const [searchFilter,setSearchFilter] = useState([]);
    const [search,setSearch] = useState();

    useEffect(()=>{
       
            fetch('https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0')
                 .then((response) => response.json())
                 .then(data => setState(data.dataseries))
         
     },[])



    const emptyArray = [];
    for(var i=1; i<=Math.ceil(alldata.length/perPage); i++){
        emptyArray.push(i);
    }
    console.log(Math.ceil(alldata.length/perPage));
    const devidePage = emptyArray.map(number=>{
        return <li key={number} id={number} className="page-item px-3 mx-1 py-2 fs-5 mt-3 rounded-5 fw-bold bg-warning btn" onClick={onClickPage}>{number}</li>
    })

    const lastPage = myPage*perPage;
    const firstPage = lastPage-perPage;
    const currentItem = alldata.slice(firstPage,lastPage);
    console.log(alldata);
    console.log(currentItem);

    const onSearch = (searchValue) =>{
        setSearch(searchValue)
        const searchFill = alldata.slice(firstPage,lastPage).filter(data=>{
            return Object.values(data).join('').toLowerCase().includes(searchValue.toLowerCase())
            // console.log(data.wind10m.direction.split("").includes(e.target.value.toUpperCase()))
        })
        setSearchFilter(searchFill);
        console.log(search);
    }

    const onChange = (event)=>{
        setrowPage(event.target.value)
    }

     
    return (
    <div className="mt-5">
        <div className="py-4">
            <input type="text" placeholder="Search" name="search" value={search} 
            className="fs-5 fw-bold text-center" onChange={(event)=>onSearch(event.target.value)}/>
        </div>
        <table className="m-auto table table-striped w-75">
        <thead className="bg-dark text-white">
            <tr>
            <th>S.No</th>  
            <th>timepoint</th>
            <th>transparency</th>
            <th> wind10m - direction</th>
            <th>wind10m-speed</th>
            <th>temp2m as temperature</th>
            </tr>
        </thead>
        <tbody>
            {
                
                   currentItem.map((value,id)=>{
                            return(         
                            <tr key={id}>
                                <td className="fw-bold fs-5">{id+1}</td>
                                <td className="fw-bold fs-5">{value.timepoint}</td>
                                <td className="fw-bold fs-5">{value.transparency}</td>
                                <td className="fw-bold fs-5">{value.wind10m.direction}</td>               
                                <td className="fw-bold fs-5">{value.wind10m.speed}</td>
                                <td className="fw-bold fs-5">{value.temp2m}</td>
                            </tr>
                        ) 
                            }     
                    
                )
                // ):(
                //     currentItem.map((value,id)=>(         
                //         <tr key={id}>
                //             <td className="fw-bold fs-5">{id+1}</td>
                //             <td className="fw-bold fs-5">{value.timepoint}</td>
                //             <td className="fw-bold fs-5">{value.transparency}</td>
                //             <td className="fw-bold fs-5">{value.wind10m.direction}</td>               
                //             <td className="fw-bold fs-5">{value.wind10m.speed}</td>
                //             <td className="fw-bold fs-5">{value.temp2m}</td>
                //         </tr>
                //     )      
                // )   

                // )
                 
            }
        </tbody>
    </table>
    <div className="me-4">
    <span className="fs-4 fw-bold text-danger float-end me-5 pe-5 mt-4">
    Rows Per Page
    <select onChange={onChange} className="ms-2 px-2 fs-5 me-5 border-primary fw-bold">
        {rowsPer.map(rowItem =>{
            return(
                <option value={rowItem} key={rowItem}>{rowItem}</option>
            )
        })}
       
    </select>
    </span>
    </div>
    <>
    <nav>
        <ul className="pagination d-flex justify-content-center col-5 ms-3">
        {devidePage}
        </ul>
    </nav>
    </>
    </div>
    );
}
export default Table