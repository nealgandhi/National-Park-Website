import React, { PureComponent } from "react";
import "./Home.css";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export class Home extends PureComponent {
  render() {
    return (
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
        <h1>Hello, where would you like to go today?</h1>
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
