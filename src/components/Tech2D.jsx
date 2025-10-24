import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const TechCard = ({ technology, index }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.05, 0.75)}>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='bg-tertiary p-[1px] rounded-[20px] shadow-card w-full xs:w-[140px]'
    >
      <div className='bg-gradient-to-br from-[#915EFF] via-tertiary to-[#915EFF] p-[2px] rounded-[20px]'>
        <div
          className='bg-tertiary rounded-[20px] py-5 px-8 min-h-[180px] flex justify-evenly items-center flex-col 
          hover:bg-gradient-to-br hover:from-[#151030] hover:to-[#1a0f3d] transition-all duration-500'
        >
          <div className='relative group'>
            <div className='absolute -inset-1 bg-gradient-to-r from-[#915EFF] to-[#00cea8] rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500'></div>
            <img
              src={technology.icon}
              alt={technology.name}
              className='w-20 h-20 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300'
            />
          </div>

          <h3 className='text-white text-[16px] font-bold text-center mt-2'>
            {technology.name}
          </h3>
        </div>
      </div>
    </Tilt>
  </motion.div>
);

const Tech2D = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Technical Arsenal</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I work with a diverse set of cutting-edge technologies and frameworks to build 
        robust, scalable applications. From mobile development with Flutter to AI solutions 
        with Python, here are the tools I use to bring ideas to life.
      </motion.p>

      <div className='mt-20 flex flex-wrap justify-center gap-7'>
        {technologies.map((technology, index) => (
          <TechCard key={technology.name} technology={technology} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech2D, "tech");

