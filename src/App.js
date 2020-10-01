import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ friends: users }));
  }

  render() {
    const { friends, searchField } = this.state;
    console.log(searchField);
    const filteredFriends = friends.filter((friend) =>
      friend.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
      <h1> First Test Project</h1>
        <SearchBox
        placeholder='search friends'
          handleChange={(e) =>
            this.setState({
              searchField: e.target.value,
            })
          }
        />
        <CardList friends={filteredFriends}></CardList>
      </div>
    );
  }
}

export default App;
