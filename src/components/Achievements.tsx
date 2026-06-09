import styled from "styled-components";
import { cities } from "../data/cities";

const Grid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 30px;
    padding: 20px;
    justify-items: center;

    @media screen and (max-width: 750px){
        grid-template-columns: auto;
    }
`;

const Card = styled.div<{visited:boolean}>`
    background: ${props => props.visited ? "#e0b24a" : "#ccc"};
    border-radius: 12px;
    padding: 5px;
    text-align: center;
    width: 50%;
    filter: ${props => props.visited ? "none" : "grayscale(1)"};
    opacity: ${props => props.visited ? 1 : 0.5};
`;

const StyledH1 = styled.h1`
    font-size: calc(2px + 2.7vw);
    margin-top: 10px;
    text-align: center;
`;

export default function Achievements(){

    const index = Number(localStorage.getItem("index"));

    const cityData = cities.map((city, i) => ({
        ...city,
        visited: i <= index
    }));

    return(
        <>
            <StyledH1>Badges collected</StyledH1>
            <Grid>
                {cityData.map((city) => (
                    <Card key={city.name} visited={city.visited}>
                        <div style={{ fontSize: "48px" }}>{city.icon}</div>
                        <div>{city.name}</div>
                    </Card>
                ))}
            </Grid>
        </>
    );
}