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

    // Click handlng to check what activity button is being selected, depending on the state it either opens a new list if no list is open
    // closes the list if the same button is pressed, or switches to the other activity list
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
    // data is loaded and displaying a specific park list
      if (!isLoading && showParkList){
        return (
            <div>
                <Navbar />
                {/* Mapping through the data to pull activity names and handle the button creation */}
                {activitiesList.data.map((activity) =>{
                    return (
                        <div className="buttons">
                            <Activity clickHandle={clickHandle} Activity={activity}/>
                        </div>
                    )
                })}
                {/* Div to handle the park list and display those accordingly */}
                <div className="parksList">
                    {currentActivity.parks.map((park) => {
                    return(
                            <ul key={park.id}>{park.fullName}</ul>
                    )
                    })}
                </div>
                <Footer />
            </div>
        );
    }
    // no park list is being shown but the data is loaded
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
        // data is still loading
        return(
            <div> 
                <Navbar />
                <h1>Loading...</h1>
                <Footer />
            </div>
        );
    }

}
export default Activities
