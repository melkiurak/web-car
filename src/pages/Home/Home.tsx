import { Sidebar } from '../../components/sidebar/Sidebar';
import { CarInfo } from '../../components/CarInfo/CarInfo';
import styles from './Home.module.scss';

export function AppHome() {
    return (
        <div className={styles.Home}>
            <Sidebar/>
            <CarInfo/>
        </div>
    )
}