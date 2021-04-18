import { useEffect, useState } from "react";

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;
  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function errors(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

const getPosition = async () => {
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
  useEffect(getPosition, []);
}
