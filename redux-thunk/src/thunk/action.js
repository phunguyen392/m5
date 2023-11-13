// actions.js
export const login = (username, password) => {
    return (dispatch) => {
      // Gửi yêu cầu đăng nhập bất đồng bộ
      // ...
  
      // Dispatch các actions tương ứng
      dispatch({ type: "LOGIN_REQUEST" });
  
      // Kết quả thành công
      dispatch({ type: "LOGIN_SUCCESS", payload: username });
  
      // Kết quả thất bại
      // dispatch({ type: "LOGIN_FAILURE", payload: error });
    };
  };