import React, { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className='container d-flex justify-content-between align-items-center '>
      <div className='logo '>
        <h1>
          <a href='/' className='text-[#42c2f5] cursor-pointer'>
            MyLibrary
          </a>
        </h1>
        {/* <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}
      </div>

      <nav
        id='navbar'
        className={`${showMenu ? 'navbar navbar-mobile' : 'navbar'}`}
      >
        <ul>
          <li>
            <a className='active  cursor-pointer' href='/'>
              Home
            </a>
          </li>
          <li>
            <a href='about'>About</a>
          </li>
          <li className='dropdown cursor-pointer'>
            <a href='PublishWithUsContent'>
              <span>Publish with us</span>{' '}
              <i className='bi bi-chevron-down'></i>
            </a>
            <ul>
            <li>
                <a href='PublishWithUsContent'>Learn about Digital Books</a>
              </li>
              
            <li>
                <a href='/HowtoHandoverManscriptContent'>Convert to Ebook</a>
              </li>
              <li>
                <a href='/HowtoHandoverManscriptContent'>Covert to Audiobook</a>
              </li>
              <li>
                <a href='/HowtoHandoverManscriptContent'>New Authors</a>
              </li>
             
            </ul>
          </li>
          <li className='dropdown'>
            <a href='/HowtoHandoverManscriptContent'>
              <span>My Library</span> <i className='bi bi-chevron-down'></i>
            </a>
            <ul>
              <li>
                <a href='/HowtoHandoverManscriptContent'>Libraries and Books</a>
              </li>
              <li>
                <a href='AuthorsContent'>Authors</a>
              </li>
          
            </ul>
          </li>
          <li>
            <a href='contact'>Contact Us</a>
          </li>
          <li className='dropdown'>
            <a href='HowtoHandoverManscriptContent'>Articles</a>
            <ul>
              <li>
                <a href='HowtoHandoverManscriptContent'>අත් පිටපතක් ප්‍රකාශකයෙක්ට ඉදිරිපත් කරන්නේ <br /> කෙසේද?</a>
              </li>
              <li>
                <a href='HowtoHandoverManscriptContentone'>ප්‍රකාශකයෙක් තෝරා ගන්නා ආකාරය</a>
              </li>
              <li>
                <a href='HowtoHandoverManscriptContenttwo'>ප්‍රකාශකයෙක් තෝරාගත යුත්තේ කෙසේද?</a>
              </li>
              <li>
                <a href='HowtoHandoverManscriptContentthree'>අත් පිටපතක් ප්‍රතික්ශේප වන්නේ ඇයි?</a>
              </li>
          
            </ul>
          </li>
         
        </ul>
        <button
          className='bi bi-list mobile-nav-toggle'
          onClick={() => setShowMenu(!showMenu)}
        >
          <HiOutlineMenu />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
