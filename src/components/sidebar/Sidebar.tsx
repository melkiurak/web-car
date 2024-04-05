import styles from './Sidebar.module.scss'
import { IoCarSportOutline } from "react-icons/io5";
import { TbSmartHome } from "react-icons/tb";
import { Link } from 'react-router-dom';

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <nav className={styles.navigation}>
        <div className={styles.logo}>
          <IoCarSportOutline className={styles.icons} />
          <h2>Carrs</h2>
        </div>
        <ul className={styles.menu}>
          <li className={styles.item}>
            <Link to="/"  >
              <TbSmartHome className={styles.icon} />
              <span>Home</span>
            </Link>
          </li>
          <p>Brands</p>
          <li className={styles.item}>
            <Link to=''>
              <img src="src\assets\Icon\audi_logo_icon_247535.svg" alt="" />
              <span>Audi</span>
            </Link>
          </li>
          <li className={styles.item}>
            <Link to=''>
              <img src="src\assets\Icon\bmw_logo_icon_247450.svg" alt="" />
              <span>BMW</span>
            </Link>
          </li>
          <li className={styles.item}>
            <Link to=''>
              <img src="src\assets\Icon\ferrari_logo_icon_145829.svg" alt="" />
              <span>Ferrari</span>
            </Link>
          </li>
          <li className={styles.item}>
            <Link to=''>
              <img src="src\assets\Icon\ford_logo_icon_145825.svg" alt="" />
              <span>Ford</span>
            </Link>
          </li>
          <li className={styles.item}>
            <Link to=''>
              <img src="src\assets\Icon\mercedes_benz_logo_icon_145797.svg" alt="" />
              <span>Mercedes</span>
            </Link>
          </li>
          <li className={styles.item}>
            <Link to=''>
              <img src="src\assets\Icon\porsche_logo_icon_145784.svg" alt="" />
              <span>Porshe</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}