import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Main, Admin, Home, Login, Contact, About, PublishWithUsContent, AuthorsContent } from './pages';
import { Profile, MyBooks } from './components';
import BlogSection from "./components/Main/Home/BlogSectionOld";
import { HowtoHandoverManscriptContent } from './pages';
import PrivacyPolicy from './components/Main/PrivacyPolicy/PrivacyPolicy';


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='/' element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='about' element={<About />} />
          <Route path='PublishWithUsContent' element={<PublishWithUsContent />} />
          <Route path='HowtoHandoverManscriptContent' element={<HowtoHandoverManscriptContent />} />

          {/* <Route path='HowtoHandoverManscriptContentone' element={<HowtoHandoverManscriptContentone />} />
          <Route path='HowtoHandoverManscriptContenttwo' element={<HowtoHandoverManscriptContenttwo />} />
          <Route path='HowtoHandoverManscriptContentthree' element={<HowtoHandoverManscriptContentthree />} />  */}


          <Route path='AuthorsContent' element={<AuthorsContent />} />
          <Route path='blog' element={<BlogSection />} />
          <Route path='PrivacyPolicy' element={<PrivacyPolicy />} />
        </Route>
        <Route path='/admin' element={<Admin />}>
          <Route path='profile' element={<Profile />} />
          <Route path='mybooks' element={<MyBooks />} />
        </Route>
        <Route path='login' element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
