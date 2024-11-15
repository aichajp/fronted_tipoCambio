import { FaUniversity, FaUser, FaIdCard } from 'react-icons/fa';

const AcercaDe = () => {
    return (
        <div className="bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl max-w-lg mx-auto text-center mt-20 mb-20 border-t-4 border-red-500">
            <h1 className="text-3xl font-bold text-red-600 mb-4">APP TIPO CAMBIO</h1>
            <p className="text-gray-600 mb-6">
                Esta aplicación fue desarrollada para mostrar el tipo de cambio actual utilizando datos proporcionados por el Banco de Guatemala. El backend se construyó en Java, y el frontend se desarrolló con Next.js.
            </p>
            
            <div className="bg-gray-100 p-6 rounded-lg shadow-inner text-left mb-6">
                <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-800">
                    <FaUser className="text-red-500" /> Nombre:
                </h2>
                <p className="text-gray-700 ml-8">Abraham David Ichaj Poncio</p>
                <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-800 mt-4">
                    <FaIdCard className="text-red-500" /> Carnet:
                </h2>
                <p className="text-gray-700 ml-8">1990-21-11165</p>
            </div>
            
            <div className="text-gray-800 mt-4">
                <h2 className="flex items-center justify-center gap-2 text-lg font-semibold">
                    <FaUniversity className="text-red-500" /> Universidad Mariano Gálvez de Guatemala
                </h2>
                <h3 className="text-md font-medium text-gray-600">Desarrollo Web</h3>
            </div>
        </div>
    );
};

export default AcercaDe;
