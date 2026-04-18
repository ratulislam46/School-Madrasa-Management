import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DefaultWeight from '../../Shared/DefaultWeight/DefaultWeight';

const AllNotices = () => {
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        axios.get('/notices.json').then(res => setNotices(res.data));
    }, []);

    return (
        <div>
            <DefaultWeight>

                <h1 className="text-2xl font-bold text-green-900 mb-6 border-l-4 border-green-700 pl-4">সকল নোটিশ</h1>

                <div className="space-y-4">
                    {notices?.map((notice) => (
                        <div key={notice.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-green-100 text-green-700 p-2 rounded-lg text-center min-w-17.5">
                                    <span className="block text-xl font-bold">{notice.date.split(' ')[0]}</span>
                                    <span className="text-[10px] uppercase font-bold">{notice.date.split(' ')[1]}</span>
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-gray-800">{notice.title}</h2>
                                    <span className="text-xs text-gray-400">প্রকাশিত: {notice.time}</span>
                                </div>
                            </div>

                            <div className="text-gray-600 leading-relaxed text-sm bg-gray-50 p-4 rounded-xl border border-gray-100">
                                {notice.description}
                            </div>
                        </div>
                    ))}
                </div>

            </DefaultWeight>
        </div>
    );
};

export default AllNotices;