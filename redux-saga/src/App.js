import './App.css';
import Login from './components/Login';
import User from './components/User';
import store from './redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
     <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users" element={<User />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
