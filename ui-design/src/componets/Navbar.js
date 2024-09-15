function Navbar() {
    return (
        <nav className="p-4">
            <ul className="flex space-x-6 bg-gray-100 p-4 rounded-lg shadow-md">
                <li className="text-gray-800 font-semibold hover:text-blue-600 cursor-pointer">
                    ™ Trademarks
                </li>
                <li className="text-gray-800 font-semibold hover:text-blue-600 cursor-pointer">
                    🙍 Owners
                </li>
                <li className="text-gray-800 font-semibold hover:text-blue-600 cursor-pointer">
                    🍀 Logos
                </li>
                <li className="text-gray-800 font-semibold hover:text-blue-600 cursor-pointer">
                    🌐 Internet Brand Search
                </li>
                <li className="text-gray-800 font-semibold hover:text-blue-600 cursor-pointer">
                    © Copyrights
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;