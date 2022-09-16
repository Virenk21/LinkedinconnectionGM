import React from "react";
import "./App.css";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import Footer from "./Footer";

const containerStyle = {
  width: "1400px",
  height: "600px",
};

const center = {
  lat: 28.7041,
  lng: 77.1025,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAl9D_gJluOf2uSZD2KdheX5Z8rAUGyMQA",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={9}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <>
      <Footer />
    </>
  );
}

export default React.memo(MyComponent);
