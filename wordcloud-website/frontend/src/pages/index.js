import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(false);
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [text]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    if (file) {
      formData.append('file', file);
    } else {
      formData.append('text', text);
    }
    try {
      const response = await axios.post('https://wordcloud-e5ly.onrender.com/api/generate', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        responseType: 'blob',
      });
      const url = URL.createObjectURL(new Blob([response.data]));
      setImageUrl(url);
    } catch (error) {
      console.error('Error generating word cloud:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFile(null);
    setText('');
    setImageUrl('');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-custom-900 text-white' : 'bg-white text-custom-800'} flex flex-col justify-between`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="flex-grow flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h1 className="mt-6 text-center text-3xl font-extrabold">YapMap</h1>
            <h2 className="mt-2 text-center text-lg">See what word is being yapped the most in your chats</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="file-upload" className="sr-only">Upload a text file</label>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  accept=".txt"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="file-upload"
                  className={`cursor-pointer appearance-none rounded-md relative block w-full px-3 py-2 border border-transparent text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-center`}
                >
                  {file ? file.name : 'Upload a text file'}
                </label>
              </div>
              <div>
                <label htmlFor="text-input" className="sr-only">Or paste text</label>
                <textarea
                  id="text-input"
                  name="text-input"
                  value={text}
                  onChange={handleTextChange}
                  ref={textAreaRef}
                  className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${darkMode ? 'border-gray-600 bg-custom-800 text-white' : 'border-gray-300 bg-white text-custom-800'} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-none no-scrollbar`}
                  placeholder="or paste text here..."
                  rows="5"
                ></textarea>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={loading}
              >
                {loading ? (
                  <div className="loader"></div>
                ) : (
                  'Generate YapMap'
                )}
              </button>
            </div>
          </form>
          {imageUrl && (
            <div className="mt-8 text-center">
              <h2 className="text-xl font-bold">Generated YapMap</h2>
              <Image src={imageUrl} alt="Word Cloud" className="mt-4 mx-auto" />
              <div className="flex justify-center space-x-4 mt-4">
                <a
                  href={imageUrl}
                  download="yapmap.png"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Download
                </a>
                <button
                  onClick={handleReset}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Reset
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}