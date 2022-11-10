
import styled from 'styled-components';

export const Container = styled.div`
    background: #f5f5f5;
    margin-bottom: 0px;
    padding-bottom: 0px;
`;

export const ElementTwo = styled.div`
    margin-bottom: 0px;
`;
export const ElementOne = styled.div`
    display: grid;
    grid-template-columns: 0.2fr 0.7fr 1.3fr;
    grid-template-rows: repeat(1, 2fr) ;
    margin: 40px 300px 0;
    border: 2px solid #f0e7da;
    border-radius: 15px;
    background: #ffffff;
`;

export const ImageContainer = styled.div`
    margin: 5px;
 
`;

export const NameContainer = styled.div`
    padding-top: 100px;
    padding-left: 10px;
    font-family: 'Tinos', serif;
    font-size: 20px;
    font-weight: 700;
`;
export const ButtonContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(1, 2fr) ;
    align-item: center;
    padding: 100px 0 20px 100px;
    grid-gap: 5px;
`;

export const ButtonOne = styled.div`
    background-color: #dce8fc;
    color: #265db5;
    padding: 9px 5px;
    text-align: center;
    font: bold 13px Arial, sans-serif;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    outline: none
`;

export const ButtonTwo = styled.div`
    background-color: #dce8fc;
    color: #265db5;
    padding: 9px 5px;
    text-align: center;
    font: bold 13px Arial, sans-serif;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    outline: none
    margin: 0 5px 0 5px;
`;
export const DescContainer = styled.div`
    font-family: 'Open Sans', sans-serif;
    font-style: italic; 
    border: 2px solid #f0e7da;
    border-radius: 15px;   
    margin: 5px 300px;
    padding: 10px;
    background: #ffffff;
`;

 