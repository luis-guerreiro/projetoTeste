import styled from "styled-components";

export const ImagesContainer = styled.main`
    width: 100vw;
    /* height: 100vh; */
    /* height: calc(100vh - 80px - 2rem); */

    display: flex;
    justify-content: center;
    align-items: center;

    /* @media screen and (min-width: 700px) and (max-width: 1366px) {
        height: calc(100vh - 80px);
    } */
`

export const ImagesContent = styled.section`
    display: grid;
    place-content: center;
    justify-items: center;
    
    margin: 0;
    /* padding: 1rem; */
    line-height: 1.5;
    color: ${props => props.theme.white};
`

export const ImageCardContainer = styled.ul`
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

export const ImageCard = styled.li`
  background-color: ${props => props.theme["gray-700"]};
  border-radius: 0.5rem;
  box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
  padding-bottom: 1rem;
  overflow: hidden;

  img {
    border-radius: 0.5rem 0.5rem 0 0;
    width: 100%;
    object-fit: cover;
    // height: max(10rem, 25vh);
    max-height: max(10rem, 30vh);
    aspect-ratio: 4/3;
    mix-blend-mode: var(--card-blend-mode);
    // filter: grayscale(100);

    ~ * {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }

  > :last-child {
    margin-bottom: 0;
  }
`

export const ImageDescription = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const ImageCardGroupBtn = styled.div`
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