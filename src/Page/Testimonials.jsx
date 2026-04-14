import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    console.log(reviews);

    useEffect(() => {
        axios.get('/public/testimonials.json')
            .then(res => {
                setReviews(res.data);
                console.log(res.data);
            })
            .catch(err => console.error("Error fetching testimonials:", err));
    }, []);

    return (
        <section className="bg-[#F3FAF6] py-16 px-6 md:px-16 lg:px-24">
            <div className='container mx-auto'>
                <div className="max-w-6xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#064E3B] relative inline-block">
                        অভিভাবকের মতামত
                        <span className="block w-20 h-1 bg-green-500 mx-auto mt-2"></span>
                    </h2>
                    <p className="text-gray-500 mt-4 italic text-sm md:text-base">
                        আমাদের প্রতিষ্ঠান সম্পর্কে সম্মানিত অভিভাবকদের অভিমত
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {reviews.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.3 }}
                            className="relative bg-white p-8 rounded-3xl shadow-sm border border-gray-50 overflow-hidden group"
                        >
                            {/* Background Decorative Circles */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#E8F5EE] rounded-bl-full -mr-8 -mt-8 opacity-50 transition-all group-hover:scale-110"></div>
                            <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#FEF9EC] rounded-tr-full -ml-4 -mb-4 opacity-60"></div>

                            <div className="relative z-10 flex flex-col items-center">
                                {/* Profile Image & Role */}
                                <div className="relative mb-6">
                                    <div className="w-24 h-24 rounded-full border-2 border-green-500 p-1 bg-white">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>
                                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#065F46] text-white text-[10px] px-4 py-1 rounded-full font-medium">
                                        {item.role}
                                    </div>
                                </div>

                                {/* Parent Info */}
                                <h3 className="text-xl font-bold text-[#064E3B] mb-4">{item.name}</h3>

                                {/* Comment */}
                                <p className="text-gray-600 text-center text-sm leading-relaxed mb-6 italic">
                                    "{item.comment}"
                                </p>

                                <hr className="w-full border-gray-100 mb-6" />

                                {/* Student Tags */}
                                <div className="flex gap-3 mb-6">
                                    <span className="px-4 py-1.5 border border-gray-200 rounded-full text-[11px] text-gray-500 bg-gray-50">
                                        {item.studentName}
                                    </span>
                                    <span className="px-4 py-1.5 border border-gray-200 rounded-full text-[11px] text-gray-500 bg-gray-50">
                                        {item.class}
                                    </span>
                                </div>

                                {/* Button */}
                                <button className="bg-[#053729] hover:bg-[#064E3B] text-white text-[10px] font-bold py-2 px-6 rounded-full transition-all active:scale-95">
                                    বিস্তারিত পড়ুন
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Button */}
                <div className="text-center mt-12">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="bg-[#065F46] hover:bg-[#044231] text-white px-10 py-3 rounded-full font-bold text-sm shadow-xl transition-all"
                    >
                        সকল মতামত দেখুন
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;