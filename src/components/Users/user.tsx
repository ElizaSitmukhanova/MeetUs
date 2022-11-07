import React from 'react'
import { HeaderContainer, Logo, SearchAndProfile, } from './userStyled';
import { BsSearch, BsFillPersonFill, } from 'react-icons/bs';
import { idText } from 'typescript';

interface BrockProps {
    id: number,
    description: string,
    name: string,
    img: string,
    onUserClick: (id: number) => void;
};
export const Block: React.FC<BrockProps> = ({ id, description, name, img, onUserClick }) => {
    const handleClickPerson = () => {
        onUserClick(id);
    };

    return (
        <HeaderContainer>
            <Logo>
                Meet us
            </Logo>
            <SearchAndProfile>
                <BsFillPersonFill key={id} onClick={handleClickPerson} />
                <BsSearch />
            </SearchAndProfile>
        </HeaderContainer>

    );
}