import styled from 'styled-components';

export const Element = styled.div`
    margin: 40px 300px;
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

export const Backbutton = styled.div`
    color: #6d6e6e;
    background-color: #e1e4eb;
    margin: 10px 1290px 0 190px;
    height: 20px;
    width: 25px;
    padding: 9px 20px;
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 25px; 
    text-align: center;  
`;

export const ImageContainer = styled.div`
    margin: auto;
`;

export const Image = styled.img`
    width: 300px; 
    height: 300px;
    margin: 5px;
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

export const CountsContainer = styled.div`
    display: flex;
    text-align: center; 
    outline: none;
    background-color: #f5f5f5;
    color: #265db5;
    margin: 10px 400px 15px 45px;
    padding: 10px 10px;
    border-radius: 25px;
`; 
 
export const CommentsBox  = styled.div`
    display: grid;
    grid-template-columns: 0.1fr 1.9fr ;
    align-item: center;
    margin-bottom: 15px;
`; 

export const TextBox  = styled.div`
    margin: 0 5px 15px 15px;
    text-align: left;
    font: Helvetica, Arial, sans-serif;
`; 
export const UserName  = styled.div`
   color:  #25629c;
   font-weight: bold;
   margin-bottom: 3px;
   font-size: 13px;
`;

export const Comments  = styled.div`
   font-size: 14px;
`;

export const ResponseForm  = styled.div`
   display: flex;
   font-size: 13px;
`;

export const CommentTime  = styled.div`
   margin-top: 1px;
   color: #636161;
`;

export const ResponseButton  = styled.button`
   cursor: pointer;
   border: none;
   outline: none;
   background-color: white;
   color: #4763a8;
`;

export const CommentsInput = styled.div`
    display: grid;
    grid-template-columns: 0.1fr 1.7fr 0.2fr;
    align-item: center;
`; 

export const ImageUser = styled.img`
    margin: 0 5pxs;
    width: 40px; 
    height: 40px;
    border-radius: 60px;
`;

export const Textarea = styled.textarea`
    background-color: white;
    display: inline-block;
    color: #868787;
    text-align: left;
    height: 30px;
    width: 400px;
    margin: 3px 15px;
    font: 13px Arial, sans-serif;
    border-radius: 6px;
    cursor: pointer;
    border: 1px solid #e3e2e1;
    outline: none
`; 

export const Button = styled.button`
    margin: auto;
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 6px;
    color: #575959;
    background-color: #ebe9e8;
    height: 30px;
    width: 30px;
`;  


 

