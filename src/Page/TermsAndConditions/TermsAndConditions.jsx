import React from 'react';
import DefaultWeight from '../../Shared/DefaultWeight/DefaultWeight';

const TermsAndConditions = () => {
    return (
        <div>
            <DefaultWeight>

                <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
                <div className="space-y-4 text-gray-700">
                    <p>আমাদের ওয়েবসাইট ব্যবহার করার জন্য আপনাকে স্বাগতম। এই সাইটটি ব্রাউজ করার মাধ্যমে আপনি নিচের শর্তাবলি মেনে নিতে সম্মত হচ্ছেন।</p>
                    <h2 className="text-xl font-semibold">১. ব্যবহারের শর্তাবলি</h2>
                    <p>আমাদের সাইটের সকল কন্টেন্ট শুধুমাত্র সাধারণ তথ্যের জন্য। আপনি কোনো অবৈধ উদ্দেশ্যে এই ওয়েবসাইট ব্যবহার করতে পারবেন না।</p>
                    <h2 className="text-xl font-semibold">২. দায়বদ্ধতা</h2>
                    <p>সাইটে দেওয়া তথ্যের সঠিকতা নিশ্চিত করার চেষ্টা করা হয়েছে, তবে কোনো ভুলের জন্য কর্তৃপক্ষ দায়ী থাকবে না।</p>
                </div>

            </DefaultWeight>
        </div>
    );
};

export default TermsAndConditions;