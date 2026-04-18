import React from 'react';
import DefaultWeight from '../../Shared/DefaultWeight/DefaultWeight';
import { FaTshirt, FaCalendarCheck, FaShieldAlt, FaBook, FaMobileAlt } from 'react-icons/fa';

const RulesRegulation = () => {

    const rules = [
        {
            icon: <FaTshirt />,
            title: "পোশাক ও ইউনিফর্ম",
            desc: "প্রতিষ্ঠানের নির্ধারিত ইউনিফর্ম পরিধান বাধ্যতামূলক। মার্জিত ও পরিচ্ছন্ন পোশাক শিক্ষার্থীদের ব্যক্তিত্ব ও শৃঙ্খলার পরিচয় বহন করে।"
        },
        {
            icon: <FaCalendarCheck />,
            title: "উপস্থিতি ও সময়ানুবর্তিতা",
            desc: "শ্রেণিকক্ষে শতভাগ উপস্থিতি প্রত্যাশিত। কোনো অনিবার্য কারণে অনুপস্থিত থাকলে অভিভাবকের মাধ্যমে আবেদনপত্র জমা দেওয়া আবশ্যক।"
        },
        {
            icon: <FaShieldAlt />,
            title: "শৃঙ্খলা ও শিষ্টাচার",
            desc: "শিক্ষক ও সহপাঠীদের প্রতি শ্রদ্ধাশীল আচরণ কাম্য। প্রতিষ্ঠানের সম্পদ রক্ষা করা প্রতিটি শিক্ষার্থীর নৈতিক দায়িত্ব।"
        },
        {
            icon: <FaBook />,
            title: "পরীক্ষা নীতিমালা",
            desc: "পরীক্ষায় নকল বা অসদুপায় অবলম্বন কঠোরভাবে নিষিদ্ধ। এ জাতীয় অপরাধের ক্ষেত্রে প্রতিষ্ঠান কর্তৃপক্ষ ডিসিপ্লিনারি ব্যবস্থা গ্রহণে বাধ্য থাকবে।"
        },
        {
            icon: <FaMobileAlt />,
            title: "মোবাইল ও গ্যাজেট",
            desc: "ক্যাম্পাসে মোবাইল ফোন বা ব্যক্তিগত ইলেকট্রনিক ডিভাইস আনা সম্পূর্ণ নিষিদ্ধ। বিশেষ প্রয়োজনে কর্তৃপক্ষের অনুমতি সাপেক্ষে বিবেচনা করা হবে।"
        }
    ];

    return (
        <div>
            <DefaultWeight>

                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">প্রতিষ্ঠানের নীতিমালা ও আচরণবিধি</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        একটি সুশৃঙ্খল ও আদর্শ শিক্ষাঙ্গন গড়ে তুলতে আমাদের নির্ধারিত নিয়মাবলি মেনে চলা প্রতিটি শিক্ষার্থীর দায়িত্ব।
                    </p>
                </div>

                {/* Rules List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {rules.map((rule, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-start gap-5"
                        >
                            <div className="bg-[#065f46] text-white p-4 rounded-xl text-xl mt-1">
                                {rule?.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{rule?.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                    {rule?.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </DefaultWeight>
        </div>
    );
};

export default RulesRegulation;