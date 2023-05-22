/*
 *
 * Signup
 *
 */

import React from "react";

import { connect } from "react-redux";
import { Row, Col } from "reactstrap";
import { Redirect, Link } from "react-router-dom";

import actions from "../../actions";

import Input from "../../components/Common/Input";
import Button from "../../components/Common/Button";
import Checkbox from "../../components/Common/Checkbox";
import LoadingIndicator from "../../components/Common/LoadingIndicator";
import SignupProvider from "../../components/Common/SignupProvider";

class Signup extends React.PureComponent {
  render() {
    const {
      authenticated,
      signupFormData,
      formErrors,
      isLoading,
      isSubmitting,
      isSubscribed,
      signupChange,
      signUp,
      subscribeChange,
    } = this.props;

    if (authenticated) return <Redirect to="/dashboard" />;

    const handleSubmit = (event) => {
      event.preventDefault();
      signUp();
    };

    return (
      <div>
        <div className="signup-form">
          {isLoading && <LoadingIndicator />}
          <form onSubmit={handleSubmit} noValidate>
            <Row>
              <Col xs="12" lg="12" sm="12" md="12" className="mb-3 px-0 recharge-balance">
                <h1 className="text-center gold-color mt-3">Register</h1>
                <p className="px-4">A Money booster marketplace of your dreams. Join Now ! </p>
              </Col>
              <Col xs="12" lg="12" sm="12" md="12" className="mb-1 px-4 login-form-input">
                <Input
                  type={"text"}
                  error={formErrors["email"]}
                  label={"Email Address"}
                  name={"email"}
                  placeholder={"Please Enter Your Email"}
                  value={signupFormData.email}
                  onInputChange={(name, value) => {
                    signupChange(name, value);
                  }}
                />
              </Col>
              <Col xs="12" lg="12" sm="12" md="12" className="mb-1 px-4 login-form-input">
                <Input
                  type={"text"}
                  error={formErrors["firstName"]}
                  label={"First Name"}
                  name={"firstName"}
                  placeholder={"Please Enter Your First Name"}
                  value={signupFormData.firstName}
                  onInputChange={(name, value) => {
                    signupChange(name, value);
                  }}
                />
              </Col>
              <Col xs="12" lg="12" sm="12" md="12" className="mb-1 px-4 login-form-input">
                <Input
                  type={"text"}
                  error={formErrors["lastName"]}
                  label={"Last Name"}
                  name={"lastName"}
                  placeholder={"Please Enter Your Last Name"}
                  value={signupFormData.lastName}
                  onInputChange={(name, value) => {
                    signupChange(name, value);
                  }}
                />
              </Col>
              <Col xs="12" lg="12" sm="12" md="12" className="mb-1 px-4 login-form-input">
                <Input
                  type={"password"}
                  label={"Password"}
                  error={formErrors["password"]}
                  name={"password"}
                  placeholder={"Please Enter Your Password"}
                  value={signupFormData.password}
                  onInputChange={(name, value) => {
                    signupChange(name, value);
                  }}
                />
              </Col>
              <Col xs="12" lg="12" sm="12" md="12" className="mb-1 px-4 login-form-input">
                <Input
                  type={"text"}
                  label={"Referral code"}
                  error={formErrors["referral_code_used_by"]}
                  name={"referral_code_used_by"}
                  placeholder={"Enter referral code"}
                  value={signupFormData.referral_code_used_by}
                  onInputChange={(name, value) => {
                    signupChange(name, value);
                  }}
                />
              </Col>
              <Col xs="12" lg="12" sm="12" md="12" className="mb-1 px-4 login-form-input">
                <SignupProvider />
              </Col>
              <Col xs="12" lg="12" sm="12" md="12" className="mb-5 px-0">
                <div className="px-0 buycoin-btn pb-0 mb-3 text-center">
                  <Checkbox
                    id={"subscribe"}
                    label={"Subscribe to newsletter"}
                    checked={isSubscribed}
                    onChange={subscribeChange}
                  />
                  <Button
                    className="py-2 px-4 color-black bg-gold ok-to-recharge create-account-btn"
                    type="submit"
                    variant="primary"
                    text="Sign Up"
                    disabled={isSubmitting}
                  />
                </div>
                <p className="px-4 mb-10 text-center">
                  Already have account?{" "}
                  <Link to="/login">
                    <span className="color-gold"> Login</span>
                  </Link>
                </p>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.authentication.authenticated,
    signupFormData: state.signup.signupFormData,
    formErrors: state.signup.formErrors,
    isLoading: state.signup.isLoading,
    isSubmitting: state.signup.isSubmitting,
    isSubscribed: state.signup.isSubscribed,
  };
};

export default connect(mapStateToProps, actions)(Signup);
