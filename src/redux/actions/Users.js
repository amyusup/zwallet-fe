import Axios from "axios";

const UsersRequest = () => {
  return {
    type: "USERS_REQUEST",
  };
};

const UsersSuccess = (data) => {
  return {
    type: "USERS_SUCCESS",
    payload: data,
  };
};

const UsersError = (error) => {
  return {
    type: "USERS_ERROR",
    payload: error,
  };
};

//search
const SearchUserRequest = () => {
  return {
    type: "SEARCH_USER_REQUEST",
  };
};

const SearchUserSuccess = (data) => {
  return {
    type: "SEARCH_USER_SUCCESS",
    payload: data,
  };
};

const SearchUserError = (error) => {
  return {
    type: "SEARCH_USER_ERROR",
    payload: error,
  };
};

//delete
const DeletePhoneUserRequest = () => {
  return {
    type: "DELETE_PHONE_USER_REQUEST",
  };
};

const DeletePhoneUserSuccess = (data) => {
  return {
    type: "DELETE_PHONE_USER_SUCCESS",
    payload: data,
  };
};

const DeletePhoneUserError = (error) => {
  return {
    type: "DELETE_PHONE_USER_ERROR",
    payload: error,
  };
};

//add
const AddPhoneUserRequest = () => {
  return {
    type: "ADD_PHONE_USER_REQUEST",
  };
};

const AddPhoneUserSuccess = (data) => {
  return {
    type: "ADD_PHONE_USER_SUCCESS",
    payload: data,
  };
};

const AddPhoneUserError = (error) => {
  return {
    type: "ADD_PHONE_USER_ERROR",
    payload: error,
  };
};

export const GetUsers = (fields) => {
  // console.log(fields)
  return (dispatch) => {
    dispatch(UsersRequest());
    return Axios({
      method: "GET",
      url: process.env.REACT_APP_BASE_URL_API + "users",
      headers: fields,
    })
      .then((res) => {
        const data = res.data;
        dispatch(UsersSuccess(data[0]));
        // console.log(data[0])
      })
      .catch((err) => {
        const message = err.message;
        dispatch(UsersError(message));
      });
  };
};

//SEARCH
export const SearchUser = (fields) => {
  return (dispatch) => {
    dispatch(SearchUserRequest());
    return Axios({
      method: "GET",
      headers: fields,
      url:
        process.env.REACT_APP_BASE_URL_API + `users/search?name=${fields.name}`,
    })
      .then((res) => {
        const data = res.data;
        dispatch(SearchUserSuccess(data));
        // console.log("data")
      })
      .catch((err) => {
        const message = err.message;
        dispatch(SearchUserError(message));
      });
  };
};

//delete
export const DeletePhoneUser = (fields) => {
  return (dispatch) => {
    dispatch(DeletePhoneUserRequest());
    return Axios({
      method: "PATCH",
      headers: fields,
      url: process.env.REACT_APP_BASE_URL_API + `users`,
      data: fields,
    })
      .then((res) => {
        const data = res.data;
        dispatch(DeletePhoneUserSuccess(data));
        // console.log("data")
      })
      .catch((err) => {
        const message = err.message;
        dispatch(DeletePhoneUserError(message));
      });
  };
};

//post
export const AddPhoneUser = (fields) => {
  return (dispatch) => {
    dispatch(AddPhoneUserRequest());
    return Axios({
      method: "PATCH",
      headers: fields,
      url: process.env.REACT_APP_BASE_URL_API + `users`,
      data: fields,
    })
      .then((res) => {
        const data = res.data;
        dispatch(AddPhoneUserSuccess(data));
        // console.log("data")
      })
      .catch((err) => {
        const message = err.message;
        dispatch(AddPhoneUserError(message));
      });
  };
};
