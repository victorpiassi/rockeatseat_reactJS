import styled from "styled-components"
import { Link } from "react-router-dom"

import { Spinner } from "../../components/Loading/styles"

export const Container = styled.div`
    flex: 1;
    margin-top: 110px;
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    font-size: 48px;

    ${Spinner}{
        height: 24px;
    }
`
export const List = styled.ul`
    margin-top: 20px;
    display: flex;
`

export const Playlist = styled(Link)`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    text-decoration: none;
    width: 250px;
    &:first-child{
        margin: 0;
    }

    img{
        width: 250px;
        height: 250px;
    }
    strong{
        font-size: 13px;
        margin-top: 10px;
        color: #FFF;
    }
    p{
        line-height: 22px;
        margin-top: 5px;
        font-size: 13px;
        color: #aaaaaa;
    }
    &:hover img{
        opacity: 0.4;
    }
`