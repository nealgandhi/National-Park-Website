import React, { useState, useEffect } from 'react'
import Navbar from './Navbar/Navbar';
import Footer from './Footer';
import Button from '@mui/material/Button';
import { ParkFilter } from './ParkFilter';
import './Body.css'


function Body() {
    const API_KEY = process.env.REACT_APP_API_KEY;
    //parkList state for data
    const[parklist, setParkList] = useState([]);
    //State variable to check if page is still loading
    const[loading, setLoading] = useState(true);
    //searchTerm state to fill out
    const[searchTerm, setSearchTerm] = useState("");


    //API Data Fetch
    const fetchData = () =>{
        return fetch(`https://developer.nps.gov/api/v1/parks?limit=500&api_key=${API_KEY}`)
            .then((response)=> response.json())
            .then((data)=> setParkList(data))
            .then(() => setLoading(false))
      ;}
      useEffect(()=>{
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])
    if(!loading){
        return (
            <div>
                <Navbar />
                <div className="Body">
                    {/* Search bar to search through the list of park cards to filter out */}
                    <input className="bodyInput" type="text" placeholder="Search for..." onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm}/>
                        <div className="searchList">
                            {/* allows me to display the park cards according to how the suggestions are formed */}
                             {/* eslint-disable-next-line array-callback-return */}
                             {parklist.data.filter((val)=>{
                                //  if there is no search term meaning search bar is empty, display everything
                                 if(searchTerm===""){
                                     return (
                                        <div className="searchList" key={val.id}>
                                            {val.fullName}
                                        </div>
                                     )
                                    //  if there is any input in the search bar, display matches to such
                                 } else if(val.fullName.toLowerCase().includes(searchTerm.toLowerCase())){
                                        return(
                                            <div className="searchList" key={val.id}>
                                                {val.fullName}
                                            </div> 
                                        )
                                 }
                             }).map((parks,key)=>{
                                 return(
                                    //  rendering of the actual park cards themselves
                                    <div className="blockList" key={key}>
                                        <div className="block">
                                            <h1>{parks.fullName}</h1>
                                            <img className="parkImages" src={parks.images[0].url} alt={parks.parkCode}/>
                                            <div>
                                                {/* This component here lets me set up a watch list add button that saves the parkCode
                                                    into an array and use it in my Webcams.js file to filter out the data there.
                                                */}
                                                <ParkFilter.Consumer>
                                                    {({addPark}) => {
                                                        return <Button onClick={()=>addPark(parks.parkCode)}>Add to Watchlist</Button>
                                                    }}
                                                </ParkFilter.Consumer>
                                                <div className="parkText">
                                                    <p>{parks.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                     </div>
                                 )
                             })}
                             </div>
                </div>
                <Footer />
            </div>
        )
    } else {
        return (
            <div>
                {/* Base display if the data is not done loading */}
                <Navbar />
                <h1>Loading...</h1>
                <Footer />
            </div>
        )
    }
}
export default Body;
