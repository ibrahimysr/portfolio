import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const EducationCard = ({ education, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className='w-full'
    >
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        className='relative bg-tertiary p-8 rounded-xl overflow-hidden'
        style={{
          background: 'linear-gradient(135deg, #1d1836 0%, #0f0c29 100%)',
        }}
      >
        {/* Decorative Border Pattern (Certificate Style) */}
        <div className='absolute inset-0 pointer-events-none'>
          {/* Top Border */}
          <div className='absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-[#915EFF] via-[#00cea8] to-[#915EFF]' />
          
          {/* Corner Decorations */}
          <div className='absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 border-[#915EFF] opacity-50' />
          <div className='absolute top-0 right-0 w-16 h-16 border-r-4 border-t-4 border-[#00cea8] opacity-50' />
          <div className='absolute bottom-0 left-0 w-16 h-16 border-l-4 border-b-4 border-[#00cea8] opacity-50' />
          <div className='absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 border-[#915EFF] opacity-50' />
          
          {/* Bottom Border */}
          <div className='absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-[#915EFF] via-[#00cea8] to-[#915EFF]' />
        </div>

        {/* Content */}
        <div className='relative z-10 text-center'>
          {/* Certificate Icon */}
          <div className='flex justify-center mb-4'>
            <div className='w-16 h-16 rounded-full bg-gradient-to-br from-[#915EFF] to-[#00cea8] flex items-center justify-center shadow-lg'>
              <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 20 20'>
                <path d='M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z' />
              </svg>
            </div>
          </div>

          {/* School Name (Large) */}
          <h3 className='text-white text-[28px] sm:text-[32px] font-bold mb-3 drop-shadow-lg'>
            {education.school}
          </h3>

          {/* Decorative Line */}
          <div className='flex items-center justify-center gap-3 mb-4'>
            <div className='w-12 h-[2px] bg-gradient-to-r from-transparent to-[#915EFF]' />
            <div className='w-2 h-2 rounded-full bg-[#915EFF]' />
            <div className='w-12 h-[2px] bg-gradient-to-l from-transparent to-[#915EFF]' />
          </div>

          {/* Degree */}
          <p className='text-secondary text-[18px] sm:text-[20px] font-semibold mb-4 italic'>
            {education.degree}
          </p>

          {/* Duration */}
          <div className='flex items-center justify-center gap-2 mb-5'>
            <svg className='w-5 h-5 text-[#00cea8]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
            </svg>
            <p className='text-[#00cea8] text-[16px] font-bold tracking-wide'>
              {education.duration}
            </p>
          </div>

          {/* GPA Badge (if exists) */}
          {education.gpa && (
            <div className='flex justify-center'>
              <div className='inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#915EFF]/20 to-[#00cea8]/20 rounded-full border-2 border-[#00cea8] shadow-lg'>
                <svg className='w-6 h-6 text-[#00cea8]' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
                <div>
                  <p className='text-white text-[10px] font-semibold uppercase tracking-wider opacity-70'>Grade Point Average</p>
                  <p className='text-[#00cea8] text-[20px] font-bold'>
                    {education.gpa}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Certificate Seal */}
          <div className='absolute bottom-4 right-4 opacity-10'>
            <svg className='w-20 h-20 text-[#915EFF]' fill='currentColor' viewBox='0 0 20 20'>
              <path fillRule='evenodd' d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
            </svg>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Academic Credentials</p>
        <h2 className={`${styles.sectionHeadText}`}>Education.</h2>
      </motion.div>

      <div className='mt-10'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='text-secondary text-[17px] max-w-3xl leading-[30px] mb-12'
        >
          My educational background combines formal computer engineering education
          with technical vocational training, providing a strong foundation in both
          theoretical knowledge and practical skills.
        </motion.p>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {education.map((edu, index) => (
            <EducationCard
              key={`education-${index}`}
              education={edu}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");

