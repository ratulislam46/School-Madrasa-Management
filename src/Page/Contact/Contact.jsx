import React from 'react';
import DefaultWeight from '../../Shared/DefaultWeight/DefaultWeight';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
    return (
        <div>
            <DefaultWeight>

                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-[#065f46]">আমাদের সাথে যোগাযোগ</h2>
                            <p className="text-gray-600 mt-2">আপনার যেকোনো প্রয়োজনে আমাদের সাথে যোগাযোগ করুন</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-10">
                            {/* Contact Details */}
                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
                                    <div className="bg-green-50 p-3 rounded-full text-[#065f46]"><FaMapMarkerAlt /></div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">ঠিকানা</h4>
                                        <p className="text-gray-600 text-sm">বিডিআইটিহোম স্কুল এন্ড মাদ্রাসা, সদর, বরিশাল।</p>
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
                                    <div className="bg-green-50 p-3 rounded-full text-[#065f46]"><FaPhoneAlt /></div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">ফোন</h4>
                                        <p className="text-gray-600 text-sm">+৮৮০ ১৭১২-৩৪৫৬৭৮</p>
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
                                    <div className="bg-green-50 p-3 rounded-full text-[#065f46]"><FaEnvelope /></div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">ইমেইল</h4>
                                        <p className="text-gray-600 text-sm">info@bdithome.edu.bd</p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold mb-6">বার্তা পাঠান</h3>
                                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                    <input type="text" placeholder="আপনার নাম" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" />
                                    <input type="email" placeholder="আপনার ইমেইল" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" />
                                    <textarea rows="4" placeholder="আপনার বার্তা" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"></textarea>
                                    <button className="w-full bg-[#065f46] text-white py-3 rounded-lg font-bold hover:bg-[#044d39] transition">বার্তা পাঠান</button>
                                </form>
                            </div>
                        </div>

            </DefaultWeight>
        </div>
    );
};

export default Contact;