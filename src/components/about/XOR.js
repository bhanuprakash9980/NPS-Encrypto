import React, { Fragment } from 'react';

const XOR = () => {
  return (
    <Fragment>
      <div className='row'>
        <div className='col s10 offset-s1'>
          <h5>XOR algorithm of encryption and decryption</h5>
          <p className='flow-text' style={{ fontSize: 20 }}>
            XOR (“Exclusive or”) cipher is an additive cipher. It is based on
            the XOR operation also known as the exclusive disjunction in logic.
            <br />
            <br />
            In cryptography , the XOR cipher is an algorithm to perform
            encryption and decryption that operates according to the principles:
            <br />
            <br />
            A XOR 0 = A,
            <br />
            <br />
            A XOR A = 0,
            <br />
            <br />
            (A XOR B) XOR C = A XOR (B XOR C).
          </p>
          <p className='flow-text' style={{ fontSize: 20 }}>
            This operation is sometimes called modulus 2 addition or
            subtraction. XOR cipher does the XOR logical operation in order to
            encrypt data. First, a random key is generated. Then, XOR operation
            is performed using the key so that an encrypted data is created. In
            order to decrypt, the same key should be used and XOR operation
            should be run again. XOR operation uses the same key for both
            encryption and decryption. Hence it is also called as a symmetric
            encryption.
          </p>

          <p className='flow-text'>
            Steps to encrypt the data using XOR cipher:
          </p>
          <div className='col s10 offset-s1'>
            <ul className='collapsible' data-collapsible='accordion'>
              <li>
                <div className='collapsible-header'>
                  <i className='material-icons'>fast_forward</i>Step 1
                </div>
                <div className='collapsible-body'>
                  <span>Get the plain text and get it’s 8-bit ASCII.</span>
                </div>
              </li>
              <li>
                <div className='collapsible-header active'>
                  <i className='material-icons'>fast_forward</i>Step 2
                </div>
                <div className='collapsible-body'>
                  <span>Get the repeating key and get it’s 8-bit ASCII.</span>
                </div>
              </li>
              <li>
                <div className='collapsible-header'>
                  <i className='material-icons'>fast_forward</i>Step 3
                </div>
                <div className='collapsible-body'>
                  <span>
                    Perform logical XOR operation of the plain text with the key
                    and get the encrypted data
                  </span>
                </div>
              </li>
              <li>
                <div className='collapsible-header'>
                  <i className='material-icons'>fast_forward</i>Step4
                </div>
                <div className='collapsible-body'>
                  <span>
                    Once Encrypted text is received, it can be decrypted using
                    the same procedure as mentioned from Step 1 - Step 3
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className='row'>
            <div className='col s12'>
              <p className='flow-text'>Example on XOR Cipher</p>

              <img
                src='https://res.cloudinary.com/dusrowd5k/image/upload/v1610283793/NPS3_kbfczg.jpg'
                alt=''
                className='responsive-img'
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default XOR;
