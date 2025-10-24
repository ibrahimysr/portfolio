import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

// Skill seviyeleri (istediğin gibi değiştirebilirsin)
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

const SkillBar = ({ technology, index, level }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.1, 0.75)}
      className='w-full mb-8'
    >
      <div className='flex items-center justify-between mb-2'>
        <div className='flex items-center gap-3'>
          <img
            src={technology.icon}
            alt={technology.name}
            className='w-10 h-10 object-contain'
          />
          <h3 className='text-white text-[18px] font-bold'>{technology.name}</h3>
        </div>
        <span className='text-secondary text-[14px] font-semibold'>{level}%</span>
      </div>
      
      <div className='w-full h-3 bg-tertiary rounded-full overflow-hidden'>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className='h-full bg-gradient-to-r from-[#915EFF] to-[#00cea8] rounded-full relative'
        >
          <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer'></div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const TechSkillBars = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Expertise Level</p>
        <h2 className={styles.sectionHeadText}>Technical Skills.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Here's a breakdown of my proficiency across different technologies and frameworks.
        Each skill has been honed through real-world projects and continuous learning.
      </motion.p>

      <div className='mt-20 w-full max-w-5xl mx-auto'>
        {technologies.map((technology, index) => (
          <SkillBar
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

export default SectionWrapper(TechSkillBars, "tech");

