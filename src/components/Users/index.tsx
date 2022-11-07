import { FC, useState, useEffect } from 'react'
import { Element, DiscContainer, NameContainer, ImageContainer } from './styled';
import { useParams } from 'react-router-dom';
import { userData } from '../../users';


interface User {
    id: number;
    name: string;
    description: string;
    img: string;

};

export const UserPost: React.FC = () => {
    const [user, setUser] = useState<User>()
    const { id } = useParams();

    useEffect(() => {
        //Будто запрос в бэк
        const item = userData.filter(data => data.id.toString() === id)[0];
        setUser(item);
    }, [id])

    return (
        <Element>
            <ImageContainer>
                <img src={user?.img} width='70' height="50 px" />
            </ImageContainer>
            <NameContainer>
                {user?.name}
            </NameContainer>
            <DiscContainer>
                {user?.description}
            </DiscContainer>
        </Element>
    );
};