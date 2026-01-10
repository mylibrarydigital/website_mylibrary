import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      {/* <button className='btn btn-primary absolute top-5 right-5'>
        Let's Chat
      </button> */}
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 mb-4 mb-md-0'>
            <h3 className='text-white'>About MyLibrary</h3>
            <p className='text-white'>
              My Library is a digital library and an indipendent digital publishing organization powered by Shengen (Pvt) Ltd. In addition to our own publishing, we collaborate with companies and organizations to tailor books and content. These are in most cases exclusive quest books; it can be about brand-strengthening stories, concept publishing, sound production for companies and authorities.
            </p>
            <p className='social'>
              <a href='https://www.facebook.com/login/'>
                <span>
                  <FaFacebookF style={{ fill: '#42557b' }} />
                </span>
              </a>
              <a href='https://twitter.com/'>
                <span>
                  <FaTwitter style={{ fill: '#42557b' }} />
                </span>
              </a>
              <a href='https://www.instagram.com/'>
                <span>
                  <FaInstagram style={{ fill: '#42557b' }} />
                </span>
              </a>
              <a href='https://www.linkedin.com/'>
                <span>
                  <FaLinkedinIn style={{ fill: '#42557b' }} />
                </span>
              </a>
            </p>
          </div>
          <div className='col-md-7 ms-auto'>
            <div className='row site-section pt-0'>
              <div className='col-md-4 mb-4 mb-md-0'>
                <h3 className='text-white'>Navigation</h3>
                <ul className='list-unstyled'>
                  <li>
                    <a href='/about'>About</a>
                  </li>
                  <li>
                    <a href='/PublishWithUsContent'>New Authors</a>
                  </li>
                  <li>
                    <a href='/HowtoHandoverManscriptContent'>Blog</a>
                  </li>
                  <li>
                    <a href='/contact'>Contact</a>
                  </li>
                </ul>
              </div>
              <div className='col-md-4 mb-4 mb-md-0'>
                <h3 className='text-white'>Policies and Conditions</h3>
                <ul className='list-unstyled'>
                  <li>
                    <a href='/PrivacyPolicy'>Privacy Policy</a>
                  </li>
                  <li>
                    <button type="button" className="btn-link text-white p-0 border-0 bg-transparent text-decoration-underline" style={{cursor: 'pointer', display: 'block', width: '100%', textAlign: 'left'}}>Subscription Policy</button>
                  </li>
                  <li>
                    <button type="button" className="btn-link text-white p-0 border-0 bg-transparent text-decoration-underline" style={{cursor: 'pointer', display: 'block', width: '100%', textAlign: 'left'}}>Terms</button>
                  </li>
                  <li>
                    <button type="button" className="btn-link text-white p-0 border-0 bg-transparent text-decoration-underline" style={{cursor: 'pointer', display: 'block', width: '100%', textAlign: 'left'}}>Copyrights</button>
                  </li>
                </ul>
              </div>
              <div className='col-md-4 mb-4 mb-md-0'>
                <h3 className='text-white'>Downloads</h3>
                <ul className='list-unstyled'>
                  {/* <li>
                    <a href='#'>Get from the App Store</a>
                  </li> */}
                  <li>
                    <button type="button" className="btn-link text-white p-0 border-0 bg-transparent text-decoration-underline" style={{cursor: 'pointer', display: 'block', width: '100%', textAlign: 'left'}}>Get from the Play Store</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='row justify-content-center text-center'>
          <div className='col-md-7'>
            <p className='copyright text-white'>
              &copy; Copyright MyLibrary. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
