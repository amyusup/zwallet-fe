const initialState = {
  data: [],
  loading: false,
};

const TransferHistory = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'TRANSFER_HISTORY_REQUEST':
      return {
        ...state,
        loading: false,
      };
    case 'TRANSFER_HISTORY_SUCCESS':
      return {
        ...state,
        loading: false,
        isLogin:true,
        data: action.payload
      };
    case 'TRANSFER_HISTORY_ERROR':
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
export default TransferHistory;
