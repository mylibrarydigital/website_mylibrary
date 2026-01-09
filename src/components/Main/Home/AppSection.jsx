import React from 'react';
import { googlePlayBadge } from '../../../assets';

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
              <a
                href='https://play.google.com/store/apps/details?id=com.iamkw97.mylibraryv3&pcampaignid=web_share'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block play-badge-shine mt-2 sm:mt-0'
              >
                <img
                  src={googlePlayBadge}
                  alt='Get it on Google Play'
                  className='h-[50px]'
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
