import React, { useState, useEffect } from 'react'
import "./Activities.css"
import Activity from "./Activity";

function Activities() {
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
        return fetch(`https://developer.nps.gov/api/v1/activities/parks?limit=50&api_key=0a3iYxfmXlLUVp8qLKccleThE9ZqALeTdQhrPISn`)
            .then((response)=> response.json())
            .then((data)=> setActivities(data))
            .then(() => setLoading(false))
      ;}

      useEffect(()=>{
        fetchData();
      },[],)
      // add rendering here
      if (!isLoading && showParkList){
        return (
            <>
              <div>
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
            </div>
             </>

        );
    }
     else if(!isLoading){
        return(
            <>
            <div>
            {activitiesList.data.map((activity) =>{
                return (
                    <div className="buttons">
                        <Activity clickHandle={clickHandle} Activity={activity}/>
                    </div>
                )
            })}
            </div>
            </>
        );
    } else {
        return(
            <div> 
                <h1>Loading...</h1>
            </div>
        );
    }

}
/*
<Link className='parkLinks' to={`/${parks.parkCode}`}>{parks.fullName}</Link>
*/
export default Activities
