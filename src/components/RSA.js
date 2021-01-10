import React, { Fragment } from 'react';
import RSAalgo from './algos/RSA';
import RSAabout from './about/RSA';
const RSA = () => {
  return (
    <Fragment>
      <div className='row'>
        <div className='col s12'>
          <ul className='tabs'>
            <li className='tab col s6 '>
              <a href='#test1' className='green-text'>
                RSA Encryption/Decryption
              </a>
            </li>
            <li className='tab col s6'>
              <a href='#test2' className='green-text'>
                About Algorithm
              </a>
            </li>
          </ul>
        </div>
        <div id='test1' className='col s12'>
          <RSAalgo />
        </div>
        <div id='test2' className='col s12'>
          <RSAabout />
        </div>
      </div>
    </Fragment>
  );
};

export default RSA;
