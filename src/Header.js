import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getEmployeeById, getAllEmployees} from './employeeAPI';

class Header extends Component{
    handleClickHome = () => {
        this.props.history.push("/");

    }
    handleClickEmployeeDirectory = () => {
        this.props.history.push("/directory");

    }
    render(){
        return (
            <div>
                <h2> this is header </h2>
                <button onClick = {this.handleClickHome} > Home Page </button>
                <button onClick = {this.handleClickEmployeeDirectory}> Employee Directory </button>
            </div>
        )
    }
}

export default withRouter(Header);