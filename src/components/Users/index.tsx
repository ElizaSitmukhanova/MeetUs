import { FC, useState, useEffect } from 'react'
import { Container, ElementOne, ElementTwo, ImageContainer, NameContainer, ButtonContainer, ButtonOne, ButtonTwo, DescContainer, } from './styled';
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
        <Container>
            <button onClick={handleClickBack} style={{ marginLeft: '150px', marginTop: '25px' }}>
                Назад
            </button>
            <ElementOne>
                <ImageContainer>
                    <img src={user?.img} width='120 px' height="120 px" />
                </ImageContainer>
                <NameContainer>
                    {user?.name}
                </NameContainer>
                <ButtonContainer>
                    <ButtonOne>
                        Установить статус
                    </ButtonOne>
                    <ButtonTwo>
                        Редактировать профиль
                    </ButtonTwo>
                </ButtonContainer>
            </ElementOne>
            <ElementTwo>
                <DescContainer>
                    {user?.description}
                </DescContainer>
            </ElementTwo>
        </Container>
    );
};