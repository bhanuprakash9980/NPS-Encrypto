import React, { Fragment } from 'react';

const DES = () => {
  return (
    <Fragment>
      <div className='row'>
        <div className='col s10 offset-s1'>
          <h5>Triple DES Algorithm</h5>
          <p className='flow-text' style={{ fontSize: 20 }}>
            Triple DES (3DES or TDES), officially the Triple Data Encryption
            Algorithm (TDEA or Triple DEA), is a symmetric-key block cipher,
            which applies the DES cipher algorithm three times to each data
            block. The Triple Data Encryption Algorithm is variously defined in
            several standards documents like RFC, ANSI, FIPS, NIST, ISO/IEC.
            Triple DES provides a relatively simple method of increasing the key
            size of DES to protect against such attacks, without the need to
            design a completely new block cipher algorithm. Each DES key is 8
            odd-parity bytes, with 56 bits of key and 8 bits of error-detection.
          </p>
          <p className='flow-text' style={{ fontSize: 20 }}>
            A naive approach to increase strength of a block encryption
            algorithm with short key length (like DES) would be to use two keys
            (K1,K2) instead of one, and encrypt each block twice. If the
            original key length is n bits, one would hope this scheme provides
            security equivalent to using key 2n bits long. This approach is
            vulnerable to meet-in-the-middle attack.
          </p>

          <p className='flow-text' style={{ fontSize: 20 }}>
            Y=Ek2(Ek1(x)), one can recover the key pair(k1,k2) in 2^n+1 steps,
            instead of 2^2n steps one would expect from an ideally secure
            algorithm with 2n bits of key.
          </p>

          <h5 className='flow-text'>Encryption process:</h5>
          <p className='flow-text' style={{ fontSize: 20 }}>
            Cipher text=Ek3(Dk2(Ek1(plaintext))) i.e; DES Encrypt witk k1, DES
            Decrypt with k2, then Encrypt with k3.
          </p>
          <h5 className='flow-text'>Decryption process:</h5>
          <p className='flow-text' style={{ fontSize: 20 }}>
            Plaintext=Dk1(Ek2(Dk3(ciphertext))) i.e; Decrypt with k3, encrypt
            with k2, Decrypt with k1.
          </p>
          <p className='flow-text' style={{ fontSize: 20 }}>
            In each case the middle operation is the reverse of the first and
            last. This improves the strength of the algorithm when using keying
            option 2 and provides backward compatibility with DES with keying
            option 3.
          </p>
          <p className='flow-text' style={{ fontSize: 20 }}>
            Two-key triple DES is option 2 where we encrypt with K1, then
            <br />
            <br />
            decrypt with K2 and finally encrypt again with K1. <br /> <br />
            The keyspace is thus 2 x 56 = 112 bits. <br /> <br />
            For example, with K1= 0x0123456789ABCDEF and K2= 0xFEDCBA9876543210
            you would set the triple DES key to be <br /> <br />
            0x0123456789ABCDEFFEDCBA98765432100123456789ABCDEF . <br />
            <br />
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default DES;
