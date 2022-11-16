import { FC, useState, useEffect } from 'react'
import { Backbutton, ElementOne, ElementTwo, ImageContainer, NameContainer, ButtonContainer, Button, DescContainer, Image, CountsContainer, LikeContainer, ChatContainer } from './styled';
import { useNavigate, useParams } from 'react-router-dom';
import { userData } from '../../users';
import { BsArrowLeft, BsFillSuitHeartFill, BsChat } from 'react-icons/bs';


interface User {
    id: number;
    name: string;
    description: string;
    img: string;
    likeCount: number;
};

export const User: React.FC = () => {
    const [user, setUser] = useState<User>()
    const [likeCount, setLikeCount] = useState<number | undefined>(undefined);
    const { id } = useParams();
    const navigate = useNavigate();

    const handleClickBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        //Будто запрос в бэк
        const item = userData.filter(data => data.id.toString() === id)[0];
        setLikeCount(item.likeCount);
        setUser(item);
    }, [id])

    const handleClickLike = () => {
        if (likeCount !== undefined) {
            setLikeCount((likeCount) => likeCount && likeCount + 1)
        }
    }

    return (
        <>
            <Backbutton onClick={handleClickBack}>
                <BsArrowLeft />
            </Backbutton>
            <ElementOne>
                <ImageContainer>
                    <Image src={user?.img} />
                </ImageContainer>
                <NameContainer>
                    {user?.name}
                </NameContainer>
                <ButtonContainer>
                    <Button>
                        Установить статус
                    </Button>
                    <Button>
                        Редактировать профиль
                    </Button>
                </ButtonContainer>
            </ElementOne>
            <ElementTwo>
                <DescContainer>
                    {user?.description}
                </DescContainer>
                <CountsContainer>
                    < LikeContainer>
                        {likeCount} <BsFillSuitHeartFill onClick={handleClickLike} />
                    </LikeContainer>
                    <ChatContainer>
                        <BsChat /> 150
                    </ChatContainer>
                </CountsContainer>
            </ElementTwo>
        </>
    );
};