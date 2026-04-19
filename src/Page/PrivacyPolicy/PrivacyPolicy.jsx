import React from 'react';
import DefaultWeight from '../../Shared/DefaultWeight/DefaultWeight';

const PrivacyPolicy = () => {
    return (
        <div>
            <DefaultWeight>

                <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
                <div className="space-y-4 text-gray-700">
                    <p>আপনার গোপনীয়তা আমাদের কাছে অত্যন্ত গুরুত্বপূর্ণ। আমরা কীভাবে আপনার তথ্য সংগ্রহ এবং ব্যবহার করি তা নিচে দেওয়া হলো:</p>
                    <h2 className="text-xl font-semibold">তথ্য সংগ্রহ</h2>
                    <p>আমরা শুধুমাত্র আপনার নাম, ইমেইল বা ফোন নম্বর সংগ্রহ করি যখন আপনি আমাদের সাথে যোগাযোগ করেন বা ভর্তি ফর্মে তথ্য প্রদান করেন।</p>
                    <h2 className="text-xl font-semibold">তথ্য সুরক্ষা</h2>
                    <p>আপনার তথ্য সুরক্ষিত রাখতে আমরা আধুনিক নিরাপত্তা ব্যবস্থা ব্যবহার করি এবং এটি তৃতীয় কোনো পক্ষকে দেওয়া হয় না।</p>
                </div>

            </DefaultWeight>
        </div>
    );
};

export default PrivacyPolicy;