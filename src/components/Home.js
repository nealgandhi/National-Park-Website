import React, { PureComponent } from "react";
import "./Home.css";

export class Home extends PureComponent {
  render() {
    return (
      <div
        style={{
          backgroundImage: "url('/park.png')",
          width: "100%",
          paddingTop: '15rem',
          paddingBottom: '15rem',
          color: 'white',
          backdropFilter: 'brightness(150%)'
        }}
      >
        <h1>Hello, where would you like to go today?</h1>
      </div>
    );
  }
}

export default Home;
