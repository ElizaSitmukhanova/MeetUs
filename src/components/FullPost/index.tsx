import {FC, useState, useEffect} from 'react'
import { DiscContainer, TitleContainer,  CalendarAndDate, ImageContainer } from './styles';
import { useParams } from 'react-router-dom';
import { initialData } from '../../data';

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
        const item = initialData.filter(data => data.id.toString() ===  id)[0];

        setPost(item);
    }, [id])


    return (
        <div>
           

            <ImageContainer>
                <img src={post?.img} width="300" height="250 " />
            </ImageContainer>
            <TitleContainer>
                {post?.title}
            </TitleContainer>
            <DiscContainer>
                {post?.description}
            </DiscContainer>
        </div>
    );
};