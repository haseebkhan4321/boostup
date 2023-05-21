/**
 *
 * Shop
 *
 */

import React from "react";
import { connect } from "react-redux";
import actions from "../../actions";
import { Row, Col } from "reactstrap";
import Input from "../../components/Common/Input";
import Button from "../../components/Common/Button";
import { Redirect } from "react-router-dom";
class WithdrawBalance extends React.PureComponent {
  render() {
    const {
      user,
      authenticated,
      withdrawlFormData,
      withdrawlChange,
      withdrawlWallet,
      isLoading,
      formErrors,
      isSubmitting,
    } = this.props;
    if (!authenticated) return <Redirect to="/login" />;
    const handleSubmit = (event) => {
      event.preventDefault();
      withdrawlWallet();
    };
    return (
      <div className="shop buyCoin">
        {isLoading && <LoadingIndicator />}
        <form onSubmit={handleSubmit} noValidate>
          <Row className="mb-10">
            <Col xs="12" lg="12" sm="12" md="12" className="mb-3 px-0 recharge-balance">
              <h1 className="text-center gold-color mt-1">Withdraw</h1>
            </Col>
            <Col xs="12" lg="12" sm="12" md="12" className="mb-3 px-0 recharge-balance">
              <div className="m-auto p-2">
                <p className="text-center">Current Balance</p>
                <div className="coin-btns recharge-balance-btn">
                  <p className=" text-center mb-1">${user.wallet ? user.wallet.balance : 0}.00</p>
                </div>
              </div>
            </Col>
            <Col xs="12" lg="12" sm="12" md="12" className="mb-3 px-2 recharge-input">
              <Input
                type={"text"}
                label={"WalletADD:"}
                name={"amount"}
                error={formErrors["amount"]}
                value={withdrawlFormData.amount}
                onInputChange={(name, value) => {
                  withdrawlChange(name, value);
                }}
              />
            </Col>
            <Col xs="12" lg="12" sm="12" md="12" className="mb-3 px-2 recharge-input">
              <Input type={"text"} label={"Wallet type:"} name={"walletid"} />
            </Col>
            <Col xs="12" lg="12" sm="12" md="12" className="mb-3 px-2 withdraw-walet">
              <Input type={"text"} label={"WalletADD:"} name={"walletid"} />
            </Col>
            <Col xs="12" lg="12" sm="12" md="12" className="mb-3 px-2 withdraw-walet">
              <Input type={"text"} label={"FundingPW:"} name={"walletid"} />
            </Col>

            <Col xs="12" lg="12" sm="12" md="12" className="mb-5 px-0">
              <div className="px-0 buycoin-btn pb-3 text-center">
                <Button
                  className="py-2 px-4 color-black gold-color bg-theme ok-to-recharge create-account-btn"
                  type="submit"
                  text="Confirm Withdeawal"
                  disabled={isSubmitting}
                />
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
    formErrors: state.withdrawl.formErrors,
    withdrawlFormData: state.withdrawl.withdrawlFormData,
    isSubmitting: state.withdrawl.isSubmitting,
  };
};

export default connect(mapStateToProps, actions)(WithdrawBalance);
