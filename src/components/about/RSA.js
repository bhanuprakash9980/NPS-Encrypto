import React, { Fragment } from 'react';

const RSA = () => {
  return (
    <Fragment>
      <div className='row'>
        <div className='col s10 offset-s1'>
          <h5>RSA (Rivest–Shamir–Adleman):</h5>
          <p className='flow-text' style={{ fontSize: 20 }}>
            RSA is an algorithm used by modern computers to encrypt and decrypt
            messages.
          </p>
          <p className='flow-text' style={{ fontSize: 20 }}>
            It is an asymmetric cryptographic algorithm. Asymmetric means that
            there are two different keys. This is also called public key
            cryptography, because one of the keys can be given to anyone. The
            other key must be kept private. The algorithm is based on the fact
            that finding the factors of a large composite number is difficult:
            when the factors are prime numbers, the problem is called prime
            factorization. It is also a key pair (public and private key)
            generator.
          </p>

          <p className='flow-text' style={{ fontSize: 20 }}>
            RSA involves a <strong>public</strong> key and{' '}
            <strong>private</strong> key.
          </p>
          <p className='flow-text' style={{ fontSize: 20 }}>
            The public key can be known to everyone- it is used to encrypt
            messages. Messages encrypted using the public key can only be
            decrypted with the private key.
          </p>
          <p className='flow-text'>
            Steps involved in RSA public key encryption algorithm
          </p>
          <div className='col s10 offset-s1'>
            <ul className='collapsible' data-collapsible='accordion'>
              <li>
                <div className='collapsible-header'>
                  <i className='material-icons'>fast_forward</i>Step 1
                </div>
                <div className='collapsible-body'>
                  <span>
                    Choose two different large random prime numbers p and q
                  </span>
                </div>
              </li>
              <li>
                <div className='collapsible-header active'>
                  <i className='material-icons'>fast_forward</i>Step 2
                </div>
                <div className='collapsible-body'>
                  <span>
                    Calculate n=pq <br />n is the modulus for the public key and
                    the private keys
                  </span>
                </div>
              </li>
              <li>
                <div className='collapsible-header'>
                  <i className='material-icons'>fast_forward</i>Step 3
                </div>
                <div className='collapsible-body'>
                  <span>Calculate the totient: phi(n)=(p-1)(q-1)</span>
                </div>
              </li>
              <li>
                <div className='collapsible-header'>
                  <i className='material-icons'>fast_forward</i>Step4
                </div>
                <div className='collapsible-body'>
                  <span>
                    {`Choose an integer e such that 1 < e < phi(n), and e is co-prime to phi(n)`}
                    <br />
                    {`e is released as the public key exponent`}
                  </span>
                </div>
              </li>
              <li>
                <div className='collapsible-header'>
                  <i className='material-icons'>fast_forward</i>Step5
                </div>
                <div className='collapsible-body'>
                  <span>
                    {`Compute d to satisfy the congruence relation de congruence 1`}
                    <br />
                    {`d= (1+x*phi(n))/e to be an integer)`}
                    <br />
                    {`d is kept as the private key exponent`}
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className='row'>
            <div className='col s12'>
              <h5 className='flow-text'>
                Example for RSA public key algorithm:
              </h5>
              <p className='flow-text' style={{ fontSize: 20 }}>
                • Let two primes be p = 7 and q = 13. <br />
                • Thus, modulus n = pq = 7 x 13 = 91.
                <br />
                • Select e = 5, which is a valid choice since there is no number
                that is common factor of 5 and (p − 1) (q − 1) = 6 × 12 = 72,
                except for 1.
                <br />
                • The pair of numbers (n, e) = (91, 5) forms the public key and
                can be made available to anyone whom we wish to be able to send
                us encrypted messages.
                <br />
                • Input p = 7, q = 13, and e = 5 to the Extended Euclidean
                Algorithm. <br />
                • The output will be d = 29.
                <br />
                • Check that the d calculated is correct by computing −<br />
                de = 29 × 5 = 145 = 1 mod 72
                <br />• Hence, public key is (91, 5) and private keys is (91,
                29).
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RSA;
