import { FC, useState, useEffect } from 'react'
import { Element, TitleDiscContainer, DateContainer, DiscContainer, TitleContainer, CountsContainer, ImageContainer, CommentsInput, CommentsAdd, CommentsBox } from './styles';
import { useParams } from 'react-router-dom';
import { initialData } from '../../data';
import { BsFillSuitHeartFill, BsChat } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

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
    const [likeCount, setLikeCount] = useState<number|undefined>(undefined);
    const { id } = useParams();
    const navigate = useNavigate();

    const handleClickBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        //Будто запрос в бэк
        const item = initialData.filter(data => data.id.toString() === id)[0];
        setLikeCount(item.likeCount);
        setPost(item);
    }, [id])

    const handleClickLike = () => {
        if (likeCount !== undefined) {
            setLikeCount((likeCount) => likeCount && likeCount + 1)
        }
    }
    return (
        <div>
            <button onClick={handleClickBack} style={{marginLeft: '150px', marginTop: '25px'}}>
                Назад
            </button>
            <Element>
                <ImageContainer>
                    <img src={post?.img} width="50%" height="90%" />
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
                    {likeCount} <BsFillSuitHeartFill onClick={handleClickLike} />
                       {/*  <span> 50 <BsChat /> </span> */}
                    </CountsContainer>
                    <CommentsBox>
                        <CommentsInput>
                            <textarea> Написать комментарий </textarea>
                        </CommentsInput>
                        <CommentsAdd>  
                        <button> Отправить </button>
                    </CommentsAdd>
                    </CommentsBox>
                </TitleDiscContainer>
            </Element>
        </div>
        
    );
};


 /* const description = useMemo((desc: string) => {
        if (desc.length > 80) {
            return desc.substring(0, 80) + " ...";
        } else{
            return desc;
        }
    }, []); */