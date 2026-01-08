import React from 'react';
import { motion } from 'framer-motion';
import { wave } from '../../assets';

const CommonHero = ({ title, description }) => {
    return (
        <section className=' hero-section w-full' id='hero'>
            <div class='wave '>
                <img src={wave} alt='' />
            </div>
            <div className='bg-black absolute z-[2] opacity-70 w-full h-full block md:hidden' />
            <motion.div
                initial={{
                    left: '-100px',
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                    left: 0,
                    right: 0,
                }}
                transition={{
                    duration: 0.7,
                    ease: 'easeInOut',
                    delay: 0.2,
                }}
                className='absolute'
            >
                <div className='flex items-center gap-10 justify-around px-10 lg:px-0'>
                    <div className='flex flex-col gap-5 text-center md:text-left z-20'>
                        <h1 data-aos='fade-up' data-aos-delay=''>
                            {title ? title : 'Common Hero Title'}
                        </h1>
                        {description && description.length > 0 && (
                            <p class='mb-5' data-aos='fade-up' data-aos-delay='100'>
                                {description ? description : 'Common Hero Description'}
                            </p>
                        )}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default CommonHero;
