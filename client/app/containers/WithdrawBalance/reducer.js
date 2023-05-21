/*
 *
 * Withdrawl reducer
 *
 */

import {
  WITHDRAWL_CHANGE,
  WITHDRAWL_RESET,
  SET_WITHDRAWL_LOADING,
  SET_WITHDRAWL_SUBMITTING,
  SET_WITHDRAWL_FORM_ERRORS,
} from "./constants";

const initialState = {
  withdrawlFormData: {
    amount: "",
    // firstName: "",
    // lastName: "",
    // password: "",
  },
  formErrors: {},
  isSubmitting: false,
  isLoading: false,
};

const withdrawlReducer = (state = initialState, action) => {
  switch (action.type) {
    case WITHDRAWL_CHANGE:
      return {
        ...state,
        withdrawlFormData: { ...state.withdrawlFormData, ...action.payload },
      };

    case SET_WITHDRAWL_FORM_ERRORS:
      return {
        ...state,
        formErrors: action.payload,
      };
    case SET_WITHDRAWL_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_WITHDRAWL_SUBMITTING:
      return {
        ...state,
        isSubmitting: action.payload,
      };
    case WITHDRAWL_RESET:
      return {
        ...state,
        withdrawlFormData: {
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

export default withdrawlReducer;
