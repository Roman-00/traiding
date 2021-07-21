import React from 'react';

// Импортируем компоненты { Header & Statistics }
import { Header } from '../components/Header';
import { Statistics } from '../components/Statistics';

// Импортируем api.js для получения данных
import { getData } from '../services/api';

export const Home = () => {

    // Создаем useState для записи и хранения данных
    const [data, setData] = React.useState({});

    // Выполняем useEffect один раз
    React.useEffect(() => {
        getData()
            .catch((error) => {
                console.warn(error);
            })
            .then((res) => {
                if(res.response.status === 200){
                    setData(res.obj);
                } else {
                    console.log('Ошибка');
                }
            });
    }, []);

    return (
        <>
            <Header />
            {!data.length 
                ? 
                'Загрузка...' 
                : 
                <Statistics data={data}/>
            }
           
        </>
    )

};