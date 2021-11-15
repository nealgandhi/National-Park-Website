import React from 'react';
import "./Activity.css"

const Activity =({Activity, clickHandle})=>{
    return (
        <div className="buttonList">
            <div>
                <button onClick={() => {clickHandle(Activity)}}  className="buttons">
                    {Activity.name}
                </button>
            </div>
        </div>
    );
};

export default Activity;



