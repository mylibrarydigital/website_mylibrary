import React from 'react';

import { undraw_3 } from '../../../assets';

const Libraries = () => {
  return (
    <section className=' py-1 px-3'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-4 ms-auto order-2'>
            <h2 className='mb-4 text-4xl'>Our Libraries</h2>
            <p className='mb-4'>
              Two types of libraries, Sinhala and English are available within
              MyLibrary. Yyou can switch between two libraries easily. Select
              Sinhala or English or both libraries when you signup.
            </p>
          </div>
          <div className='col-md-6' data-aos='fade-right'>
            <img src={undraw_3} alt='' className='img-fluid' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Libraries;
