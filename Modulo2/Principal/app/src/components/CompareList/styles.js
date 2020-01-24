import styled from 'styled-components';
import 'font-awesome/css/font-awesome.css'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
`

export const Repository = styled.div`
    width: 250px;
    background: #FFF;
    border-radius: 20px;
    display:flex;
    flex-direction: column;
    margin: 0 10px;

    header{
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;

        img{
            width: 64px;
        }

        b{
            font-size: 24px;
            margin-top: 10px;
            font-family: Calibri, sans-serif;
        }

        small{
            font-size: 14px;
            color: #666;
        }
    }

    ul{
        list-style: none;

        li{
            font-weight: bold;
            padding: 12px 20px;

            small{
                font-weight: normal;
                font-size: 12px;
                color: #999;
                font-style: italic;
                margin-left: 5px;
            }

            &:nth-child(2n-1){
                background-color: #f5f5f5;
            }
        }
    }
`
