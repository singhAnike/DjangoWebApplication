
import React, { useState, useEffect } from 'react';

const Location = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        position => {
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        error => {
          console.error(error);
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
      return () => navigator.geolocation.clearWatch(watchId);
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div>
      {lat && lng && (
        <p>
          Your current location is: ({lat}, {lng})
        </p>
       )}
    </div>
  );
};

export default Location;