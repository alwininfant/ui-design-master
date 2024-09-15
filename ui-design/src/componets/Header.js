import { useState } from 'react';
import logo from '../assets/images/head.jpg';

export default function Header({ handleSearch }) {
    const [search, setSearch] = useState("");

    function handleInput(e) {
        setSearch(e.target.value);
        handleSearch(e.target.value);
    }

    return (
        <header className="flex items-center bg-gray-50 p-6 space-x-6">
            <div>
                <img src={logo} alt="logo_not_found" className="h-15 w-60" />
            </div>
            <div className="flex items-center space-x-6">
                <input
                    value={search}
                    onChange={handleInput}
                    placeholder="Search"
                    className="px-6 py-3 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-[500px]"
                />
                <button className="px-6 py-3 bg-blue-500 text-white text-base font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Search
                </button>
            </div>
        </header>
    );
}
