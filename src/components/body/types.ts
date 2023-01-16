export interface PostType{
    id: number;
    title: string;
    description: string;
    img: string;
    date: string;
    comments: Array<CommentType>;
    likeCount: number;
    isLiked: boolean;
}

export interface CommentType{
    id: number;
    name: string;
    comment: string;
}
