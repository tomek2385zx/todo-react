import 'bootstrap/dist/css/bootstrap.min.css';
import AddNewTodo from './AddNewTodo';
import './App.css';
import Menu from './Menu';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <div className = "menu container-fluid text-center">
        <Menu />
      </div>
      <div className="content container-fluid" >
        <div className="row h-100">
          <Sidebar />
          <AddNewTodo />
        </div>
      </div>
    </div>
  );
}

export default App;
