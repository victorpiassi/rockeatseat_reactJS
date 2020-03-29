import styled from "styled-components"

import { Spinner } from "../Loading/styles"

export const Container = styled.aside`
    height: calc(100vh - 72px);
    width: 12%;
    background: #121212;
    color: #aaaaaa;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    overflow-y: auto;

    > div {
        padding: 25px;
    }
`
export const Nav = styled.ul`
    list-style: none;
    margin-top: 25px;

    &:first-child{
        margin: 0;
    }
    
    li{
        display: flex;
        align-items: center;

        a{
            color: inherit;
            text-decoration: none;
            font-size: 13px;
            line-height: 32px;
            font-weight: ${props => props.playlist ? "500" : "bold"};

            &:hover{
                color: #FFF;
            }
        }
        span{
            font-size: 11px;
            text-transform: uppercase;
            line-height: 22px;
            letter-spacing: 1.11px;
            font-weight: 500;
        }
        ${Spinner}{
            height: 15px;
            margin-left: 5px;
        }
    }
`
export const NewPlaylist = styled.button`
    background: transparent;
    border: 0;
    border-top: 1px solid #282828;
    font-size: 13px;
    color: #aaaaaa;
    display: flex;
    align-items: center;
    padding: 15px 25px;

    &:hover{
        img{
            filter: brightness(1000%);
        }
        color: #FFF;
    }

    img{
        margin-right: 10px;
    }
`