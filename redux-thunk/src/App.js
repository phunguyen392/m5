import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./redux/store";
import User from "./components/User";
import LoginForm from "./components/LoginForm";




function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users" element={<User />} />

          <Route path="/login" element={< LoginForm /> } />
         </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;