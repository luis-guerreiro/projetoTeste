import styled from "styled-components";

export const HomeContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 500px;
    padding: 0 30px;
    margin: 0;

    background: ${props => props.theme["gray-900"]};

    position: relative;
    z-index: 1;

    ::before{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: linear-gradient(
            180deg, 
            rgba(0,0,0,0.2) 0%, 
            rgba(0,0,0,0.6) 100%),
            linear-gradient(180deg,  rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`

export const HomeBackground = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const CoverBackground = styled.div`
    height: 100%;
    width: 100%;
    background: url('https://source.unsplash.com/G8rRItjrwkA') no-repeat center center;
    margin: 0;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    color: ${props => props.theme["gray-900"]};
    overflow: hidden;
`

export const HomeContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1{
        color: ${props => props.theme.white};
        font-size: 3rem;
        text-align: center;
        font-weight: 600;
        margin: 0 0 1.5rem;
        
        @media screen and (max-width: 768px){
            font-size: 2.5rem;
        }
        
        @media screen and (max-width: 480px){
            font-size: 2rem;
        }
    }

    @media screen and (max-width:800px) {
        body {
            font-size: 0.9rem;
        }

        .flex-form {
            width: 100%;
        }

        input[type="search"] {
            flex-basis: 100%;
        }

        .flex-form > * {
            font-size: 0.9rem;
        }

        header {
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            flex-direction: column;
            padding: 10px !important;
        }

        header h2 {
            margin-bottom: 15px;
        }

        h1 {
            font-size: 2rem;
        }

        .cover {
            padding: 20px;
        }
    }

    @media screen and (max-width:360px) {
        .flex-form {
            display: -webkit-box;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            flex-direction: column;
        }

        input[type="search"] {
            flex-basis: 0;
        }

    }
`

// export const HeroContainer = styled.div``