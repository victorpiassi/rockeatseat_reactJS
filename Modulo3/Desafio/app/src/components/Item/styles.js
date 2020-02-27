import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    min-height: 70px;
    display: flex;
    align-items: center;
    flex-flow: row;
    border-top: 1px solid #CCC;
    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
    }
    a {
        max-height: 20px;
    }
    div{
        margin-left: 10px;
        display: flex;
        flex-flow: column;
        flex-grow: 5;
        
        #name{
            font-weight: bold;
            font-size: 17px;
        }
        #login{
            color: var(--secondary-text);
        }
    }
    #remove, #access{
        width: 20px;
        height: 20px;
        flex-grow: 2;
    }
    #access{
        filter: contrast(40%);
    }
    hr{
        align-self: flex-end;
    }
`