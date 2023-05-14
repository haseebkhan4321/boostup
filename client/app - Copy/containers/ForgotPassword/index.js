/*
 *
 * ForgotPassword
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import { Row, Col } from 'reactstrap';
import { Redirect, Link } from 'react-router-dom';

import actions from '../../actions';

import Input from '../../components/Common/Input';
import Button from '../../components/Common/Button';

class ForgotPassword extends React.PureComponent {
  render() {
    const {
      authenticated,
      forgotFormData,
      formErrors,
      forgotPasswordChange,
      forgotPassowrd
    } = this.props;

    if (authenticated) return <Redirect to='/dashboard' />;

    const handleSubmit = event => {
      event.preventDefault();
      forgotPassowrd();
    };

    return (
      <div>
 <div className='shop buyCoin'>
        <form onSubmit={handleSubmit}>
        <Row>
         <Col xs='12' lg='12' sm='12' md='12' className='mb-3 px-0 recharge-balance'>
        <h1 className='text-center gold-color mt-3'>Forgot Password</h1>
        <p className='px-4'>A Money booster marketplace of your dreams. Join Now ! </p>
          </Col>
            
              <Col xs='12' lg='12' sm='12' md='12' className='mb-3 px-4 login-form-input'>
              <Input
                type={'text'}
                error={formErrors['email']}
                label={'Email Address'}
                name={'email'}
                placeholder={'Please Enter Your Email'}
                value={forgotFormData.email}
                onInputChange={(name, value) => {
                  forgotPasswordChange(name, value);
                }}
              />
              </Col>
          </Row>
          <Col xs='12' lg='12' sm='12' md='12' className='mb-5 px-0'>
        <div className='px-0 buycoin-btn pb-3 mb-3 text-center'>
        <Button
              type='submit'
              variant='primary'
              text='Send Email'
              className='mb-3 mb-md-0'
            />
                </div>    
                <p className='px-4 mb-0 text-center'>Back to Login <Link className='redirect-link' to={'/login'}>
                <span className='color-gold mb-10'> Login</span> 
                
        </Link></p>
          </Col>
        </form>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.authentication.authenticated,
    forgotFormData: state.forgotPassword.forgotFormData,
    formErrors: state.forgotPassword.formErrors
  };
};

export default connect(mapStateToProps, actions)(ForgotPassword);
