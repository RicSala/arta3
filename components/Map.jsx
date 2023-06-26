'use client'

import L from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// leaflet is an open-source JavaScript library for mobile-friendly interactive maps
// react-leaflet is a React library that wraps Leaflet in a convenient React component,

delete L.Icon.Default.prototype._getIconUrl; // this is a hack to fix the marker icon issue
L.Icon.Default.mergeOptions({ // reset the default icon options
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src,
});


const Map = ({
    center
}) => {
    return (
        <MapContainer
            center={center || [51.505, -0.09]}
            zoom={center ? 5 : 2}
            scrollWheelZoom={false}
            className='h-[35vh] rounded-lg'
        >
            <TileLayer
                // attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {
                center && (
                    <Marker position={center} />
                )
            }
        </MapContainer>
    )
}

export default Map
