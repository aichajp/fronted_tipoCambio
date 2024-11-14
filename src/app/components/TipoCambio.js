import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TipoCambio = () => {
    const [tipoCambio, setTipoCambio] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Realiza una solicitud al backend para obtener el tipo de cambio
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

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Tipo de Cambio</h1>
            {tipoCambio ? (
                <div>
                    <p><strong>Fecha:</strong> {tipoCambio.fecha}</p>
                    <p><strong>Tipo de Cambio (Quetzal):</strong> Q{tipoCambio.referencia}</p>
                </div>
            ) : (
                <p>No se pudo obtener el tipo de cambio.</p>
            )}
        </div>
    );
};

export default TipoCambio;
