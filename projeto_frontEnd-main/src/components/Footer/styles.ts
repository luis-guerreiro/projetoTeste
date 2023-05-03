import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0 0 0;
    padding: 2rem;
    background: ${props => props.theme['gray-900']};
    height: 80px;
    color: ${props => props.theme['white']};
`