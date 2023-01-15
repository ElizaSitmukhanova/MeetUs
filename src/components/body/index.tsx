import axios from 'axios';
import { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { PostsUrl } from '../../utils/roter';
import { Block } from './Block';
import { Elements } from './styled';
import { PostType } from './types';

export const Body = () => {
    const navigate = useNavigate();
    const [dataFromApi, setDataFromApi] = useState(Array<PostType>);
    useEffect(() => {
        axios.get(`http://localhost:5000/api/posts`).then(
            res=>{
                setDataFromApi(res.data);
                console.log(res.data)
            }
        )
      },[]);
    const onPostClick = (id: number ) => {
        navigate(PostsUrl.pushPath({id: id}));
    };
    const getDescription = (desc: string) => {
        if (desc.length > 80) {
            return desc.substring(0, 80) + " ...";
        } else{
            return desc;
        }
    }

    return(
        <Elements>
            {dataFromApi?.map((element) => {
                return(
                    <Block
                        description={getDescription(element?.description)}
                        title={element?.title}
                        img={element?.img}
                        date={"25.06"}
                        id={element?.id}
                        onPostClick={onPostClick}
                    />
                );
            })}
        </Elements>
    );
}