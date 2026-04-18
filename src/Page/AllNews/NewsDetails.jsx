import React, { useEffect, useState } from 'react';
import DefaultWeight from '../../Shared/DefaultWeight/DefaultWeight';
import { Link, useParams } from 'react-router';
import axios from 'axios';
import { FaArrowLeft } from 'react-icons/fa';

const NewsDetails = () => {

    const { id } = useParams();
    const [newsItem, setNewsItem] = useState(null);

    useEffect(() => {
        axios.get('/news.json')
            .then(res => {
                const foundNews = res.data.find(item => item.id === parseInt(id));
                setNewsItem(foundNews);
            })
            .catch(err => console.error(err));
    }, [id]);

    if (!newsItem) return <div className="p-10 text-center">Loading...</div>;

    return (
        <div>
            <DefaultWeight>

                <Link to="/all-news" className="flex items-center gap-2 text-gray-500 mb-6 hover:text-[#064e3b]">
                    <FaArrowLeft /> ফিরে যান
                </Link>

                <img src={newsItem?.image} alt={newsItem?.title} className="w-full h-80 object-cover rounded-xl mb-6" />

                <span className="bg-green-100 text-[#064e3b] px-4 py-1 rounded-full text-xs font-bold uppercase">
                    {newsItem?.category}
                </span>

                <h1 className="text-3xl font-bold text-gray-800 my-4">{newsItem?.title}</h1>
                <p className="text-gray-500 mb-6 italic">{newsItem?.date}</p>

                <div className="text-gray-700 leading-relaxed text-justify">
                    {newsItem?.description}
                </div>

            </DefaultWeight>
        </div>
    );
};

export default NewsDetails;