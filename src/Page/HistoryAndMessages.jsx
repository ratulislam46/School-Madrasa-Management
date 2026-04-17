import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHistory, FaUsers, FaEye, FaArrowRight, FaPhoneAlt, FaPaperPlane, FaTimes } from 'react-icons/fa';

const HistoryAndMessages = () => {
    const [messages, setMessages] = useState([]);
    const [selectedImg, setSelectedImg] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        studentName: '',
        prevSchool: '',
        prevClass: '',
        targetClass: '',
        guardianName: '',
        guardianNumber: ''
    });

    const galleryImages = [
        "https://i.ibb.co.com/W4nHVfX5/computer-lab.jpg",
        "https://i.ibb.co.com/KjfCyrjS/cress.jpg",
        "https://i.ibb.co.com/vCDxsFQr/stude.jpg"
    ];

    useEffect(() => {
        axios.get('/teachers-message.json')
            .then(res => setMessages(res.data))
            .catch(err => console.error("Error fetching messages:", err));
    }, []);

    // WhatsApp logic
    const handleFormSubmit = (e) => {
        e.preventDefault();

        const phoneNumber = "+8801643110638"; 
        const message = `নতুন অনলাইন আবেদন:%0A
        ছাত্র / ছাত্রীর নাম: ${formData.studentName}%0A
        পূর্ববর্তী স্কুল: ${formData.prevSchool || 'প্রযোজ্য নয়'}%0A
        পূর্ববর্তী ক্লাস: ${formData.prevClass || 'প্রযোজ্য নয়'}%0A
        ভর্তির ক্লাস: ${formData.targetClass}%0A
        অভিভাবকের নাম: ${formData.guardianName}%0A
        অভিভাবকের মোবাইল: ${formData.guardianNumber}`;

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappURL, '_blank');
        setIsModalOpen(false);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="bg-gray-50 py-12 px-4 md:px-10 font-sans">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3 mb-6">
                            <FaHistory className="text-green-700 text-xl" />
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800">প্রতিষ্ঠানের ইতিহাস</h2>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 mb-8">
                            <div className="flex-1">
                                <p className="text-gray-600 leading-relaxed text-sm md:text-base text-justify">
                                    বিডিআইটিহোম স্কুল এন্ড মাদ্রাসা একটি ঐতিহ্যবাহী শিক্ষা প্রতিষ্ঠান। আধুনিক ও ইসলামী শিক্ষার সমন্বয়ে আমরা গড়ে তুলছি আগামীর ভবিষ্যৎ। আমাদের লক্ষ্য সুশিক্ষিত, নীতিবান ও দেশপ্রেমিক নাগরিক গড়ে তোলা। প্রতিষ্ঠানের শুরু থেকেই আমরা মেধা ও মনন বিকাশে বদ্ধপরিকর।
                                </p>
                                <button className="mt-6 flex items-center gap-2 bg-[#065f46] hover:bg-[#044d39] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer">
                                    বিস্তারিত ইতিহাস <FaArrowRight size={12} />
                                </button>
                            </div>
                            <div className="w-full md:w-64 h-48 rounded-2xl overflow-hidden border-4 border-gray-50 shadow-sm">
                                <img src="https://i.ibb.co.com/WNZhbxQr/campus.png" className="w-full h-full object-cover" alt="Building" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {galleryImages?.map((src, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setSelectedImg(src)}
                                    className="relative group h-40 rounded-3xl overflow-hidden cursor-pointer bg-black"
                                >
                                    <img src={src} className="w-full h-full object-cover transition-all duration-500 group-hover:grayscale group-hover:scale-110 opacity-100 group-hover:opacity-70" alt="Gallery" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <FaEye className="text-white text-3xl" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-green-50 p-4 rounded-full">
                                <FaPhoneAlt className="text-green-700 text-xl" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-800">ভর্তির জন্য কল করুন</h4>
                                <p className="text-xs text-gray-400">সকাল ১০টা থেকে বিকাল ৫টা পর্যন্ত</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-3 w-full md:w-auto">
                            <span className="text-2xl md:text-3xl font-semibold">+8801643110638</span>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="flex items-center gap-2 bg-[#065f46] hover:bg-[#044d39] text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg transition-all cursor-pointer active:scale-95 w-full md:w-auto justify-center"
                            >
                                অনলাইন আবেদন <FaPaperPlane size={12} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sidebar section stays same */}
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
            </div>

            {/* Application Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={() => setIsModalOpen(false)}
                        />
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
                            className="bg-white w-full max-w-lg rounded-3xl shadow-2xl relative z-10 overflow-hidden"
                        >
                            <div className="bg-[#065f46] p-6 text-white flex justify-between items-center">
                                <h3 className="text-xl font-bold">অনলাইন ভর্তি আবেদন</h3>
                                <button onClick={() => setIsModalOpen(false)} className="text-white hover:rotate-90 transition-transform cursor-pointer"><FaTimes size={20} /></button>
                            </div>

                            <form onSubmit={handleFormSubmit} className="p-6 space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">ছাত্র / ছাত্রীর নাম *</label>
                                    <input required name="studentName" onChange={handleChange} type="text" className="w-full border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-green-600 outline-none" placeholder="নাম লিখুন" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">পূর্ববর্তী স্কুল</label>
                                        <input name="prevSchool" onChange={handleChange} type="text" className="w-full border border-gray-200 p-3 rounded-xl outline-none" placeholder="স্কুলের নাম" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">পূর্ববর্তী ক্লাস</label>
                                        <input name="prevClass" onChange={handleChange} type="text" className="w-full border border-gray-200 p-3 rounded-xl outline-none" placeholder="ক্লাস" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">ভর্তি হতে ইচ্ছুক ক্লাস *</label>
                                    <input required name="targetClass" onChange={handleChange} type="text" className="w-full border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-green-600 outline-none" placeholder="ক্লাসের নাম" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">অভিভাবকের নাম *</label>
                                    <input required name="guardianName" onChange={handleChange} type="text" className="w-full border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-green-600 outline-none" placeholder="অভিভাবকের নাম" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">অভিভাবকের মোবাইল নম্বর *</label>
                                    <input required name="guardianNumber" onChange={handleChange} type="tel" className="w-full border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-green-600 outline-none" placeholder="017xxxxxxxx" />
                                </div>

                                <button type="submit" className="w-full bg-[#065f46] text-white font-bold py-4 rounded-xl hover:bg-[#044d39] transition-all flex items-center justify-center gap-2 hover:cursor-pointer">
                                    আবেদন জমা দিন <FaPaperPlane />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Image Preview Modal */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
                        onClick={() => setSelectedImg(null)}
                    >
                        <button className="absolute top-10 right-10 text-white text-3xl cursor-pointer"><FaTimes /></button>
                        <motion.img
                            initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
                            src={selectedImg} className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default HistoryAndMessages;