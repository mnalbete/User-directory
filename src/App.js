import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
// import testUsers from "./testData.json";
import Filters from "./components/Filters";
import API from "./utils/Api";

class App extends React.Component {
  state = {
    users: [],
    search: "",
  };

  componentDidMount() {
    API.getUsers()
      .then(res => {
        this.setState({ users: res.data.results })
        console.log(res)
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
    
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.users)
    const currentStateUser=this.state.users.filter(user => user.name.last.toUpperCase().includes(this.state.search.toUpperCase()) )
    this.setState({users: currentStateUser})
  }; 

  handleButtonLastNameSort = event => {
    event.preventDefault();
    const sortLast =this.state.users.sort((a,b) => a.name.last > b.name.last ? 1 : -1)
    this.setState({users: sortLast})
  };

  handleButtonFirstNameSort = event => {
    event.preventDefault();
    const sortFirst =this.state.users.sort((a,b) => a.name.first > b.name.first ? 1 : -1)
    this.setState({users: sortFirst})
  };

  render() {
    return (
      <div className="container">
        <Header
        search={this.state.search}
        handleFormSubmit={this.handleFormSubmit}
        handleInputChange={this.handleInputChange} />
        <Filters 
        handleButtonLastNameSort={this.handleButtonLastNameSort}
        handleButtonFirstNameSort={this.handleButtonFirstNameSort} />
        <Body users={this.state.users} />
    </div>
    )
  }
};
export default App;

