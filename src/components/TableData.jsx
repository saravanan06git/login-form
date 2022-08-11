import React, { useState, useEffect } from "react";
import Modal from "react-modal";

export const TableData = () => {
  //all data get
  const [alldata, setState] = useState([]);
//   alldata.pop()
  //dived the data page
  const [rowsPer] = useState([6, 10, 12]);
  const [myPage, setPage] = useState(1);
  const [perPage, setrowPage] = useState(6);
  //search Data
  const [searchData, setSearchData] = useState([]);

      //add
      const [modalIsOpen,setIsOpen] = useState(false);
      const [editOpen,setEditOpen] = useState(false);
      const [editModalOpen,seteditModalOpen] = useState([]);
      const [TimePoint, setTimePoint] = useState('');
      const [Tranceperancy, setTranceperancy] = useState('');
      const [Wind10mDirection, setWind10mDirection] = useState('');
      const [Wind10mSpeed, setWind10mSpeed] = useState('');
      const [Temperature, setTemperature] = useState('');

  useEffect(() => {
    fetch(
      "https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0"
    )
      .then((response) => response.json())
      .then((data) => {
        setState(data.dataseries);
      });
  }, []);

  //page No click
  const onClickPage = (event) => {
    setPage(event.target.id);
    console.log(event.target.id);
  };

  //push date to seperate page count
  const emptyArray = [];
  for (var i = 1; i <= Math.ceil(alldata.length / perPage); i++) {
    emptyArray.push(i);
  }

  const devidePage = emptyArray.map((number) => {
    return (
      <li
        key={number}
        id={number}
        className="page-item px-3 mx-1 py-2 fs-5 mt-3 rounded-5 fw-bold bg-warning btn "
        onClick={onClickPage}
      >
        {number}
      </li>
    );
  });

  const searchFun = () => searchData.length !== 0 ? searchData : alldata

  const lastPage = myPage * perPage;
  const firstPage = lastPage - perPage;
  const currentItem = searchFun().slice(firstPage, lastPage);

  const SearchBox = (e) => {
    let searchBox = alldata.filter(data =>data.wind10m.direction.toLowerCase().indexOf(e.target.value) > -1 && data)  
    setSearchData(searchBox);
  };

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
}

const editFun = (id)=>{
    setEditOpen(true);
    seteditModalOpen(alldata[id]);
    console.log(alldata[id].wind10m.direction);
}

  return (
    <div className="mt-5">
        <input
          type="text"
          placeholder="Search"
          name="search"
          className="fs-5 fw-bold text-center rounded-pill"
          onChange={SearchBox}
        />
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
            <Modal
                isOpen={editOpen}
                onRequestClose={editFun}
                contentLabel="Example Modal" className="bg-primary py-5">
                    <h1 className="text-center fw-bold pb-5 text-white">Weather Forcastes Listing</h1>
                    <form className="fw-bold d-flex flex-column w-25 m-auto bg-dark px-5 py-5 rounded-5">
                        <input type="number" className="text-center fw-bold fs-4 mb-3 rounded-pill border-0" value={editModalOpen.timepoint} onInput={e => setTimePoint(e.target.value)} placeholder="timepoint"/>
                        <input type="number" className="text-center fw-bold fs-4 my-3 rounded-pill border-0" value={editModalOpen.transparency} onInput={e => setTranceperancy(e.target.value)}  placeholder="tranceperancy"/>
                        <input type="text" className="text-center fw-bold fs-4 my-3 rounded-pill border-0" value={editModalOpen.wind10m} onInput={e => setWind10mDirection(e.target.value)}  placeholder="direction"/>
                        <input type="number" className="text-center fw-bold fs-4 my-3 rounded-pill border-0" value={editModalOpen.wind10m} onInput={e => setWind10mSpeed(e.target.value)}  placeholder="speed"/>
                        <input type="number" className="text-center fw-bold fs-4 my-3 rounded-pill border-0" value={editModalOpen.temp2m} onInput={e => setTemperature(e.target.value)}  placeholder="temperature"/>
                        <button onClick={saveModal} className="px-5 m-auto py-2 rounded-pill mt-4 fw-bold bg-success text-white border-0 mx-3">Save</button>
                    </form>                    
            </Modal>
        <table className="m-auto table table-striped w-75 mt-5">
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
            {currentItem.map((value, id, index) => {
              return (
                <tr key={id}>
                  <td className="fw-bold fs-5">
                    {perPage * (myPage - 1) + id + 1}
                  </td>
                  <td className="fw-bold fs-5">{value.timepoint}</td>
                  <td className="fw-bold fs-5">{value.transparency}</td>
                  <td className="fw-bold fs-5">{value.wind10m.direction}</td>
                  <td className="fw-bold fs-5">{value.wind10m.speed}</td>
                  <td className="fw-bold fs-5">{value.temp2m}</td>
                  <td><button className="ms-2 px-4 py-1 fw-bold rounded-pill bg-success text-white border-0" onClick={()=>editFun(id)}>Edit</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="me-4">
          <span className="fs-4 fw-bold text-danger float-end me-5 pe-5 mt-4">
            Rows Per Page
            <select
              className="ms-2 px-2 fs-5 me-5 border-primary fw-bold"
              onChange={(event) => setrowPage(event.target.value)}
            >
              {rowsPer.map((rowItem) => {
                return (
                  <option value={rowItem} key={rowItem}>
                    {rowItem}
                  </option>
                );
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
};
