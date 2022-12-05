
import styled from 'styled-components';

export const Backbutton = styled.div`
    color: #6d6e6e;
    background-color: #e1e4eb;
    height: 20px;
    width: 25px;
    margin: 10px 1290px 0 190px;
    padding: 9px 20px;
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 25px;   
    text-align: center;
`;

export const ElementOne = styled.div`
    display: grid;
    grid-template-columns: 0.2fr 0.7fr 1.3fr;
    grid-template-rows: repeat(1, 2fr);
    margin: 40px 300px 0;
    border: 2px solid #f0e7da;
    border-radius: 15px;
    background: #ffffff;

    
    @media screen and (max-width: 1280px) {
        grid-template-rows: repeat(1, 1fr) ;
        margin: 40px 200px 0;
    }

    @media screen and (max-width: 1024px) {
        grid-template-rows: repeat(1, 1fr) ;
        margin: 40px 200px 0;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr; 
    }

    @media screen and (max-width: 420px) {
        margin: 30px; 
    }

`;

export const ImageContainer = styled.div`
    margin: 5px;
`;
export const Image = styled.img`
    margin: 10px 0 0 10px;
    width: 120px; 
    height: 120px;
    border-radius: 60px;

    @media screen and (max-width: 1024px) {
        width: 80px; 
        height: 80px;
    }

`;
export const NameContainer = styled.div`
    padding-top: 100px;
    padding-left: 10px;
    font-family: 'Tinos', serif;
    font-size: 20px;
    font-weight: 700;

    @media screen and (max-width: 1024px) {
        font-size: 18px;
        padding-top: 80px;
        padding-left: 10px;
    }

    @media screen and (max-width: 768px) {
        padding-top: 0px;
    }

`;
export const ButtonContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(1, 2fr);
    align-item: center;
    padding: 100px 0 20px 100px;
    grid-gap: 5px;
    margin-right: 10px;

    @media screen and (max-width: 1024px) {
        padding: 65px 0 20px 100px;
    }
    
    @media screen and (max-width: 768px) {
        padding: 10px 10px;
        margin-right: 0px;
    }
`;

export const Button = styled.button`
    background-color: #dce8fc;
    color: #265db5;
    padding: 9px 5px;
    text-align: center;
    font: bold 13px Arial, sans-serif;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    outline: none;

    @media screen and (max-width: 1024px) {
        font-size: 12px;
    }
`;

export const ElementTwo = styled.div`
    margin-bottom: 0px;
    border: 2px solid #f0e7da;
    border-radius: 15px;   
    margin: 5px 450px 0 450px;
    padding: 10px;
    background: #ffffff;
    margin-bottom: 5px; 

    @media screen and (max-width: 1280px) {
        margin: 5px 310px 0 310px;
        font-size: 14px;  
    }

    @media screen and (max-width: 1024px) {
        font-size: 12px;
        margin: 5px 200px 0 200px;
        font-size: 14px;  
    }

    @media screen and (max-width: 420px) {
        margin: 30px; 
    }
`;

export const DescContainer = styled.div`
    font-family: 'Open Sans', sans-serif;
    font-style: italic; 
`;

export const CountsContainer = styled.div`
    display: grid;
    grid-template-columns: 0.2fr 1.8fr;
    grid-template-rows: repeat(1, 2fr) ;
    text-align: left;
    margin-top: 5px;
`; 

export const LikeContainer = styled.div`
    background-color: #f5f5f5;
    color: #265db5;
    margin-right: 15px;
    padding: 9px 5px;
    text-align: center;
    font: bold 13px Arial, sans-serif;
    border-radius: 25px;
    cursor: pointer;
    border: none;
    outline: none;

    @media screen and (max-width: 1024px) {
        margin-right: 10px;
        border-radius: 25px;
        padding: 9px 5px;
    }

    @media screen and (max-width: 768px) { 
        margin-right: 25px;
        padding: 9px 25px;
    }
`; 

export const ChatContainer = styled.div`
    background-color: #f5f5f5;
    color: #265db5;
    margin-right: 480px;
    padding: 9px 5px;
    text-align: center;
    font: bold 13px Arial, sans-serif;
    border-radius: 25px;
    cursor: pointer;
    border: none;
    outline: none;

    @media screen and (max-width: 1280px) {
        margin-right: 500px;  
    }

    @media screen and (max-width: 768px) { 
        margin-right: 80%;
        padding: 15px 5px;
    }
`; 