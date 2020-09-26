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
    }

}

// export class
export default Container;