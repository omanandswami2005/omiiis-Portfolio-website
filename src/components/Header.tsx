import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// import profileImage from './path/to/your/image.png'; // Update this path

const Header: React.FC = () => {
  const headerTextRef = useRef<HTMLDivElement>(null);
  const headerImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (headerTextRef.current && headerImageRef.current) {
      const headerTextElements = headerTextRef.current.children;
      gsap.from(headerTextElements, { opacity: 0, y: 20, duration: 1, stagger: 0.2 });
      gsap.from(headerImageRef.current, { opacity: 0, scale: 0.8, duration: 1, delay: 1 });
    }
  }, []);

  return (
    <header className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <div ref={headerTextRef} className="text-center">
        {/* <img ref={headerImageRef} src={profileImage} alt="Profile" className="header-image w-40 h-40 rounded-full mx-auto mb-4" /> */}
        <h1 className="header-text text-5xl font-bold mb-2">I AM OMANAND SWAMI </h1>
        <p className="header-text text-lg mb-4">I AM A FULL STACK DEVELOPER...</p>
        <button className="header-text bg-purple-600 text-white px-4 py-2 rounded">RESUME</button>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="header-text">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="header-text">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="header-text">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="mailto:your-email@example.com" className="header-text">
            <i className="fas fa-envelope fa-2x"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
