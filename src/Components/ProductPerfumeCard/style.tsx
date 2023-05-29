import styled from "styled-components";

export const ProductCardContainerDiv = styled.div`
    background-color: #ffffff;
    border-radius: 10px;
`;

export const ProductCardContentDiv = styled.div`
    display: flex;
    width: 700px;
    height: 450px;

    @media only screen and (max-width: 900px){
        flex-direction: column;
        width: 280px;
        height: auto;
    }
`;

export const ProductCardContentImageDiv = styled.div`
    width: 100%;

    .productImageDesktop {
        border-radius: 10px 0 0 10px;
        width: 100%;
        height: 100%;
        display: flex;

        @media only screen and (max-width: 900px){
            display: none;
        }
    }
    
    .productImageMobile {
        display: none;

        @media only screen and (max-width: 900px){
            border-radius: 10px 10px 0 0;
            display: flex;
            width: 100%;
        }
    }
`;

export const ProductCardContentTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 32px;

    span {
        color: #6C7289;
        margin-bottom: 20px;
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 5px;

        @media only screen and (max-width: 900px){
            margin-bottom: 10px;
            font-size: 12px;
        }
    }

    h1 {
        color: #1C232B;
        margin-bottom: 24px;
        font-size: 32px;
        font-weight: 700;
        line-height: 2.3rem;

        @media only screen and (max-width: 900px){
            margin-bottom: 10px;
            font-size: 25px;
        }
    }

    p {
        color: #6C7289;
        margin-bottom: 24px;
        font-size: 14px;
        font-weight: 500;

        @media only screen and (max-width: 900px){
            margin-bottom: 10px;
            font-size: 12px;
        }
    }

    @media only screen and (max-width: 900px){
        padding: 10px 20px;
    }
`;

export const ProductCardContentPriceDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 24px;

    @media only screen and (max-width: 900px){
        margin-bottom: 10px;
    }
    
    h2 {
        color: #3D8168;
        font-size: 32px;
    }
    
    span {
        color: #6C7289;
        font-size: 13px;
        font-weight: 500;
        letter-spacing: 0;
        margin-bottom: 0;
        text-decoration: line-through;
    }
`;

export const ProductCardContentButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 15px 60px;
    background-color: #3D8168;
    border-radius: 8px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    h4 {
        font-size: 14px;
        color: #ffffff;
    }

    svg {
        color: #ffffff;
    }

    &:hover {
        background-color: #1A4032;
    }
`;