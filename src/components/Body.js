import React, { useState, useEffect } from 'react'
import './Body.css'

function Body() {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const[parklist, setParkList] = useState([]);
    const[loading, setLoading] = useState(true);
    const[searchTerm, setSearchTerm] = useState("");

    const fetchData = () =>{
        return fetch(`https://developer.nps.gov/api/v1/parks?limit=496&api_key=${API_KEY}`)
            .then((response)=> response.json())
            .then((data)=> setParkList(data))
            .then(() => setLoading(false))
      ;}
      useEffect(()=>{
        fetchData();
      },[],)
    if(!loading){
        return (
            <div className="Body">
                <div className="parkList">
                        <div>
                             <input type="text" placeholder="Search for..." onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm}/>
                             {parklist.data.filter((val)=>{
                                 if(searchTerm===""){
                                     return (
                                        <div className="searchList">
                                            {val.fullName}
                                        </div>
                                     )
                                 } else if(val.fullName.toLowerCase().includes(searchTerm.toLowerCase())){
                                        return(
                                            <div className="searchList">
                                                {val.fullName}
                                            </div> 
                                        )
                                 }
                             }).map((parks,key)=>{
                                 return(
                                     <div className="searchList" key={key}>
                                         <h1>{parks.fullName}</h1>
                                         <img className="parkImages" src={parks.images[0].url} alt={parks.parkCode}/>
                                         <p>{parks.description}</p>
                                     </div>
                                 )
                             })}
                        </div>
                </div>
            </div>
        )
    } else {
        return <h1>Loading...</h1>
    }
}
export default Body