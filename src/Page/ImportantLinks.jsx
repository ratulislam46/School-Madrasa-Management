import React from 'react';
import { motion } from 'framer-motion';
import {
    FaUniversity,
    FaGraduationCap,
    FaChalkboardTeacher,
    FaFileAlt,
    FaDownload,
    FaUserEdit,
    FaChartBar,
    FaSchool
} from 'react-icons/fa';

const ImportantLinks = () => {

    const links = [
        { id: 1, title: "শিক্ষা মন্ত্রণালয়", icon: <FaUniversity className="text-blue-600" /> },
        { id: 2, title: "মাধ্যমিক ও উচ্চশিক্ষা অধিদপ্তর", icon: <FaSchool className="text-green-700" /> },
        { id: 3, title: "ঢাকা শিক্ষা বোর্ড", icon: <FaGraduationCap className="text-red-600" /> },
        { id: 4, title: "ব্যানবেইস", icon: <FaChartBar className="text-purple-600" /> },
        { id: 5, title: "শিক্ষক বাতায়ন", icon: <FaChalkboardTeacher className="text-teal-600" /> },
        { id: 6, title: "ভর্তি আবেদন", icon: <FaUserEdit className="text-orange-600" /> },
        { id: 7, title: "ফলাফল", icon: <FaFileAlt className="text-indigo-600" /> },
        { id: 8, title: "ডাউনলোড", icon: <FaDownload className="text-gray-700" /> }
    ];

    return (
        <section className="py-16 px-6 md:px-16 lg:px-24">
            <div className='container mx-auto text-center'>
                {/* Section Title */}
                <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-2">
                        গুরুত্বপূর্ণ লিঙ্ক
                    </h2>
                    <div className="flex justify-center items-center gap-1">
                        <span className="w-10 h-1 bg-green-700"></span>
                        <span className="w-2 h-2 bg-green-700 rounded-full"></span>
                        <span className="w-10 h-1 bg-green-700"></span>
                    </div>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {links?.map((link) => (
                        <motion.a
                            key={link.id}
                            href="#"
                            whileHover={{ scale: 1.03, translateY: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-xl flex flex-col items-center justify-center gap-4 transition-all hover:bg-[#065F46] duration-300 group"
                        >
                            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 overflow-hidden">
                                {link.icon}
                            </div>

                            <span className="text-sm md:text-base font-semibold text-[#334155] group-hover:text-white duration-300">
                                {link.title}
                            </span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImportantLinks;