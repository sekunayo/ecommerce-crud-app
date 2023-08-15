import L from 'leaflet';
import { useEffect } from 'react';

function useMap() {
    useEffect(() => {
        const map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        L.marker([51.5, -0.09]).addTo(map);

        return () => {
            map.off();
            map.remove();
        }
    })
}

export default useMap;