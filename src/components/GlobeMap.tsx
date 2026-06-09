import Globe from "react-globe.gl";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const GlobeContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default function GlobeMap(props:{userLat:number, userLng:number}){
    const globeRef = useRef<any>(null);

    useEffect(() => {
        if (!globeRef.current) return;

        const controls = globeRef.current.controls();

        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.6;
    }, []);

    return(
        <GlobeContainer>
        <Globe
            width={1000}
            height={525}
            ref={globeRef}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            backgroundColor="rgba(0,0,0,0)"
            animateIn={true}
            htmlElementsData={[
                { type: "city", lat: 48.8566, lng: 2.3522, name: "Paris" },
                { type: "city", lat: 51.5074, lng: -0.1278, name: "London" },
                { type: "city", lat: 40.7128, lng: -74.0060, name: "New York" },
                { type: "city", lat: 41.8781, lng: -87.6298, name: "Chicago" },
                { type: "city", lat: 37.7749, lng: -122.4194, name: "San Francisco" },
                { type: "city", lat: 19.4326, lng: -99.1332, name: "Mexico City" },
                { type: "city", lat: 4.7110, lng: -74.0721, name: "Bogotá" },
                { type: "city", lat: -12.0464, lng: -77.0428, name: "Lima" },
                { type: "city", lat: -23.5505, lng: -46.6333, name: "São Paulo" },
                { type: "city", lat: -41.2865, lng: 174.7762, name: "Wellington" },
                { type: "city", lat: -33.8688, lng: 151.2093, name: "Sydney" },
                { type: "city", lat: 1.3521, lng: 103.8198, name: "Singapore" },            
                {type :"city", lat: 35.6762, lng: 139.6503, name: "Tokyo"},
                { type: "city", lat: 39.9042, lng: 116.4074, name: "Beijing" },
                { type: "city", lat: 28.6139, lng: 77.2090, name: "New Delhi" },
                { type: "city", lat: 55.7558, lng: 37.6173, name: "Moscow" },
                { type: "city", lat: 30.0444, lng: 31.2357, name: "Cairo" },
                { type: "city", lat: -1.2921, lng: 36.8219, name: "Nairobi" },
                { type: "city", lat: -33.9249, lng: 18.4241, name: "Cape Town" },
                { type: "city", lat: 14.7167, lng: -17.4677, name: "Dakar" },
                { type: "city", lat: 40.4168, lng: -3.7038, name: "Madrid" },
                { type: "user", lat: props.userLat, lng: props.userLng },
            ]}
            htmlElement={(d: any) => {
                if (d.type === "user") {
                    const el = document.createElement("div");
                    el.innerHTML = "🏃‍♂️";
                    el.style.fontSize = "48px";
                    return el;
                }
                else{
                    const el = document.createElement("div");
                    el.innerHTML = "📍";
                    el.style.fontSize = "24px";
                    el.style.zIndex ="1";

                    const description = document.createElement("p");
                    description.innerHTML = d.name ?? "city";
                    description.style.fontSize = "12px";
                    description.style.color = "#E0B24A";
                    el.appendChild(description);

                    return el;
                }
            }}
        />
        </GlobeContainer>
    )
}