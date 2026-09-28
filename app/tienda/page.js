'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    ShoppingCart,
    Sparkles,
    Headphones,
    Watch,
    Camera,
    Backpack,
    Truck,
    ShieldCheck,
    RotateCcw,
    Plus,
} from 'lucide-react';
import styles from './tienda.module.css';

const productos = [
    {
        id: 1,
        nombre: 'Auriculares Air',
        descripcion: 'Sonido envolvente con cancelación de ruido y 30 horas de batería.',
        precio: 89,
        badge: 'Nuevo',
        icono: Headphones,
        imagen: '/fondos/productos.jpg',
    },
    {
        id: 2,
        nombre: 'Reloj Pulse',
        descripcion: 'Seguimiento de actividad, notificaciones y pantalla siempre activa.',
        precio: 129,
        badge: 'Popular',
        icono: Watch,
    },
    {
        id: 3,
        nombre: 'Cámara Snap',
        descripcion: 'Compacta, con video 4K y estabilización para tus viajes.',
        precio: 249,
        badge: null,
        icono: Camera,
    },
    {
        id: 4,
        nombre: 'Mochila Urban',
        descripcion: 'Resistente al agua, con compartimento acolchado para laptop.',
        precio: 59,
        badge: 'Oferta',
        icono: Backpack,
    },
];

const beneficios = [
    { icono: Truck, titulo: 'Envío rápido', texto: 'Recibí tu pedido en 2 a 5 días hábiles.' },
    { icono: ShieldCheck, titulo: 'Pago seguro', texto: 'Tus datos protegidos en cada compra.' },
    { icono: RotateCcw, titulo: 'Devolución fácil', texto: '30 días para cambiar de opinión.' },
];

export default function TiendaPage() {
    const [carrito, setCarrito] = useState(0);

    function agregar() {
        setCarrito((c) => c + 1);
    }

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>

                {/* Header */}
                <header className={`${styles.header} ${styles.glass}`}>
                    <div className={styles.brand}>
                        <Sparkles className={styles.brandIcon} size={20} strokeWidth={1.5} />
                        <span>Tienda</span>
                    </div>
                    <nav className={styles.nav}>
                        <a href="#productos" className={styles.navLink}>Productos</a>
                        <a href="#beneficios" className={styles.navLink}>Beneficios</a>
                        <Link href="/dashboard" className={styles.navLink}>Dashboard</Link>
                        <button className={styles.cartBtn}>
                            <ShoppingCart size={16} strokeWidth={2} />
                            Carrito
                            <span className={styles.cartCount}>{carrito}</span>
                        </button>
                    </nav>
                </header>

                {/* Hero */}
                <section className={`${styles.hero} ${styles.glass}`}>
                    <span className={styles.heroTag}>
                        <Sparkles size={12} /> Nueva colección 2026
                    </span>
                    <h1 className={styles.heroTitle}>
                        Todo lo que buscás,<br />en un solo lugar
                    </h1>
                    <p className={styles.heroText}>
                        Descubrí productos seleccionados con la mejor calidad y precios que
                        sí valen la pena. Comprá fácil, recibí rápido.
                    </p>
                    <div className={styles.heroActions}>
                        <a href="#productos" className={styles.btnPrimary}>Ver productos</a>
                        <a href="#beneficios" className={styles.btnSecondary}>Por qué elegirnos</a>
                    </div>
                </section>

                {/* Productos */}
                <section id="productos">
                    <h2 className={`${styles.sectionTitle} ${styles.sectionTitleLight}`}>
                        Productos destacados
                    </h2>
                    <p className={styles.sectionSub}>Lo más elegido por nuestros clientes</p>

                    <div className={styles.productGrid}>
                        {productos.map((p) => {
                            const Icono = p.icono;
                            return (
                                <article key={p.id} className={`${styles.productCard} ${styles.glass}`}>
                                    <div className={styles.productImage}>
                                        {p.imagen ? (
                                            <img src={p.imagen} alt={p.nombre} className={styles.productImg} />
                                        ) : (
                                            <Icono size={48} strokeWidth={1.2} />
                                        )}
                                    </div>
                                    {p.badge && <span className={styles.productBadge}>{p.badge}</span>}
                                    <h3 className={styles.productName}>{p.nombre}</h3>
                                    <p className={styles.productDesc}>{p.descripcion}</p>
                                    <div className={styles.productFooter}>
                                        <span className={styles.price}>${p.precio}</span>
                                        <button className={styles.addBtn} onClick={agregar}>
                                            <Plus size={14} strokeWidth={2.5} />
                                            Agregar
                                        </button>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </section>

                {/* Beneficios */}
                <section id="beneficios">
                    <h2 className={`${styles.sectionTitle} ${styles.sectionTitleLight}`}>
                        Comprá con confianza
                    </h2>
                    <p className={styles.sectionSub}>Pensamos en cada detalle de tu experiencia</p>

                    <div className={styles.features}>
                        {beneficios.map((b) => {
                            const Icono = b.icono;
                            return (
                                <div key={b.titulo} className={`${styles.feature} ${styles.glass}`}>
                                    <Icono className={styles.featureIcon} size={30} strokeWidth={1.5} />
                                    <h3 className={styles.featureTitle}>{b.titulo}</h3>
                                    <p className={styles.featureText}>{b.texto}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* CTA final */}
                <section className={`${styles.cta} ${styles.glass}`}>
                    <h2 className={styles.ctaTitle}>¿Listo para tu primera compra?</h2>
                    <p className={styles.ctaText}>Sumate hoy y aprovechá envío gratis en tu primer pedido.</p>
                    <a href="#productos" className={styles.btnPrimary}>Empezar a comprar</a>
                </section>

                <p className={styles.footer}>✦ Bolivia · 2026</p>
            </div>
        </div>
    );
}
