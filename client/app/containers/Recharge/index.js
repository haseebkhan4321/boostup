/**
 *
 * Shop
 *
 */

import React from "react";
import { Row, Col, Container } from "reactstrap";
import Input from "../../components/Common/Input";
import Button from "../../components/Common/Button";
import { connect } from "react-redux";
import actions from "../../actions";
class Recharge extends React.PureComponent {
  render() {
    const {
      authenticated,
      rechargeFormData,
      setRechargeAmount,
      rechargeChange,
      rechargeWallet,
      isLoading,
      formErrors,
      isSubmitting,
    } = this.props;
    if (!authenticated) return <Redirect to="/login" />;
    const handleSubmit = (event) => {
      event.preventDefault();
      rechargeWallet();
    };
    //generate an array from 10 to 100 with difference of 10
    const rechargeConstants = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    return (
      <div className="shop buyCoin">
        {isLoading && <LoadingIndicator />}
        <form onSubmit={handleSubmit} noValidate>
          <Row className="mb-10">
            <Col xs="12" lg="12" sm="12" md="12" className="mb-3 px-0 recharge-balance">
              <h1 className="text-center gold-color">Recharge Balance</h1>
            </Col>
            <Col xs="12" lg="12" sm="12" md="12" className="mb-3 px-0 recharge-balance">
              <div className="m-auto p-2">
                <p className="text-center">Current Balance</p>
                <div className="coin-btns recharge-balance-btn">
                  <p className=" text-center mb-1">$8.00</p>
                </div>
              </div>
            </Col>

            <Col xs="12" lg="12" sm="12" md="12" className="mb-3 px-2 recharge-input">
              <Input
                type={"text"}
                label={"Recharge Amount($)"}
                name={"amount"}
                error={formErrors["amount"]}
                value={rechargeFormData.amount}
                onInputChange={(name, value) => {
                  rechargeChange(name, value);
                }}
              />
              <div className="recharge-lists">
                <ul className="pl-5 pr-2 mb-6">
                  {rechargeConstants.map((amount, index) => (
                    <li key={index}>
                      <span onClick={() => setRechargeAmount(amount)}>${amount}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col xs="12" lg="12" sm="12" md="12" className="mb-3 px-2 recharge-input">
              <p className="px-1">Recharge Type</p>
              <div className="recharge-lists">
                <ul className="pl-1 pr-2 mb-6">
                  <li className="active-btn">
                    <span className="text-dark">TRC 20</span>
                  </li>
                </ul>
              </div>
            </Col>

            <Col xs="12" lg="12" sm="12" md="12" className="mb-3 px-0">
              <div>
                <div className="px-0 buycoin-btn pb-3 text-center">
                  <Button
                    className="py-2 px-4 color-black gold-color bg-theme ok-to-recharge create-account-btn"
                    type="submit"
                    text="Ok to Recharge"
                  />
                </div>
                <p className="px-4">The income per</p>
                <div className="Coin-lists">
                  <ul className="pl-5 pr-2 mb-6">
                    <li>The income per movie ti</li>
                    <li>The income </li>
                    <li>The income per movie ti</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    authenticated: state.authentication.authenticated,
    user: state.account.user,
    formErrors: state.recharge.formErrors,
    rechargeFormData: state.recharge.rechargeFormData,
    isSubmitting: state.recharge.isSubmitting,
  };
};

export default connect(mapStateToProps, actions)(Recharge);
