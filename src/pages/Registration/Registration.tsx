import { useForm } from 'react-hook-form';
import styles from './Registration.module.scss';
import { NewAccount } from '../../service/car.service';

export function Registration() {
    const { register, formState: { errors, isValid }, handleSubmit, getValues } = useForm({ mode: 'onBlur' });
    const onSubmit = async (data:any) =>{
        await NewAccount.saveAccount(data);
    }
    return (
        <div className={styles.registration}>
            <div className={styles.title}>
                <h1>Добро пожаловать в мир автомобилей</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.input}>
                    <label>Имя</label>
                    <input {...register('name', { required: true })} type="text" placeholder='danila32' />
                    <div className={styles.alert}>
                        {errors?.name && <span>Введите, пожалуйста, имя</span>}
                    </div >
                </div>
                <div className={styles.input}>
                    <label>Почта</label>
                    <input {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i })} type="email" placeholder='danila@gmail.com' />
                    <div className={styles.alert}>
                        {errors?.email && <span>Введите, пожалуйста, почту</span>}
                    </div>
                </div>
                <div className={styles.input}>
                    <label>Пароль</label>
                    <input {...register('password', { required: true, minLength: { value: 10, message: 'Пароль должен быть больше 10 символов' } })} type="password" />
                    <div className={styles.alert}>
                        {errors?.password && <span>{errors?.password?.message?.toString() || 'Введите пароль'}</span>}
                    </div>
                </div>
                <input className={styles.sending} type="submit" value={'Зарегистрироваться'} />
            </form>
        </div>
    )
}