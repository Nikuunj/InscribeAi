import React from 'react';
import img1 from '../assets/image1.webp';
import img2 from '../assets/image2.webp';
import img3 from '../assets/image3.webp';
import img4 from '../assets/image4.webp';
import { space } from 'postcss/lib/list';

function Steps() {
    const steps = [
        {
            "first": "I choose the ",
            "mid" : "keyword",
            "last" : "  for which I want optimized content",
            "second": "🤯 List all the keywords that your target audience will type into Google",
            "third": "Use Semrush or Ahrefs to compile a list of all the relevant keywords for your business that you aim to rank #1 on Google for.",
            "img": img1
        },
        {
            "first": "InscribeAi analyzes the Top 10 of the SERP for the ",
            "mid" : "keyword",
            "last" : " I have chosen",
            "second": "🧠 My assistant compares each site in the SERP and notes the common elements.",
            "third": "By comparing over 50 variables (length, keywords used, presence of FAQs, number of images, etc.), your assistant identifies the success factors that explain why Google has ranked your competitors in the TOP 10.",
            "img": img2
        },
        {
            "first": "InscribeAi generates content that meets the ",
            "last" : "search intent",
            "second": "🎯 I benefit from my ready-to-use content that ranks me #1 for the targeted keyword",
            "third": "SEOPITAL GENERATE: I don't have existing content for this keyword.",
            "forth": "👉 My assistant generates content that is enjoyable to read (not CHATGPT like), unique and free of plagiarism that includes all the success factors.",
            "five": "SEOPITAL OPTIMIZE: I already have existing content for this keyword and I want to improve it to increase my ranking.",
            "six": "👉 My assistant enriches my existing content with the missing success factors, naturally and respecting the tone and writing style I have provided.",
            "img": img3,
            "img1": img4
        }
    ];

    const renderSteps = steps.map((val, index) => (
        <div key={index} className="step text-center mb-10 overflow-x-hidden text-slate-700 my-5">
            <p className='text-[40px] px-10 font-[650]'>
                <span className="bg-gradient-to-r bg-clip-text text-transparent border-2 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 rounded-md">Steps {index + 1} - </span>
                {val.first} {index < 2 && (
                    <>
                    <span className='bg-gradient-to-r bg-clip-text text-transparent border-2 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 rounded-md'>{val.mid}</span>
                    <span>{val.last}</span>
                    </>
                )}
                {
                    index === 2 && (<span className='bg-gradient-to-r bg-clip-text text-transparent border-2 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 rounded-md'>{val.last}</span>)
                }
            </p>
            <div className='flex space-x-6 justify-center my-5'>
                {val.img && <img src={val.img} alt={`Step ${index + 1} Image`} className='w-[600px] bg-slate-50' />}
                {val.img1 && <img src={val.img1} alt={`Step ${index + 1} Image 1`} className='w-[600px] bg-slate-50' />}
            </div>
            <div className='space-y-2'>
                <p className='text-start font-[550] text-lg'>{val.second}</p>
                <p className='text-start text-zinc-400'>{index === 2 && (<span className='text-slate-700 font-[550]'>SEOPITAL GENERATE:</span>)} {val.third}</p>
                {val.forth && <p className='text-start text-zinc-400'>{val.forth}</p>}
                {val.five && <p className='text-start text-zinc-400'>{index === 2 && (<span className='text-slate-700 font-[550]'>SEOPITAL OPTIMIZE:</span>)} {val.five}</p>}
                {val.six && <p className='text-start text-zinc-400'>{val.six}</p>}
            </div>
        </div>
    ));

    return (
        <div className='ps-10'>
            {renderSteps}
        </div>
    );
}

export default Steps;