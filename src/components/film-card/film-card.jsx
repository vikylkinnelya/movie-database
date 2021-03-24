import './film-card.css';
import { Card, Tag, Button } from 'antd';
import { HeartOutlined, EyeOutlined, EyeFilled, HeartFilled } from '@ant-design/icons';

import React, { useContext } from 'react';
import MyContext from '../../servises/Context'
import toggleItem from '../../servises/toggleItem';


const { Meta } = Card;

const FilmCard = ({ result, ClickHandler, Title, Poster, Type, isWatch, isFav }) => {

    const { watchList, favList, setWatch, setFav } = useContext(MyContext)

    return (
        <Card className='card-container'
            cover={<img
                alt={Title}
                src={Poster === 'N/A' ?
                    'https://placehold.it/198x264&text=Image+Not+Found' :
                    Poster}
                onClick={() => ClickHandler()} />}

            actions={[
                <>
                    {Type === 'movie' ?
                        <Tag color='magenta'>{Type}</Tag> :
                        <Tag color='green'>{Type}</Tag>}
                </>,

                <Button
                    className={isWatch ? 'overlay watch active' : 'overlay watch'} key='watch'
                    shape='circle'
                    icon={isWatch ? <EyeFilled /> : <EyeOutlined />}
                    onClick={() => toggleItem(result, watchList, setWatch, 'watch')} />
                ,
                <Button
                    className={isFav ? 'overlay like active' : 'overlay like'} key='fav'
                    shape='circle'
                    icon={isFav? <HeartFilled /> : <HeartOutlined />}
                    onClick={() => toggleItem(result, favList, setFav,'fav')} />
            ]}
        >
            <Meta
                title={Title}
                description={false}
                onClick={() => ClickHandler()} />
        </Card>
    )
}

export default FilmCard;

