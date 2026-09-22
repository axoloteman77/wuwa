'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';

export default function LoginPage() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorUser, setErrorUser] = useState(false);
    const [errorPass, setErrorPass] = useState(false);
    const [btnState, setBtnState] = useState('idle'); // idle | loading | success

    function handleSubmit(e) {
        e.preventDefault();

        const userEmpty = username.trim() === '';
        const passEmpty = password.trim() === '';

        if (userEmpty || passEmpty) {
            setErrorUser(userEmpty);
            setErrorPass(passEmpty);
            setTimeout(() => {
                setErrorUser(false);
                setErrorPass(false);
            }, 1200);
            return;
        }

        setBtnState('loading');
        setTimeout(() => {
            setBtnState('success');
            setTimeout(() => {
                router.push('/dashboard');
            }, 700);
        }, 700);
    }

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.card}>
                <span className={styles.icon}>✦</span>
                <h1 className={styles.title}>Inicio sesión</h1>
                <p className={styles.subtitle}>Ingresa a tu cuenta</p>

                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className={styles.inputGroup}>
                        <label htmlFor="username">Nombre de usuario</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className={errorUser ? styles.inputError : ''}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={errorPass ? styles.inputError : ''}
                            required
                        />
                    </div>

                    <div className={styles.options}>
                        <label className={styles.checkboxLabel}>
                            <input type="checkbox" />
                            Recordarme
                        </label>
                        <a href="#" className={styles.forgotLink}>Olvidaste tu contraseña?</a>
                    </div>

                    <button
                        type="submit"
                        className={`${styles.btnLogin} ${btnState === 'success' ? styles.btnSuccess : ''}`}
                        style={{ opacity: btnState === 'loading' ? 0.6 : 1 }}
                    >
                        {btnState === 'idle' && 'INICIA SESIÓN'}
                        {btnState === 'loading' && '...'}
                        {btnState === 'success' && '✓'}
                    </button>

                    <p className={styles.signupLink}>
                        No tienes una cuenta? <a href="#">Regístrate</a>
                    </p>
                </form>
            </div>

            <p className={styles.footer}>✦ Bolivia · 2026</p>
        </div>
    );
}