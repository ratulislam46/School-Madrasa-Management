import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#0b121e] text-gray-300 py-10 px-6 md:px-16 lg:px-24">
            <div className="container mx-auto">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-800 pb-10">
                    
                    {/* Logo & Description */}
                    <div className="space-y-5">
                        <img 
                            src="/path-to-your-logo.png" 
                            alt="School Madrasah Logo" 
                            className="h-12 w-auto object-contain"
                        />
                        <p className="text-sm leading-relaxed">
                            আমরা শিক্ষার্থীদের মেধা ও মনন বিকাশে বদ্ধপরিকর। আধুনিক শিক্ষার সাথে নৈতিক শিক্ষার সমন্বয়ে আমরা গড়ে তুলছি আগামীর ভবিষ্যৎ।
                        </p>
                        <div className="flex gap-3">
                            {/* Social Icons */}
                            <div className="bg-[#1877F2] p-2.5 rounded-full cursor-pointer hover:opacity-80 transition">
                                <FaFacebookF className="text-white text-lg" />
                            </div>
                            <div className="bg-[#FF0000] p-2.5 rounded-full cursor-pointer hover:opacity-80 transition">
                                <FaYoutube className="text-white text-lg" />
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-5 border-l-4 border-green-500 pl-3">প্রয়োজনীয় লিংক</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="hover:text-green-500 cursor-pointer transition">আমাদের সম্পর্কে</li>
                            <li className="hover:text-green-500 cursor-pointer transition">যোগাযোগ</li>
                            <li className="hover:text-green-500 cursor-pointer transition">ভর্তি তথ্য</li>
                            <li className="hover:text-green-500 cursor-pointer transition">নোটিশ বোর্ড</li>
                            <li className="hover:text-green-500 cursor-pointer transition">শিক্ষক মণ্ডলী</li>
                        </ul>
                    </div>

                    {/* Information Links */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-5 border-l-4 border-green-500 pl-3">তথ্য বাতায়ন</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="hover:text-green-500 cursor-pointer transition">শিক্ষা মন্ত্রণালয়</li>
                            <li className="hover:text-green-500 cursor-pointer transition">মাউশি</li>
                            <li className="hover:text-green-500 cursor-pointer transition">ঢাকা বোর্ড</li>
                            <li className="hover:text-green-500 cursor-pointer transition">ব্যানবেইস</li>
                            <li className="hover:text-green-500 cursor-pointer transition">শিক্ষক বাতায়ন</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-5 border-l-4 border-green-500 pl-3">ঠিকানা ও যোগাযোগ</h3>
                        <div className="space-y-4 text-sm">
                            <div className="flex items-start gap-3">
                                <div className="bg-gray-800 p-2 rounded">
                                    <FaMapMarkerAlt className="text-green-500" />
                                </div>
                                <p>House #12, Road #4, Sector #10, Uttara, Dhaka-1230</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-gray-800 p-2 rounded">
                                    <FaPhoneAlt className="text-green-500" />
                                </div>
                                <p>+880 1750-965595</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-gray-800 p-2 rounded">
                                    <FaEnvelope className="text-green-500" />
                                </div>
                                <p>service@itbiponi.com</p>
                            </div>
                            <button className="mt-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded text-xs transition">
                                ম্যাপে দেখুন
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
                    <p>© 2026 Demo School. All rights reserved.</p>
                    <p>
                        Developed by <span className="text-yellow-500 font-bold tracking-wider">Olive71</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;