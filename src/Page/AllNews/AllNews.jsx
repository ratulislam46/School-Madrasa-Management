import React, { useEffect, useState } from 'react';
import DefaultWeight from '../../Shared/DefaultWeight/DefaultWeight';
import axios from 'axios';
import { FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const AllNews = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get('/news.json')
            .then(res => setNews(res.data))
            .catch(err => console.error("News load error:", err));
    }, []);

    return (
        <div>
            <DefaultWeight>

                {/* Header  */}
                <div className="flex items-center gap-4 mb-10">
                    <h1 className="text-3xl font-bold text-gray-800">আমাদের সকল সংবাদ</h1>
                </div>

                {/* All News  */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {news.map((item) => (
                        <div key={item.id} className="bg-white rounded-md overflow-hidden transition-all duration-300 border border-gray-100">

                            <img src={item?.image} alt={item?.title} className="w-full h-52 object-cover" />

                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="bg-green-100 text-[#064e3b] text-[11px] font-bold px-3 py-1 rounded-full uppercase">
                                        {item?.category}
                                    </span>
                                    <div className="flex items-center gap-1 text-gray-400 text-xs">
                                        <FaCalendarAlt size={10} />
                                        {item?.date}
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight hover:text-[#064e3b] transition-colors">
                                    {item?.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {item?.description.length > 100
                                        ? `${item?.description.substring(0, 100)}...`
                                        : item?.description}
                                </p>

                                <Link
                                    to={`/news/${item.id}`}
                                    className="text-[#064e3b] font-semibold text-sm flex items-center gap-1 hover:underline"
                                >
                                    বিস্তারিত পড়ুন →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </DefaultWeight>
        </div>
    );
};

export default AllNews;