import React from 'react';
import { FaArrowRight, FaUsers } from 'react-icons/fa';

const TeachersMessage = ({messages}) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-fit">
            <div className="flex items-center gap-3 mb-8">
                <FaUsers className="text-green-700 text-xl" />
                <h2 className="text-xl font-bold text-gray-800">অন্যান্য বাণী</h2>
            </div>
            <div className="space-y-6">
                {messages?.map((item) => (
                    <div key={item.id} className="p-4 border border-gray-50 rounded-2xl hover:bg-gray-50 transition-colors group">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-green-100">
                                <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 text-sm group-hover:text-green-700 transition-colors">{item.name}</h4>
                                <p className="text-[11px] text-green-600 font-medium uppercase tracking-wider">{item.role}</p>
                            </div>
                        </div>
                        <p className="text-gray-500 text-xs leading-relaxed italic mb-3">"{item.message}"</p>
                        <a href={item.link} className="text-green-700 text-[11px] font-bold flex items-center gap-1 hover:underline cursor-pointer">
                            বিস্তারিত <FaArrowRight size={8} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeachersMessage;