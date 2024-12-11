import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function Header({ darkMode, setDarkMode }) {
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true');
    }
  }, [setDarkMode]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  return (
    <div className="flex justify-between items-center w-full p-4">
      <div className="flex items-center">
        <Link href="/" legacyBehavior>
          <a>
            <Image src={darkMode ? '/logowhite.png' : '/logoblack.png'} alt="Logo" width={48} height={48} />
          </a>
        </Link>
      </div>
      <div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-4 py-2 rounded-md ${darkMode ? 'bg-custom-900 text-white border border-gray-300' : 'bg-white text-custom-800 border border-gray-300'}`}
        >
          {darkMode ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </button>
      </div>
    </div>
  );
}