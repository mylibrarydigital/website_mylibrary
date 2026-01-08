import React from 'react';

import { religious } from '../../../assets';

const ReligiousSection = () => {
  return (
    <>
      <div className="gradient" />
      <div className='container text-center flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center  px-3 md:px-5 py-3 md:pt-0 md:gap-1'>
          <div className='text-center'>
            <div >
              <h2 className='section-heading'>  <br />Religious Section</h2>
            </div>
          </div>
          <div >
            <div className='lg:flex gap-10 flex-row-reverse'>
              <div className='lg:max-w-[50%]  rounded-md  transition ease-in-out delay-200 hover:rounded-lg hover:-translate-y-1 hover:scale-15  duration-300'>
                <img src={religious} alt='' />
              </div>
              <div className='lg:max-w-[50%] flex items-center'>
                <p>
                  When any user login to my library, they can access the religious
                  section. Large number of e books and audio books are availble to
                  elimate your beauty! This contains books belongs to different religions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gradient" />
    </>

  );
};

export default ReligiousSection;
