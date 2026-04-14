import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const ImportantLinks = () => {
    const [links, setLinks] = useState([]);

    useEffect(() => {
        axios.get('/public/links.json')
            .then(res => setLinks(res.data))
            .catch(err => console.error("Error fetching links:", err));
    }, []);

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
                                <img
                                    src={link.image}
                                    alt={link.title}
                                    className="w-10 h-10 object-contain opacity-70 group-hover:opacity-100"
                                    onError={(e) => { e.target.src = 'https://via.placeholder.com/40'; }}
                                />
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