import React from "react"
// import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Map, Marker } from "pigeon-maps";

const MyMap = ({markerPosition}) => {
  
     const handleClickMarker = async() => {
    // Open Google Maps with the marker's location
    const [lat, lng ] = await markerPosition;
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    window.open(url, '_blank');
  };

  return (

     <Map height={300} defaultCenter={[25.589413663131815, 91.87529363647245]} defaultZoom={11}>
      <Marker width={50} anchor={markerPosition}  onClick={handleClickMarker} />
    </Map>


    //  <LoadScript
    //   googleMapsApiKey="AIzaSyD6HbdC8pa8Ggr-y5aAx31xNf00mThcTOE"
    // >
    //   <GoogleMap
    //     mapContainerStyle={{ width: '100%', height: '400px' }}
    //     center={{ lat: -34.397, lng: 150.644 }}
    //     zoom={8}
    //   >
    //     { /* Child components, such as markers, go here */ }
    //   </GoogleMap>
    // </LoadScript>
  )
}

export default MyMap;