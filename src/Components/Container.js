// Note for author: this page is the top (look at gallery example you drove for hierarchy)
import React, {Component} from "react";

// import from other pages to add into main
import Header from "./Header";
import SearchBar from "./SearchBar";
import UserDirectory from "./UserDirectory";

// create class
class Container extends Component {

    // set state
    state ={
        search: "",
        users: [],
        filteredUsers: [],

    };

    // connect API
    componentDidMount() {
        API.randomUsers().then( (res) => {
            this.setState({
                users: res.data.results,
                filteredUsers: res.data.results
            });
        } ).catch(err => console.log(err));
    };

    // Handle users
    handleInputChange = (event) => {
        const users = this.state.users;
        const UserInput = event.target.value;
        const filteredUsers = users.filter(
          (user) =>
            user.name.first.toLowerCase().indexOf(UserInput.toLowerCase()) > -1
        );
        this.setState({
          filteredUsers,
        });
      };

      // handle search bar
      handleSearch = (event) => {
        event.preventDefault();
        if (!this.state.search) {
          alert("Enter a user to search by name.");
        }
        const { users, search } = this.state;
        const filteredUsers = users.filter((user) =>
          user.name.first.toLowerCase().includes(search.toLocaleLowerCase())
        );
        this.setState({
          filteredUsers,
        });
      };

      // render page! - with other compenents
      // here starts that hierarchy
      render() {
          return (
              <div className="container mx-auto">
                  <Header/>
                  <SearchBar
                  user = {this.state.users}
                  handleInputChange = {this.handleInputChange}
                  handleSearch = {this.handleSearch}
                  />
                  <UserDirectory
                  tableInputs = {this.state.filteredUsers}
                  />
              </div>
          );
      };


};

// export class
export default Container;