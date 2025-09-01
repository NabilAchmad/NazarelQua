"use client";

import { useEffect, useState } from 'react';

export default function CursorGlow() {
    const [position, setPosition] = useState({ x: -100, y: -100 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        // Menambahkan event listener ke window
        window.addEventListener('mousemove', handleMouseMove);

        // Fungsi cleanup untuk menghapus listener saat komponen dilepas
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []); // Array kosong berarti efek ini hanya berjalan sekali saat mount

    // Style menggunakan objek CSS, bukan kelas Tailwind
    const glowStyle: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none', // Membuat div ini bisa diklik tembus
        zIndex: 9999, // Memastikan posisinya di atas elemen lain
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
    };

    return (
        <div style={glowStyle}></div>
    );
}
