import React,{useState,useEffect} from "react";
import Modal from "react-modal";
import { useDispatch,useSelector} from "react-redux";
// import { addFun,editFun } from "../redux/redux";

const Table = () => {

    const dispatch = useDispatch();
    const selector = useSelector(state=>state);
    console.log(selector)

    const onClickPage = (event) =>{
        setPage(event.target.id)
        console.log(event.target.id);
    }
    
    let [id,setId] = useState(0);
    const [alldata,setState]=useState([]);
    const [rowsPer]=useState([6,10,12]);
    const [myPage,setPage] = useState(1);
    const [perPage,setrowPage] = useState(6);
    const [searchData,setSearchData] = useState([]);
    const [modalIsOpen,setIsOpen] = useState(false);
    const [modalIsEdit,setIsEdit] = useState(false);
    //add
    const [TimePoint, setTimePoint] = useState('');
    const [Tranceperancy, setTranceperancy] = useState('');
    const [Wind10mDirection, setWind10mDirection] = useState('');
    const [Wind10mSpeed, setWind10mSpeed] = useState('');
    const [Temperature, setTemperature] = useState('');
    //edit
    const [editTimePoint, seteditTimePoint] = useState('');  
    const [editTranceperancy, seteditTranceperancy] = useState('');
    const [editWind10mDirection, seteditWind10mDirection] = useState('');
    const [editWind10mSpeed, seteditWind10mSpeed] = useState('');
    const [editTemperature, seteditTemperature] = useState('');
    const [editId,setEditId] = useState('');
    console.log(editId);

    // useEffect(()=>{
       
    //         fetch('https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0')
    //              .then((response) => response.json())
    //              .then(data => {
    //                 setState(data.dataseries)
    //                 setId(data.dataseries.length)
    //             })
    //             if(id){
    //                 const changeValue = selector.filter((e)=>e.id === parseInt(id.id) && e)
    //                 seteditTimePoint(changeValue[0].editTimePoint)
    //                 seteditTranceperancy(changeValue[0].editTranceperancy)
    //                 seteditWind10mDirection(changeValue[0].editWind10mDirection)
    //                 seteditWind10mSpeed(changeValue[0].editWind10mSpeed)
    //                 seteditTemperature(changeValue[0].editTemperature)
    //             }
    //  },[])
    //  console.log(id)

    const emptyArray = [];
    for(var i=1; i<=Math.ceil(alldata.length/perPage); i++){
        emptyArray.push(i);
    }
    // console.log(Math.ceil(alldata.length/perPage));
    const devidePage = emptyArray.map(number=>{
        return <li key={number} id={number} className="page-item px-3 mx-1 py-2 fs-5 mt-3 rounded-5 fw-bold bg-warning btn " onClick={onClickPage}>{number}</li>
    })

    const searchFun = () => searchData.length !== 0 ? searchData : alldata

    const lastPage = myPage*perPage;
    const firstPage = lastPage-perPage;
    const currentItem = searchFun().slice(firstPage,lastPage);
    console.log(alldata);
    // console.log(currentItem);

    const SearchBox = (e)=>{
        let searchBox = alldata.filter(data=>data.wind10m.direction.toLowerCase().indexOf(e.target.value) > -1 && data);
        setSearchData(searchBox)
    }
    // console.log(searchData)
    function openModal() {
        setIsOpen(true);
      }    
      function saveModal(){
        setIsOpen(false);
        setState([...alldata,{
            timepoint: TimePoint,
            transparency: Tranceperancy,
            wind10m:{direction: Wind10mDirection,speed:Wind10mSpeed},
            temp2m: Temperature
        }])
        localStorage.setItem('id',id+1)
        localStorage.setItem('timepoint',TimePoint)
        localStorage.setItem('transparency',Tranceperancy)
        localStorage.setItem('direction',Wind10mDirection)
        localStorage.setItem('speed',Wind10mSpeed)
        localStorage.setItem('temp2m',Temperature)

        // const dataObjec = {
        //     id:alldata.length,
        //     TimePoint,
        //     Tranceperancy,
        //     Wind10mDirection,
        //     Wind10mSpeed,
        //     Temperature
        // }
        // dispatch(addFun(dataObjec))
        // console.log(dataObjec)
      }
      function editModal(){
        setIsEdit(false);
            // const editableData = alldata.filter((item)=>item)
            // console.log(editableData)
            // const editObjecModal = {
            //     id:selector[selector.length-1].id,
            //     TimePoint,
            //     Tranceperancy,
            //     Wind10mDirection,
            //     Wind10mSpeed,
            //     Temperature
            // }
            // dispatch(editFun(editObjecModal))
            // console.log(editObjecModal)
      }
    //   console.log("hi");
    return (
    <div className="mt-5">
        <div className="py-4">
            <input type="text" placeholder="Search" name="search" 
            className="fs-5 fw-bold text-center rounded-pill" onChange={SearchBox}/>
            <button className="ms-2 px-4 py-1 fw-bold rounded-pill bg-primary text-white border-0" onClick={openModal}>Add</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={saveModal}
                contentLabel="Example Modal" className="bg-primary py-5">
                    <h1 className="text-center fw-bold pb-5 text-white">Weather Forcastes Listing</h1>
                    <form className="fw-bold d-flex flex-column w-25 m-auto bg-dark px-5 py-5 rounded-5">
                        <input type="number" className="text-center fw-bold fs-4 mb-3 rounded-pill border-0" value={TimePoint} onInput={e => setTimePoint(e.target.value)} placeholder="timepoint"/>
                        <input type="number" className="text-center fw-bold fs-4 my-3 rounded-pill border-0" value={Tranceperancy} onInput={e => setTranceperancy(e.target.value)}  placeholder="tranceperancy"/>
                        <input type="text" className="text-center fw-bold fs-4 my-3 rounded-pill border-0" value={Wind10mDirection} onInput={e => setWind10mDirection(e.target.value)}  placeholder="direction"/>
                        <input type="number" className="text-center fw-bold fs-4 my-3 rounded-pill border-0" value={Wind10mSpeed} onInput={e => setWind10mSpeed(e.target.value)}  placeholder="speed"/>
                        <input type="number" className="text-center fw-bold fs-4 my-3 rounded-pill border-0" value={Temperature} onInput={e => setTemperature(e.target.value)}  placeholder="temperature"/>
                        <button onClick={saveModal} className="px-5 m-auto py-2 rounded-pill mt-4 fw-bold bg-success text-white border-0 mx-3">Save</button>
                    </form>                    
            </Modal>
            {/* <button className="ms-2 px-4 py-1 fw-bold rounded-pill bg-primary text-white" onChange={editValue}>Edit</button> */}
        </div>
        {/* <table className="m-auto table table-striped w-75">
        <thead className="bg-dark text-white">
            <tr>
            <th>S.No</th>  
            <th>Timepoint</th>
            <th>Transparency</th>
            <th> Wind10m - Direction</th>
            <th>Wind10m-Speed</th>
            <th>Temperature</th>
            <th>Edit Action</th>
            </tr>
        </thead>
        <tbody>
            {
                
                   currentItem.map((value,id)=>{
                            return(         
                            <tr key={id}>
                                <td className="fw-bold fs-5">{(perPage*(myPage-1))+id+1}</td>
                                <td className="fw-bold fs-5">{value.timepoint}</td>
                                <td className="fw-bold fs-5">{value.transparency}</td>
                                <td className="fw-bold fs-5">{value.wind10m.direction}</td>               
                                <td className="fw-bold fs-5">{value.wind10m.speed}</td>
                                <td className="fw-bold fs-5">{value.temp2m}</td> 
                                <td> <button className="ms-2 px-4 py-1 fw-bold rounded-pill bg-success text-white border-0" onClick={saveModal(()=>(perPage*(myPage-1))+id+1)}>Edit</button></td>   
                            </tr>
                        ) 
                            }     
                )                 
            }
        </tbody>
    </table> */}
    <div className="me-4">
    <span className="fs-4 fw-bold text-danger float-end me-5 pe-5 mt-4">
    Rows Per Page
    <select className="ms-2 px-2 fs-5 me-5 border-primary fw-bold" onChange={(event)=>setrowPage(event.target.value)}>
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
    <Modal
                isOpen={modalIsEdit}
                onRequestClose={editModal}
                contentLabel="Example Modal" className="bg-primary py-5">
                    <h1 className="text-center fw-bold pb-5 text-white">Weather Forcastes Listing</h1>
                    <form className="fw-bold d-flex flex-column w-25 m-auto bg-dark px-5 py-5 rounded-5">
                        <input type="number" className="text-center fw-bold fs-4 mb-3 rounded-pill border-0" value={editTimePoint} onInput={e => seteditTimePoint(e.target.value)} placeholder="timepoint"/>
                        <input type="number" className="text-center fw-bold fs-4 my-3 rounded-pill border-0" value={editTranceperancy} onInput={e => seteditTranceperancy(e.target.value)}  placeholder="tranceperancy"/>
                        <input type="text" className="text-center fw-bold fs-4 my-3 rounded-pill border-0" value={editWind10mDirection} onInput={e => seteditWind10mDirection(e.target.value)}  placeholder="direction"/>
                        <input type="number" className="text-center fw-bold fs-4 my-3 rounded-pill border-0" value={editWind10mSpeed} onInput={e => seteditWind10mSpeed(e.target.value)}  placeholder="speed"/>
                        <input type="number" className="text-center fw-bold fs-4 my-3 rounded-pill border-0" value={editTemperature} onInput={e => seteditTemperature(e.target.value)}  placeholder="temperature"/>
                        <button onClick={saveModal} className="px-5 m-auto py-2 rounded-pill mt-4 fw-bold bg-success text-white border-0 mx-3">Save</button>
                    </form>                    
            </Modal>
    </div>
    );
}
export default Table