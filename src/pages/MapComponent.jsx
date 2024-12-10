import React, { useEffect, useRef, useState } from 'react';
import 'ol/ol.css'; // OpenLayers default CSS
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj'; // To convert coordinates
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import { Style, Icon } from 'ol/style';

function MapComponent() {
  const mapRef = useRef(); // Reference to the map div
  const mapInstance = useRef(); // Reference to the OpenLayers map instance
  const [userPosition, setUserPosition] = useState(null); // State for user location

  useEffect(() => {
    // Initialize the map
    const initialView = new View({
      center: fromLonLat([0, 0]), // Default to [longitude, latitude]
      zoom: 2, // Initial zoom level
    });

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(), // OpenStreetMap tiles
        }),
      ],
      view: initialView,
    });

    mapInstance.current = map;

    // Create a vector layer for the user's location marker
    const userLayer = new VectorLayer({
      source: new VectorSource(),
      style: new Style({
        image: new Icon({
          src: 'https://cdn-icons-png.flaticon.com/512/854/854878.png', // Marker icon
          scale: 0.05, // Adjust icon size
        }),
      }),
    });

    map.addLayer(userLayer);

    // Function to handle geolocation success
    const success = (position) => {
      const { latitude, longitude } = position.coords;
      const coords = fromLonLat([longitude, latitude]); // Convert to map projection
      setUserPosition(coords);

      // Center map on user location
      initialView.setCenter(coords);
      initialView.setZoom(15);

      // Add/update marker on user location
      const userFeature = new Feature({
        geometry: new Point(coords),
      });
      userLayer.getSource().clear(); // Clear previous markers
      userLayer.getSource().addFeature(userFeature);
    };

    // Function to handle geolocation errors
    const error = () => {
      alert('Unable to retrieve your location. Please enable location services.');
    };

    // Start watching user position
    const watchId = navigator.geolocation.watchPosition(success, error);

    // Cleanup on component unmount
    return () => {
      navigator.geolocation.clearWatch(watchId);
      map.setTarget(null); // Destroy the map instance
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Live Location Map
      </h1>
      <div
        ref={mapRef}
        className="w-full h-[70vh] lg:h-[85vh] rounded-lg shadow-lg border border-gray-300"
      />
    </div>
  );
}

export default MapComponent;