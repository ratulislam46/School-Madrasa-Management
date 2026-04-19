import React from 'react';
import DefaultWeight from '../../Shared/DefaultWeight/DefaultWeight';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

const Support = () => {
    return (
        <div>
            <DefaultWeight>

                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-4">আমাদের সাহায্য প্রয়োজন?</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন। আমরা আপনার যেকোনো প্রশ্ন বা সমস্যার সমাধানে সবসময় প্রস্তুত।
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {/* Email Card */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
                        <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Mail className="text-green-600 w-7 h-7" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">ইমেইল করুন</h3>
                        <p className="text-gray-500 text-sm">যেকোনো তথ্যের জন্য</p>
                        <p className="mt-3 font-medium text-green-600">service@itbiponi.com</p>
                    </div>

                    {/* Phone Card */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
                        <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Phone className="text-blue-600 w-7 h-7" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">কল করুন</h3>
                        <p className="text-gray-500 text-sm">সকাল ১০টা - সন্ধ্যা ৬টা</p>
                        <p className="mt-3 font-medium text-blue-600">+৮৮০ ১৭৫০-৯৬৫৫৯৫</p>
                    </div>

                    {/* Address Card */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
                        <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                            <MapPin className="text-purple-600 w-7 h-7" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">আমাদের অফিস</h3>
                        <p className="text-gray-500 text-sm">সশরীরে ভিজিট করতে</p>
                        <p className="mt-3 font-medium text-purple-600 text-sm">বাড়ি ১২, রোড ৪, সেক্টর ১০, উত্তরা, ঢাকা</p>
                    </div>
                </div>

                {/* Additional Info / CTA */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-orange-100 p-3 rounded-lg">
                            <Clock className="text-orange-600 w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800">অফিসের সময়সূচী</h4>
                            <p className="text-sm text-gray-500">শনি - বৃহস্পতিবার (সকাল ৯:০০ - বিকেল ৫:০০)</p>
                        </div>
                    </div>

                    <a
                        href="https://wa.me/8801750965595"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-green-200 inline-block"
                    >
                        সরাসরি মেসেজ করুন
                    </a>
                </div>

            </DefaultWeight>
        </div>
    );
};

export default Support;