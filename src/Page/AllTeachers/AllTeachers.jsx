import React, { useEffect, useState } from 'react';
import DefaultWeight from '../../Shared/DefaultWeight/DefaultWeight';
import axios from 'axios';
import { FaArrowLeft, FaPhoneAlt } from 'react-icons/fa';

const AllTeachers = () => {

    const [allTeachers, setAllTeachers] = useState([]);

    useEffect(() => {
        axios.get('/staff.json')
            .then(res => setAllTeachers(res.data))
            .catch(err => console.error("Error loading teachers:", err));
    }, []);

    return (
        <div>
            <DefaultWeight>

                <div className="flex items-center mb-10 gap-4">
                   
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-3">আমাদের সকল শিক্ষকবৃন্দ</h1>
                        <p className="text-gray-500">বিডিআইটিহোম স্কুল এন্ড মাদ্রাসার গর্বিত শিক্ষক প্যানেল</p>
                    </div>
                </div>

                {/* Teachers List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {allTeachers.map((staff) => (
                        <div
                            key={staff.id}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col items-center text-center"
                        >
                            {/* Profile Image */}
                            <div className="w-24 h-24 rounded-full border-2 border-dashed border-gray-300 p-1 mb-4">
                                <img
                                    src={staff?.image}
                                    alt={staff?.name}
                                    className="w-full h-full rounded-full object-cover"
                                    onError={(e) => { e.target.src = 'https://placehold.co/150'; }}
                                />
                            </div>

                            <h3 className="text-lg font-bold text-gray-800">{staff?.name}</h3>
                            <span className="bg-green-50 text-green-700 text-[10px] px-3 py-1 rounded mt-1 mb-4 font-semibold uppercase tracking-wider">
                                {staff?.role}
                            </span>

                            <div className="flex items-center gap-2 text-gray-500 text-sm mt-auto">
                                <FaPhoneAlt className="text-green-600 text-[10px]" />
                                <span>{staff?.phone}</span>
                            </div>
                        </div>
                    ))}
                </div>

            </DefaultWeight>
        </div>
    );
};

export default AllTeachers;