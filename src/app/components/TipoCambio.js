// components/TipoCambio.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TipoCambio = () => {
    const [tipoCambio, setTipoCambio] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTipoCambio = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/tipoCambioDia');
                setTipoCambio(response.data);
                setLoading(false);
            } catch (err) {
                setError("Error al obtener el tipo de cambio");
                setLoading(false);
                console.error("Error al obtener el tipo de cambio:", err);
            }
        };

        fetchTipoCambio();
    }, []);

    if (loading) return <p className="text-gray-500 text-center">Cargando...</p>;
    if (error) return <p className="text-red-500 text-center">{error}</p>;

    return (
        <section id="tipoCambio" className="bg-white/80 backdrop-blur-md p-10 rounded-lg shadow-lg max-w-md mx-auto text-center mt-10">
            <h1 className="text-2xl font-semibold text-red-600 mb-4">TIPO DE CAMBIO</h1>
            {tipoCambio ? (
                <div>
                    <p className="text-gray-700"><strong>Fecha:</strong> {tipoCambio.fecha}</p>
                    <p className="text-xl font-bold text-blue-600 mt-2">
                        Tipo de Cambio: Q{tipoCambio.referencia}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">Fuente: Banco de Guatemala</p>
                </div>
            ) : (
                <p className="text-gray-500">No se pudo obtener el tipo de cambio.</p>
            )}
        </section>
    );
};

export default TipoCambio;
