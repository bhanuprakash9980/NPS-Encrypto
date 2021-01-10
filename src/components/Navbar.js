import React, { Fragment } from 'react';
import 'materialize-css/dist/js/materialize';
import 'materialize-css/dist/css/materialize.css';
const Navbar = () => {
  return (
    <Fragment>
      <nav className=' cyan darken-1'>
        <div className='nav-wrapper'>
          <a href='/' className='brand-logo'>
            Encrypto
          </a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href='#' data-target='mobile-demo' className='sidenav-trigger'>
            <i className='material-icons'>menu</i>
          </a>
          <ul className='right hide-on-med-and-down'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/aes'>AES</a>
            </li>
            <li>
              <a href='/otp'>OTP</a>
            </li>
            <li>
              <a href='/rsa'>RSA</a>
            </li>
            <li>
              <a href='/3des'>3DES</a>
            </li>
            <li>
              <a href='/xor'>XOR</a>
            </li>
          </ul>
        </div>
      </nav>
      <ul className='sidenav  cyan darken-1' id='mobile-demo'>
        <li>
          <a href='/' className='white-text'>
            Home
          </a>
        </li>
        <li>
          <a href='/aes' className='white-text'>
            AES
          </a>
        </li>
        <li>
          <a href='/otp' className='white-text'>
            OTP
          </a>
        </li>
        <li>
          <a href='/rsa' className='white-text'>
            RSA
          </a>
        </li>
        <li>
          <a href='/3des' className='white-text'>
            3DES
          </a>
        </li>
        <li>
          <a href='/xor' className='white-text'>
            XOR
          </a>
        </li>
      </ul>
    </Fragment>
  );
};

export default Navbar;
