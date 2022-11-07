import { FC, useState, useEffect } from 'react'
import { Element, DiscContainer, NameContainer, ImageContainer } from './styled';
import { useNavigate, useParams } from 'react-router-dom';
import { userData } from '../../users';

interface User {
    id: number;
    name: string;
    description: string;
    img: string;
};

export const User: React.FC = () => {
    const [user, setUser] = useState<User>()
    const { id } = useParams();
    const navigate = useNavigate();

    const handleClickBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        //Будто запрос в бэк
        const item = userData.filter(data => data.id.toString() === id)[0];
        setUser(item);
    }, [id])

    return (
        <div>
            <button onClick={handleClickBack} style={{marginLeft: '150px', marginTop: '25px'}}>
                Назад
            </button>
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
        </div>
    );
};