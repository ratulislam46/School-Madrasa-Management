import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router';

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
                            <li className="hover:text-green-500 cursor-pointer transition">
                                <Link to="/history">আমাদের সম্পর্কে</Link>
                            </li>
                            <li className="hover:text-green-500 cursor-pointer transition">
                                <Link to="/contact">যোগাযোগ</Link>
                            </li>
                            <li className="hover:text-green-500 cursor-pointer transition">
                                <Link to="/admission-form">ভর্তি তথ্য</Link>
                            </li>
                            <li className="hover:text-green-500 cursor-pointer transition">
                                <Link to="/all-notices">নোটিশ বোর্ড</Link>
                            </li>
                            <li className="hover:text-green-500 cursor-pointer transition">
                                <Link to="/all-teachers">শিক্ষক মণ্ডলী</Link>
                            </li>
                        </ul>
                    </div>

                    {/* 4. Support & Legal */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-5 border-l-4 border-green-500 pl-3">অন্যান্য</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="hover:text-green-500 cursor-pointer transition">
                                <Link to="/terms">Terms & Conditions</Link>
                            </li>
                            <li className="hover:text-green-500 cursor-pointer transition">
                                <Link to="/privacy">Privacy Policy</Link>
                            </li>
                            <li className="hover:text-green-500 cursor-pointer transition">
                                <Link to="/support">Support</Link>
                            </li>
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
                                {/* বাংলা ঠিকানা */}
                                <p>বাড়ি ১২, রোড ৪, সেক্টর ১০, উত্তরা, ঢাকা-১২৩০</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-gray-800 p-2 rounded">
                                    <FaPhoneAlt className="text-green-500" />
                                </div>
                                {/* বাংলা ফোন নম্বর */}
                                <p>+৮৮০ ১৭৫০-৯৬৫৫৯৫</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-gray-800 p-2 rounded">
                                    <FaEnvelope className="text-green-500" />
                                </div>
                                <p>service@itbiponi.com</p>
                            </div>

                            {/* ম্যাপে দেখার লিংক */}
                            <a
                                href="https://maps.app.goo.gl/VpAkwTbEAp8mmenR9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded text-xs transition"
                            >
                                ম্যাপে দেখুন
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
                    <p>© 2026 Olive71. All rights reserved.</p>
                    <p>
                        Developed by <span className="font-bold tracking-wider">Olive71</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;