import React from 'react';
import ReactDOM from 'react-dom';
import './Menu.css';

class Menu extends React.Component {
    render(){
        return(
            <div className="menu container-fluid text-center mh-25 d-inline-block">
                <button type="button" class="btn btn-outline-info">Poniedziałek</button>
                <button type="button" class="btn btn-outline-info">Wtorek</button>
                <button type="button" class="btn btn-outline-info">Środa</button>
                <button type="button" class="btn btn-outline-info">Czwartek</button>
                <button type="button" class="btn btn-outline-info">Piątek</button>
                <button type="button" class="btn btn-outline-info">Sobota</button>
                <button type="button" class="btn btn-outline-info">Niedziela</button>
            </div>
        );
    }
}
export default Menu;