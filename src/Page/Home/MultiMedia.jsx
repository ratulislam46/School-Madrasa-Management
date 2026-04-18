import React from 'react';
import { FaMusic, FaUserShield, FaFacebook } from 'react-icons/fa';
import telephoneImg from '../../assets/telephone.png';

const MultiMedia = () => {

    return (
        <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
            <div className="container mx-auto">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a202c] relative inline-block">
                        মাল্টিমিডিয়া ও সংযোগ
                    </h2>
                    <p className="text-gray-500 mt-4 text-sm md:text-base font-medium">
                        আমাদের ডিজিটাল কর্নার ও সামাজিক যোগাযোগ
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* National Anthem Card */}
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col h-full transform transition hover:-translate-y-1 hover:shadow-2xl">
                        <div className="bg-[#056f4d] p-5 flex items-center justify-center gap-3">
                            <FaMusic className="text-white text-xl" />
                            <h3 className="text-white text-lg font-bold">জাতীয় সঙ্গীত</h3>
                        </div>

                        <div className="grow p-6 flex flex-col items-center justify-center">
                            {/* YouTube Video Container */}
                            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-inner border border-gray-100 mb-4">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/ZjAEe3GSV34?si=EF2jaD5cjbfboQa2"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            <p className="text-gray-500 text-xs mt-2 text-center italic">
                                জাতীয় সঙ্গীত শুনতে প্লে বাটনে ক্লিক করুন
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

                </div>
            </div>
        </section>
    );
};

export default MultiMedia;