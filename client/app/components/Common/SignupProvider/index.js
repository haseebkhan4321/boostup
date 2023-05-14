/**
 *
 * SignupProvider
 *
 */

import React from 'react';

import { GoogleIcon, FacebookIcon } from '../Icon';
import { BASE_API_URL } from '../../../constants';
import { Row, Col } from 'reactstrap';
const SignupProvider = () => {
  return (
    <div className='shop buyCoin'>
        <Row>
         <Col xs='6' lg='6' sm='6' md='6' className='mb-3 px-0 recharge-balance text-center'>
         <a href={`${BASE_API_URL}/auth/google`} className='mb-2 google-btn'>
        <GoogleIcon />
        <span className='btn-text'>Google</span>
      </a>
         </Col>
         <Col xs='6' lg='6' sm='6' md='6' className='mb-3 px-0 recharge-balance text-center'>
         <a href={`${BASE_API_URL}/auth/facebook`} className='facebook-btn'>
        <FacebookIcon />
        <span className='btn-text'>Facebook</span>
      </a>
         </Col>

         </Row>
     
    </div>
  );
};

export default SignupProvider;
