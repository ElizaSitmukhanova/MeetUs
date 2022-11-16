import { FC, useState, useEffect } from 'react'
import { Backbutton, Element, Image, TitleDiscContainer, DateContainer, DiscContainer, TitleContainer, CountsContainer, ImageContainer, CommentsInput, CommentsBox, ImageUser, Textarea, Button } from './styles';
import { useParams } from 'react-router-dom';
import { initialData } from '../../data';
import { BsArrowLeft, BsFillSuitHeartFill, BsChat, BsCheck2 } from 'react-icons/bs';
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
    const [likeCount, setLikeCount] = useState<number | undefined>(undefined);
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
            <Backbutton onClick={handleClickBack}>
                <BsArrowLeft />
            </Backbutton>
            <Element>
                <ImageContainer>
                    <Image src={post?.img} />
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
                          
                    </CommentsBox>

                    <CommentsInput>
                        <ImageUser src='https://www.youloveit.ru/uploads/posts/2020-11/1606323514_youloveit_com_disney_princess_wears_masks_profile_pictures09.jpeg' />
                        <Textarea> Написать комментарий... </Textarea>
                        <Button>
                            <BsCheck2 size={'2em'} />
                        </Button>
                    </CommentsInput>
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