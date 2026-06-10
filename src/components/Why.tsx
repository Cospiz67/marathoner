import { Link } from "react-router";
import styled from "styled-components";

const StyledDiv = styled.div`
    text-align:center;
    align-items:center;
    display: flex;
    flex-direction: column;

    h1{
        font-size: calc( 2px + 2.7vw);
        margin-top: 10px;
    }
    p{
        font-size: calc( 2px + 1.5vw);
    }
`;

const StyledP = styled.p`
    width: 50%;
    margin: 1% auto;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    color: #3c934ae0;
  }
`;
const SpecialLink = styled(Link)`
    text-decoration: none;
`;

const StyledButton = styled.button`
    background-color: #3c934ae0;
    min-width: fit-content;
    height: 2vw;
    border-radius: 20px;
    border:none;
    font-size: calc( 2px + 1vw);
    padding: 10px;
    align-items: center;
    display:flex;

    &:hover{
        background-color: rgb(224, 178, 74);
        cursor: pointer;
    }
`;

export default function Why(){
    return(
        <StyledDiv>
            <h1>What is Marathoner?</h1>
            <StyledP>
                Nowadays, engaging in regular physical activity is primordial for maintaining both
                our physical and mental health, especially as digital platforms like 
                social medias contribute to making people more and more inactive.
                <br/>
                <br/>
                That is why <b>Marathoner</b> was created. This web application encourages people
                to do sports and stay active though running or walking, while also providing
                a gamified and cultural experience.
                <br/>
                <br/>
                The concept is simple: users enter their number of steps that they completed
                for the day, and their progress is transformed into an avatar that travels 
                between real cities. It turns physical activities into a beautiful journey 
                all around the world. When a city is reached, the user earns a badge, 
                which is displayed in the <StyledLink to="/achievements">“Achievements” </StyledLink>
                 section.
                <br/>
                <br/>
                So, are you ready to walk the world?
            </StyledP>
            <StyledButton><SpecialLink to="/">Go To The Home Page</SpecialLink></StyledButton>
        </StyledDiv>
    );
}