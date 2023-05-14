/*
 *
 * Login
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import actions from '../../actions';

import Input from '../../components/Common/Input';
import Button from '../../components/Common/Button';
import LoadingIndicator from '../../components/Common/LoadingIndicator';
import SignupProvider from '../../components/Common/SignupProvider';

class Login extends React.PureComponent {
  render() {
    const {
      authenticated,
      loginFormData,
      loginChange,
      login,
      formErrors,
      isLoading,
      isSubmitting
    } = this.props;

    if (authenticated) return <Redirect to='/dashboard' />;

    const registerLink = () => {
      this.props.history.push('/register');
    };

    const handleSubmit = event => {
      event.preventDefault();
      login();
    };

    return (
      <div>
      {/* already builted form start*/}
      <div className='shop buyCoin'>
        {isLoading && <LoadingIndicator />}
        <form onSubmit={handleSubmit} noValidate>
        <Row>
         <Col xs='12' lg='12' sm='12' md='12' className='mb-3 px-0 recharge-balance'>
        <h1 className='text-center gold-color mt-3'>Login To Account</h1>
        <p className='px-4'>A Money booster marketplace of your dreams. Join Now ! </p>
          </Col>
            
              <Col xs='12' lg='12' sm='12' md='12' className='mb-1 px-4 login-form-input'>
              <Input
                  type={'text'}
                  error={formErrors['email']}
                  label={'Email Address'}
                  name={'email'}
                  placeholder={'Please Enter Your Email'}
                  value={loginFormData.email}
                  onInputChange={(name, value) => {
                    loginChange(name, value);
                  }}
                />
              </Col>
              <Col xs='12' lg='12' sm='12' md='12' className='mb-1 px-4 login-form-input'>
              <Input
                  type={'password'}
                  error={formErrors['password']}
                  label={'Password'}
                  name={'password'}
                  placeholder={'Please Enter Your Password'}
                  value={loginFormData.password}
                  onInputChange={(name, value) => {
                    loginChange(name, value);
                  }}
                />
              </Col>
              <Col xs='12' lg='12' sm='12' md='12' className='mb-3 px-4 login-form-input'>
              <SignupProvider />
              </Col>
              <Col xs='12' lg='12' sm='12' md='12' className='mb-3 px-0'>
                <p className='px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lore
                                      ipsum dolor sit amet, consectetur adipiscing elit</p>
          </Col>
          </Row>
          <Col xs='12' lg='12' sm='12' md='12' className='mb-5 px-0'>
        <div className='px-0 buycoin-btn pb-3 mb-3 text-center'>
                <Button
                className='py-2 px-4 color-black bg-gold ok-to-recharge create-account-btn'
                type='submit'
                text='Login'
                disabled={isSubmitting}
              />
                {/* <h1 className='py-2 px-4 color-black bg-gold ok-to-recharge create-account-btn'>Login</h1>   */}
                </div>    
                <p className='px-4 mb-1 text-center'>You don't have account? <Link to='/'>
                <span className='color-gold' onClick={registerLink}> Sign up</span> 
                </Link></p>
        <p className='px-4 mb-5 text-center pb-10'><Link  to={'/forgot-password'}>
                <span className='color-gold mb-5 pb-10'> Forget Password</span> 
                
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
    loginFormData: state.login.loginFormData,
    formErrors: state.login.formErrors,
    isLoading: state.login.isLoading,
    isSubmitting: state.login.isSubmitting
  };
};

export default connect(mapStateToProps, actions)(Login);
