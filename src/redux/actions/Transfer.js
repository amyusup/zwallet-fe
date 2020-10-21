import Axios from "axios";

const TransferRequest = () => {
return {
    type: "TRANSFER_REQUEST",
  };
};

const TransferSuccess = (data) => {
  return {
    type: "TRANSFER_SUCCESS",
    payload: data,
  };
};

const TransferError = (error) => {
  return {
    type: "TRANSFER_ERROR",
    payload: error,
  };
};

//add transfer users
const AddTransferUserRequest = () => {
  return {
      type: "ADD_TRANSFER_USER_REQUEST",
    };
  };
  
  const AddTransferUserSuccess = (data) => {
    return {
      type: "ADD_TRANSFER_USER_SUCCESS",
      payload: data,
    };
  };
  
  const AddTransferUserError = (error) => {
    return {
      type: "ADD_TRANSFER_USER_ERROR",
      payload: error,
    };
  };

export const GetTransferUsers = (fields) => {
    // console.log(fields)
    return (dispatch) => {
        dispatch(TransferRequest());
        return Axios({
          method: "GET",
          url: process.env.REACT_APP_BASE_URL_API + "transfer",
          headers:fields
        })
          .then((res) => {
            const data = res.data;
            dispatch(TransferSuccess(data));
          })
          .catch((err) => {
            const message = err.message;
            dispatch(TransferError(message));
          });
      };
};

export const AddTransferUser = (fields) => {
    // console.log(fields)
    return (dispatch) => {
        dispatch(AddTransferUserRequest());
        return Axios({
          method: "POST",
          url: process.env.REACT_APP_BASE_URL_API + "transfer",
          headers:fields,
          data:fields.data
        })
          .then((res) => {
            const data = res.data;
            dispatch(AddTransferUserSuccess(data));
          })
          .catch((err) => {
            const message = err.message;
            dispatch(AddTransferUserError(message));
          });
      };
};
