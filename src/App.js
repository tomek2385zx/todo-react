import 'bootstrap/dist/css/bootstrap.min.css';
import AddNewTodo from './AddNewTodo';
import './App.css';
import Menu from './Menu';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <div className = "container-fluid h-25 text-center">
        <Menu />
      </div>
      <div className="container-fluid h-75" >
        <div className="row h-100">
          <Sidebar />
          <AddNewTodo />
        </div>
      </div>
    </div>
  );
}

export default App;
