import React, { Fragment } from 'react';
import DESAlgo from './algos/threeDES';
import DESAbout from './about/DES';
const threeDES = () => {
  return (
    <Fragment>
      <div className='row'>
        <div className='col s12'>
          <ul className='tabs'>
            <li className='tab col s6 '>
              <a href='#test1' className='green-text'>
                3DES Encryption/Decryption
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
          <DESAlgo />
        </div>
        <div id='test2' className='col s12'>
          <DESAbout />
        </div>
      </div>
    </Fragment>
  );
};

export default threeDES;
