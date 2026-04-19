import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const Navbar = () => {

    const marqueeText = "আপনার পূর্বের বকেয়া রয়েছে, দয়া করে পূর্বের বকেয়া পরিশোধ করুন। বকেয়া জমা দেওয়ার শেষ তারিখ: ৩০ এপ্রিল, ২০২৬";

    return (
        <nav className={`fixed left-0 w-full z-50 bg-[#111827] text-white border-y border-gray-800 shadow-lg py-2 px-6 md:px-16 lg:px-24 bottom-0 md:top-0 md:bottom-auto`}>

            <div className="container mx-auto">
                {/* Desktop View */}
                <div className="hidden md:flex items-center justify-between gap-4">
                    <h2 className="text-[#FBBF24] font-bold text-lg whitespace-nowrap">
                        স্কুল/মাদ্রাসার ওয়েবসাইট তৈরি করুন
                    </h2>

                    {/* Desktop Marquee */}
                    <div className="flex-1 mx-6 overflow-hidden">
                        <p className="animate-marquee text-red-400 font-semibold text-sm">
                            {marqueeText}
                        </p>
                    </div>
                    
                    {/* Dekstop Buttons */}
                    <div className="flex gap-2">
                        {/* Desktop WhatsApp */}
                        <a
                            href="https://wa.me/8801750965595"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#22C55E] hover:bg-[#16a34a] px-4 py-2 rounded-md flex items-center gap-2 font-bold text-sm transition"
                        >
                            <FaWhatsapp className="text-lg" />
                        </a>

                        {/* Desktop Phone */}
                        <a
                            href="tel:+8801750965595"
                            className="bg-[#3B82F6] hover:bg-[#2563eb] px-4 py-2 rounded-md flex items-center gap-2 font-bold text-sm transition"
                        >
                            <FaPhoneAlt />
                        </a>
                    </div>
                </div>

                {/* Mobile View) */}
                <div className="md:hidden flex flex-col gap-2">
                    <div className="text-center">
                        <h2 className="text-[#FBBF24] font-bold text-sm">
                            স্কুল/মাদ্রাসার ওয়েবসাইট তৈরি করুন
                        </h2>
                    </div>

                    {/* Mobile Marquee */}
                    <div className="overflow-hidden w-full mb-1">
                        <p className="animate-marquee text-red-400 font-semibold text-xs">
                            {marqueeText}
                        </p>
                    </div>

                    {/* Mobile Buttons */}
                    <div className="flex gap-2 h-8">
                        {/* Mobile WhatsApp */}
                        <a
                            href="https://wa.me/8801750965595"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-[#22C55E] rounded flex items-center justify-center transition-opacity hover:opacity-90"
                        >
                            <FaWhatsapp className="text-white" />
                        </a>

                        {/* Mobile Phone */}
                        <a
                            href="tel:+8801750965595"
                            className="flex-1 bg-[#3B82F6] rounded flex items-center justify-center transition-opacity hover:opacity-90"
                        >
                            <FaPhoneAlt className="text-white text-xs" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;