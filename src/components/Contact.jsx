import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className='mt-12 flex flex-col gap-8'>
          <div>
            <h4 className='text-white font-medium mb-4'>Email</h4>
            <p className='text-secondary text-lg'>justynephan@gmail.com</p>
          </div>
          <div>
            <h4 className='text-white font-medium mb-4'>Phone</h4>
            <p className='text-secondary text-lg'>(514) 829-3201</p>
          </div>
          <div>
            <h4 className='text-white font-medium mb-4'>LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/justyne-phan/"
              target="_blank"
              rel="noopener noreferrer"
              className='text-secondary text-lg underline'
            >
              linkedin.com/in/justyne-phan
            </a>
          </div>
          <div>
            <h4 className='text-white font-medium mb-4'>GitHub</h4>
            <a
              href="https://github.com/justynephan"
              target="_blank"
              rel="noopener noreferrer"
              className='text-secondary text-lg underline'
            >
              github.com/justynephan
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
