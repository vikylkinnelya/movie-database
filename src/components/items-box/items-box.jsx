import React from 'react';
import { Row, Col, Card, Tag, Button } from 'antd';
import { HeartOutlined, FolderViewOutlined } from '@ant-design/icons'
import './items-box.css'

const { Meta } = Card;

const ItemsBox = ({ data, favList, watchList, imdbID, ShowDetail, DetailRequest, ActivateModal, ToggleFav, ToggleWatch }) => {

    const itemClickHandler = () => { //обработчик события клика. при клике на карточку
        ActivateModal(true); //показать модалку. эл импортируется из другого компонента
        DetailRequest(true); //запрос к серверу за деталями фильма
    }

    const renderItem = (arr) => {
        return arr.map((item) => )
    }

    let classNamesFav = 'overlay like active';
    let classNamesWatch = 'overlay watch active';
    let classNamesNotFav = 'overlay like';
    let classNamesNotWatch = 'overlay watch';

    return (
        <>
            { data !== null && data.length > 0 && data.map((result) => ( /* перебор обьекта даты */
                <div
                    key={result.imdbID} //присв ключ обьекту из списка в соотв с его номером в базе 
                    className='card-container'
                >
                    <div className='overlay'>
                        <Button
                            className={favList.includes(result) ? classNamesFav : classNamesNotFav}
                            type="primary"
                            shape='circle'
                            icon={<HeartOutlined />}
                            onClick={() => ToggleFav(result)} //при клике на кнопку вызывается переданная сверху функция добавления данного обьекта в обьект с избранными
                        >
                        </Button>
                        <Button
                            className={watchList.includes(result) ? classNamesWatch : classNamesNotWatch}
                            type="primary"
                            shape='circle'
                            icon={<FolderViewOutlined />}
                            onClick={() => ToggleWatch(result)}
                        >
                        </Button>
                    </div>
                    <Card /* карточка  с фото */
                        cover={
                            <img
                                alt={result.Title}
                                src={result.Poster === 'N/A' ?
                                    'https://placehold.it/198x264&text=Image+Not+Found' :
                                    result.Poster}
                                onClick={() => itemClickHandler()}
                            />}
                    >
                        <Meta /* краткая информация */
                            title={result.Title}
                            description={false}
                        />
                        <Row className='gutter-row'>
                            <Col>
                                {result.Type === 'movie' ?
                                    <Tag color='magenta'>{result.Type}</Tag> :
                                    <Tag color='green'>{result.Type}</Tag>}
                            </Col>
                        </Row>
                    </Card>
                </div >
            ))}
        </>
    )
}

export default ItemsBox;