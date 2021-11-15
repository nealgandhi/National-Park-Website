import React, { useState, useEffect } from 'react'
import './Webcams.css'
import Navbar from './Navbar/Navbar';
import Footer from './Footer';
function Webcams() {
    const API_KEY = process.env.REACT_APP_API_KEY
    const[webcamList, setWebcamList] = useState([]);
    const[loading, setLoading] = useState(true);
    
    const fetchData = () =>{
        return fetch(`https://developer.nps.gov/api/v1/webcams?api_key=${API_KEY}`)
            .then((response)=> response.json())
            .then((data)=> setWebcamList(data))
            .then(() => setLoading(false))
      ;}
      useEffect(()=>{
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[],)
    if(loading){
        return(
            <div>
                <Navbar />
                <h1>Loading...</h1>
                <Footer />
            </div>
        )
    } else if(!loading && webcamList.data.length===0){
        return(
            <div>No Image Found :( </div>
        )
    } else{
        return (
            <div>
                <Navbar />
                {webcamList.data.map((pic)=>{
                    return(
                        <div>
                            {pic.images.map((items)=>{
                                return(
                                    <div>
                                        <img className="webcamImages" src={items.url} alt={items.id}/>
                                        <p>{items.description}</p>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
                <Footer />
            </div>
        )
    }
}

export default Webcams
