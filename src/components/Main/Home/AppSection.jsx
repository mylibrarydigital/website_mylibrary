import React from 'react';
import { FaGooglePlay, FaApple } from 'react-icons/fa';

const AppSection = () => {
  return (
    <section className='section cta-section'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-6 me-auto text-center text-md-start mb-5 mb-md-0'>
            <h2 className='text-4xl'>Download MyLibrary App</h2>
          </div>
          <div className='col-md-5 text-center text-md-end'>
            <p>
             {/* <a
                href='#'
                className='btn d-inline-flex align-items-center gap-2 mt-2'
              >
                <FaApple fontSize={24} />
                <span>App store</span>
              </a> */} {' '}
              <a
                href='https://play.google.com/store/apps/details?id=com.iamkw97.mylibraryv3&pcampaignid=web_share'
                className='btn d-inline-flex align-items-center gap-2 mt-2 sm:mt-0'
              >
                <FaGooglePlay fontSize={22} />
                <span>Google play</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
