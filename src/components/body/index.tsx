import { useNavigate } from 'react-router-dom';
import { initialData } from '../../data';
import { PostsUrl } from '../../utils/roter';
import { Block } from './Block';
import { Elements } from './styled';

export const Body = () => {
    const navigate = useNavigate();

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
            {initialData.map((element) => {
                return(
                    <Block
                        description={getDescription(element.description)}
                        title={element.title}
                        img={element.img}
                        date={element.date}
                        id={element.id}
                        onPostClick={onPostClick}
                    />
                );
            })}
        </Elements>
    );
}