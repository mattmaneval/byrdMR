import React, { Component } from 'react';
import Drone from '../assets/Drone.png';


class DroneBanner extends Component {
  render() {
    return (
      <div className="drone">
        <img className="drone-image" src={Drone} alt="F-210 Drone"/>
        <h1>f-210</h1>
        <h5>"The fastest drone on the planet"</h5>
        <h6>"The - The Wirecutter</h6>
      </div>
    );
  }
}

export default DroneBanner;
