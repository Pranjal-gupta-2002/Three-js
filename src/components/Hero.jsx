import { motion } from "framer-motion";

import { styles } from "../styles";
import {  RobotCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="my-10">
          <h1 className="mb-10 font-bold text-5xl text-gray-100 md:text-6xl">
    Hi, We'r <br className="block md:hidden" />
    <span
      className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform"
    >
      Simpl <span className='text-[#915EFF]'>byte</span>
    </span>
    </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            We are  dynamic and innovative tech company <br className='sm:block hidden' />
            that revolutionizing the way of Learning</p>
        </div>
      </div>
      
      <RobotCanvas />

      <div className='absolute xs:bottom-10 bottom-300 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;