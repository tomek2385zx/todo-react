import 'bootstrap/dist/css/bootstrap.min.css';
import AddNewTodo from './AddNewTodo';
import './App.css';
import Menu from './Menu';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App container-fluid w-100 h-100">
      <Menu />
      <div className="row h-75 w-100">
      <Sidebar />
      <AddNewTodo />
      </div>
    </div>
  );
}

export default App;
