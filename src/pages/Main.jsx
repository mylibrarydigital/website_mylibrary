import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

import { Footer, Navbar } from '../components';
import { Home, Contact, About, PublishWithUsContent, HowtoHandoverManscriptContent, BookPreview, Books } from '../pages';
import PrivacyPolicy from '../components/Main/PrivacyPolicy/PrivacyPolicy';

const Main = () => {
  return (
    <>
      <header
        className='fixed-top d-flex align-items-center bg-white shadow-md'
        id='header'
      >
        <Navbar />
      </header>
      <main id='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='about' element={<About />} />
          <Route
            path='PublishWithUsContent'
            element={<PublishWithUsContent />}
          />
          <Route
            path='HowtoHandoverManscriptContent'
            element={<HowtoHandoverManscriptContent />}
          />
            <Route
            path='PrivacyPolicy'
            element={<PrivacyPolicy />}
          />
          <Route path='books' element={<Books />} />
          <Route path='book/:id' element={<BookPreview />} />
        </Routes>

      </main>
      <footer className='footer relative' role='contentinfo'>
        <Footer />
      </footer>

      {/* Fixed Floating WhatsApp Button - Available on all pages */}
      <a
        href='https://wa.me/message/AHKH6P2IGSGVB1'
        target='_blank'
        rel='noopener noreferrer'
        className='fixed bottom-6 left-6 z-50 d-inline-flex align-items-center gap-2 shadow-lg rounded-full'
        style={{
          backgroundColor: '#25D366',
          padding: '12px 20px',
          color: '#fff',
          textDecoration: 'none',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(37, 211, 102, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        }}
      >
        <span className='font-medium d-inline-flex align-items-center gap-2'>
          <span style={{ fontWeight: '400' }}>Need help?</span>
          <FaWhatsapp fontSize={24} />
          <span>Chat with us</span>
        </span>
      </a>
    </>
  );
};

export default Main;
