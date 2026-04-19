import React from 'react';
import { FaMusic, FaUserShield } from 'react-icons/fa';
import telephoneImg from '../../assets/telephone.png';
import nationalAnthemBg from '../../assets/national-flag.jpg';
import flagIcon from '../../assets/flag.png'; 

const MultiMedia = () => {
    return (
        <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
            <div className="container mx-auto">
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
                        {/* Header */}
                        <div className="bg-[#056f4d] p-5 flex items-center justify-center gap-3 relative z-10">
                            <FaMusic className="text-white text-xl" />
                            <h3 className="text-white text-lg font-bold">জাতীয় সঙ্গীত</h3>
                        </div>

                        {/* Content Section with Background Image */}
                        <div
                            className="grow p-6 flex flex-col items-center justify-center relative min-h-87.5"
                            style={{
                                backgroundImage: `url(${nationalAnthemBg})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            {/* Dark Overlay for better text visibility */}
                            <div className="absolute inset-0 bg-black/50"></div>

                            {/* Center Circular Icon/Flag */}
                            <div className="relative z-10 mb-6 w-24 h-24 rounded-full overflow-hidden shadow-lg flex items-center justify-center">
                                <img src={flagIcon} alt="Flag" className="w-full h-full object-cover" />
                            </div>

                            <p className="relative z-10 text-white font-semibold text-lg mb-6 italic text-center px-4">
                                "আমার সোনার বাংলা, আমি তোমায় ভালোবাসি..."
                            </p>

                            {/* Audio Player */}
                            <div className="relative z-10 w-full max-w-sm">
                                <audio 
                                    controls 
                                    className="w-full rounded-full shadow-lg"
                                >
                                    <source src="/music/national-anthem.mp3" type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>
                            </div>
                        </div>
                    </div>

                    {/* Special Corner Card */}
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col h-full transform transition hover:-translate-y-1 hover:shadow-2xl">
                        <div className="bg-[#056f4d] p-5 flex items-center justify-center gap-3">
                            <FaUserShield className="text-white text-xl" />
                            <h3 className="text-white text-lg font-bold">বিশেষ কর্নার</h3>
                        </div>

                        <div className="grow p-4 flex flex-col items-center justify-center">
                            <img src={telephoneImg} alt="Special Corner" className="object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MultiMedia;