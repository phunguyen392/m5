// reducers.js
const initialState = {
    loading: false,
    user: null,
    error: null,
  };
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN_REQUEST":
        return { ...state, loading: true };
      case "LOGIN_SUCCESS":
        return { ...state, loading: false, user: action.payload, error: null };
      case "LOGIN_FAILURE":
        return { ...state, loading: false, user: null, error: action.payload };
      default:
        return state;
    }
  };
  
  export default loginReducer;