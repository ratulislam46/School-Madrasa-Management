import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className={`fixed left-0 w-full z-50 bg-[#111827] text-white border-y border-gray-800 shadow-lg py-2 px-6 md:px-16 lg:px-24 bottom-0 md:top-0 md:bottom-auto`}>

            <div className="container mx-auto">
                {/* Desktop View */}
                <div className="hidden md:flex items-center justify-between gap-4">
                    <h2 className="text-[#FBBF24] font-bold text-lg whitespace-nowrap">
                        স্কুল/মাদ্রাসার ওয়েবসাইট তৈরি করুন
                    </h2>

                    {/* Marquee right to left  */}

                    <div className="flex gap-2">
                        <button className="bg-[#22C55E] hover:bg-[#16a34a] px-4 py-2 rounded-md flex items-center gap-2 font-bold text-sm transition hover:cursor-pointer">
                            <FaWhatsapp className="text-lg" />
                        </button>
                        <button className="bg-[#3B82F6] hover:bg-[#2563eb] px-4 py-2 rounded-md flex items-center gap-2 font-bold text-sm transition hover:cursor-pointer">
                            <FaPhoneAlt/>
                        </button>
                    </div>
                </div>

                {/* Mobile View) */}
                <div className="md:hidden flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <h2 className="text-[#FBBF24] font-bold text-sm">
                            স্কুল/মাদ্রাসার ওয়েবসাইট তৈরি করুন
                        </h2>
                    </div>

                    {/* Marquee right to left  */}

                    {/* Mobile Buttons */}
                    <div className="flex gap-2 h-8">
                        <button className="flex-1 bg-[#22C55E] rounded flex items-center justify-center hover:cursor-pointer">
                            <FaWhatsapp className="text-white" />
                        </button>
                        <button className="flex-1 bg-[#3B82F6] rounded flex items-center hover:cursor-pointer justify-center">
                            <FaPhoneAlt className="text-white text-xs" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;