import React, { PureComponent } from "react";
import "./Home.css";

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
       <a href="/parkList"><input type="button" value="List of Parks" /></a>
       <a href="/activity"><input type="button" value="Activities" /></a>
       <a href="/webcams"><input type="button" value="Webcams" /></a>
      </div>
    );
  }
}

export default Home;
