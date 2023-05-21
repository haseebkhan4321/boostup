/*
 *
 * Withdrawl actions
 *
 */

import { push } from "connected-react-router";
import { success } from "react-notification-system-redux";
import axios from "axios";

import {
  WITHDRAWL_CHANGE,
  WITHDRAWL_RESET,
  SET_WITHDRAWL_LOADING,
  SET_WITHDRAWL_SUBMITTING,
  SET_WITHDRAWL_FORM_ERRORS,
} from "./constants";

import { setAuth } from "../Authentication/actions";
import setToken from "../../utils/token";
import handleError from "../../utils/error";
import { allFieldsValidation } from "../../utils/validation";

export const withdrawlChange = (name, value) => {
  let formData = {};
  formData[name] = value;

  return {
    type: WITHDRAWL_CHANGE,
    payload: formData,
  };
};

export const withdrawlWallet = () => {
  return async (dispatch, getState) => {
    try {
      const rules = {
        amount: "required",
        // password: "required|min:6",
        // firstName: "required",
        // lastName: "required",
      };
      const newWithdrawl = getState().withdrawl.withdrawlFormData;
      const { isValid, errors } = allFieldsValidation(newWithdrawl, rules, {
        "required.amount": "Amount is required.",
        // "required.password": "Password is required.",
        // "required.firstName": "First Name is required.",
        // "required.lastName": "Last Name is required.",
      });
      if (!isValid) {
        return dispatch({ type: SET_WITHDRAWL_FORM_ERRORS, payload: errors });
      }
      dispatch({ type: SET_WITHDRAWL_SUBMITTING, payload: true });
      dispatch({ type: SET_WITHDRAWL_LOADING, payload: true });
      const withdrawl = {
        ...newWithdrawl,
      };
      const response = await axios.post("/api/wallet/withdraw", withdrawl);
      const successfulOptions = {
        title: `You have successfully withdraw amount`,
        position: "tr",
        autoDismiss: 1,
      };
      dispatch(success(successfulOptions));
      dispatch({ type: WITHDRAWL_RESET });
      dispatch(push("/"));
    } catch (error) {
      const title = `Please try to withdrawl again!`;
      handleError(error, dispatch, title);
    } finally {
      dispatch({ type: SET_WITHDRAWL_SUBMITTING, payload: false });
      dispatch({ type: SET_WITHDRAWL_LOADING, payload: false });
    }
  };
};
