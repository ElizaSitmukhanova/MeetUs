import styled from 'styled-components';

export const Element = styled.div`
    margin: 40px 250px;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    box-shadow: 0px 0px 15px rgba(188, 143, 143, 0.25);
`;
 
export const TitleDiscContainer = styled.div`
    margin: 30px 30px 10px 30px;
    font-family: var(--mdc-typography-font-family, "Nunito", "Helvetica", "Arial", sans-serif);
    text-align: left; 
`;

export const TitleContainer = styled.div`
    font-weight: 350;
    font-size: 25px;
    font-family: Comic Sans MS, Comic Sans, cursive;
    font-style: normal;
`;
export const DateContainer = styled.div`
    margin-top: 5px;
    color: gray;
    font-style: italic;
`;
export const DiscContainer = styled.div`
    margin-top: 5px;
    font-weight: 450;
    font-size: 17px;
    font-style: normal;
    font-smoothing: antialiased;
    line-height: 1.5;
`;
export const ImageContainer = styled.div`
  
   

`;
export const CountsContainer = styled.div`
    text-align: left;
    margin-top: 5px;
   

`; 
export const CommentsAdd = styled.div`
border-radius: 10px;
background-color: #f4cccc;


   

`; 
export const CommentsInput = styled.div`
 
 
 
`; 

export const textarea = styled.div`
 
`; 