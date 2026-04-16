import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const LatestNews = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get('/public/news.json')
            .then(res => setNews(res.data))
            .catch(err => console.error("News fetching error:", err));
    }, []);

    return (
        <section className="py-16 px-6 md:px-16 lg:px-24">
            <div className='container mx-auto '>

                {/* Section Header */}
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
                        সর্বশেষ সংবাদ
                    </h2>
                    <p className="text-gray-500 mt-4 text-sm md:text-base">
                        প্রতিষ্ঠানের শিক্ষা ও কার্যক্রম বিষয়ক আপডেট
                    </p>
                </div>

                {/* News Cars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {news?.map((item) => (
                        <motion.div
                            key={item.id}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            {/* Image Container */}
                            <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Date Badge */}
                                <div className="absolute top-3 left-3 bg-[#065f46] text-white text-[11px] font-bold px-3 py-1 rounded">
                                    {item.date}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <span className="text-gray-400 text-xs font-medium block mb-2">
                                    {item.category}
                                </span>
                                <h3 className="text-lg font-bold text-gray-800 leading-snug mb-3 group-hover:text-green-700 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-3">
                                    {item.description}
                                </p>
                                <button className="text-green-700 text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all">
                                    বিস্তারিত <span>→</span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <button className="bg-[#064e3b] hover:bg-[#032f24] text-white px-8 py-3 rounded-full font-bold shadow-lg transition-all active:scale-95">
                        সকল খবর দেখুন
                    </button>
                </div>
            </div>

        </section>
    );
};

export default LatestNews;