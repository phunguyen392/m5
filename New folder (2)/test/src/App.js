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
import MyForm from './components/form/dk_render';
import AddForm from './components/form/dk_render';



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
    <TodoList/>
</div>
  );
}

export default App;