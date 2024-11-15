import Image from 'next/image';

const NavBar = () => {
    return (
        <header className="flex justify-between items-center p-6 bg-white shadow-md">
            <div className="flex items-center gap-2">
                <Image
                    src=""
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full"
                />
                <span className="text-xl font-bold text-gray-800">UMG</span>
            </div>
            <nav className="space-x-6">
                <a href="#home" className="text-gray-700 hover:text-gray-900">Pagina Principal</a>
                <a href="#acerca" className="text-gray-700 hover:text-gray-900">Acerca de</a>
            </nav>
        </header>
    );
};

export default NavBar;
