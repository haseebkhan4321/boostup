/*
 *
 * Withdrawl actions
 *
 */

import { push } from "connected-react-router";
import { success } from "react-notification-system-redux";
import axios from "axios";

import {
  RECHARGE_CHANGE,
  RECHARGE_RESET,
  SET_RECHARGE_LOADING,
  SET_RECHARGE_SUBMITTING,
  SET_RECHARGE_FORM_ERRORS,
} from "./constants";

import { setAuth } from "../Authentication/actions";
import setToken from "../../utils/token";
import handleError from "../../utils/error";
import { allFieldsValidation } from "../../utils/validation";

export const rechargeChange = (name, value) => {
  let formData = {};
  formData[name] = value;

  return {
    type: RECHARGE_CHANGE,
    payload: formData,
  };
};

export const rechargeWallet = () => {
  return async (dispatch, getState) => {
    try {
      const rules = {
        amount: "required",
        // password: "required|min:6",
        // firstName: "required",
        // lastName: "required",
      };
      const newWithdrawl = getState().recharge.rechargeFormData;
      const { isValid, errors } = allFieldsValidation(newWithdrawl, rules, {
        "required.amount": "Amount is required.",
        // "required.password": "Password is required.",
        // "required.firstName": "First Name is required.",
        // "required.lastName": "Last Name is required.",
      });
      if (!isValid) {
        return dispatch({ type: SET_RECHARGE_FORM_ERRORS, payload: errors });
      }
      dispatch({ type: SET_RECHARGE_SUBMITTING, payload: true });
      dispatch({ type: SET_RECHARGE_LOADING, payload: true });
      const recharge = {
        ...newWithdrawl,
      };
      const response = await axios.post("/api/wallet/recharge", recharge);
      const successfulOptions = {
        title: `You have successfully withdraw amount`,
        position: "tr",
        autoDismiss: 1,
      };
      dispatch(success(successfulOptions));
      dispatch({ type: RECHARGE_RESET });
      dispatch(push("/"));
    } catch (error) {
      const title = `Please try to recharge again!`;
      handleError(error, dispatch, title);
    } finally {
      dispatch({ type: SET_RECHARGE_SUBMITTING, payload: false });
      dispatch({ type: SET_RECHARGE_LOADING, payload: false });
    }
  };
};

export const setRechargeAmount = (value) => {
  let formData = {};
  formData["amount"] = value;

  return {
    type: RECHARGE_CHANGE,
    payload: formData,
  };
};
