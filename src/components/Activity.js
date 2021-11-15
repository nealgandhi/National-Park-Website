import React from 'react';
import "./Activity.css"
import Button from '@mui/material/Button';

const Activity =({Activity, clickHandle})=>{
    return (
        <div className="buttonList">
            <div>
                <Button color="success" onClick={()=>{clickHandle(Activity)}}variant="contained" size="small">{Activity.name}</Button>
            </div>
        </div>
    );
};

export default Activity;


