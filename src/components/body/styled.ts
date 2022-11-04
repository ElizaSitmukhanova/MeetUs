import styled from 'styled-components';

 export const Elements = styled.div `
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 470px);
    grid-template-rows: repeat(2, 600px);;
    column-gap: 10px;
    row-gap: 12px;

    @media screen and (max-width: 1400px) {
        grid-template-columns: repeat(2, 470px);
    }

    @media screen and (max-width: 900px) {
        grid-template-columns: repeat(1, 470px);
    }
`;
 