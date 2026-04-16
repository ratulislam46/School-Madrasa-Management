import React, { useState } from 'react';
import { FaBars, FaTimes, FaChevronDown, FaClipboardCheck } from 'react-icons/fa';

const MenuBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const navLinks = [
        { name: 'হোম', link: '#' },
        { name: 'প্রতিষ্ঠান এর ইতিহাস', link: '#' },
        { name: 'আমাদের সম্পর্কে', link: '#' },
        {
            name: 'একাডেমী',
            link: '#',
            subLinks: [
                { name: 'ভর্তি', link: '#' },
                { name: 'ফলাফল', link: '#' }
            ]
        },
        { name: 'ব্লগ ও নিউজ', link: '#' },
        { name: 'যোগাযোগ', link: '#' },
        { name: 'নীতিমালা', link: '#' },
        { name: 'ড্যাশবোর্ড', link: '#' },
    ];

    return (
        <nav className="bg-linear-to-r from-[#1a6b50] via-[#4b9a75] to-[#a2cc94] shadow-md z-49 font-sans md:relative fixed top-0 left-0 w-full">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-14 md:h-16">

                    {/* Main Menu Button  */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white text-2xl focus:outline-none flex items-center gap-2 cursor-pointer"
                        >
                            {isOpen ? <FaTimes /> : <FaBars />}
                            <span className="text-lg font-bold">মেনু</span>
                        </button>
                    </div>

                    {/* Menu Button For Lerge Device  */}
                    <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
                        {navLinks.map((item, index) => (
                            item.subLinks ? (
                                <div
                                    key={index}
                                    className="relative group py-4"
                                    onMouseEnter={() => setIsDropdownOpen(true)}
                                    onMouseLeave={() => setIsDropdownOpen(false)}
                                >
                                    <button className="text-white text-[14px] lg:text-[15px] font-medium flex items-center gap-1 hover:text-yellow-200 transition-colors cursor-pointer">
                                        {item.name} <FaChevronDown size={10} />
                                    </button>

                                    {/* Accademic dropdown menu  */}
                                    <div className={`absolute top-full left-0 w-40 bg-white shadow-xl rounded-b-lg overflow-hidden transition-all duration-300 ${isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                        {item.subLinks.map((sub, idx) => (
                                            <a
                                                key={idx}
                                                href={sub.link}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 border-b border-gray-100 last:border-0 cursor-pointer"
                                            >
                                                {sub.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <a
                                    key={index}
                                    href={item.link}
                                    className="text-white text-[14px] lg:text-[15px] font-medium hover:text-yellow-200 transition-colors cursor-pointer"
                                >
                                    {item.name}
                                </a>
                            )
                        ))}
                    </div>

                    {/* Reult button  */}
                    <div className="flex items-center">
                        <button className="bg-white text-[#1a6b50] px-4 py-1.5 md:px-5 md:py-2 rounded-lg font-bold text-sm md:text-base flex items-center gap-2 hover:bg-yellow-50 transition-all shadow-md cursor-pointer">
                            <FaClipboardCheck className="text-green-600" />
                            রেজাল্ট
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu slider for small device  */}
            <div className={`md:hidden bg-[#1a6b50] overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-125 border-t border-white/20' : 'max-h-0'}`}>
                <div className="px-4 py-4 space-y-3">
                    {navLinks.map((item, index) => (
                        <div key={index}>
                            {item.subLinks ? (
                                <div className="space-y-2">
                                    <div className="text-yellow-200 font-bold border-b border-white/10 pb-1">{item.name}</div>
                                    <div className="pl-4 space-y-2">
                                        {item.subLinks.map((sub, idx) => (
                                            <a key={idx} href={sub.link} className="block text-white/90 text-sm hover:text-white cursor-pointer">{sub.name}</a>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <a href={item.link} className="block text-white text-base hover:text-yellow-200 border-b border-white/5 pb-1 cursor-pointer">
                                    {item.name}
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default MenuBar;