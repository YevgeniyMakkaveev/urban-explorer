import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import { useSelector } from "react-redux";
import "./Map.css";

const MapComponent = () => {
  const state = useSelector((state) => state.city);
  const { currentView, city } = state;

  const ChangeView = ({ location, zoom }) => {
    const map = useMap();
    if (location) {
      map.flyTo(location, zoom);
    }
    return null;
  };

  const createMarkers = (dots) => {
    console.log(dots, "njxrb");
    if (dots) {
      return dots.map((dot) => (
        <Marker position={dot.mainInfo.position}>
          <Popup>{dot.mainInfo.name}</Popup>
        </Marker>
      ));
    } else {
      return null;
    }
  };

  return (
    <>
      <MapContainer center={[10, 10]} zoom={6}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {createMarkers(city)}
        <ChangeView location={currentView} zoom={12} />
      </MapContainer>
    </>
  );
};
export default MapComponent;
