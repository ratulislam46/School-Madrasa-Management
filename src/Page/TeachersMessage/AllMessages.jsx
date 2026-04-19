import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { FaArrowRight } from 'react-icons/fa';
import DefaultWeight from '../../Shared/DefaultWeight/DefaultWeight';
import axios from 'axios';

const AllMessages = () => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        axios.get('/teachers-message.json')
            .then(res => setMessages(res.data))
            .catch(err => console.error("Error fetching messages:", err));
    }, []);

    return (
        <div className="bg-gray-50 py-10">
            <DefaultWeight>
                {/* Title Section */}
                <div className="mb-10 text-center">
                    <h1 className="text-3xl font-bold text-gray-800">সকল বাণী</h1>
                    <p className="text-gray-500 mt-2">আমাদের সম্মানিত শিক্ষক ও পরিচালনা পর্ষদের গুরুত্বপূর্ণ বাণীসমূহ</p>
                </div>

                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {messages?.map((item) => (
                        <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-green-100">
                                    <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">{item.name}</h4>
                                    <p className="text-xs text-green-600 font-medium uppercase tracking-wider">{item.role}</p>
                                </div>
                            </div>

                            <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                                "{item.message}"
                            </p>

                            <Link
                                to={`/message/${item.id}`}
                                className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800 transition-colors"
                            >
                                বিস্তারিত পড়ুন <FaArrowRight size={12} />
                            </Link>
                        </div>
                    ))}
                </div>
            </DefaultWeight>
        </div>
    );
};

export default AllMessages;