import styled from "styled-components";

export const CategoriesContainer = styled.main`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;

    /* @media screen and (min-width: 700px) and (max-width: 1366px) { */
        /* height: calc(100vh + 180px); */
        /* height: calc(100vh + 180px); */
        /* min-height: calc(100vh + 180px); */
    /* } */
`

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

export const CategoriesContent = styled.section`
    display: grid;
    place-content: center;
    justify-items: center;
    
    margin: 0;
    line-height: 1.5;
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
        helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif;
    color: #444;
`

export const CategorieCardContainer = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30ch, 1fr));
    grid-gap: 1.5rem;
    max-width: 100vw;
    width: 120ch;
    padding-left: 1rem;
    padding-right: 1rem;
`

export const CategorieCard = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme["gray-700"]};
    box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);

    border-radius: 0.5rem;
    padding: 1rem;

    h3{
        color: ${props => props.theme.white};
    }

    @media screen and (min-width: 768px) and (max-width: 1366px) {
        h3{
            font-size: 1.5rem;
        }
    }
`

export const CategorieCardGroupBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    margin: .5rem 0 0;

    button{
        padding: .625rem 1.375rem;
        border-radius: 32px;
        border: 0;
        font-weight: bold;
        background: ${props => props.theme["green-500"]};
        white-space: nowrap;
        color: ${props => props.theme["white"]};
        font-size: 1rem;

        &.delete{
            background: ${props => props.theme["red-500"]};

            &:hover{
                transition: all .2s ease-in-out;
                background-color: ${props => props.theme["red-700"]};
                color: ${props => props.theme.white};
            }
        }

        &:hover{
            transition: all .2s ease-in-out;
            background-color: ${props => props.theme["green-200"]};
            color: ${props => props.theme.white};
        }
    }
    
`