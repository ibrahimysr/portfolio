import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

// Skill seviyeleri
const skillLevels = {
  "Flutter": 95,
  "Dart": 90,
  "Python": 85,
  "JavaScript": 80,
  "TypeScript": 75,
  "React JS": 80,
  "Node JS": 75,
  "PHP": 70,
  "Laravel": 80,
  "Firebase": 90,
  "MySQL": 85,
  "PostgreSQL": 75,
  "MongoDB": 80,
  "TensorFlow": 70,
  "git": 85,
  "figma": 75,
  "docker": 65,
};

const CircularSkill = ({ technology, index, level }) => {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.05, 0.75)}
      className='flex flex-col items-center'
    >
      <div className='relative w-36 h-36'>
        {/* Background Circle */}
        <svg className='w-full h-full transform -rotate-90'>
          <circle
            cx="72"
            cy="72"
            r={radius}
            stroke="#151030"
            strokeWidth="8"
            fill="none"
          />
          <motion.circle
            cx="72"
            cy="72"
            r={radius}
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            strokeDasharray={circumference}
            className='drop-shadow-[0_0_8px_rgba(145,94,255,0.5)]'
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#915EFF" />
              <stop offset="100%" stopColor="#00cea8" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Icon in Center */}
        <div className='absolute inset-0 flex items-center justify-center'>
          <img
            src={technology.icon}
            alt={technology.name}
            className='w-14 h-14 object-contain'
          />
        </div>
        
        {/* Percentage */}
        <div className='absolute bottom-2 left-0 right-0 text-center'>
          <span className='text-white text-[12px] font-bold'>{level}%</span>
        </div>
      </div>
      
      <p className='text-white text-[14px] font-semibold mt-3 text-center'>
        {technology.name}
      </p>
    </motion.div>
  );
};

const TechCircular = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Proficiency Overview</p>
        <h2 className={styles.sectionHeadText}>Skills Mastery.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Visual representation of my technical expertise across various technologies.
        Each circle shows my proficiency level developed through hands-on experience.
      </motion.p>

      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {technologies.map((technology, index) => (
          <CircularSkill
            key={technology.name}
            technology={technology}
            index={index}
            level={skillLevels[technology.name] || 70}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(TechCircular, "tech");

