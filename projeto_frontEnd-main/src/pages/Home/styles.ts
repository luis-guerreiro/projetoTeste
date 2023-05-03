import styled from "styled-components";

export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    width: 80vw;

    input{
        padding: 0 0 0 1rem;
        flex-basis: 500px;
        border-radius: 32px;
        width: 100%; 

        border: 0;
        outline: 0;
        font-size: 1rem;

        background-color: ${props => props.theme["gray-100"]};  
        transition: all 0.2s ease-in-out;
    }

    >*{
        border: 0;
        padding: 0 0 0 10px;
        background: ${props => props.theme.white};
        line-height: 50px;
        font-size: 1rem;
        outline: 0;
    }
`

export const ListImagesSection = styled.section`
    /* background: ${props => props.theme.white}; */
    /* margin-bottom: 2rem; */
`