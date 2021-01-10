import React, { Fragment } from 'react';
import AESAlgo from './algos/AES';
import AESabout from './about/AES';

const AES = () => {
  return (
    <Fragment>
      <div className='row'>
        <div className='col s12'>
          <ul className='tabs'>
            <li className='tab col s6 '>
              <a href='#test1' className='green-text'>
                AES Encryption/Decryption
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
          <AESAlgo />
        </div>
        <div id='test2' className='col s12'>
          <AESabout />
        </div>
      </div>
    </Fragment>
  );
};

export default AES;
