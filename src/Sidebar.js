import React from 'react';
import ReactDOM from 'react-dom';
import './Sidebar.css';

class Sidebar extends React.Component{
    render(){
        return(
            <div className="sidebar col-md-3 h-100">
                <ol>
                    <ul class="list-group ">
                        <li class="list-group-item">GetCurrentDate</li>

                        <li class="list-group-item list-group-item-info">This is a info list group item</li>
                        <li class="list-group-item list-group-item-info">This is a info list group item</li>
                        <li class="list-group-item list-group-item-info">This is a info list group item</li>
                        <li class="list-group-item list-group-item-info">This is a info list group item</li>
                        <li class="list-group-item list-group-item-info">This is a info list group item</li>

                    </ul>
                </ol>
            </div>
        );
    }
}
export default Sidebar;