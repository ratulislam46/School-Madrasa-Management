import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt } from 'react-icons/fa';
import DefaultWeight from '../../Shared/DefaultWeight/DefaultWeight';
import { Link } from 'react-router';

const StaffSection = () => {
    const [staffList, setStaffList] = useState([]);

    useEffect(() => {
        axios.get('/staff.json')
            .then(res => {
                setStaffList(res.data);
            })
            .catch(err => console.error("Staff data load error:", err));
    }, []);

    return (
        <div className='px-6 md:px-16 lg:px-24 py-12'>
                <div className="container mx-auto text-center">
                    {/* Header */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        আমাদের সম্মানিত শিক্ষকবৃন্দ
                    </h2>
                    <p className="text-gray-500 mb-12 text-sm">
                        শিক্ষার মানোন্নয়নে নিবেদিত আমাদের অভিজ্ঞ ও মেধাবী শিক্ষকমণ্ডলী
                    </p>

                    {/* Teachers */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <AnimatePresence>
                            {staffList?.slice(0, 4)?.map((staff) => (
                                <motion.div
                                    key={staff.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative flex flex-col items-center p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow group overflow-hidden"
                                >

                                    {/* Profile Image */}
                                    <div className="w-24 h-24 rounded-full border-2 border-dashed border-gray-300 p-1 mb-4">
                                        <div className="w-full h-full rounded-full bg-gray-100 overflow-hidden">
                                            <img
                                                src={staff?.image}
                                                alt={staff?.name}
                                                className="w-full h-full object-cover"
                                                onError={(e) => { e.target.src = 'https://placehold.co/150'; }}
                                            />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-800 mb-1">{staff?.name}</h3>
                                    <span className="bg-green-50 text-green-700 text-[11px] px-3 py-1 rounded mb-4 font-medium uppercase tracking-wider">
                                        {staff?.role}
                                    </span>

                                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                                        <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center">
                                            <FaPhoneAlt className="text-[10px] text-green-600" />
                                        </div>
                                        <span>{staff?.phone}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Footer Button */}
                    <div className="mt-12">
                        <Link
                            to="/all-teachers"
                            className="bg-[#064e3b] hover:bg-[#043d2e] text-white px-8 py-3 rounded-full font-bold shadow-lg transition-transform active:scale-95 inline-block"
                        >
                            সকল শিক্ষক দেখুন
                        </Link>
                    </div>
                </div>
        </div>
    );
};

export default StaffSection;