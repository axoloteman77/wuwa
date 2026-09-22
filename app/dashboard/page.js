'use client';

import { useRouter } from 'next/navigation';
import styles from './dashboard.module.css';

export default function DashboardPage() {
    const router = useRouter();

    function handleLogout() {
        router.push('/login');
    }

    return (
        <div className={styles.pageWrapper}>
            <header className={styles.header}>
                <div className={styles.headerLeft}>
                    <span className={styles.icon}>✦</span>
                    <h1 className={styles.title}>Dashboard</h1>
                </div>
                <button onClick={handleLogout} className={styles.logoutBtn}>
                    Cerrar sesión
                </button>
            </header>

            <main className={styles.content}>
                <div className={`${styles.card} ${styles.welcomeCard}`}>
                    <p className={styles.cardLabel}>Bienvenido</p>
                    <p className={styles.welcomeText}>
                        Esta es una pagina de practica para paginas web en frameworks jijijija
                    </p>
                </div>

                <div className={styles.card}>
                    <p className={styles.cardLabel}>Estado</p>
                    <p className={styles.cardValue}>Activo</p>
                </div>

                <div className={styles.card}>
                    <p className={styles.cardLabel}>Sesión</p>
                    <p className={styles.cardValue}>Correcta</p>
                </div>

                <div className={styles.card}>
                    <p className={styles.cardLabel}>Versión</p>
                    <p className={styles.cardValue}>1.0</p>
                </div>

                <div className={styles.flipGrid}>
    <div className={styles.flipCard}>
        <div className={styles.flipInner}>
            <div className={styles.flipFront}>
                <span className={styles.flipIcon}>✦</span>
                <p className={styles.flipTitle}>Productos</p>
            </div>
            <div className={styles.flipBack}>
                <p className={styles.flipBackText}>Productos disponibles:</p>
                 <p className={styles.flipBackText}>-Pastelitos</p>
                  <p className={styles.flipBackText}>-Bizcochitos</p>
                   <p className={styles.flipBackText}>-Nose</p>
                <p></p>
            </div>
        </div>
    </div>

    <div className={styles.flipCard}>
        <div className={styles.flipInner}>
            <div className={styles.flipFront}>
                <span className={styles.flipIcon}>✦</span>
                <p className={styles.flipTitle}>Configuración</p>
            </div>
            <div className={styles.flipBack}>
                <p className={styles.flipBackText}>Puede configurar:</p>
                 <p className={styles.flipBackText}>-Que tan dulce quiere los productos</p>
                  <p className={styles.flipBackText}>-Bebidas de acompañamiento</p>
                   <p className={styles.flipBackText}>-Precios segun el pais</p>   
            </div>         
        </div>
    </div>

    <div className={styles.flipCard}>
        <div className={styles.flipInner}>
            <div className={styles.flipFront}>
                <span className={styles.flipIcon}>✦</span>
                <p className={styles.flipTitle}>Añadir</p>
            </div>
            <div className={styles.flipBack}>
                <p className={styles.flipBackText}>Para añadir elija sus atributos:</p>
                 <p className={styles.flipBackText}>-Precio</p>
                  <p className={styles.flipBackText}>-Glucosa</p>
                   <p className={styles.flipBackText}>-Tamaño</p>
            </div>
        </div>
    </div>
</div>
            </main>

            <p className={styles.footer}>✦ Bolivia · 2026</p>
        </div>
    );
}