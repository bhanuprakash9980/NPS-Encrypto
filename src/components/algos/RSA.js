import React, { Fragment, useState } from 'react';
import axios from 'axios';

const RSA = () => {
  const [plaintext, setPlaintext] = useState('');

  const [encry, setEncry] = useState({ plain: '', cipher: '' });
  const { plain, cipher } = encry;

  const onChange = (e) => {
    setPlaintext(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (plaintext !== '') {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
      const formData = { msg: plaintext };
      const res = await axios.post(
        `https://nps.debugentity.me/rsa`,
        formData,
        config
      );
      setEncry(res.data);
    }
  };

  return (
    <Fragment>
      <div className='row '>
        <form className='col  m6 s12 offset-m3' onSubmit={onSubmit}>
          <div className='row center-align'>
            <h3 className='flow-text green-text'>Encrypt</h3>
          </div>
          <div className='row  center-align'>
            <div className='btn-floating btn-med'>
              <i className='material-icons pink white-text circle'>
                lock_outline
              </i>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12 '>
              <input
                id='user_name'
                type='text'
                className='validate'
                name='name'
                value={plaintext}
                required
                onChange={onChange}
              />
              <label htmlFor='user_name'>Plain Text</label>
            </div>
          </div>

          <div className='row'>
            <div className='input-field col s12 '>
              <button
                className='btn waves-effect waves-light green'
                type='submit'
                name='action'
              >
                Encrypt using RSA
                <i className='material-icons right'>send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
      {plain && cipher && (
        <div className='col s10 offset-s1'>
          {' '}
          <ul className='collapsible' data-collapsible='accordion'>
            <li>
              <div className='collapsible-header'>
                <i className='material-icons'>fast_forward</i>Ciphertext after
                encryption :- {cipher}
              </div>
            </li>
            <li>
              <div className='collapsible-header active'>
                <i className='material-icons'>fast_forward</i>Plaintext after
                decrypting ciphertext :- {plain}
              </div>
            </li>
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export default RSA;
