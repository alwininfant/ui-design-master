import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Home = ({ trademarks }) => {

    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse">
                <thead className='border-b border-gray-300'>
                    <tr className="text-left bg-gray-100">
                        <th className="p-6 text-base text-gray-900">Mark</th> {/* Slightly reduced font size */}
                        <th className="p-6 text-base text-gray-900">Details</th>
                        <th className="p-6 text-base text-gray-900">Status</th>
                        <th className="p-6 text-base text-gray-900">Class & Description</th>
                    </tr>
                </thead>
                <tbody>
                    {trademarks.map((trademark, index) => (
                        <tr key={index} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
                            <td className="p-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-20 h-20 bg-gray-200 rounded flex items-center justify-center">
                                        <span className="text-base font-semibold">{trademark.mark_identification}</span> {/* Slightly reduced font size */}
                                    </div>
                                </div>
                            </td>
                            <td className="p-6">
                                <div className="text-base font-semibold text-gray-900">{trademark.current_owner} </div> {/* Slightly reduced font size and added arrow */}
                                <br />
                                <div className="text-base font-semibold text-gray-900">{trademark.registration_number} </div>
                                <div className="text-base text-gray-900">{new Date(trademark.registration_date * 1000).toLocaleDateString()}</div> {/* Slightly reduced font size and added arrow */}
                            </td>
                            <td className="p-6">
                                <div className={`text-base font-semibold ${trademark.status_type === 'registered' ? 'text-green-600' : 'text-red-600'}`}>
                                    {"Live/" + trademark.status_type}
                                </div>
                                <div className="text-sm font-semibold text-gray-500">on {new Date(trademark.status_date * 1000).toLocaleDateString()}</div>
                            </td>
                            <td className="p-6">
                                <div className="text-base text-black-500 truncate-two-lines">{trademark.mark_description_description.join(' | ')}</div> {/* Slightly reduced font size and added arrow */}
                                <br />
                                <div className="text-base text-gray-600 flex flex-wrap items-center">
                                    {trademark.class_codes.map((code, index) => (
                                        <div key={index} className="flex items-center mr-4 mb-2">
                                            <FontAwesomeIcon icon={faCode} className="mr-2 text-base" /> {/* Slightly reduced font size */}
                                            <span>Class </span>
                                            <span className={`code-class code-${code}`}>{code}</span> {/* Slightly reduced font size */}

                                        </div>
                                    ))}
                                </div>
                            </td>
                            <td>

                                <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-base cursor-pointer" /> {/* Added arrow */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
