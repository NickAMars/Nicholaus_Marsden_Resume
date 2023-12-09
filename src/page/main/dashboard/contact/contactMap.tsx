import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L, {LatLng} from 'leaflet';
import MarkerIcon from '@assets/marker.png';
import { styled } from 'styled-components';

const PopupStyle = styled(Popup)`
    font-size: 1.4rem;
`


// Create a custom icon
const customIcon = new L.Icon({
    iconUrl: MarkerIcon,
    iconSize: [32, 32], // Adjust the size of your custom icon
    iconAnchor: [16, 32], // Adjust the anchor point if needed
    popupAnchor: [0, -32], // Adjust the popup anchor if needed
  });
export const ContactMap: React.FC<{}> = (props) => {
    const position = new LatLng(33.8650, -84.3371); 

    return (
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: '400px', width: '100%' }}
      >
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={customIcon}>
            <PopupStyle>Atlanta, Georgia</PopupStyle>
        </Marker>
      </MapContainer>
    );
}
