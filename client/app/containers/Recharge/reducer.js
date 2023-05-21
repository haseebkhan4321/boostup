/*
 *
 * recharge reducer
 *
 */

import {
  RECHARGE_CHANGE,
  RECHARGE_RESET,
  SET_RECHARGE_LOADING,
  SET_RECHARGE_SUBMITTING,
  SET_RECHARGE_FORM_ERRORS,
} from "./constants";

const initialState = {
  rechargeFormData: {
    amount: "",
    // firstName: "",
    // lastName: "",
    // password: "",
  },
  formErrors: {},
  isSubmitting: false,
  isLoading: false,
};

const rechargeReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECHARGE_CHANGE:
      return {
        ...state,
        rechargeFormData: { ...state.rechargeFormData, ...action.payload },
      };

    case SET_RECHARGE_FORM_ERRORS:
      return {
        ...state,
        formErrors: action.payload,
      };
    case SET_RECHARGE_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_RECHARGE_SUBMITTING:
      return {
        ...state,
        isSubmitting: action.payload,
      };
    case RECHARGE_RESET:
      return {
        ...state,
        rechargeFormData: {
          amount: "",
          // firstName: "",
          // lastName: "",
          // password: "",
        },
        formErrors: {},
        isLoading: false,
      };
    default:
      return state;
  }
};

export default rechargeReducer;
