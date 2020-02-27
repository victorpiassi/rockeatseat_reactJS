import styled from "styled-components"

export const Container = styled.div`
    position: absolute;
    width: 25vw;
    height: 20vh;
    background-color: #FFF;
    display: block;
    align-self: center;
    justify-content: end;
    box-shadow: 3px 3px 9px rgba(0,0,0,0.5);
    border-radius: 5px;
    form{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;
        input{
            margin-top: 10px;
            border-radius: 5px;
            border: 1px solid #CCC;
            width: 90%;
            height: 35px;
            padding: 0 5px;
            font-size: 17px;
        }
        #buttons{
            margin-top: 10px;
            width: 90%;
            height: 25%;
            display: flex;
            flex-flow: row;
            justify-content: space-between;
            button{
                height: 100%;
                width: 45%;
                border-radius: 5px;
                border: 0;
                color: #FFF;
                font-weight: bold;
                font-size: 16px;
                transition: 0.3s;
            }
            #add{
                color: #66CC99;
                background-color: #FFF;
                border: 1px solid #66CC99;
            }
            #cancel{
                background-color: #FFF;
                border: 1px solid #AAA;
                color: #AAA;
            }
            #add:hover{
                background-color: #66CC99;
                color: #FFF;
            }
            #cancel:hover{
                background-color: #AAA;
                color: #FFF;
            }
        }
        span{
            font-size: 18px;
            color: var(--principal-text);
            font-weight: bold;
        }
    }
`