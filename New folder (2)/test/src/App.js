import './App.css';
import MayTinh from './components/MayTinh';
import Counter from "./components/trien_khai_useState";
import bt1 from './components/bt1';
import Exemple from './components/useEffec';
import Maytinh1 from './components/MayTinh1';
import MayTinh2 from './components/MayTinh2';
import Car from './components/Car';
import TodoList from './components/TodoList';

//form
import MyForm1 from './components/form/dk_render';
import AddForm from './components/form/dk_render';
// import Form2 from './components/form/form2';
// import ValidationSchemaExample from './components/form/ValidationSchema';
import Lol from './components/Todo';



function App() {
  return (
    <div className="App">
    {/* <MayTinh/> */}
    <br/>
    {/* <Counter/> */}
    <bt1/>
    {/* <useEffec/> */}
    {/* <Maytinh1/> */}
    {/* <MayTinh2/> */}
    {/* <Car/> */}
    {/* <MyForm/> */}
    {/* <AddForm/> */}
    {/* <TodoList/> */}
    {/* <Form2/> */}
    {/* <ValidationSchemaExample/> */}
    <Lol/>
    <TodoFormik/>
</div>
  );
}

export default App;
