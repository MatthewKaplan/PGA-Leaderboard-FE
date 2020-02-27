import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import LeaderboardView from "./components/LeaderboardView/LeaderboardView";
import Footer from "./components/Footer/Footer";

class App extends Component {
  state = {
    playerArr: [],
    link: "https://pga-leaderboard-be.herokuapp.com"
  };

  componentDidMount() {
    this.fetchPlayers();
  }

  fetchPlayers = async () => {
    try {
      const players = await fetch(`${this.state.link}/api/v1/players`);
      const response = await players.json();
      await this.sortPlayerArr(response);
      this.setState({ playerArr: response });
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  sortPlayerArr = arr => {
    arr.sort((a, b) => {
      let scoreA = parseInt(a.score);
      let scoreB = parseInt(b.score);
      if (scoreA !== scoreB) {
        return scoreB - scoreA;
      } else if (a.last_name.toLowerCase() < b.last_name.toLowerCase()) {
        return -1;
      } else if (a.last_name.toLowerCase() > b.last_name.toLowerCase()) {
        return 1;
      } else if (a.first_name.toLowerCase() < b.first_name.toLowerCase()) {
        return -1;
      } else if (a.first_name.toLowerCase() > b.first_name.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
  };

  addPlayer = async (first_name, last_name, score) => {
    const { playerArr, link } = this.state;
    const body = { first_name, last_name, score };
    try {
      const response = await fetch(`${link}/api/v1/players`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      const newPlayer = await response.json();
      this.setState({ playerArr: [...playerArr, newPlayer] }, () =>
        this.fetchPlayers()
      );
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  deletePlayer = async id => {
    const { playerArr, link } = this.state;
    try {
      await fetch(`${link}/api/v1/players/${id}`, {
        method: "DELETE"
      });
      this.setState(
        {
          playerArr: playerArr.filter(player => player.id !== id)
        },
        () => this.fetchPlayers()
      );
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  editPlayer = async (first_name, last_name, score, id) => {
    const playerData = { first_name, last_name, score };
    try {
      await fetch(`${this.state.link}/api/v1/players/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(playerData)
      });
      this.fetchPlayers();
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  render() {
    return (
      <div className="App">
        <img
          className="app-bg-image"
          src={"https://i.imgur.com/nf2fsFn.jpg"}
          alt="Golf Course"
        />
        <Header />
        <div className="leaderboard-container">
          <LeaderboardView
            playerArr={this.state.playerArr}
            addPlayer={this.addPlayer}
            deletePlayer={this.deletePlayer}
            editPlayer={this.editPlayer}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
