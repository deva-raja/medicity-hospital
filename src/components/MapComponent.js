import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import * as branchData from '../data/medicity-branches.json';

export default function App() {
  return (
    <div className='content'>
      <h1>Find Us Anywhere in India</h1>
      <MapContainer center={[20.593683, 78.962883]} zoom={5}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {branchData.branches.map((branch, index) => (
          <Marker key={index} position={[branch.coordinates[0], branch.coordinates[1]]}>
            <Popup className='map-popup'>
              {branch.name}
              {/* {branch.name} <br /> Easily customizable. */}
            </Popup>
          </Marker>
        ))}
        console.log(activeBranch);
      </MapContainer>
    </div>
  );
}
