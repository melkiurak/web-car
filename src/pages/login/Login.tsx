import styles from './Login.module.scss'

export function Login() {
    return(
        <div className={styles.login}>
            <div className={styles.title}>
                <h1>Войдите в свой аккаунт</h1>
            </div>
            <form className={styles.form}>
                <div className={styles.input}>
                    <label>Введите имя</label>
                    <input type="text" />
                </div>
                <div className={styles.input}>
                    <label>Введите почту</label>
                    <input type="email" />
                </div>
                <div className={styles.input}>
                    <label>Введите пароль</label>
                    <input type="password" />
                </div>
                <input className={styles.sending} type="submit" value={'Войти'}/>
            </form>
        </div>
    ) 
}