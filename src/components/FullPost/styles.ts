import styled from 'styled-components';

export const Element = styled.div`
    max-width: 1000px;
    margin: 40px 300px; 
    padding: 20px 20px 20px 20px;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    box-shadow: 0px 0px 15px rgba(188, 143, 143, 0.25);

    @media screen and (max-width: 1280px) {
        grid-template-columns: repeat(1, 450px);
        margin: 40px 350px;
       
    }

    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(1, 450px);
        margin: 40px 280px;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 450px);
        margin: 40px 150px;
    }

    @media screen and (max-width: 420px) {
        grid-template-columns: repeat(1, 450px);
        margin: 40px 20px;
        padding: 10px;
    }
 
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

    @media screen and (max-width: 1024px) {
        width: 20px;  
    }

    @media screen and (max-width: 768px) {
        width: 10px;
        height: 10px;
        margin: 10px 1290px 7px 100px;
    }

    @media screen and (max-width: 420px) {
        width: 5px;
        height: 5px;
        margin: 10px 1290px 7px 50px;
    }
`;

export const ImageContainer = styled.div`
    margin: auto;  
`;

export const Image = styled.img`
    width: 300px; 
    height: 300px; 

    @media screen and (max-width: 1024px) {
        width: 200px; 
        height: 200px;
    }
`;

export const TitleDiscContainer = styled.div`
        margin: 10px 30px;
        text-align: center; 

    @media screen and (max-width: 1024px) {
        margin: 0;
    }
`;

export const TitleContainer = styled.div`
    font-weight: 350;
    font-size: 25px;
    font-family: Comic Sans MS, Comic Sans, cursive;
    font-style: normal;

    @media screen and (max-width: 1024px) {
        font-size: 20px;
    }

    @media screen and (max-width: 420px) {
        font-size: 18px;
    }
`;

export const DateContainer = styled.div`
    margin-top: 5px;
    color: gray;
    font: bold 15px Arial, sans-serif;
    font-style: italic;

    @media screen and (max-width: 420px) {
        font-size: 14px;
    }
`;

export const DiscContainer = styled.div`
    margin-top: 5px;
    font-weight: 450;
    font-size: 17px;
    font-style: normal;
    font-smoothing: antialiased;
    line-height: 1.5;

    @media screen and (max-width: 1024px) {
        font-size: 15px;
    }

     @media screen and (max-width: 420px) {
        font-size: 13px;
        margin: 5px 20px 5px 50px;
    }
`;

export const CountsContainer = styled.div`
    display: flex;
    text-align: center; 
    outline: none;
    background-color: #f5f5f5;
    color: #265db5;
    margin: 10px 30px;
    font: bold 13px Arial, sans-serif;
    max-width: 35px;
    margin: 10px 400px 15px 45px; 
    padding: 10px 10px;
    border-radius: 25px;
     
       
    @media screen and (max-width: 1280px) {
        margin: 10px 250px 15px 45px; 
    }
    @media screen and (max-width: 1024px) {
        margin: 0px 250px 15px 45px; 
        background-color: white;
    }
`; 
 
export const CommentsBox  = styled.div`
    display: grid;
    grid-template-columns: 0.1fr 1.9fr ;
    align-item: center;
    margin-bottom: 5px;
    font-family: var(--mdc-typography-font-family, "Nunito", "Helvetica", "Arial", sans-serif);
 `; 

export const TextBox  = styled.div`
    margin: 0 10px 15px 15px;
    text-align: left;
`; 
export const UserName  = styled.div`
   color:  #25629c;
   font-weight: bold;
   margin-bottom: 3px;
   font-size: 13px;
`;

export const Comments  = styled.div`
   font-size: 14px;
   
   @media screen and (max-width: 1024px) {
    font-size: 12px;
    margin-right: 10px;
}
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
    margin: 0 5px;
    width: 40px; 
    height: 40px;
    border-radius: 60px;

    @media screen and (max-width: 1024px) {
        margin: 0;
`;

export const Textarea = styled.textarea`
    background-color: white;
    display: inline-block;
    color: #868787;
    text-align: left;
    height: 30px;
    max-width: 400px;
    margin: 3px 15px;
    font: 13px Arial, sans-serif;
    border-radius: 6px;
    cursor: pointer;
    border: 1px solid #e3e2e1;
    outline: none;

    @media screen and (max-width: 1024px) {
        height: 20px;
        max-width: 300px;
        margin-top: 5px;
    }
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

    @media screen and (max-width: 1024px) {
        margin: 5px 10px 5px 0px;
    }

    @media screen and (max-width: 420px) {
        background-color: #ebe9e8;
      height: 20px;
      width: 20px;
      margin: 5px;
    }
`;



 

