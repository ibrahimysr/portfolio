import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { textVariant } from "../utils/motion";

const ProjectCard = ({ project, isActive }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isActive ? 1 : 0.5,
        scale: isActive ? 1 : 0.85,
      }}
      transition={{ duration: 0.5 }}
      className={`flex-shrink-0 w-full sm:w-[400px] transition-all duration-500 ${
        isActive ? 'z-10' : 'z-0'
      }`}
    >
      <div className='bg-tertiary rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/30 transition-shadow duration-300'>
        {project.image && (
          <div className='relative w-full h-[250px] overflow-hidden group'>
            <img
              src={project.image}
              alt={project.name}
              className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
            />
            
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent' />
            
            <div className='absolute top-4 right-4 flex gap-2'>
              {project.play_store_link && (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className='bg-black/70 backdrop-blur-sm p-3 rounded-full cursor-pointer hover:bg-[#00cea8] transition-colors'
                  onClick={() => window.open(project.play_store_link, "_blank")}
                  title='View on Play Store'
                >
                  <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z' />
                  </svg>
                </motion.div>
              )}
              {project.live_link && !project.play_store_link && (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className='bg-black/70 backdrop-blur-sm p-3 rounded-full cursor-pointer hover:bg-[#00cea8] transition-colors'
                  onClick={() => window.open(project.live_link, "_blank")}
                  title='Visit Live Site'
                >
                  <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' />
                  </svg>
                </motion.div>
              )}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className='bg-black/70 backdrop-blur-sm p-3 rounded-full cursor-pointer hover:bg-[#915EFF] transition-colors'
                onClick={() => window.open(project.source_code_link, "_blank")}
                title='View Code'
              >
                <img
                  src={github}
                  alt='github'
                  className='w-6 h-6 object-contain'
                />
              </motion.div>
            </div>
          </div>
        )}

        <div className='p-6'>
          <h3 className='text-white font-bold text-[24px] mb-2'>
            {project.name}
          </h3>
          <p className='text-secondary text-[14px] leading-[22px] mb-4'>
            {project.description}
          </p>

          <div className='flex flex-wrap gap-2 mb-4'>
            {project.tags.map((tag) => (
              <span
                key={tag.name}
                className={`text-[12px] ${tag.color} font-medium px-3 py-1 rounded-full bg-black-200/50`}
              >
                #{tag.name}
              </span>
            ))}
          </div>

          {!project.image && (
            <div className='flex gap-3 mt-4'>
              {project.play_store_link && (
                <motion.a
                  href={project.play_store_link}
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='flex-1 bg-gradient-to-r from-[#00cea8] to-[#00a896] hover:from-[#00a896] hover:to-[#00cea8] text-white px-4 py-2 rounded-lg font-medium text-[14px] transition-all flex items-center justify-center gap-2'
                >
                  <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z' />
                  </svg>
                  Play Store
                </motion.a>
              )}
              {project.live_link && !project.play_store_link && (
                <motion.a
                  href={project.live_link}
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='flex-1 bg-gradient-to-r from-[#00cea8] to-[#00a896] hover:from-[#00a896] hover:to-[#00cea8] text-white px-4 py-2 rounded-lg font-medium text-[14px] transition-all flex items-center justify-center gap-2'
                >
                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' />
                  </svg>
                  Visit Site
                </motion.a>
              )}
              <motion.a
                href={project.source_code_link}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='flex-1 bg-tertiary border-2 border-[#915EFF] hover:bg-[#915EFF] text-white px-4 py-2 rounded-lg font-medium text-[14px] transition-all flex items-center justify-center gap-2'
              >
                <img src={github} alt='github' className='w-5 h-5 object-contain' />
                GitHub
              </motion.a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const WorksInfinite = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const constraintsRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000); 

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const getVisibleSlides = () => {
    const prev = (currentIndex - 1 + projects.length) % projects.length;
    const next = (currentIndex + 1) % projects.length;
    return [prev, currentIndex, next];
  };

  const visibleSlides = getVisibleSlides();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos.
        </motion.p>
      </div>

      <div 
        className='mt-14 relative'
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className='relative overflow-hidden'>
          <div className='flex items-center justify-center gap-6 px-4 sm:px-0'>
            {/* Previous slide (hidden on mobile) */}
            <div className='hidden sm:block opacity-30'>
              <ProjectCard 
                project={projects[visibleSlides[0]]} 
                isActive={false}
              />
            </div>

            <motion.div
              key={currentIndex}
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <ProjectCard 
                project={projects[currentIndex]} 
                isActive={true}
              />
            </motion.div>

            <div className='hidden sm:block opacity-30'>
              <ProjectCard 
                project={projects[visibleSlides[2]]} 
                isActive={false}
              />
            </div>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className='absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-[#915EFF] to-[#7c3aed] hover:from-[#7c3aed] hover:to-[#915EFF] p-3 sm:p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95'
          aria-label="Previous project"
        >
          <svg className='w-5 h-5 sm:w-6 sm:h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={3} d='M15 19l-7-7 7-7' />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className='absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-[#915EFF] to-[#7c3aed] hover:from-[#7c3aed] hover:to-[#915EFF] p-3 sm:p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95'
          aria-label="Next project"
        >
          <svg className='w-5 h-5 sm:w-6 sm:h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={3} d='M9 5l7 7-7 7' />
          </svg>
        </button>

        <div className='flex justify-center items-center gap-2 mt-8'>
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-10 h-3 bg-gradient-to-r from-[#915EFF] to-[#00cea8]'
                  : 'w-3 h-3 bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        <div className='text-center mt-4'>
          <p className='text-secondary text-[14px]'>
            <span className='text-white font-bold text-[18px]'>{currentIndex + 1}</span>
            {' / '}
            <span className='text-white font-bold text-[18px]'>{projects.length}</span>
          </p>
        </div>

        {!isPaused && (
          <motion.div 
            className='absolute -bottom-8 left-1/2 -translate-x-1/2 text-[#915EFF] text-[12px] flex items-center gap-2'
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              ⟳
            </motion.div>
            <span>Auto-playing</span>
          </motion.div>
        )}
      </div>

        <div className='text-center mt-16 text-secondary text-[12px] opacity-40'>
          Use ← → arrow keys or hover to pause
        </div>
    </>
  );
};

if (typeof window !== 'undefined') {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      document.querySelector('[aria-label="Previous project"]')?.click();
    } else if (e.key === 'ArrowRight') {
      document.querySelector('[aria-label="Next project"]')?.click();
    }
  });
}

export default SectionWrapper(WorksInfinite, "");

