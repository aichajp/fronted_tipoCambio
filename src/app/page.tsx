// app/page.js
'use client';
import NavBar from './components/NavBar';
import TipoCambio from './components/TipoCambio';

export default function Home() {
    return (
        <main className="bg-gray-100">
            <NavBar />
            <TipoCambio />
        </main>
    );
}
