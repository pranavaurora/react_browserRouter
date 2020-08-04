import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {getEmployeeById} from './employeeAPI';

class Profile extends Component {
    constructor(props) {
        super(props);
        const employee = getEmployeeById(this.props.match.params.id);
        let employeeId= "not found"
        let employeeName = "not found"
        let employeeRole = "not found"
        if (employee.length>0) {
            employeeId = employee[0].id;
            employeeName = employee[0].name;
            employeeRole = employee[0].role
        }
        this.state = {
            id: employeeId,
            name: employeeName,
            role: employeeRole
        }
    }
    render() {
        return (
            <div>
                <h1> This is the profile </h1>
                <h4> Name: {this.state.name} </h4>
                <h5> Role: {this.state.role}</h5>
                <h6> id: {this.state.id}</h6>
            </div>
        )
    }
}

export default withRouter(Profile);