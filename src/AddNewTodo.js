import React from 'react';
import ReactDOM from 'react-dom';
import './AddNewTodo.css'

class AddNewTodo extends React.Component{
    render(){
        return(
            <div className="addnewtodo col-md-9"> 
                     
                <div className="input-group input-group-lg container w-75">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-lg">Task</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Task" aria-describedby="inputGroup-sizing-sm"></input>
                </div>


                
            </div>
        );
    }
}
export default AddNewTodo;