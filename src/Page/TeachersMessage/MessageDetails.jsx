import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import axios from 'axios';
import { FaArrowLeft } from 'react-icons/fa';
import DefaultWeight from '../../Shared/DefaultWeight/DefaultWeight';

const MessageDetails = () => {
    const { id } = useParams();
    const [messageItem, setMessageItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/teachers-message.json') 
            .then(res => {
                const foundItem = res.data.find(item => item.id === parseInt(id));
                setMessageItem(foundItem);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching data:", err);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div className="text-center py-20 text-gray-500">লোড হচ্ছে...</div>;
    }

    if (!messageItem) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-gray-800">দুঃখিত, তথ্যটি পাওয়া যায়নি!</h2>
                <Link to="/all-messages" className="text-green-700 underline mt-4 block">সকল বাণীতে ফিরে যান</Link>
            </div>
        );
    }

    return (
        <div className="py-12 bg-gray-50">
            <DefaultWeight>

                {/* Details Content */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        {/* Image */}
                        <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden border-4 border-green-50 shadow-lg shrink-0">
                            <img src={messageItem.image} alt={messageItem.name} className="w-full h-full object-cover" />
                        </div>

                        {/* Text */}
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">{messageItem.name}</h1>
                            <p className="text-lg text-green-700 font-semibold uppercase tracking-wide mb-6">{messageItem.role}</p>
                            
                            <div className="text-gray-600">
                                <h3 className="text-xl font-bold text-gray-800 mb-4">বাণী</h3>
                                <p className="leading-relaxed text-justify italic border-l-4 border-green-500 pl-4 py-1">
                                    "{messageItem.message}"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </DefaultWeight>
        </div>
    );
};

export default MessageDetails;