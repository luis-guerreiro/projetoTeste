import styled from "styled-components";

export const FormContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 40rem;

    @media screen and (min-width: 700px) and (max-width: 1366px) {
        height: calc(100vh - 80px);
    }
`

export const SectionTitle = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1,h3{
        color: ${props => props.theme["gray-100"]}
    }

    h1{
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        padding: 1rem;
    }

    @media screen and (min-width: 700px) and (max-width: 1366px) {
        h1{
            font-size: 2.5rem;
        }
        h3{
            font-size: 1.5rem;
        }
    }

    @media screen and (min-width: 1080px) {
        h1{
            font-size: 3rem;
        }
    }
`

export const Form = styled.form`
    width: 100%;

    padding: 1rem;
    margin: 0 auto;

    background-color: ${props => props.theme["gray-900"]};
    padding: 1.25rem;
`

export const GroupFields = styled.div`
    display: flex;
    flex-direction: column;

    margin: .75rem 0;
`

export const Label = styled.label`
    width: 100%;
    display: block;
    margin: .25rem 0 .5rem 1rem;
    
    color: ${props => props.theme["gray-100"]};
    font-size: 1.125rem;
`

export const Input = styled.input`
    padding: 1rem;
    
    border: 0;
    outline: 0;
    font-size: 1rem;

    background-color: ${props => props.theme["gray-100"]};
    border-radius: 32px;
    
    transition: all 0.2s ease-in-out;
    
    &:focus {
        box-shadow: unset 1px 1px 2px ${props => props.theme["gray-400"]}, inset -1px -1px 2px ${props => props.theme.white};;
    }
`

export const Button = styled.button`
    width: 100%;
    margin: 1rem 0 0;
    padding: 1rem;
    
    border: 0;
    outline: 0;

    font-size: 1rem;
    font-weight: bold;

    color: ${props => props.theme.white};
    background: ${props => props.theme["green-500"]};
    border-radius: 32px;
    cursor: pointer;
    
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all .2s ease-in-out;
        background-color: ${props => props.theme["green-200"]};
        color: ${props => props.theme.white};
    }
`

export const CatagoriesImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const CategoriesSelected = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${props => props.theme.white};
    margin: 1rem 0;

    span{
        padding: 0.5rem;
        background-color: ${props => props.theme["green-500"]};
        border-radius: 32px;
    }
    
    button{
        padding: 0.5rem;
        background-color: ${props => props.theme["gray-600"]};
        border-radius: 32px;
        border: 0;
        outline: 0;
        color: ${props => props.theme.white};
    }

    button:disabled{
        background-color: ${props => props.theme["green-500"]};
    }
`
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
`