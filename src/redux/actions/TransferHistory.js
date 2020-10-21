import Axios from "axios";

const TransferHistoryRequest = () => {
return {
    type: "TRANSFER_HISTORY_REQUEST",
  };
};

const TransferHistorySuccess = (data) => {
  return {
    type: "TRANSFER_HISTORY_SUCCESS",
    payload: data,
    // payload:false
  };
};

const TransferHistoryError = (error) => {
  return {
    type: "TRANSFER_HISTORY_ERROR",
    payload: error,
  };
};

export const GetTransferHistory = (fields) => {
    // console.log(fields)
    return (dispatch) => {
        dispatch(TransferHistoryRequest());
        return Axios({
          method: "GET",
          url: process.env.REACT_APP_BASE_URL_API + `transfer/pagination?page=1&order=${fields.order}`,
          headers:fields
        })
          .then((res) => {
            const data = res.data;
            dispatch(TransferHistorySuccess(data));
          })
          .catch((err) => {
            const message = err.message;
            dispatch(TransferHistoryError(message));
          });
      };
};
