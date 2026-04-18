import React, { useState } from 'react';
import DefaultWeight from '../../Shared/DefaultWeight/DefaultWeight';
import { FaPaperPlane } from 'react-icons/fa';

const AdmissionForm = () => {
    const [formData, setFormData] = useState({
        studentName: '',
        prevSchool: '',
        prevClass: '',
        targetClass: '',
        guardianName: '',
        guardianNumber: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = (e) => {
       e.preventDefault();

        const phoneNumber = "+8801643110638";
        const message = `অনলাইন আবেদন:%0A
        ছাত্র / ছাত্রীর নাম: ${formData.studentName}%0A
        পূর্ববর্তী স্কুল: ${formData.prevSchool || 'প্রযোজ্য নয়'}%0A
        পূর্ববর্তী ক্লাস: ${formData.prevClass || 'প্রযোজ্য নয়'}%0A
        ভর্তির ক্লাস: ${formData.targetClass}%0A
        অভিভাবকের নাম: ${formData.guardianName}%0A
        অভিভাবকের মোবাইল: ${formData.guardianNumber}`;

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappURL, '_blank');
        setFormData({
            studentName: '',
            prevSchool: '',
            prevClass: '',
            targetClass: '',
            guardianName: '',
            guardianNumber: ''
        });
    };

    return (
        <div className="py-12 bg-gray-50">
            <DefaultWeight>
                <div className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold mb-2">অনলাইন ভর্তি আবেদন</h2>
                        <p className="text-gray-500">আপনার প্রয়োজনীয় তথ্য দিয়ে নিচে ফর্মটি পূরণ করুন</p>
                    </div>

                    <form onSubmit={handleFormSubmit} className="space-y-5">
                        {/* নাম */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">ছাত্র / ছাত্রীর নাম *</label>
                            <input required name="studentName" value={formData.studentName} onChange={handleChange} type="text" className="w-full border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-green-600 outline-none" placeholder="নাম লিখুন" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">পূর্ববর্তী স্কুল</label>
                                <input name="prevSchool" value={formData.prevSchool} onChange={handleChange} type="text" className="w-full border border-gray-200 p-3 rounded-xl outline-none" placeholder="স্কুলের নাম" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">পূর্ববর্তী ক্লাস</label>
                                <input name="prevClass" value={formData.prevClass} onChange={handleChange} type="text" className="w-full border border-gray-200 p-3 rounded-xl outline-none" placeholder="ক্লাস" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">ভর্তি হতে ইচ্ছুক ক্লাস *</label>
                            <input required name="targetClass" value={formData.targetClass} onChange={handleChange} type="text" className="w-full border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-green-600 outline-none" placeholder="ক্লাসের নাম" />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">অভিভাবকের নাম *</label>
                            <input required name="guardianName" value={formData.guardianName} onChange={handleChange} type="text" className="w-full border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-green-600 outline-none" placeholder="অভিভাবকের নাম" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">অভিভাবকের মোবাইল নম্বর *</label>
                            <input required name="guardianNumber" value={formData.guardianNumber} onChange={handleChange} type="tel" className="w-full border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-green-600 outline-none" placeholder="017xxxxxxxx" />
                        </div>

                        <button type="submit" className="w-full bg-[#065f46] text-white font-bold py-4 rounded-xl hover:cursor-pointer hover:bg-[#044d39] transition-all flex items-center justify-center gap-2 mt-4">
                            আবেদন জমা দিন <FaPaperPlane />
                        </button>
                    </form>
                </div>
            </DefaultWeight>
        </div>
    );
};

export default AdmissionForm;