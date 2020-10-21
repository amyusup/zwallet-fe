const initialState = {
  data: [],
  loading: false,
};

const Users = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'USERS_REQUEST':
      return {
        ...state,
        loading: false,
      };
    case 'USERS_SUCCESS':
      return {
        ...state,
        loading: false,
        isLogin:true,
        data: action.payload
      };
    case 'USERS_ERROR':
      return {
        ...state,
        loading: false,
        isLogin: false,
        data:[],
        error: action.payload
      };
      case "LOGOUT":
      return {
        ...state,
        loading: false,
        isLogin:false,
        data:[],
        _persist:{
            rehydrated:true,
            version:-1
        }
      };
    default:
      return state
  }
};

export const SearchUser = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SEARCH_USER_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'SEARCH_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case 'SEARCH_USER_ERROR':
      return {
        ...state,
        loading: false,
        isLogin: false,
        data:[],
        error: action.payload
      };

      case "LOGOUT":
      return {
        ...state,
        loading: false,
        isLogin:false,
        data:[],
        _persist:{
            rehydrated:true,
            version:-1
        }
      };

    default:
      return state
  }
};

export const DeletePhonehUser = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'DELETE_PHONE_USER_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'DELETE_PHONE_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case 'DELETE_PHONE_USER_ERROR':
      return {
        ...state,
        loading: false,
        isLogin: false,
        data:[],
        error: action.payload
      };

      case "LOGOUT":
      return {
        ...state,
        loading: false,
        isLogin:false,
        data:[],
        _persist:{
            rehydrated:true,
            version:-1
        }
      };

    default:
      return state
  }
};

export const AddPhonehUser = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADD_PHONE_USER_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'ADD_PHONE_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case 'ADD_PHONE_USER_ERROR':
      return {
        ...state,
        loading: false,
        isLogin: false,
        data:[],
        error: action.payload
      };

      case "LOGOUT":
      return {
        ...state,
        loading: false,
        isLogin:false,
        data:[],
        _persist:{
            rehydrated:true,
            version:-1
        }
      };

    default:
      return state
  }
};


export default Users;
