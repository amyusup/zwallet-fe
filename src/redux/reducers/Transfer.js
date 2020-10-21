const initialState = {
  data: [],
  loading: false,
};

const Transfer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'TRANSFER_REQUEST':
      return {
        ...state,
        loading: false,
      };
    case 'TRANSFER_SUCCESS':
      return {
        ...state,
        loading: false,
        isLogin:true,
        data: action.payload
      };
    case 'TRANSFER_ERROR':
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

// add transfer user
export const AddTransferUser = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADD_TRANSFER_USER_REQUEST':
      return {
        ...state,
        loading: false,
      };
    case 'ADD_TRANSFER_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        isLogin:true,
        data: action.payload
      };
    case 'ADD_TRANSFER_USER_ERROR':
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
export default Transfer;
