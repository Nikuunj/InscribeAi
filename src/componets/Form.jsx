import React, { useState } from 'react';
import InputBox from './InputBox'; // Adjust the import path as needed
import axios from 'axios';
import { ScaleLoader } from 'react-spinners';

function Form() {
  const envUrl = 'https://machoharsh.tech/create_blog/';

  const [formData, setFormData] = useState({
    urls: [],
    blogName: '',
    tone: '',
    target: ''
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
    if (url.trim() && !formData.urls.includes(url)) {
      setFormData((prevData) => ({
        ...prevData,
        urls: [...prevData.urls, url]
      }));
      setUrl('');
    } else {
      setError('Please enter a valid, unique URL.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOutput('');
    setLoad(true);
    setError('');
    console.log(formData.urls);

    try {
      const response = await axios.post(envUrl, {
        add_website_link: formData.urls,
        blog_name: formData.blogName,
        desired_tone: formData.tone,
        target_audience: formData.target
      }, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      });
      console.log(response.data);
      setOutput(response.data);
      // alert('Your data has been submitted');
      setFormData({
        urls: [],
        blogName: '',
        tone: '',
        target: ''
      });
      setUrl('');
    } catch (error) {
      setError('An error occurred while submitting the data. Please try again.');
      if (error.response) {
        setError(error.response.data.error);
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
              {formData.urls.map((url, index) => (
                <li key={index} className="text-gray-700">
                  <a href={`https://${url}`} target='_blank' rel='noopener noreferrer' className="text-blue-500 underline">
                    {url}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <InputBox
            id="blogName"
            type="text"
            placeholder="Enter Blog Name"
            value={formData.blogName}
            change={handleChange}
          />
          <InputBox
            id="tone"
            type="text"
            placeholder="Enter Tone"
            value={formData.tone}
            change={handleChange}
          />
          <InputBox
            id="target"
            type="text"
            placeholder="Enter Target Audience"
            value={formData.target}
            change={handleChange}
          />

          <button
            type="submit"
            className="mt-4 w-full bg-[#365486] text-white py-2 rounded-md hover:bg-[#2b3b68] transition duration-300"
          >
            🔥🔥🔥
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
              URL:
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
