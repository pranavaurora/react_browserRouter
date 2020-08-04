import React, { Component } from 'react'
import { getAllEmployees } from "./employeeAPI";
import { withRouter } from 'react-router-dom';
import { Switch, Route, Link, Router } from 'react-router-dom';
import Profile from './Profile';

class Directory extends Component {

    render() {
        const employeeList = getAllEmployees();
        return (
            <div>
                <h1> This is our directory</h1>
                <div>
                    {employeeList.map(employee => {
                        return (
                        <button>
                            <Link to = {"/directory/" + employee.id}> {(employee.name)} 
                            </Link>
                            </button>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default withRouter(Directory);