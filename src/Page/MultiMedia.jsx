import React from 'react';
import { FaMusic, FaUserShield, FaFacebook } from 'react-icons/fa';
import telephoneImg from '../assets/telephone.png';

const MultiMedia = () => {

    const fbPageUrl = "https://www.facebook.com/itbiponibd";
    const fbEmbedSrc = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(fbPageUrl)}&tabs=timeline&width=340&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`;

    return (
        <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
            <div className="container mx-auto">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a202c] relative inline-block">
                        মাল্টিমিডিয়া ও সংযোগ
                        <span className="block w-2/3 h-1.5 bg-[#056f4d] mx-auto mt-2 rounded-full"></span>
                    </h2>
                    <p className="text-gray-500 mt-4 text-sm md:text-base font-medium">
                        আমাদের ডিজিটাল কর্নার ও সামাজিক যোগাযোগ
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* National Anthem Card */}
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col h-full transform transition hover:-translate-y-1 hover:shadow-2xl">
                        <div className="bg-[#056f4d] p-5 flex items-center justify-center gap-3">
                            <FaMusic className="text-white text-xl" />
                            <h3 className="text-white text-lg font-bold">জাতীয় সঙ্গীত</h3>
                        </div>

                        <div className="flex-grow p-6 flex flex-col items-center justify-center">
                            {/* Audio Placeholder (Replace with your actual audio tag) */}
                            {/* <audio controls src="/audio/your_audio_file.mp3" className="w-full mt-4"></audio> */}

                            {/* Visual Placeholder to match image style */}
                            <div className="w-48 h-32 md:w-56 md:h-36 bg-gray-200 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300 mb-6">
                                <FaMusic className="text-gray-400 text-5xl" />
                            </div>

                            <audio controls className="w-full focus:outline-none focus:ring-2 focus:ring-[#056f4d] rounded-full">
                                {/* আপনার অডিও ফাইলের সঠিক পাথ এখানে বসান।
                  যেমন:src={"/audio/national_anthem.mp3"}
                */}
                                <source src="/audio/national_anthem.mp3" type="audio/mpeg" />
                                আপনার ব্রাউজার অডিও সাপোর্ট করে না।
                            </audio>
                            <p className="text-gray-500 text-xs mt-4 text-center italic">
                                অডিও ফাইলটি শুনতে প্লে বাটনে ক্লিক করুন
                            </p>
                        </div>
                    </div>

                    {/* Special Corner Card */}
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col h-full transform transition hover:-translate-y-1 hover:shadow-2xl">
                        <div className="bg-[#056f4d] p-5 flex items-center justify-center gap-3">
                            <FaUserShield className="text-white text-xl" />
                            <h3 className="text-white text-lg font-bold">বিশেষ কর্নার</h3>
                        </div>

                        <div className="grow p-4 flex flex-col items-center justify-center">
                            <img src={telephoneImg} alt="Special Corner" className="w-full h-auto object-contain" />
                        </div>
                    </div>

                    {/* Facebook Page Card */}
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col h-full transform transition hover:-translate-y-1 hover:shadow-2xl">
                        <div className="bg-[#056f4d] p-5 flex items-center justify-center gap-3">
                            <FaFacebook className="text-white text-xl" />
                            <h3 className="text-white text-lg font-bold">ফেসবুক পেজ</h3>
                        </div>

                        <div className="grow p-2 flex items-center justify-center overflow-hidden">
                            <iframe
                                src={fbEmbedSrc}
                                width="340"
                                height="400"
                                style={{ border: 'none', overflow: 'hidden' }}
                                scrolling="no"
                                frameBorder="0"
                                allowFullScreen={true}
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                className="w-full h-95 md:h-100"
                            >
                            </iframe>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MultiMedia;