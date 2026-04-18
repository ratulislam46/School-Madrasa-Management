import React from 'react';
import DefaultWeight from '../../Shared/DefaultWeight/DefaultWeight';

const History = () => {
    return (
        <div>
            <DefaultWeight>

                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-3xl md:text-4xl font-bold  mb-4">আমাদের ইতিহাস ও ঐতিহ্য</h1>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 items-start">
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-800">প্রতিষ্ঠার প্রেক্ষাপট</h2>
                            <p className="text-gray-600 leading-relaxed text-justify">
                                বিডিআইটিহোম স্কুল এন্ড মাদ্রাসা একটি ঐতিহ্যবাহী শিক্ষা প্রতিষ্ঠান। আধুনিক ও ইসলামী শিক্ষার সমন্বয়ে আমরা গড়ে তুলছি আগামীর ভবিষ্যৎ। আমাদের লক্ষ্য সুশিক্ষিত, নীতিবান ও দেশপ্রেমিক নাগরিক গড়ে তোলা। প্রতিষ্ঠানের শুরু থেকেই আমরা মেধা ও মনন বিকাশে বদ্ধপরিকর।
                            </p>
                            <p className="text-gray-600 leading-relaxed text-justify">
                                প্রতিষ্ঠানের পথচলা শুরু হয়েছিল এক ঝাঁক স্বপ্নদ্রষ্টা মানুষের হাত ধরে। শিক্ষার মানোন্নয়ন এবং নৈতিকতা ভিত্তিক সমাজ গঠনের প্রত্যয়ে আমরা কাজ করে যাচ্ছি।
                            </p>
                        </div>

                        {/* ইমেজ গ্যালারি */}
                        <div className="grid grid-cols-2 gap-4">
                            <img src="https://i.ibb.co.com/WNZhbxQr/campus.png" alt="Campus 1" className="rounded-xl shadow-lg w-full h-40 object-cover" />
                            <img src="https://i.ibb.co.com/W4nHVfX5/computer-lab.jpg" alt="Campus 2" className="rounded-xl shadow-lg w-full h-40 object-cover" />
                            <img src="https://i.ibb.co.com/vCDxsFQr/stude.jpg" alt="Campus 3" className="w-full h-60 object-cover col-span-2" />
                        </div>
                    </div>

                    {/* লক্ষ্য ও উদ্দেশ্য সেকশন */}
                    <div className="mt-16 bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <h3 className="text-xl font-bold mb-4">আমাদের লক্ষ্য ও উদ্দেশ্য</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>আধুনিক ও যুগোপযোগী ইসলামী শিক্ষার সমন্বয়।</li>
                            <li>শিক্ষার্থীদের মধ্যে নৈতিকতা ও মানবিক মূল্যবোধ জাগ্রত করা।</li>
                            <li>দক্ষ ও যোগ্য নেতৃত্ব তৈরির পরিবেশ নিশ্চিত করা।</li>
                            <li>ক্রীড়া ও সাংস্কৃতিক বিকাশে বিশেষ গুরুত্ব প্রদান।</li>
                        </ul>
                    </div>

            </DefaultWeight>
        </div>
    );
};

export default History;