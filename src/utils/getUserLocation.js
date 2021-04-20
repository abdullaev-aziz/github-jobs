export const getUserLocation = async (success) => {
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
      navigator.geolocation.getCurrentPosition(()=>console.log('prompt'), errors, options);
    } else if (result.state === "denied") {
      //If denied then you have to show instructions to enable location
      console.log("geolocation permission is denied");
    }
  }
};
