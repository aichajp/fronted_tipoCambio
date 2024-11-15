import { FaHome, FaInfoCircle, FaUniversity } from 'react-icons/fa';

const NavBar = ({ onNavClick }) => {
    return (
        <header className="flex justify-between items-center p-6 bg-gradient-to-r from-red-500 to-blue-600 shadow-lg">
            <div className="flex items-center gap-2 text-white">
                <FaUniversity className="text-2xl" />
                <span className="text-2xl font-bold">Universidad Mariano Gálvez de Guatemala</span>
            </div>
            <nav className="space-x-6">
                <button 
                    onClick={() => onNavClick('home')} 
                    className="flex items-center gap-2 text-white text-lg font-medium hover:text-yellow-300 transition-colors duration-200"
                >
                    <FaHome /> Pagina Principal
                </button>
                <button 
                    onClick={() => onNavClick('acercade')} 
                    className="flex items-center gap-2 text-white text-lg font-medium hover:text-yellow-300 transition-colors duration-200"
                >
                    <FaInfoCircle /> Acerca de
                </button>
            </nav>
        </header>
    );
};

export default NavBar;
