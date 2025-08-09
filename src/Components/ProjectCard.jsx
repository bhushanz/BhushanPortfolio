// components/ProjectCard.jsx
import React, { useRef } from 'react';

const ProjectCard = ({ image, video, title, description, link }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Ignore play() promise rejection caused by pause()
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="mt-5 w-[95%] overflow-hidden md:w-full bg-[#ffffff] md:min-h-[100vh] m-auto text-white rounded-lg p-0 md:p-4 shadow-lg">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="w-full md:h-[75vh] h-38 transition-all duration-800 relative group"
      >
        <video
          ref={videoRef}
          src={video}
          muted
          autoPlay
          loop
          playsInline
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full md:object-contain object-fill md:rounded-xl md:opacity-0 opacity-100 md:group-hover:opacity-100 transition-opacity duration-500"
        />

        <img
          src={image}
          alt={title}
          className="absolute hidden md:block z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-contain rounded-lg transition-opacity duration-500 group-hover:opacity-0"
        />
      </div>

      <div className="w-full h-20 md:px-18">
        <h2 className="md:text-xl text-zinc-700 text-sm px-2 font-medium md:mt-4 mt-2 uppercase">
          {title}
        </h2>
        <p className="para md:text-sm px-2 text-[10px] mt-1 text-zinc-700 font-bold uppercase">
          {description}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block md:mt-4 px-2 mt-1 text-xs md:text-xl font-medium border-b-2 p-1 text-amber-400 hover:text-zinc-500"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
