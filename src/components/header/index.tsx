import React from 'react'
import { HeaderContainer, Logo, SearchAndProfile,   } from './styled';
import { BsSearch, BsFillPersonFill,  } from 'react-icons/bs';

export const Header = () => {
    const handleClickPerson = () => {
        alert('Человечек');
    };

    return(
        <HeaderContainer>
            <Logo>
                Meet us
            </Logo>
           

            <SearchAndProfile>
                <BsFillPersonFill onClick={handleClickPerson}/>
                <BsSearch />
                

            </SearchAndProfile>
              
            
        </HeaderContainer>

    );
}