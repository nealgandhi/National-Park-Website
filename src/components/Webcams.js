import React, { useState, useEffect } from 'react'
import './Webcams.css'
function Webcams() {
    const[webcamList, setWebcamList] = useState([]);
    const[loading, setLoading] = useState(true);
    
    const fetchData = () =>{
        return fetch(`https://developer.nps.gov/api/v1/webcams?api_key=0a3iYxfmXlLUVp8qLKccleThE9ZqALeTdQhrPISn`)
            .then((response)=> response.json())
            .then((data)=> setWebcamList(data))
            .then(() => setLoading(false))
      ;}
      useEffect(()=>{
        fetchData();
      },[],)
    if(loading){
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        )
    } else if(!loading && webcamList.data.length===0){
        return(
            <div>No Image Found :( </div>
        )
    } else{
        return (
            <div>
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
            </div>
        )
    }
}

export default Webcams
