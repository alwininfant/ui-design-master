import usa from '../assets/images/usa.jpg';
import img from '../assets/images/img.jpg';

function Country() {
    return (
        <aside className="p-4 m-[30px] w-75 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Apply for Trademark</h3>
            <hr className="mb-4" />
            <p className="text-gray-600 mb-4">Select countries to protect your logo Trademark</p>
            <hr className="mb-4" />
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">Trademark Name</label>
                <input
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Search"
                    checked
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">Country Selected</label>
                <div className="flex items-center mb-2">
                    <img src={usa} alt="country-img" className="w-8 h-8 mr-[20px] object-cover rounded-full" />
                    <div>
                        <p className="text-gray-800">United States</p>
                        <p className="text-gray-600">$99 / 1 class + gov fee</p>
                    </div>
                </div>
                <button className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600">Apply Now</button>
            </div>
            <hr className="mb-4" />
            <div className="text-center">
                <img src={img} alt="cam-img" className="w-16 h-16 mx-auto mb-2" />
                <p className="text-gray-600">Drag and drop or upload to search any image</p>
            </div>
        </aside>
    );
}

export default Country;