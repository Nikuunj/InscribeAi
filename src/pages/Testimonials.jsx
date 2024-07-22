import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Testimonials() {
  const testi = [
    {
      name: "Nikunj Makwana",
      dp: "https://avatars.githubusercontent.com/u/134833235?s=400&u=f7b551c99be8027bd2e2b3b388286c0adc2f55bd&v=4",
      tile: "I've cut my blog post writing time by 6...",
      detail: "InscribeAi is the only AI authoring tool that allows me to produce expert content on Linkedin prospecting. Their data enrichment functionality is incredible."
    },
    {
      name: "Harsh Kasat",
      dp: "https://avatars.githubusercontent.com/u/104870914?v=4",
      tile: "A year's worth of organic content in just 30 minutes",
      detail: "We've gone from 4 blog articles per month to more than 20 without losing any quality. Traffic to our website has increased 8 times in 6 months."
    },
    {
      name: "Abhishek Dumaniya",
      dp: "https://avatars.githubusercontent.com/u/123349721?v=4",
      tile: "Just wanna shout out the whole team for this amazing tool",
      detail: "InscribeAi has revolutionized our approach to content creation. Their advanced AI enables us to produce specific expert content in record time."
    },
  ];

  return (
    <div className="px-10 py-6" id='test'>
      <h2 className="text-lg text-blue-600 text-center mt-10">Testimonials</h2>
      <p className='text-[40px] font-[650] text-center mb-10'>InscribeAi is rated 4.9/5 stars in over 500 reviews</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-32 gap-5">
        {testi.map((val, index) => (
          <div key={index} className="px-10 border-2 hover:border-blue-400 duration-500 rounded-lg shadow-lg bg-white flex flex-col justify-center">
            <div className='flex flex-col justify-center h-[370px]'>

                  <div className="flex space-x-1 text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} />
                  ))}
                </div>
              <div className="flex flex-col items-center">
              <h4 className="text-lg font-medium mb-2">{val.tile}</h4>
              <p className="text-gray-600">{val.detail}</p>
            </div>
              <div className='flex items-center mt-9' >
              <img src={val.dp} alt={val.name} className="w-16 h-16 rounded-full mr-4" />
                <h3 className="text-xl font-semibold">{val.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
