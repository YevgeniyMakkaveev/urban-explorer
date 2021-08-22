import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import { useSelector } from "react-redux";
import "./Map.css";

const MapComponent = () => {
  const state = useSelector((state) => state.city);
  const { currentView, city } = state;
  let innerId = 2000;
  const ChangeView = ({ location, zoom }) => {
    const map = useMap();
    if (location) {
      map.flyTo(location, zoom);
    }
    return null;
  };

  const createMarkers = (dots) => {
    if (dots) {
      return dots.map((dot) => (
        <Marker key={innerId++} position={dot.mainInfo.position}>
          <Popup>{dot.mainInfo.name}</Popup>
        </Marker>
      ));
    } else {
      return null;
    }
  };
  const chooseCenter = () => {
    if (currentView) {
      return currentView;
    } else return [55.75, 37.61];
  };

  return (
    <>
      <MapContainer center={chooseCenter()} zoom={9}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {createMarkers(city)}
        <ChangeView location={currentView} zoom={11} />
      </MapContainer>
    </>
  );
};
export default MapComponent;
