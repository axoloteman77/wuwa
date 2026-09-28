'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
    BarChart3,
    Settings,
    Bell,
    Sparkles,
    ShoppingBag,
    LayoutDashboard,
    LogOut,
    Menu,
    X,
} from 'lucide-react';
import styles from './dashboard.module.css';

export default function DashboardPage() {
    const router = useRouter();
    const [menuAbierto, setMenuAbierto] = useState(false);

    function handleLogout() {
        router.push('/login');
    }

    return (
        <div className={styles.pageWrapper}>
            <header className={styles.header}>
                <div className={styles.headerLeft}>
                    <Sparkles className={styles.icon} size={20} strokeWidth={1.5} />
                    <h1 className={styles.title}>Dashboard</h1>
                </div>

                <button
                    className={styles.menuToggle}
                    onClick={() => setMenuAbierto(!menuAbierto)}
                    aria-label="Abrir menú"
                >
                    {menuAbierto ? <X size={22} /> : <Menu size={22} />}
                </button>

                <nav className={`${styles.nav} ${menuAbierto ? styles.navOpen : ''}`}>
                    <Link href="/dashboard" className={`${styles.navLink} ${styles.navLinkActive}`}>
                        <LayoutDashboard size={16} strokeWidth={1.8} />
                        Resumen
                    </Link>
                    <Link href="/tienda" className={styles.navLink}>
                        <ShoppingBag size={16} strokeWidth={1.8} />
                        Comprar
                    </Link>
                    <button onClick={handleLogout} className={styles.logoutBtn}>
                        <LogOut size={14} strokeWidth={2} />
                        Cerrar sesión
                    </button>
                </nav>
            </header>

            <main className={styles.content}>
                <div className={`${styles.card} ${styles.welcomeCard}`}>
                    <p className={styles.cardLabel}>Bienvenido</p>
                    <p className={styles.welcomeText}>
                        Esta es tu página principal después de iniciar sesión. Desde acá podés
                        ir a la tienda para realizar tus compras.
                    </p>
                    <Link href="/tienda" className={styles.shopBtn}>
                        <ShoppingBag size={16} strokeWidth={2} />
                        Realizar una compra
                    </Link>
                </div>

                <div className={styles.card}>
                    <p className={styles.cardLabel}>Estado</p>
                    <p className={styles.cardValue}>Activo</p>
                </div>

                <div className={styles.card}>
                    <p className={styles.cardLabel}>Sesión</p>
                    <p className={styles.cardValue}>OK</p>
                </div>

                <div className={styles.card}>
                    <p className={styles.cardLabel}>Versión</p>
                    <p className={styles.cardValue}>1.0</p>
                </div>

                <div className={styles.flipGrid}>
                    <div className={styles.flipCard}>
                        <div className={styles.flipInner}>
                            <div className={styles.flipFront}>
                                <BarChart3 className={styles.flipIcon} size={32} strokeWidth={1.5} />
                                <p className={styles.flipTitle}>Estadísticas</p>
                            </div>
                            <div className={styles.flipBack}>
                                <p className={styles.flipBackText}>Acá irían tus gráficos o métricas principales.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.flipCard}>
                        <div className={styles.flipInner}>
                            <div className={styles.flipFront}>
                                <Settings className={styles.flipIcon} size={32} strokeWidth={1.5} />
                                <p className={styles.flipTitle}>Configuración</p>
                            </div>
                            <div className={styles.flipBack}>
                                <p className={styles.flipBackText}>Ajustes de cuenta y preferencias del usuario.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.flipCard}>
                        <div className={styles.flipInner}>
                            <div className={styles.flipFront}>
                                <Bell className={styles.flipIcon} size={32} strokeWidth={1.5} />
                                <p className={styles.flipTitle}>Notificaciones</p>
                            </div>
                            <div className={styles.flipBack}>
                                <p className={styles.flipBackText}>Últimas alertas y avisos importantes.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.flipCard}>
                        <div className={styles.flipInner}>
                            <div className={styles.flipFront}>
                                <ShoppingBag className={styles.flipIcon} size={32} strokeWidth={1.5} />
                                <p className={styles.flipTitle}>Tienda</p>
                            </div>
                            <div className={styles.flipBack}>
                                <p className={styles.flipBackText}>Explorá los productos y hacé tu compra.</p>
                                <Link href="/tienda" className={styles.flipLink}>Ir a la tienda</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <p className={styles.footer}>✦ Bolivia · 2026</p>
        </div>
    );
}