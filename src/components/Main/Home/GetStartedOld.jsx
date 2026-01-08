import React from 'react';

import { phone3 } from '../../../assets';

const GetStarted = () => {
  return (
    <div className='h-full bg-bgApp bg-cover bg-center bg-no-repeat'>
      <div className='flex flex-col justify-center md:flex-row container-fluid container-fluid-padding'>
        <div className='flex flex-col justify-center items-center'>
          <img src={phone3} alt='' className='w-[220px] sm:w-[310px] md:w-[350px]' />
        </div>
        <div className='flex flex-col justify-center lg:p-20'>
          <h2 className='text-4xl font-semibold text-[#d9dbda]'>
            How to get started with MyLibrary
          </h2>

          <div className='float-left py-10'>
            <div className='flex items-start justify-start py-3'>
              <div className='w-[40px] h-[40px] border-2 border-[#dedede] backdrop-blur-3xl rounded-full flex justify-center items-center'>
                <span className='text-white'>1</span>
              </div>
              <div className='text-white flex flex-1 flex-col ml-4'>
                <h4 className='font-bold text-xl'>
                  Download the mobile application
                </h4>
                <p>
                  Go to Playstore or App store and search for mylibrary
                  application
                </p>
              </div>
            </div>

            <div className='flex items-start justify-start py-3'>
              <div className='w-[40px] h-[40px] border-2 border-[#dedede] backdrop-blur-3xl rounded-[50%] flex justify-center items-center'>
                <span className='text-white'>2</span>
              </div>
              <div className='text-white flex flex-1 flex-col ml-4'>
                <h4 className='font-bold text-xl'>Login</h4>
                <p className='w-[80%]'>
                  Provide the required information and get registered. You
                  need to authenticate your mobile number and email id.
                </p>
              </div>
            </div>

            <div className='flex items-start justify-start py-3'>
              <div className='w-[40px] h-[40px] border-2 border-[#dedede] backdrop-blur-3xl rounded-full flex justify-center items-center'>
                <span className='text-white'>3</span>
              </div>
              <div className='text-white flex flex-1 flex-col ml-4'>
                <h4 className='font-bold text-xl'>Get Membership</h4>
                <p>
                  You have 3 month trail period and after that need to get
                  paid member ship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
