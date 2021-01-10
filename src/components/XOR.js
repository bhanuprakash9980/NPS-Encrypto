import React, { Fragment } from 'react';
import XORalgo from './algos/XOR';
import XORabout from './about/XOR';
const XOR = () => {
  return (
    <Fragment>
      <div className='row'>
        <div className='col s12'>
          <ul className='tabs'>
            <li className='tab col s6 '>
              <a href='#test1' className='green-text'>
                XOR Encryption/Decryption
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
          <XORalgo />
        </div>
        <div id='test2' className='col s12'>
          <XORabout />
        </div>
      </div>
    </Fragment>
  );
};

export default XOR;
