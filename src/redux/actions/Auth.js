import Axios from "axios";

const AuthLoginRequest = () => {
  return {
    type: "LOGIN_REQUEST",
  };
};

const AuthLoginSuccess = (data) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: data,
  };
};

const AuthLoginError = (error) => {
  return {
    type: "LOGIN_ERROR",
    payload: error,
  };
};

export const AuthLogin = (fields) => {
  return (dispatch) => {
    dispatch(AuthLoginRequest());
    return Axios({
      method: "POST",
      data: fields,
      url: process.env.REACT_APP_BASE_URL_API + "auth/login",
    })
      .then((res) => {
        const data = res.data;
        dispatch(AuthLoginSuccess(data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(AuthLoginError(message));
      });
  };
};

export const AuthLogout = () => {
  return {
    type: "LOGOUT",
  };
};
