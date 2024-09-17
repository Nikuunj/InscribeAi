import React, { useState } from 'react';
import InputBox from './InputBox'; // Adjust the import path as needed
import axios from 'axios';
import { ScaleLoader } from 'react-spinners';

function Form() {
  const envUrl = 'https://inscribeai.onrender.com/create_blog/';

  const [formData, setFormData] = useState({
    add_website_link: [],
    blog_name: '',
    desired_tone: '',
    target_audience: ''
  });
  
  const [url, setUrl] = useState('');
  const [output, setOutput] = useState('');
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const addUrl = (e) => {
    e.preventDefault();
    if (url.trim() && !formData.add_website_link.includes(url)) {
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        setError('Please enter a valid URL starting with http:// or https://.');
        return;
      }
      setFormData((prevData) => ({
        ...prevData,
        add_website_link: [...prevData.add_website_link, url]
      }));
      setUrl('');
      setError('');
    } else {
      setError('Please enter a unique URL.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOutput('');
    setLoad(true);
    setError('');
    console.log('Submitting data:', formData);

    // Ensure all fields are filled
    if (!formData.blog_name || formData.add_website_link.length === 0 || !formData.target_audience || !formData.desired_tone) {
      setError('Please fill all fields and add at least one URL.');
      setLoad(false);
      return;
    }

    try {
      const response = await axios.post(envUrl, formData, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      });
      console.log('Response:', response.data);
      setOutput(response.data.url);
      setFormData({
        add_website_link: [],
        blog_name: '',
        desired_tone: '',
        target_audience: ''
      });
      setUrl('');
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while submitting the data. Please try again.');
      if (error.response) {
        console.error('Error response:', error.response);
        setError(error.response.data.detail || 'An unknown error occurred');
      }
    } finally {
      setLoad(false);
    }
  };

  return (
    <div id='form' className='pt-20'>
      <div className="flex flex-col items-center justify-center">
        <form className="p-6 rounded-lg shadow-lg w-full max-w-lg relative" onSubmit={handleSubmit}>
          <p className="bg-gradient-to-r bg-clip-text text-transparent border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 rounded-md text-4xl font-[650] my-2">
            Create AI Blog
          </p>

          <div className="mb-4">
            <InputBox
              id="url"
              type="text"
              placeholder="Enter URL"
              value={url}
              change={handleUrlChange}
            />
            <button
              onClick={addUrl}
              className="mt-2 bg-[#365486] text-white py-2 px-4 rounded-md hover:bg-[#2b3b68] transition duration-300"
            >
              Add URL
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>

          <div className="mb-4">
            <h4 className="text-lg font-semibold">URLs:</h4>
            <ul className="list-disc list-inside">
              {formData.add_website_link.map((url, index) => (
                <p key={index} className="text-gray-700">
                  <a href={url.startsWith('http') ? url : `https://${url}`} target='_blank' rel='noopener noreferrer' className="text-blue-500 underline">
                    {url}
                  </a>
                </p>
              ))}
            </ul>
          </div>

          <InputBox
            id="blog_name"
            type="text"
            placeholder="Enter Blog Name"
            value={formData.blog_name}
            change={handleChange}
          />
          <InputBox
            id="desired_tone"
            type="text"
            placeholder="Enter Tone"
            value={formData.desired_tone}
            change={handleChange}
          />
          <InputBox
            id="target_audience"
            type="text"
            placeholder="Enter Target Audience"
            value={formData.target_audience}
            change={handleChange}
          />

          <button
            type="submit"
            className="mt-4 w-full bg-[#365486] text-white py-2 rounded-md hover:bg-[#2b3b68] transition duration-300"
          >
            Create Blog
          </button>
          {load && (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-35">
              <ScaleLoader color="rgba(7, 25, 82, 1)" height={30} width={4} />
            </div>
          )}
        </form>
        {output && (
          <div className="mt-8 p-6 rounded-lg shadow-lg">
            <span className="bg-gradient-to-r bg-clip-text text-transparent border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 rounded-md text-4xl font-[650] my-2">
              Blog URL:
            </span>
            <a href={output} target='_blank' rel='noopener noreferrer'>
              <span className="text-gray-700 text-3xl font-[500] px-2">{output}</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;
