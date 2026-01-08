import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Footer, Navbar } from '../components';
import { Home, Contact, About, PublishWithUsContent, HowtoHandoverManscriptContent } from '../pages';
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
        </Routes>

      </main>
      <footer className='footer relative' role='contentinfo'>
        <Footer />
      </footer>
    </>
  );
};

export default Main;
