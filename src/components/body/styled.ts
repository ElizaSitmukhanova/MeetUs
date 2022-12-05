import styled from 'styled-components';

 export const Elements = styled.div `
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 450px);
    grid-template-rows: repeat(2, 600px);;
    column-gap: 10px;
    row-gap: 12px;

    @media screen and (max-width: 1400px) {
        grid-template-columns: repeat(2, 450px);
        align-self: center;
    }

    @media screen and (max-width: 960px) {
        grid-template-columns: repeat(1, 450px);
        align-self: center;
         
    }
`;
 