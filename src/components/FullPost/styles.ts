import styled from 'styled-components';

export const Element = styled.div`
    margin: 40px 250px;
    padding: 20px 0 20px 20px;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    box-shadow: 0px 0px 15px rgba(188, 143, 143, 0.25);
   
   
    @media screen and (max-width: 1400px) {
        grid-template-columns: repeat(1, 450px);
    }

    @media screen and (max-width: 960px) {
        grid-template-columns: repeat(1, 450px);
        align-self: center;    
    }

    @media screen and (max-width: 500px) {
        grid-template-columns: repeat(1, 450px);
        align-self: center;

`;
 
 
export const TitleDiscContainer = styled.div`
    margin: 30px 30px 10px 30px;
    font-family: var(--mdc-typography-font-family, "Nunito", "Helvetica", "Arial", sans-serif);
    text-align: center; 

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
 
}
   

`;
export const CountsContainer = styled.div`
    text-align: left;
    margin-top: 5px;
    text-align: center; 
    outline: none;

`; 
 
export const CommentsInput = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid rgb(188, 143, 143);
    outline: none;
    padding-bottom: 5px;
 
`; 

export const CommentsAdd = styled.div`
    display: flex;
    flex-direction: column;
    background: rgb(188, 143, 143);
    border: 2px solid rgb(188, 143, 143); 
    

`; 

export const CommentsBox = styled.div`
 margin-top: 10px;
`; 



