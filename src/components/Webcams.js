import React, { useState, useEffect } from 'react'
import './Webcams.css'
import Navbar from './Navbar/Navbar';
import Footer from './Footer';
import { ParkFilter } from './ParkFilter';

function Webcams(){
    //API key hidden away through .env 
    const API_KEY = process.env.REACT_APP_API_KEY;
    //state to print out and display the pictures
    const[webcamList, setWebcamList] = useState([]);
    //loading state to ensure API call is done
    const[loading, setLoading] = useState(true);
    
    const fetchData = () =>{
        return fetch(`https://developer.nps.gov/api/v1/webcams?limit=200&api_key=${API_KEY}`)
            .then((response)=> response.json())
            .then((data)=> setWebcamList(data))
            .then(() => setLoading(false))
      ;}
      useEffect(()=>{
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[],)


    //If it's loading, return a base screen w/ basic components
    if(loading){
        return(
            <div>
                <Navbar />
                <h1>Loading...</h1>
                <Footer />
            </div>
        )
    } else{
        return (
            <div>
                <Navbar />
                {/* Mapping into the data to map to each individual picture components */}
                    {webcamList.data.map((pic)=>{
                        return(
                            <div>
                                {/* Park Consumer to read data for Webcam Filtering*/}
                                <ParkFilter.Consumer>
                                    {/* Using the park filter to map through the images that are selected by the filter */}
                                    {({parkFilter}) => (
                                        pic.images.length!==0? pic.images.filter(items => parkFilter?.includes(pic?.relatedParks[0]?.parkCode)===true).map((items)=>{
                                            return(
                                                <div>
                                                    {/* returning the images shown for each park */}
                                                    <p>{pic.relatedParks[0]?.fullName}</p>
                                                    <img className="webcamImages" src={items.url} alt={items.id}/>
                                                </div>
                                            )
                                        }) : <p>No Images found :(</p>
                                    )}
                                </ParkFilter.Consumer>
                            </div>
                        )
                })}
                <Footer />
            </div>
        )
    }
}

export default Webcams
