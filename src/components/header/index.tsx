 import React from 'react'
import { HeaderContainer, Logo, SearchAndProfile, } from './styled';
import { BsSearch, BsFillPersonFill, } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { UserUrl } from '../../utils/roter';

export const Header = () => {
    const navigate = useNavigate();

    const onPersonClick = () => {
        navigate(UserUrl.pushPath({id: 3}));
    };

    return (
        <HeaderContainer>
            <Logo> Meet us </Logo>
            <SearchAndProfile>
                <BsFillPersonFill onClick={onPersonClick} />
                <BsSearch />
            </SearchAndProfile>
        </HeaderContainer>
    );
} 