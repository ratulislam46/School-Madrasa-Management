import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt } from 'react-icons/fa';

const StaffSection = () => {
    const [allStaff, setAllStaff] = useState([]);
    const [filteredStaff, setFilteredStaff] = useState([]);
    const [activeTab, setActiveTab] = useState("শিক্ষক মণ্ডলী");

    const categories = ["শিক্ষক মণ্ডলী", "কর্মকর্তা", "কর্মচারী"];

    useEffect(() => {
        axios.get('/staff.json')
            .then(res => {
                setAllStaff(res.data);
    
                const initial = res.data.filter(item => item.category === "শিক্ষক মণ্ডলী");
                setFilteredStaff(initial);
            })
            .catch(err => console.error("Staff data load error:", err));
    }, []);

    const handleFilter = (category) => {
        setActiveTab(category);
        const filtered = allStaff.filter(item => item.category === category);
        setFilteredStaff(filtered);
    };

    return (
        <section className="bg-white py-16 px-4">
            <div className="container mx-auto text-center">
                {/* Header */}
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    আমাদের জনবল
                </h2>
                <p className="text-gray-500 mb-8 text-sm">দক্ষ ও অভিজ্ঞ শিক্ষক-কর্মকর্তাবৃন্দ</p>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories?.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleFilter(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                                activeTab === cat 
                                ? "bg-[#065f46] text-white border-[#065f46] shadow-lg" 
                                : "bg-white text-gray-600 border-gray-200 hover:border-green-600"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Staff List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
                    <AnimatePresence>
                        {filteredStaff?.map((staff) => (
                            <motion.div
                                key={staff.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="relative flex flex-col items-center p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow group overflow-hidden"
                            >
                                {/* Background Gradient Decoration */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -z-10 opacity-50"></div>

                                {/* Profile Image Container */}
                                <div className="w-24 h-24 rounded-full border-2 border-dashed border-gray-300 p-1 mb-4">
                                    <div className="w-full h-full rounded-full bg-gray-100 overflow-hidden">
                                        <img 
                                            src={staff.image} 
                                            alt={staff.name} 
                                            className="w-full h-full object-cover"
                                            onError={(e) => { e.target.src = 'https://placehold.co/150'; }}
                                        />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-800 mb-1">{staff.name}</h3>
                                <span className="bg-gray-100 text-gray-500 text-[11px] px-3 py-1 rounded mb-4 font-medium uppercase">
                                    {staff.role}
                                </span>

                                <div className="flex items-center gap-2 text-gray-400 text-sm">
                                    <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center">
                                        <FaPhoneAlt className="text-[10px] text-green-600" />
                                    </div>
                                    <span>{staff.phone}</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Footer Button */}
                <div className="mt-12">
                    <button className="bg-[#064e3b] hover:bg-[#043d2e] text-white px-8 py-3 rounded-full font-bold shadow-lg transition-transform active:scale-95">
                        সকল সদস্য দেখুন
                    </button>
                </div>
            </div>
        </section>
    );
};

export default StaffSection;