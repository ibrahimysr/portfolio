import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { achievements, certifications } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const AchievementCard = ({ achievement, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className='w-full'
    >
      <motion.div
        whileHover={{ scale: 1.03, y: -5 }}
        className='bg-gradient-to-br from-[#915EFF]/10 to-[#00cea8]/10 p-6 rounded-xl border-2 border-[#915EFF]/30 hover:border-[#915EFF] transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#915EFF]/20'
      >
        {/* Icon */}
        <div className='flex items-start gap-4'>
          <div className='flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-[#915EFF] to-[#00cea8] flex items-center justify-center shadow-lg'>
            <svg className='w-7 h-7 text-white' fill='currentColor' viewBox='0 0 20 20'>
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
            </svg>
          </div>

          <div className='flex-1'>
            {/* Year Badge */}
            <div className='inline-block mb-2 px-3 py-1 bg-[#915EFF]/20 rounded-full'>
              <p className='text-[#00cea8] text-[12px] font-bold'>{achievement.year}</p>
            </div>

            {/* Title */}
            <h3 className='text-white text-[22px] font-bold mb-2'>
              {achievement.title}
            </h3>

            {/* Description */}
            <p className='text-secondary text-[14px] leading-[22px]'>
              {achievement.description}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CertificationCard = ({ certification, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      whileHover={{ scale: 1.05 }}
      className='bg-tertiary p-5 rounded-xl border border-[#00cea8]/20 hover:border-[#00cea8]/50 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#00cea8]/10'
    >
      <div className='flex items-center gap-3 mb-3'>
        <div className='w-10 h-10 rounded-full bg-gradient-to-br from-[#00cea8]/20 to-[#915EFF]/20 flex items-center justify-center'>
          <svg className='w-5 h-5 text-[#00cea8]' fill='currentColor' viewBox='0 0 20 20'>
            <path fillRule='evenodd' d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
          </svg>
        </div>
        <div className='inline-block px-3 py-1 bg-[#00cea8]/10 rounded-full'>
          <p className='text-[#00cea8] text-[11px] font-bold'>{certification.year}</p>
        </div>
      </div>

      <h4 className='text-white text-[16px] font-bold mb-1'>
        {certification.title}
      </h4>
      <p className='text-secondary text-[13px]'>
        {certification.organization}
      </p>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Recognition & Learning</p>
        <h2 className={`${styles.sectionHeadText}`}>Achievements.</h2>
      </motion.div>

      <div className='mt-10'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='text-secondary text-[17px] max-w-3xl leading-[30px] mb-10'
        >
          A collection of my professional achievements, competition participations,
          and continuous learning through certifications.
        </motion.p>

        {/* Achievements Section */}
        <div className='mb-16'>
          <h3 className='text-white text-[24px] font-bold mb-6 flex items-center gap-3'>
            <div className='w-1 h-8 bg-gradient-to-b from-[#915EFF] to-[#00cea8] rounded-full' />
            Notable Achievements
          </h3>
          <div className='flex flex-col gap-6'>
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={`achievement-${index}`}
                achievement={achievement}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className='text-white text-[24px] font-bold mb-6 flex items-center gap-3'>
            <div className='w-1 h-8 bg-gradient-to-b from-[#00cea8] to-[#915EFF] rounded-full' />
            Certifications
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
            {certifications.map((certification, index) => (
              <CertificationCard
                key={`certification-${index}`}
                certification={certification}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Achievements, "achievements");

