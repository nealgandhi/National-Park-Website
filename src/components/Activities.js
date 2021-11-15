import React, { useState, useEffect } from 'react'
import "./Activities.css"
import Activity from "./Activity";
import Navbar from './Navbar/Navbar';
import Footer from './Footer';

function Activities() {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const[activitiesList, setActivities] = useState([]);
    const[isLoading, setLoading] = useState(true);
    const [currentActivity, setCurrentActivity] = useState(null);
    const [showParkList, setShowParkList] = useState(false);

    // param will be the data
    const clickHandle = (activity) => {
        if (currentActivity == null) {
            setCurrentActivity(activity);
            setShowParkList(true);
        } else if (currentActivity.id !== activity.id) {
            setCurrentActivity(activity);
        } else {
            setCurrentActivity(null);
            setShowParkList(false);
        }
    }


    const fetchData = () =>{
        return fetch(`https://developer.nps.gov/api/v1/activities/parks?limit=50&api_key=${API_KEY}`)
            .then((response)=> response.json())
            .then((data)=> setActivities(data))
            .then(() => setLoading(false))
      ;}

      useEffect(()=>{
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[],)
      if (!isLoading && showParkList){
        return (
            <>
                <div>
                <Navbar />
                {activitiesList.data.map((activity) =>{
                return (
                    <div className="buttons">
                        <Activity clickHandle={clickHandle} Activity={activity}/>
                    </div>
                )
            })}
            {currentActivity.parks.map((park) => {
               return( 
                <ul className="parksList">{park.fullName}</ul>
               )
             })}
             <Footer />
            </div>
             </>

        );
    }
     else if(!isLoading){
        return(
            <>
            <div>
            <Navbar />
            {activitiesList.data.map((activity) =>{
                return (
                    <div className="buttons">
                        <Activity clickHandle={clickHandle} Activity={activity}/>
                    </div>
                )
            })}
            <Footer />
            </div>
            </>
        );
    } else {
        return(
            <div> 
                <Navbar />
                <h1>Loading...</h1>
                <Footer />
            </div>
        );
    }

}
/*
<Link className='parkLinks' to={`/${parks.parkCode}`}>{parks.fullName}</Link>
*/
export default Activities
