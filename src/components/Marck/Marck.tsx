import styles from './MarckCars.module.scss';
import {   Marck, } from '../../service/car.service';
import { useEffect, useState, } from 'react';
import {   useNavigate } from 'react-router-dom';
export function AppMarck() {
  const navigate = useNavigate();
  const [marck, setMarck] = useState<MarckCar[]>([]);
  const fetchInfo = () => {
    return Marck.getMarck().then((res) => setMarck(res.data));
  };
  useEffect(() => {
    fetchInfo();
  }, [])
  const goToSeriosPage = async (marckId:number) => {
    navigate(`/serios/${marckId}`);
  };
  return  (
    <div className={styles.cars}>
      {marck.map((car) => (
        <div className={styles.car} key={car.id}>
          <img src={`http://localhost:1337${car.attributes.MarckImg.data[0].attributes.url}`} alt={car.attributes.MarckName} />
          <h2>{car.attributes.MarckName}</h2>
          <p>{car.attributes.MarckDescription}</p>
          <button onClick={() => goToSeriosPage(car.id)} >Узнать больше</button>
        </div>
      ))}
    </div>
  );
}