import { FC, useState, useEffect } from 'react'
import { Element, TitleDiscContainer, DateContainer, DiscContainer, TitleContainer, CountsContainer, ImageContainer, CommentsInput, CommentsAdd, textarea } from './styles';
import { useParams } from 'react-router-dom';
import { initialData } from '../../data';
import { BsFillSuitHeartFill, BsChat } from 'react-icons/bs';

interface Post {
    id: number;
    title: string;
    description: string;
    img: string;
    date: string;
    comments: never[];
    likeCount: number;
    isLiked: boolean;
};

export const FullPost: React.FC = () => {
    const [post, setPost] = useState<Post>()
    const { id } = useParams();

    useEffect(() => {
        //Будто запрос в бэк
        const item = initialData.filter(data => data.id.toString() === id)[0];

        setPost(item);
    }, [id])


    return (
        <Element>

            <ImageContainer>
                <img src={post?.img} width="700" height="500" />
            </ImageContainer>
            <TitleDiscContainer>
                <TitleContainer>
                    {post?.title}
                </TitleContainer>
                <DateContainer>
                    {post?.date}
                </DateContainer>
                <DiscContainer>
                    {post?.description}
                </DiscContainer>
                <CountsContainer>
                {post?.likeCount} <BsFillSuitHeartFill />
                    <span> 50 <BsChat /> </span>
                </CountsContainer>
                <CommentsAdd>
                    <CommentsInput>
                        <textarea> Написать комментарий </textarea>
                    </CommentsInput>
                    <button> Отправить </button>
                </CommentsAdd>
            </TitleDiscContainer>
        </Element>
    );
};