"use client"; // Ensure this component is a Client Component

import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places']; // Static array for LoadScript

const Contact = () => {
  const [map, setMap] = useState(null);
  const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });
  const [hospitals, setHospitals] = useState([]);

  const mapStyles = {
    height: "70vh", // Increased height for better visibility
    width: "100%",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Adding a shadow for depth
  };

  const defaultCenter = {
    lat: currentLocation.lat,
    lng: currentLocation.lng,
  };


  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          console.log("User's location:", location); // Log user location
          setCurrentLocation(location);
  
          if (map) {
            map.setCenter(location);
            searchNearbyHospitals(location.lat, location.lng); // Call search with correct lat/lng
          }
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };
  
  

  const searchNearbyHospitals = async (latitude, longitude) => {
    const apiKey = "583024bc48d34c6e87480824d9a1a10b"; // Replace with your Geoapify API key
    const radius = 5000; // 5 km radius
  
    const apiUrl = `https://api.geoapify.com/v2/places?categories=healthcare.hospital&filter=circle:${longitude},${latitude},${radius}&limit=20&apiKey=${apiKey}`;
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Hospitals data fetched from API:", data);
  
      if (data.features && data.features.length > 0) {
        setHospitals(data.features);
      } else {
        console.log('No hospitals found in the response.');
      }
    } catch (error) {
      console.error('Error fetching hospitals:', error);
    }
  };
  

 

  const handleMapLoad = (mapInstance) => {
    setMap(mapInstance);
    getUserLocation();
  };

  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title">Find Nearby Hospitals</h1>
      </header>

      <div className="map-section">
        <LoadScript googleMapsApiKey="AIzaSyDt9ph5gw5RcC-Gv86U6y_CMagejcVSe4c" libraries={libraries}>
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}
            onLoad={handleMapLoad}
          >
            {/* Show markers for nearby hospitals */}
            {hospitals.map((hospital, index) => (
  <Marker
  key={index}
  position={{
    lat: hospital.geometry.coordinates[1], // Adjust according to actual response structure
    lng: hospital.geometry.coordinates[0], // Adjust according to actual response structure
  }}
  title={hospital.properties.name}
/>

))}

          </GoogleMap>
        </LoadScript>
      </div>

      {/* Hospital List */}
      <div className="hospital-list">
        <h2 className="hospital-list-title">🏥 Nearby Hospitals</h2> {/* More creative heading */}
        {hospitals.length > 0 ? (
          <ul className="hospital-list-items">
            {hospitals.map((hospital, index) => (
              <li key={index} className="hospital-list-item">
                <strong>{hospital.properties.name}</strong> - {hospital.properties.address_line1 ? hospital.properties.address_line1 : 'No address available'}
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-hospitals">No hospitals found.</p>
        )}
      </div>
    </div>
  );
};

export default Contact;