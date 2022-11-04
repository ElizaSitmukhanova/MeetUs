import React from 'react'
import { Wrapper, DiscContainer, TitleContainer,  CalendarAndDate, ImageContainer } from './styled';
import { BsCalendar2Date } from 'react-icons/bs';
import { idText } from 'typescript';

interface BrockProps {
    id: number,
    description: string,
    title: string,
    img: string,
    date: string,
    onPostClick: (id: number) => void;
};

export const Block: React.FC<BrockProps> = ({ id, description, title, img, date, onPostClick }) => {
    const handlePostClick = () => {
        onPostClick(id);
    };
    
    return (
        <Wrapper key={id} onClick={handlePostClick}>
            <ImageContainer>
                <img src={img} width="300" height="250 " />
            </ImageContainer>
            <TitleContainer>
                {title}
            </TitleContainer>
            <DiscContainer>
                {description}
            </DiscContainer>
            <CalendarAndDate>
                <BsCalendar2Date />
                {date}
            </CalendarAndDate>
        </Wrapper>
    );
};