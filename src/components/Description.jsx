import React, { useContext, useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/Description.css'

const Description = () => {
    const [descText, setDescText] = useState('')
    const { data } = useContext(DataContext);
    const { id } = useParams();
    const info = data.find((d) => d.id == id);
    const position = [47.976740, 67.550592];

    

    useEffect(() => {
        if (info){
            fetch(`https://ru.wikipedia.org/api/rest_v1/page/summary/${info.name}`)
                .then(response => response.json())
                .then(data => setDescText(data.extract))
        }
        
    })

    const cords = info?.z.map(point => [point._lat, point._long]);

    if (info == null) {
        return <Navigate to='/' replace />;
    }

    return (
        <div className="desc">
            <h3>{info.name}</h3>
            <div className="map">
                <MapContainer className="map-container" center={position} zoom={5.4} style={{width: '100%', height: '80vh'}}>
                    <TileLayer
                        attribution='&copy; OpenStreetMap contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Polygon positions={cords} pathOptions={{ color: 'purple' }} />
                </MapContainer>
                <div className="map-text">
                    {descText ? (
                        <p>{descText}</p>
                    ) : (
                        <p  >Данные о животном не найдены</p>
                    )}
                </div>
                
            </div>
        </div>
    );
};

export default Description;
