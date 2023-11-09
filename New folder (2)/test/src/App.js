import "./App.css";
import { BrowserRouter, Route, Routes, JSON } from "react-router-dom";

import MayTinh from "./components/vd/MayTinh";
import Counter from "./components/vd/trien_khai_useState";
import bt1 from "./components/vd/bt1";
import Exemple from "./components/vd/useEffec";
import Maytinh1 from "./components/vd/MayTinh1";
import MayTinh2 from "./components/vd/MayTinh2";
import Car from "./components/vd/Car";
import TodoList1 from "./components/vd/TodoList1";

//form
// import MyForm from './components/form/dk_render';
// import AddForm from './components/form/dk_render';
import TestRoute from './components/vd/TestRoute';
import MyForm1 from "./components/form/dk_render";
// import AddForm from "./components/form/dk_render";
// import Form2 from './components/form/form2';
// import ValidationSchemaExample from './components/form/ValidationSchema';
import TodoList from "./components/TodoList";
// import TestRoute from "./components/TestRoute";

//crud
import Create from "./components/pages/Create";
import List from "./components/pages/List";
import Edit from "./components/pages/Edit";


function App() {
  return (
    <div className="App">

      {/* <MayTinh/> */}
      <br />
      {/* <Counter/> */}
      <bt1 />
      {/* <useEffec/> */}
      {/* <Maytinh1/> */}
      {/* <MayTinh2/> */}
      {/* <Car/> */}
      {/* <MyForm/> */}
      {/* <AddForm/> */}
      < TodoList />
      {/* <Form2/> */}
      {/* <ValidationSchemaExample/> */}
      {/* <Lol/> */}
      {/* < TodoFomik /> */}

      {/* <TestRoute/> */}

      <BrowserRouter>
        <Routes>
          
          {/* <Route path="/" element={<List />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/Edit/:id" element={<Edit />} /> */}


          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
