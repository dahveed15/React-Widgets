import React from 'react';
import ReactDOM from 'react-dom';

class Weather extends React.Component {

  componentdidMount() {

    let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(this.success, this.error, options);
  }

  success(pos) {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  render() {
    return (
      <div>
        I AM THE WEATHER COMPONENT
      </div>
    );
  }
}

export default Weather;
