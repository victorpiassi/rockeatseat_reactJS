import styled from "styled-components"

export const Container = styled.div`

    display: flex;  
    z-index: 3;
    position: absolute;
    display: flex;
    max-height: 95vh;
    width: 20vw;
    background-color: rgba(255,255,255, 0.8);
    box-shadow: 3px 3px 9px rgba(0,0,0,0.5);
    flex-flow: column;
    align-self: center;
    margin-left: 1vw;
    padding: ${props => (props.content != "" ? "5px 15px" : 0)};
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: 5px;
    align-items: center;

    div:first-child{
        border-top: 0px #fff;
    }

`