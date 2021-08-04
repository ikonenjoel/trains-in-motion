import './App.css';
import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hpcm55IiwiYSI6ImNrcjA2ZWNvZzBlMTEydGxnajRlbWNyc24ifQ.8_SGMco1zkpT6LXwNxErSQ'


export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [ lng, setLng ] = useState(24.9397973)
  const [ lat, setLat ] = useState(60.1697452)
  const [ zoom, setZoom ] = useState(13)

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ lng, lat ],
      zoom: zoom
    })
  })

  useEffect(() => {
    if (!map.current) return;
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    })
  })

  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
