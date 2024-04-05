import { useNavigate } from "react-router-dom";
import styles from "./dashboard.module.scss"
import { FiSearch } from "react-icons/fi";

    export function Dashboard () {
    const goBack = () => {
        window.history.back();
    }
    const goNext = () => {
        window.history.forward();
    }
    const navigate = useNavigate();
    const clickRegister = () => {
        navigate("/registration")
    }
    const clickLogin = () => {
        navigate("/login")
    }
    return (
        <div className={styles.dashboard}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <h2>Dashboard</h2>
                </div>
                <button className={styles.button} onClick={goBack} >Назад</button>
                <button className={styles.button} onClick={goNext} >Вперёд</button>
                <div className={styles.from}>
                    <form>
                        <input type="text" placeholder="Search"/>
                    </form>
                    <button>
                        <FiSearch className={styles.icon} />
                    </button>
                </div>
                <div className={styles.account}>
                    <button onClick={() => clickLogin()} className={styles.accountbtn}>Login</button>
                    <button onClick={() => clickRegister()} className={styles.accountbtn}>Registration</button>
                </div>
            </div>
        </div>
    );
}