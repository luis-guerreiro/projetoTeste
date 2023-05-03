import styled from "styled-components";

export const LibraryContainer = styled.main`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 700px) and (max-width: 1366px) {
        height: calc(100vh - 80px);
    }
`