'use client';
import { useState } from 'react';
import NavBar from './components/NavBar';
import TipoCambio from './components/TipoCambio';
import AcercaDe from './components/AcercaDe';

export default function Home() {
    const [activePage, setActivePage] = useState('home');

    return (
        <main className="bg-gray-100 min-h-screen">
            <NavBar onNavClick={setActivePage} />
            {activePage === 'home' && <TipoCambio />}
            {activePage === 'acercade' && <AcercaDe />}
        </main>
    );
}
