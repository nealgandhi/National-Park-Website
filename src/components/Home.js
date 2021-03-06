import React, { PureComponent } from "react";
import "./Home.css";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export class Home extends PureComponent {
  render() {
    return (
        // in-line CSSing to handle splash image on the home page
        <div
        style={{
          backgroundImage: "url('/park.png')",
          width: "100%",
          paddingTop: '21rem',
          paddingBottom: '22rem',
          color: 'white',
          backdropFilter: 'brightness(150%)'
        }}
      >
        <h1>Welcome to National Park Search</h1>
        <p>What would you like to view today?</p>
        {/* Material UI buttons that have links to the different pages to prevent the use of the 
            Navbar component for styling purposes 
        */}
        <div className="homeButtons">
            <Stack direction="row" spacing={2}>
                <Button href="/parkList" variant="contained">List of Parks</Button>
                <Button href="/activity" variant="contained">Activities</Button>
                <Button href="/webcams" variant="contained">Webcams</Button>
            </Stack>
        </div>
      </div>
    );
  }
}

export default Home;
