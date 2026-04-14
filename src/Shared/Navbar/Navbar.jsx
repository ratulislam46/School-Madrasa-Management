import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="fixed left-0 w-full z-50 bg-[#111827] text-white border-y border-gray-800 shadow-lg 
            /* Mobile: Bottom position */
            bottom-0 md:top-0 md:bottom-auto py-2 px-4">
            
            <div className="max-w-7xl mx-auto">
                {/* Desktop View (md and up) */}
                <div className="hidden md:flex items-center justify-between gap-4">
                    <h2 className="text-[#FBBF24] font-bold text-lg whitespace-nowrap">
                        স্কুল/মাদ্রাসা ওয়ার্ডপ্রেস ওয়েবসাইট তৈরি করুন
                    </h2>
                    
                    <div className="bg-[#EF4444] px-3 py-1 rounded text-sm font-bold animate-pulse">
                        20% <br /> OFF
                    </div>

                    <div className="flex bg-[#374151] rounded-md border border-gray-600 divide-x divide-gray-600">
                        <div className="px-4 py-1 text-xs">
                            <span className="block text-gray-400">Theme License:</span>
                            <span className="font-bold text-sm text-white">৳4000</span>
                        </div>
                        <div className="px-4 py-1 flex items-center text-xs text-gray-300">
                            1 Domain License
                        </div>
                    </div>

                    <div className="flex bg-[#374151] rounded-md border border-gray-600 divide-x divide-gray-600">
                        <div className="px-4 py-1 text-xs">
                            <span className="block text-gray-400">Package Offer:</span>
                            <span className="font-bold text-sm text-white">৳8000</span>
                        </div>
                        <div className="px-4 py-1 flex items-center text-xs text-gray-300 leading-tight">
                            .edu.bd ডোমেইন <br /> 10GB Host
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <button className="bg-[#22C55E] hover:bg-[#16a34a] px-4 py-2 rounded-md flex items-center gap-2 font-bold text-sm transition">
                            <FaWhatsapp className="text-lg" /> WhatsApp
                        </button>
                        <button className="bg-[#3B82F6] hover:bg-[#2563eb] px-4 py-2 rounded-md flex items-center gap-2 font-bold text-sm transition">
                            Call to Order
                        </button>
                    </div>
                </div>

                {/* Mobile View (Below md) */}
                <div className="md:hidden flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <h2 className="text-[#FBBF24] font-bold text-sm">
                            স্কুল/মাদ্রাসা ওয়ার্ডপ্রেস ওয়েবসাইট তৈরি করুন
                        </h2>
                        <span className="bg-[#EF4444] text-[10px] px-2 py-0.5 rounded font-bold">20% OFF</span>
                    </div>

                    {/* Pricing Row 1 */}
                    <div className="flex bg-[#1f2937] rounded border border-gray-700 divide-x divide-gray-700 text-[10px]">
                        <div className="flex-1 p-1 text-center">
                            Theme License: <span className="font-bold">৳4000</span>
                        </div>
                        <div className="flex-1 p-1 text-center text-gray-400">
                            1 Domain License
                        </div>
                    </div>

                    {/* Pricing Row 2 */}
                    <div className="flex bg-[#1f2937] rounded border border-gray-700 divide-x divide-gray-700 text-[10px]">
                        <div className="flex-1 p-1 text-center">
                            Package Offer: <span className="font-bold">৳8000</span>
                        </div>
                        <div className="flex-1 p-1 text-center text-gray-400">
                            .edu.bd ডোমেইন 10GB Host
                        </div>
                    </div>

                    {/* Mobile Buttons */}
                    <div className="flex gap-2 h-8">
                        <button className="flex-1 bg-[#22C55E] rounded flex items-center justify-center">
                            <FaWhatsapp className="text-white" />
                        </button>
                        <button className="flex-1 bg-[#3B82F6] rounded flex items-center justify-center">
                            <FaPhoneAlt className="text-white text-xs" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;