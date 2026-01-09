import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BsQrCode } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';

import { phone, phone2, wave, googlePlayBadge } from '../../../assets';

const HeroSection = () => {
  const [showQRModal, setShowQRModal] = useState(false);

  return (
    <section className='hero-section w-full' id='hero'>
      <div class='wave '>
        {/* <svg
          width='100%'
          height='100px'
          viewBox='0 0 1920 100'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          xlink='http://www.w3.org/1999/xlink'
        >
          <g
            id='Page-1'
            stroke='none'
            stroke-width='1'
            fill='none'
            fill-rule='evenodd'
          >
            <g
              id='Apple-TV'
              transform='translate(0.000000, -402.000000)'
              fill='#FFFFFF'
            >
              <path
                d='M0,439.134243 C175.04074,464.89273 327.944386,477.771974 458.710937,477.771974 C654.860765,477.771974 870.645295,442.632362 1205.9828,410.192501 C1429.54114,388.565926 1667.54687,411.092417 1920,477.771974 L1920,757 L1017.15166,757 L0,757 L0,439.134243 Z'
                id='Path'
              ></path>
            </g>
          </g>
        </svg> */}
        <img src={wave} alt='' />
      </div>
      <div className='iphone-wrap-bg' />
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
        className='row absolute'
      >
        <div className='col-12 hero-text-image'>
          <div className='row'>
            <div className='col-lg-8 text-center text-lg-start z-10 flex flex-col gap-3'>
              <h1 data-aos='fade-right'>Welcome to MyLibrary</h1>
              <p data-aos='fade-right' data-aos-delay='100'>
                Entire world is on your pocket now!
              </p>
              <div
                data-aos='fade-right'
                data-aos-delay='200'
                data-aos-offset='-500'
                className='flex flex-col gap-3 justify-center lg:justify-start'
              >
                <div className='flex items-center gap-3 flex-wrap justify-center lg:justify-start'>
                  <a
                    href='https://play.google.com/store/apps/details?id=com.iamkw97.mylibraryv3&pcampaignid=web_share'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-block play-badge-shine'
                  >
                    <img
                      src={googlePlayBadge}
                      alt='Get it on Google Play'
                      className='h-[50px]'
                    />
                  </a>
                  <button
                    onClick={() => setShowQRModal(true)}
                    className='h-[48px] btn btn-outline-white d-inline-flex align-items-center gap-2 qr-btn-shine'
                  >
                    <BsQrCode fontSize={20} />
                    <span>Scan QR</span>
                  </button>
                </div>
                <div className='flex items-center gap-3 flex-wrap justify-center lg:justify-start'>
                  <span className='text-white'>Need help?</span>
                  <a
                    href='https://wa.me/message/AHKH6P2IGSGVB1'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='h-[48px] btn btn-outline-white d-inline-flex align-items-center gap-2'
                    style={{
                      backgroundColor: '#25D366',
                      borderColor: '#25D366',
                      color: '#fff',
                    }}
                  >
                    <FaWhatsapp fontSize={20} />
                    <span>Chat with us</span>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 iphone-wrap'>
              <img
                src={phone}
                alt=''
                className='phone-1'
                data-aos='fade-right'
              />
              <img
                src={phone2}
                alt=''
                className='phone-2'
                data-aos='fade-right'
                data-aos-delay='200'
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* QR Code Modal */}
      {showQRModal && (
        <div
          className='qr-modal-overlay'
          onClick={() => setShowQRModal(false)}
        >
          <div
            className='qr-modal-content'
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowQRModal(false)}
              className='absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors'
              aria-label='Close modal'
            >
              <AiFillCloseCircle fontSize={28} />
            </button>
            <div className='text-center mt-4'>
              <h3 className='text-2xl font-bold mb-4 text-heading'>Scan QR Code</h3>
              <div className='flex justify-center mb-4 p-4 bg-gray-50 rounded-lg'>
                <img
                  src='/qr-code.png'
                  alt='QR Code'
                  className='max-w-full h-auto border-2 border-gray-300 rounded'
                  style={{ maxWidth: '300px', maxHeight: '300px' }}
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect width="200" height="200" fill="white" stroke="%23ccc" stroke-width="2"/%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="black" font-family="Arial" font-size="16"%3EQR Code Image%3C/text%3E%3Ctext x="50%25" y="60%25" text-anchor="middle" dy=".3em" fill="gray" font-family="Arial" font-size="12"%3EAdd /qr-code.png to public folder%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
              <p className='text-gray-600'>
                Scan this QR code to download the MyLibrary app
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
