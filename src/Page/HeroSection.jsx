import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { FaVolumeUp, FaArrowRight, FaClock } from 'react-icons/fa';

const HeroSection = () => {
    const [notices, setNotices] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const galleryData = [
        { id: 1, src: "/images/img1.jpg", title: "আধুনিক শিক্ষার পাশাপাশি নৈতিক ও ধর্মীয় শিক্ষাকে সমান গুরুত্ব" },
        { id: 2, src: "/images/img2.jpg", title: "আমাদের মাদ্রাসার বার্ষিক ক্রীড়া প্রতিযোগিতা ও পুরষ্কার বিতরণ" },
        { id: 3, src: "/images/img3.jpg", title: "শিক্ষার্থীদের জন্য বিশেষ কম্পিউটার ল্যাব ও আইটি শিক্ষা" },
        { id: 4, src: "/images/img4.jpg", title: "হিফজুল কুরআন বিভাগের বিশেষ দোয়া ও শিক্ষা কার্যক্রম" }
    ];

    useEffect(() => {
        axios.get('/public/notices.json').then(res => setNotices(res.data));

        // Image auto slider timer 
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % galleryData.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-12 px-4 md:px-10 bg-gray-50">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">

                <div className="lg:col-span-5 flex flex-col gap-4">
                    <div className="relative h-75 md:h-100 rounded-2xl overflow-hidden shadow-lg group">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8 }}
                                className="w-full h-full relative"
                            >
                                <img src={galleryData[activeIndex].src} className="w-full h-full object-cover" alt="gallery" />
                                
                                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent p-6">
                                    <h2 className="text-white text-lg md:text-xl font-bold leading-tight">
                                        {galleryData[activeIndex].title}
                                    </h2>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="grid grid-cols-4 gap-3">
                        {galleryData.map((img, index) => (
                            <div
                                key={img.id}
                                onClick={() => setActiveIndex(index)}
                                className={`h-16 md:h-20 rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${activeIndex === index ? 'border-green-600 scale-95' : 'border-transparent opacity-60'}`}
                            >
                                <img src={img.src} className="w-full h-full object-cover" alt="thumb" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-4 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-full -z-0 opacity-50"></div>
                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-4xl text-green-600 font-serif">“</span>
                            <h3 className="text-xl font-bold text-gray-800">বাণী</h3>
                        </div>
                        <div className="flex items-center gap-4 mb-6">
                            <img src="/images/kamrul.jpg" className="w-16 h-16 rounded-full border-2 border-green-100 p-1 object-cover" alt="head" />
                            <div>
                                <h4 className="font-bold text-gray-800">মো: কামরুল ইসলাম</h4>
                                <p className="text-green-600 text-xs font-semibold">অধ্যক্ষ</p>
                            </div>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed grow italic">
                            আমাদের লক্ষ্য শুধু পরীক্ষায় ভালো ফল নয়, বরং শিক্ষার্থীদের জীবনদক্ষতা, শৃঙ্খলা ও নৈতিকতার বিকাশ ঘটানো। অভিজ্ঞ শিক্ষকবৃন্দ ও আধুনিক শিক্ষা ব্যবস্থার মাধ্যমে আমরা একটি শিক্ষাবান্ধব পরিবেশ নিশ্চিত করছি।
                        </p>
                        <button className="mt-6 flex items-center gap-2 bg-[#065f46] text-white px-6 py-2.5 rounded-lg text-sm font-bold w-fit hover:bg-green-800 transition-all">
                            বিস্তারিত পড়ুন <FaArrowRight size={12} />
                        </button>
                    </div>
                </div>

                <div className="lg:col-span-3 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-112.5 lg:h-full">
                    <div className="bg-[#065f46] p-4 flex justify-between items-center">
                        <div className="flex items-center gap-2 text-white">
                            <FaVolumeUp />
                            <h3 className="font-bold">নোটিশ বোর্ড</h3>
                        </div>
                        <button className="bg-white/20 text-white text-[10px] px-3 py-1 rounded-md hover:bg-white/30">সকল</button>
                    </div>

                    <div className="grow relative overflow-hidden group">
                        <div className="absolute inset-0 marquee-vertical space-y-1 p-4">
                            {[...notices, ...notices].map((notice, idx) => (
                                <div key={idx} className="flex gap-4 p-3 border-b border-gray-50 hover:bg-gray-50 rounded-xl transition-all cursor-pointer">
                                    <div className="bg-green-50 text-green-700 min-w-12.5 h-12 flex flex-col items-center justify-center rounded-lg">
                                        <span className="text-xs font-bold leading-none">{notice.date.split(' ')[0]}</span>
                                        <span className="text-[10px] font-medium">{notice.date.split(' ')[1]}</span>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <h4 className="text-[13px] font-bold text-gray-700 line-clamp-2 leading-tight mb-1">{notice.title}</h4>
                                        <div className="flex items-center gap-1 text-[10px] text-gray-400">
                                            <FaClock size={8} /> <span>{notice.time}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee-v {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                }
                .marquee-vertical {
                    animation: marquee-v 20s linear infinite;
                }
                .marquee-vertical:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default HeroSection;