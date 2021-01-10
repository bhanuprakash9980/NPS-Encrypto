import React, { Fragment } from 'react';

const OTP = () => {
  return (
    <Fragment>
      <div className='row'>
        <div className='col s10 offset-s1'>
          <h5>The One Time Pad</h5>
          <p className='flow-text' style={{ fontSize: 20 }}>
            The one-time pad (OTP) is an encryption technique that can't be
            broken, yet requires the utilization of a one-time pre-shared key a
            similar size as, or more than, the message being sent. In this
            procedure, a plaintext is matched with an arbitrary mystery key
            (also called as a one-time pad).
          </p>
          <p className='flow-text' style={{ fontSize: 20 }}>
            At that point, each piece or character of the plaintext is scrambled
            by consolidating it with the relating touch or character from the
            pad utilizing modular addition.
          </p>

          <p className='flow-text' style={{ fontSize: 20 }}>
            The One Time Pad (OTP) which is important cipher to understand ,and
            it was popular around World War II.
          </p>
          <p className='flow-text' style={{ fontSize: 20 }}>
            For any cipher to achieve perfect secrecy it must use keys with
            effectively the same requirements as OTP keys. Digital versions of
            one-time pad ciphers have been used by nations for critical
            diplomatic and military communication, but the problems of secure
            key distribution have made them impractical for most applications.
            <br />
            <br />
            Key is chosen randomly and has to be provided to the destination
            user before hand
          </p>
          <p className='flow-text'>Steps involved in ONE TIME PAD CIPHER</p>
          <div className='col s10 offset-s1'>
            <ul className='collapsible' data-collapsible='accordion'>
              <li>
                <div className='collapsible-header'>
                  <i className='material-icons'>fast_forward</i>Step 1
                </div>
                <div className='collapsible-body'>
                  <span>
                    Plaintext is the actual text that a person want to send to
                    another person
                    <br />X = (x1 x2 … xn)
                  </span>
                </div>
              </li>
              <li>
                <div className='collapsible-header active'>
                  <i className='material-icons'>fast_forward</i>Step 2
                </div>
                <div className='collapsible-body'>
                  <span>
                    A unique key is chosen at random and has to be given to the
                    destination user before hand which can be of same length or
                    more than that of plain text.
                    <br />
                    Key K = (k1 k2 … kn)
                  </span>
                </div>
              </li>
              <li>
                <div className='collapsible-header'>
                  <i className='material-icons'>fast_forward</i>Step 3
                </div>
                <div className='collapsible-body'>
                  <span>
                    Each letter from the pad will be combined in a predetermined
                    way with one letter of the message. It is common, but not
                    required, to assign each letter a numeric value, e.g., "A"
                    is 0, "B" is 1, and so on.
                    <br />
                    ek(X) = (x1+k1 x2 + k2 … xn + kn) mod m
                  </span>
                </div>
              </li>
              <li>
                <div className='collapsible-header'>
                  <i className='material-icons'>fast_forward</i>Step4
                </div>
                <div className='collapsible-body'>
                  <span>
                    Ciphertext is generated from the encrypted text <br />Y =
                    (y1 y2 … yn)
                  </span>
                </div>
              </li>
              <li>
                <div className='collapsible-header'>
                  <i className='material-icons'>fast_forward</i>Step5
                </div>
                <div className='collapsible-body'>
                  <span>
                    Now the encrypted key can be decrypted by the below formula
                    <br />
                    dk(Y) = (y1-k1 y2-k2 … yn-kn) mod m
                  </span>
                </div>
              </li>
              <li>
                <div className='collapsible-header'>
                  <i className='material-icons'>fast_forward</i>Step6
                </div>
                <div className='collapsible-body'>
                  <span>
                    Finally the decrypted text that is the original text is
                    obtained.
                    <br />Z = (z1 z2 … zn)
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className='row'>
            <div className='col s12'>
              <p className='flow-text'>Example on One Time Pad Cipher</p>
              <p className='flow-text' style={{ fontSize: 20 }}>
                {' '}
                {`Suppose a person A wants to send a message "HELLO" to a person B. Assume two pads of paper containing identical random sequences of letters were somehow previously produced and securely issued to both. A chooses the appropriate unused page from the pad. The way to do this is normally arranged for in advance.`}
                <br />
                {`Let us consider the key as "XMCKL". And now the encryption is done as,`}
              </p>
              <img
                src='https://res.cloudinary.com/dusrowd5k/image/upload/v1610281128/NPS_pb1b8x.jpg'
                alt=''
                className='responsive-img'
              />
              <p className='flow-text' style={{ fontSize: 20 }}>
                {' '}
                {`If a number is larger than 25, then the number mod 26 is taken. This simply means that if the computations  go past  Z, the sequence starts again at A.`}
                <br />
                {`Decrypted Message    "E Q N V Z"`}
              </p>
              <img
                src='https://res.cloudinary.com/dusrowd5k/image/upload/v1610281118/NPS2_zxouxd.jpg'
                alt=''
                className='responsive-img'
              />
              <p className='flow-text' style={{ fontSize: 20 }}>
                Similar to the above, if a number is negative, then 26 is added
                to make the number zero or higher.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default OTP;
