import React from 'react';
import { PiDevicesBold } from 'react-icons/pi';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { FaCarSide } from 'react-icons/fa';
import { RiMailSendLine } from 'react-icons/ri';

import { phone } from '../../../assets';

const FeatureSection = () => {
  return (
    <div className='relative sm:flex sm:flex-col sm:justify-center sm:items-center'>
      <div className='bg-white absolute z-[2] opacity-90  w-full h-full block sm:hidden'></div>
      <div className='grid grid-cols-1 sm:grid-cols-3 items-center container-fluid container-fluid-padding md:pt-0 gap-5'>
        <div className='w-full text-center z-[2]'>
          <div className='mb-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>
            <PiDevicesBold
              fontSize={50}
              color='rgba(39,70,133,0.8)'
              className='mx-auto'
            />
            <h5 className='text-[#529d96]'>Read across devices</h5>
            <p>
              You can access digital materials with your mobile devices and tablets.
            </p>
          </div>

          <div className='mt-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>
            <AiOutlineCloudDownload
              fontSize={50}
              color='rgba(39,70,133,0.8)'
              className='mx-auto'
            />
            <h5 className='text-[#529d96]'>Access large number of materials</h5>
            <p>
              You will get access to large number of e books, audio books, e news papers and e magazines through mylibrary mobile app.
            </p>
          </div>
        </div>

        <div className='z-[1] absolute sm:static'>
          <div className='circle w-full h-[400px] border-[15px] border-dotted border-[rgba(61,179,197,0.8)] rounded-full flex justify-center items-center'>
            <img src={phone} alt='' className='mx-auto w-[220px]' />
          </div>
        </div>
        <div className='w-full  text-center z-[2]'>
          <div className='mb-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>
            <FaCarSide
              fontSize={50}
              color='rgba(39,70,133,0.8)'
              className='mx-auto'
            />
            <h5 className='text-[#529d96]'>Listen in your car</h5>
            <p>
              You can listen to English and Sinhala audio books while doing any other work.
            </p>
          </div>

          <div className='mt-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>
            <RiMailSendLine
              fontSize={50}
              color='rgba(39,70,133,0.8)'
              className='mx-auto'
            />
            <h5 className='text-[#529d96]'>Community</h5>
            <p>
              My Library community  for every genre and discussion
              groups around every literary topic imaginable. Connect
              and share ideas around your favourite books.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
