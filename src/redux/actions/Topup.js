import Axios from "axios";

const TopupRequest = () => {
return {
    type: "TOPUP_REQUEST",
  };
};

const TopupSuccess = (data) => {
  return {
    type: "TOPUP_SUCCESS",
    payload: data,
    // payload:false
  };
};

const TopupError = (error) => {
  return {
    type: "TOPUP_ERROR",
    payload: error,
  };
};

export const GetTopup = (fields) => {
    // console.log(fields)
    return (dispatch) => {
        dispatch(TopupRequest());
        return Axios({
          method: "GET",
          url: process.env.REACT_APP_BASE_URL_API + `topup`,
          headers:fields
        })
          .then((res) => {
            const data = res.data;
            dispatch(TopupSuccess(data));
          })
          .catch((err) => {
            const message = err.message;
            dispatch(TopupError(message));
          });
      };
};
