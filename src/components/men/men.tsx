import { useNavigate } from 'react-router-dom';
import { userData } from '../../users';
import { UserUrl } from '../..//utils/roter';
import { Block } from '../Users/user';
import { Elements } from './styled';

export const User = () => {
    const navigate = useNavigate();

    const onUserClick = (id: number) => {
        navigate(UserUrl.pushPath({ id: id }));
    };

    return (
        <Elements>
            {userData.map((element) => {
                return (
                    <Block
                        description={element.description}
                        name={element.name}
                        img={element.img}
                        id={element.id}
                        onUserClick={onUserClick}
                    />
                );
            })}
        </Elements>
    );
} 