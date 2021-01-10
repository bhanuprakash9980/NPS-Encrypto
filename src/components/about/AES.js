import React, { Fragment } from 'react';

const AES = () => {
  return (
    <Fragment>
      <div className='row'>
        <div className='col s10 offset-s1'>
          <h5>Advanced Encryption Standard</h5>
          <p className='flow-text' style={{ fontSize: 20 }}>
            The AES algorithm also known as the Rijndael algorithm is a
            symmetrical block cipher algorithm that takes plain text in blocks
            of 128 bits and converts them to ciphertext using keys of 128, 192,
            and 256 bits. AES algorithm is in the worldwide standard because it
            is considered secure.
          </p>
          <p className='flow-text' style={{ fontSize: 20 }}>
            This is the most popular and widely adopted symmetric encryption
            algorithm. It is found minimum of six time faster than triple DES.
          </p>

          <ol className='flow-text' style={{ fontSize: 20 }}>
            Main Features of AES are as follows:
            <blockquote>
              <li>Symmetric key symmetric block cipher.</li>
              <li>128-bit data, 128/192/256-bit keys</li>
              <li>Faster and stronger than Triple-DES.</li>
              <li>Provide design details and full specification.</li>
            </blockquote>
          </ol>
          <p className='flow-text' style={{ fontSize: 20 }}>
            Replacement for DES was needed as the key size was too small. With
            increasing computing power, it was considered as insecure. Triple
            DES was designed to overcome this drawback but the algorithm was
            found slow.
          </p>
          <p className='flow-text' style={{ fontSize: 20 }}>
            AES is an iterative cipher. It comprises of a series of connected
            operations, some of which involve replacing inputs by specific
            outputs (Substitutions) and others involve shuffling bits around
            (Permutations).
            <br />
            <br />
            AES performs all its computations on bytes instead of bits. Thus,
            AES treats the 128 bits plaintext block as a16 bytes. These 16 bytes
            are arranged in four columns and four rows for processing as a
            matrix.
            <br />
            <br /> The number of rounds in AES depends on the length of the key
            and is variable. It uses 10 rounds for the128-bit keys, 12 rounds
            for the 192-bit keys and 14 rounds for the 256-bit keys. Every round
            uses a different 128-bit round key, which can be calculated from the
            original AES key.
          </p>
          <div className='center-align'>
            <h6>Schematic representation of AES structure:</h6>

            <img
              src='https://res.cloudinary.com/dusrowd5k/image/upload/v1610264423/ef393fed-20d0-4d2d-9e69-8d367f8f0df2_eoc6xk.jpg'
              alt=''
              className='responsive-img'
            />
          </div>
          <h5 className='flow-text'>Encryption process:</h5>
          <p className='flow-text' style={{ fontSize: 20 }}>
            In this process , we restrict to description of a typical round of
            AES encryption. Each round comprise of four sub-processes. The first
            round process is shown below.
          </p>
          <div className='center-align'>
            <img
              src='https://res.cloudinary.com/dusrowd5k/image/upload/v1610264696/4386d298-5769-4256-b8b7-9113453051c3_aebspr.jpg'
              alt=''
              className='responsive-img'
            />
          </div>
          <div className='col s10 offset-s1'>
            {' '}
            <ul className='collapsible' data-collapsible='accordion'>
              <li>
                <div className='collapsible-header'>
                  <i className='material-icons'>fast_forward</i>Sub Bytes
                </div>
                <div className='collapsible-body'>
                  <span>
                    The 16 input bytes are substituted by looking up a fixed
                    table that us given in design. The result is in a matrix of
                    four rows and four columns.
                  </span>
                </div>
              </li>
              <li>
                <div className='collapsible-header active'>
                  <i className='material-icons'>fast_forward</i>Shift rows
                </div>
                <div className='collapsible-body'>
                  <span>
                    Every row of the matrix is shifted to the left. Any entries
                    that fall off are inserted again on the right side of row.
                    Now , the shift is carried out as follows:
                    <br /> - First row is not shifted.
                    <br /> - Second row is shifted one (byte) position to left.
                    <br /> - Third row is shifted two (byte) positions to the
                    left
                    <br /> - Fourth row is shifted three(byte) positions to the
                    left
                    <br /> - The result is a new matrix consisting of the same
                    16 bytes but shifted with respect to each other
                  </span>
                </div>
              </li>
              <li>
                <div className='collapsible-header'>
                  <i className='material-icons'>fast_forward</i>Mix Column
                </div>
                <div className='collapsible-body'>
                  <span>
                    Here each and every column of four bytes is transformed
                    using a special function. This function takes as input the
                    four bytes of one column and outputs four completely
                    different and new bytes, which will replace the original
                    column. The result is another new matrix consisting of 16
                    new bytes. It should be noted that this step is not
                    performed in the last round.
                  </span>
                </div>
              </li>
              <li>
                <div className='collapsible-header'>
                  <i className='material-icons'>fast_forward</i>Add round key
                </div>
                <div className='collapsible-body'>
                  <span>
                    The 16 bytes of the matrix are considered as 128 bits and
                    are XORed to the 128 bits of the round key. The output is
                    the ciphertext if this is the last round. Else, the
                    resulting 128 bits are interpreted as 16 bytes and we begin
                    another similar round.
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className='row'>
            <div className='col s12'>
              <h5 className='flow-text'>Decryption process:</h5>
              <p className='flow-text' style={{ fontSize: 20 }}>
                The decryption process of an AES ciphertext is similar to the
                encryption process but in the reverse order. Each round consists
                of the four processes conducted in the reverse order are :
                <br />- AddRoundKey
                <br />- MixColumns
                <br />- ShiftRows
                <br />- ByteSubstitution
                <br />
                <br />
                Because sub-processes in each round are in reverse manner, the
                encryption and decryption algorithms needs to be separately
                implemented, even though they are very closely related.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AES;
