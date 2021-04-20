import { useEffect, useState } from "react";

/**
 * 
 * returns coordinates obj
 * {lat, long} if user allowed location
 * otherwise returns null
 */

const getPosition = async (success) => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function errors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  if (navigator.geolocation) {
    const result = await navigator.permissions.query({ name: "geolocation" });
    if (result.state === "granted") {
      navigator.geolocation.getCurrentPosition(success);
    } else if (result.state === "prompt") {
      navigator.geolocation.getCurrentPosition(success, errors, options);
    } else if (result.state === "denied") {
      //If denied then you have to show instructions to enable location
      console.log("geolocation permission is denied");
    }
  }
};

export default function useGeolocation() {
  const [coordinates, setCoordinates] = useState(null);
  useEffect(
    () =>
      getPosition(({ coords }) => {
        setCoordinates({
          long: coords.longitude,
          lat: coords.latitude,
        });
      }),
    []
  );

  return coordinates;
}
