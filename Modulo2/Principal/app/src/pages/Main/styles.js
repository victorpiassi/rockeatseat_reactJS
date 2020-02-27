import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
`

export const Form = styled.form`
    margin-top: 20px;
    width: 100%;
    max-width: 400px;
    display: flex;

    input{
        flex: 1;
        height: 55px;
        padding: 0 20px;
        background: #FFF;
        font-size: 18px;
        color: #444;
        border-radius: 20px;
        transition: border 0.2s;
        border: ${props => (props.withError ? '2px solid #F33' : 0)};
    }

    button{
        width: 70px;
        height: 55px;
        padding: 0 20px;
        margin-left: 10px;
        background: #63f5b8;
        color: #FFF;
        border: 0;
        font-size: 20px;
        font-weight: bold;
        border-radius:20px;
        transition: filter 0.5s;
        cursor: pointer;

        &:hover{
            filter: brightness(90%);
        }
    }
`
