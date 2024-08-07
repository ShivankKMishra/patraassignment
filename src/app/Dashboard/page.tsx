"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image'; // Import Image component
import Header from '../../../Component/Header';

export default function Dashboard() {
  const [topics, setTopics] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemWidth = 300; // Width of the component in pixels

  useEffect(() => {
    fetch('/Topic.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched topics:', data); // Log fetched data
        setTopics(data);
      })
      .catch(error => console.error('Error loading topics:', error));
  }, []);

  const slideRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % topics.length);
  };

  const slideLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + topics.length) % topics.length);
  };

  return (
    <>
      <Header />
      <div className="p-4 bg-[#192734] min-h-screen">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Popular Topics🔥</h1>
        <div className="relative flex items-center">
          <button
            onClick={slideLeft}
            className="absolute left-0 p-4 bg-gray-800 text-white rounded-full focus:outline-none z-10"
          >
            &lt;
          </button>
          <div className="overflow-hidden w-full" ref={containerRef}>
            {topics.length > 0 ? (
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * itemWidth}px)` }}
              >
                {topics.map((topic, index) => (
                  <div key={index} className="w-[300px] flex-shrink-0 p-4 border-2 border-white bg-[#192734] rounded-lg shadow-md m-4">
                    <div className="flex items-start">
                      <Image
                        src={topic.img} // Ensure this path is correct and accessible
                        alt={topic.topic}
                        width={120}
                        height={120}
                        className="object-cover rounded-md mr-4"
                      />
                      <div className="flex-1">
                        <h2 className="text-xl font-semibold text-white mb-2">{topic.topic}</h2>
                        <p className="text-sm text-white mb-4">{topic.summary}</p>
                      </div>
                    </div>
                    <a
                      href="#" // Update this href with the correct link
                      className="block w-full px-4 py-2 text-white bg-[#192734] border-2 border-white rounded-md text-center mt-4"
                    >
                      Read More
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-white text-center">Loading topics...</p>
            )}
          </div>
          <button
            onClick={slideRight}
            className="absolute right-0 p-4 bg-gray-800 text-white rounded-full focus:outline-none z-10"
          >
            &gt;
          </button>
        </div>
      </div>
    </>
  );
}
