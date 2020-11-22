import React from 'react';
import ReactDOM from 'react-dom';
import './Sidebar.css';

class Sidebar extends React.Component{
    
    getCurrentDate(separator=''){

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
        }

    render(){
        return(
            <div className="sidebar col-md-3 h-100">
                <ol>
                    <ul className="list-group ">

                        <li className="text-center list-group-item">Current date {this.getCurrentDate('-')}</li>

                        <li className="list-group-item list-group-item-info">This is a info list group item</li>
                        <li className="list-group-item list-group-item-info">This is a info list group item</li>
                        <li className="list-group-item list-group-item-info">This is a info list group item</li>
                        <li className="list-group-item list-group-item-info">This is a info list group item</li>
                        <li className="list-group-item list-group-item-info">This is a info list group item</li>

                    </ul>
                </ol>
            </div>
        );
    }
}
export default Sidebar;