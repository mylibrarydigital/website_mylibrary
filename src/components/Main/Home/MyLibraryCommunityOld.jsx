import React from 'react';

import {
  person1,
  person2,
  person3,
  person4,
  phone2,
  convercation,
} from '../../../assets';

const MyLibraryCommunity = () => {
  return (
    <div className='text-center flex flex-col justify-center items-center relative'>
      <div className='bg-white absolute z-[2]  opacity-90 w-full h-full block md:hidden'></div>
      <div className='flex flex-col justify-center items-center md:flex-row container-fluid  md:pt-0 md:gap-1'>
        <div className='md:max-w-[50%] z-[2] '>
          <div className='row justify-content-center text-center'>
            <div >
              <h2 className='section-heading'>  <br />My Library Community</h2>
            </div>
          </div>
          <p className='container-fluid-padding'>
            Once you download the mobile app you can join with your friends
            inside the community who are book bugs same as you. You can post,
            share and update about what your reading now, Really interesting!
          </p>
        </div>
        <div className='w-full md:max-w-[50%] z-[1] absolute md:static'>
          <div className='flex mx-auto justify-center'>
            <div className='flex lg:mb-[-100px] mb-[-50px] lg:py-0 py-5'>
              <img
                src={phone2}
                alt=''
                className='lg:h-[500px] h-[220px] sm:h-[350px] rotate-[10deg]  
                  transition ease-in-out delay-150 hover:shadow-md hover:-translate-y-1 hover:scale-110 hover:font-bold duration-300 ... '
              />
            </div>
            <div className='flex items-end ml-[-400px]'>
              <img
                src={convercation}
                alt=''
                className='lg:w-[200px] h-[200px] lg:h-[150px] w-[180px] z-10 '
              />
            </div>
          </div>
          <div className='flex mt-[-60px] lg:h-[200px]  lg:ml-0 ml-[-30px] overflow-hidden '>
            <img src={person1} alt='' className='z-20 h-[200px]   
              transition ease-in-out delay-150 hover:shadow-md hover:-translate-y-1 hover:scale-110 hover:font-bold duration-300 ...       
              ' />
            <img src={person2} alt='' className='mx-[-70px] z-10 h-[200px]
              transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:font-bold duration-300 ...
              ' />
            <img src={person3} alt='' className='z-20 h-[200px]
              transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:font-bold duration-300 ...
              ' />
            <img src={person4} alt='' className='mx-[-70px] z-10 h-[200px]
              transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:font-bold duration-300 ...
              ' />
            <img src={person1} alt='' className='z-20 h-[200px]  
                transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:font-bold duration-300 ...        
              ' />
            <img src={person2} alt='' className='mx-[-70px] z-10 h-[200px]
              
              transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:font-bold duration-300 ...        

              ' />
          </div>

        </div>
      </div>

    </div>
  );
};

export default MyLibraryCommunity;
