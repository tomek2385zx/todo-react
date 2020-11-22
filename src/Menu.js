import React from 'react';
import ReactDOM from 'react-dom';
import './Menu.css';

class Menu extends React.Component {
    
    getCurrentDate(separator=''){

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        let DayOfWeek = newDate.getDay();



        return 1;
    }

    render(){
        return(
            <div className="row text-center h-100 d-inline-block">
                <div className="col-md-12 h-100 items-align">
                    <button type="button" class="btn btn-outline-info">Poniedziałek</button>
                    <button type="button" class="btn btn-outline-info">Wtorek</button>
                    <button type="button" class="btn btn-outline-info">Środa</button>
                    <button type="button" class="btn btn-outline-info">Czwartek</button>
                    <button type="button" class="btn btn-outline-info">Piątek</button>
                    <button type="button" class="btn btn-outline-info">Sobota</button>
                    <button type="button" class="btn btn-outline-info">Niedziela</button>
                </div>
            </div>
        );
    }
}
export default Menu;