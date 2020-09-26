// Note for author: this page is the top (look at gallery example you drove for hierarchy)

import React from "react";
import React, {Component} from "react";

// import from other pages to add into main
import Header from "./Header";
import SearchBar from "./SearchBar";
import UserDirectory from "./UserDirectory";

// create class
class Container extends Component {

    state ={
        search: "",
        employees: [],
        filteredEmployees: [],

    };

    componentDidMount() {
        API.randomUsers().then( (res) => {
            this.setState({
                employees: res.data.results,
                filteredEmployees: res.data.results
            });
        } ).catch(err => console.log(err));
    };

    handleInputChange = (event) => {
        const employees = this.state.employees;
        const UserInput = event.target.value;
        const filteredEmployees = employees.filter(
          (employee) =>
            employee.name.first.toLowerCase().indexOf(UserInput.toLowerCase()) > -1
        );
        this.setState({
          filteredEmployees,
        });
      };

}

// export class
export default Container;