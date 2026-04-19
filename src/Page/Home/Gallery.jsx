import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaPlay, FaImage, FaVideo, FaRegClock, FaArrowRight, FaTimes } from 'react-icons/fa';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const photos = [
        { id: 1, src: "https://i.ibb.co.com/KjfCyrjS/cress.jpg" },
        { id: 2, src: "https://i.ibb.co.com/W4nHVfX5/computer-lab.jpg" },
        { id: 3, src: "https://i.ibb.co.com/WNZhbxQr/campus.png" },
        { id: 4, src: "https://i.ibb.co.com/vCDxsFQr/stude.jpg" },
        { id: 5, src: "https://i.ibb.co.com/C3NDw4B5/islammmm.jpg" },
        { id: 6, src: "https://i.ibb.co.com/cc0679pk/sportss.jpg" },
    ];

    const videos = [
        { id: 1, title: "শিক্ষার্থীদের খেলাধুলা", date: "09 Jan, 2026", thumbnail: "/images/v1.jpg" },
        { id: 2, title: "বার্ষিক অনুষ্ঠান ও ইভেন্ট", date: "09 Jan, 2026", thumbnail: "/images/v2.jpg" },
        { id: 3, title: "শিক্ষার্থীদের দৈনন্দিন কার্যক্রম", date: "09 Jan, 2026", thumbnail: "/images/v3.jpg" },
    ];

    return (
        <section className="bg-[#047857] py-16 px-4 md:px-10">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* ফটো গ্যালারি */}
                <div className="bg-[#f3f4f6] rounded-3xl p-6 shadow-lg flex flex-col justify-center gap-8">

                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="bg-[#065f46] p-3 rounded-full text-white">
                                <FaImage size={20} />
                            </div>
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800">ফটো গ্যালারি</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {photos?.map((photo) => (
                            <div
                                key={photo.id}
                                className="relative group cursor-pointer overflow-hidden rounded-xl h-32 md:h-40"
                                onClick={() => setSelectedImage(photo.src)}
                            >
                                <img
                                    src={photo.src}
                                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                                    alt="Gallery"
                                    onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200'; }}
                                />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                    <FaEye className="text-white text-3xl transform scale-50 group-hover:scale-100 transition-transform duration-300" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ভিডিও গ্যালারি */}
                <div className="bg-[#f3f4f6] rounded-3xl p-6 shadow-lg flex flex-col justify-center gap-8">
                    <div className="flex items-center gap-3">
                        <div className="bg-[#b91c1c] p-3 rounded-full text-white">
                            <FaVideo size={20} />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-gray-800">ভিডিও গ্যালারি</h2>
                    </div>

                    <div className="space-y-4">
                        {videos?.map((video) => (
                            <div key={video.id} className="flex gap-4 p-2 bg-white rounded-xl hover:shadow-md transition-shadow group cursor-pointer">
                                <div className="relative w-32 h-20 shrink-0 overflow-hidden rounded-lg">
                                    <img src={video.thumbnail} className="w-full h-full object-cover" alt={video.title} onError={(e) => { e.target.src = 'https://placehold.co/150'; }} />
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                        <div className="bg-red-600 p-2 rounded-full text-white transform group-hover:scale-110 transition-transform">
                                            <FaPlay size={10} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h3 className="text-sm md:text-base font-bold text-gray-800 line-clamp-1">{video.title}</h3>
                                    <div className="flex items-center gap-2 text-gray-400 text-[11px] mt-1">
                                        <FaRegClock /> <span>{video.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-100 bg-black/90 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button className="absolute top-10 right-10 text-white text-3xl">
                            <FaTimes />
                        </button>
                        <motion.img
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            src={selectedImage}
                            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar { width: 5px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: #e5e7eb; border-radius: 10px; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #9ca3af; border-radius: 10px; }
            `}</style> */}
        </section>
    );
};

export default Gallery;