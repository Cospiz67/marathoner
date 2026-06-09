import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    position: absolute;
    left: 50px;
    top: 50%;
    transform: translateY(-50%);
`;

const StyledBar = styled.div`
    height: 50vh;
    width: 12px;
    background-color: #e5e7eb;
    border-radius: 6px;
    overflow: hidden;
`;

const StyledProgress = styled.div<{ height: number}>`
    width: 100%;
    background-color: #3c934ae0;
    height: ${props => `${props.height}%`};
    transition: height 0.3s ease;

`;

export default function ProgressBar(props:{progress:number,
     currentCityName: string, nextCityName: string}){
    
    return(
        <StyledContainer>
            <h3>Progression Bar</h3>
            <p>{props.currentCityName}</p>
            <StyledBar>
                <StyledProgress height={props.progress === 1 ? 0 :props.progress*100}/>
            </StyledBar>
            <p>{props.nextCityName}</p>
        </StyledContainer>
    );
}