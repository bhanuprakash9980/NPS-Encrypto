import React, { Fragment } from 'react';
import Slider from './Slider';
const Home = () => {
  return (
    <Fragment>
      <Slider />
      <div className='row'>
        <div className='col s10 offset-s1'>
          <h5>About Cryptography</h5>
          <p className='flow-text' style={{ fontSize: 20 }}>
            The history of cryptography begins thousands of years ago and
            contains a variety of different types of encryption. Earlier
            algorithms were performed by hand and were substantially different
            from modern algorithms, which are generally executed by a machine.
            <br />
            <br />
            Cryptography is the science of using mathematics to encrypt and
            decrypt data. Cryptography enables you to store sensitive
            information or transmit it across insecure networks (such as
            Internet) so that it cannot be read by anyone except the intended
            recipient.
            <br />
            <br />
            Although cryptography is the science of securing data, cryptanalysis
            is the science of analysing and breaking secure communication.
            Classical cryptanalysis involves an interesting combination of
            analytical reasoning, application of mathematical tools, pattern
            finding, patience, determination and luck. Cryptanalysts are also
            known as attackers. Cryptology embraces both cryptography and
            cryptanalysis.
          </p>
          <p className='flow-text' style={{ fontSize: 20 }}>
            The Common Encryption Algorithms are
            <br /> <i className='material-icons'>fast_forward</i>
            <strong>XOR algorithm of encryption and decryption</strong>
            <br /> <i className='material-icons'>fast_forward</i>
            <strong> One Time Pad Cipher</strong> <br />{' '}
            <i className='material-icons'>fast_forward</i>{' '}
            <strong>RSA public key algorithm</strong>
            <br />{' '}
            <strong>
              <i className='material-icons'>fast_forward</i> Triple data
              Encryption (3DES) algorithm <br />{' '}
            </strong>
            <i className='material-icons'>fast_forward</i>{' '}
            <strong>Advance Encryption Standard (AES) algorithm</strong>
            <br /> <i className='material-icons'>fast_forward</i> Two fish
            algorithms
            <br /> <i className='material-icons'>fast_forward</i> Blow fish
            algorithm
          </p>
          <p className='flow-text' style={{ fontSize: 20 }}>
            Secret keys (Symmetric System) -The first method uses a secret key,
            such as the DES and AES algorithms. Both sender and receiver use the
            same key to encrypt and decrypt. This is the fastest computation
            method, but getting the secret key to the recipient in the first
            place is a problem that is often handled by the second method.
            <br />
            <br />
            Public keys (Asymmetric System)- The second method uses a two-part
            key, such as RSA and El Gamal. Each recipient has a private key that
            is kept secret and a public key that is published for everyone. The
            sender looks up or is sent the recipient's public key and uses it to
            encrypt the message. The recipient uses the private key to decrypt
            the message and never publishes or transmits the private key to
            anyone. Thus, the private key is never in transit and remains
            invulnerable.
            <br />
            <br />
            The secret method uses the same key to encrypt and decrypt. The
            problem is transmitting the key to the recipient in order to use it.
            The public key method uses two keys: one kept private and never
            transmitted, while the other is made public. Very often, the public
            key method is used to safely send the secret key to the recipient so
            that the message can be encrypted using the faster secret key
            algorithm.
            <br />
            <br />
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
