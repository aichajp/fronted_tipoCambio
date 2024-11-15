import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaCalendarAlt, FaMoneyBillWave, FaUniversity } from 'react-icons/fa';

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
        <div className="min-h-screen flex items-center justify-center p-10">
            <section
                id="tipoCambio"
                className="bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl max-w-lg mx-auto text-center mt-20 mb-20 border-t-4 border-red-500"
            >
                <h1 className="text-3xl font-bold text-red-600 mb-6">TIPO DE CAMBIO</h1>
                
                {tipoCambio ? (
                    <div className="bg-gray-100 p-6 rounded-lg shadow-inner text-left">
                        <p className="flex items-center gap-2 text-gray-800 text-lg font-semibold mb-4">
                            <FaCalendarAlt className="text-red-500" /> 
                            <span>Fecha:</span> 
                            <span className="text-gray-700">{tipoCambio.fecha}</span>
                        </p>
                        <p className="flex items-center gap-2 text-xl font-bold text-blue-600 mt-2">
                            <FaMoneyBillWave className="text-green-500" /> 
                            Tipo de Cambio: Q{tipoCambio.referencia}
                        </p>
                        <p className="flex items-center gap-2 text-sm text-gray-500 mt-4">
                            <FaUniversity className="text-red-500" /> 
                            Fuente: Banco de Guatemala
                        </p>
                    </div>
                ) : (
                    <p className="text-gray-500">No se pudo obtener el tipo de cambio.</p>
                )}
            </section>
        </div>
    );
};

export default TipoCambio;
