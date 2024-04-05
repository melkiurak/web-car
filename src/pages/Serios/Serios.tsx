import { useEffect, useState } from 'react'
import styles from './Serios.module.scss'
import { CarSerios } from '../../service/car.service';
import { useParams } from 'react-router-dom';
export function Serios() {
    const { marckId } = useParams(); // Получаем параметр из URL
    const [serios, setSerios] = useState<MarckModel[]>([]);
    useEffect(() => {
        const fetchSerios = async () => {
            const response = await CarSerios.getSerios(marckId ? parseInt(marckId) : 0);
            const seriosData = response.data?.attributes?.MarckModel || []; // Извлекаем массив моделей из объекта
            setSerios(seriosData);
        };
        fetchSerios();
    }, [marckId]);
    return (
        <div className={styles.serios}>
            {serios.map((serio) => (
                <div className={styles.serio} key={serio.id}>
                    <h1>{serio.ModelName}</h1>
                    <p>{serio.ModelDescription}</p>
                    <div className={styles.models}>
                    {serio.Models.map((model) => (
                        <div className={styles.model} key={model.id}> 
                            <img src={`http://localhost:1337${model.Img.data[0].attributes.url}`} />
                            <h2>{model.Name}</h2>
                            <p>{model.description}</p>
                            <h3>${model.Price.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}</h3>
                        </div>
                    ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

