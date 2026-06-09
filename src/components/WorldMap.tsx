import { useEffect, useState } from 'react';
import { cities } from '../data/cities';
import GlobeMap from './GlobeMap';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';

const StyledDiv = styled.div`
    justify-content: space-evenly;
    margin-top: 10px;
    display: flex;
`;

const StyledContainer = styled.div`
    text-align: center;
`;

const StyledDiv2 = styled.div`
    align-items: center;
    display:flex;
    flex-direction: column;
`;

const StyledInput = styled.input`
    margin: 10px 0;
    width: 15vw;
    height: 35px;
    border-radius: 20px;
    border: 2px solid #3c934ae0;
    padding: 0 2%;
    
    &:focus{
        outline: #E0B24A;
        border-color:  #E0B24A;
    }
`;

const StyledButton = styled.button`
    width: 10vw;
    height: 35px;
    border-radius: 20px;
    background-color: #3c934ae0;
    border:none;
    font-size: calc( 2px + 1vw);
    margin-bottom: 10px;

    &:hover{
        background-color: rgb(224, 178, 74);
        cursor: pointer;
    }
    &:disabled{
        cursor: not-allowed;
    }
`;

export default function WorldMap() {
    const [inputSteps, setInputSteps] = useState(0);
    const [steps, setSteps] = useState(() => {
        const saved = localStorage.getItem("steps");
        return saved ? Number(saved) : 0;
    });

    useEffect(() => {
        localStorage.setItem("steps", steps.toString());
        localStorage.setItem("index", index.toString());
    }, [steps]);

    let totalLoop = 0;
    for (let j = 0; j < cities.length - 1; j++) {
        totalLoop += cities[j].distance;
    }

    const distanceKm = steps * 0.0008;

    let accumulated = 0;
    let index = 0;
    for (let i = 0; i < cities.length - 1; i++) {
        const distance = cities[i + 1].distance;
        if (distanceKm % totalLoop < accumulated + distance) {
            index = i;
            break;
        }
        accumulated += distance;
    }

    const currentCity = cities[index];
    const nextCity = cities[(index + 1) % cities.length];

    const segmentProgress =
        (distanceKm % totalLoop - accumulated) / nextCity.distance;

    function lerp(a: number, b: number, t: number) {
        return a + (b - a) * t;
    }
    const lat = lerp(currentCity.lat, nextCity.lat, segmentProgress);
    const lng = lerp(currentCity.lng, nextCity.lng, segmentProgress);

    return (
        <>
            <StyledContainer>
                <StyledDiv>
                    <h3>Total steps: {steps}</h3>
                    <h3>Total Distance: {distanceKm.toFixed(2)} km</h3>
                </StyledDiv>

                <StyledDiv2>
                    <label style={{ fontSize: "calc(2px + 1.3vw)" }}>How many steps did you make today:</label>
                    <StyledInput type="number" id="input" placeholder="0" onChange={(e) => setInputSteps(Number(e.target.value))} />

                    <StyledButton disabled={inputSteps === 0}
                        onClick={() => {
                            setSteps(steps + inputSteps);
                            setInputSteps(0);
                            (document.getElementById("input") as HTMLInputElement).value = "";
                        }}>
                        Add steps
                    </StyledButton>
                </StyledDiv2>

                <p>Current Location: {currentCity?.name}</p>
            </StyledContainer>
            <GlobeMap userLat={lat} userLng={lng} />
            <ProgressBar progress={segmentProgress} currentCityName={currentCity.name} nextCityName={nextCity.name} />
        </>
    )
}