import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import "./LeaderboardView.scss";
import LeaderboardTable from "../LeaderboardTable/LeaderboardTable";

class LeaderboardView extends Component {
  state = {
    newPlayer: false,
    editPlayer: false,
    id: 0,
    firstName: "",
    lastName: "",
    playerScore: ""
  };

  editPlayerEvent = player => {
    this.setState({
      editPlayer: !this.state.editPlayer,
      firstName: player.first_name,
      lastName: player.last_name,
      playerScore: player.score,
      id: player.id
    });
  };

  deletePlayerEvent = player => {
    this.props.deletePlayer(player.id);
  };

  handleSubmit = e => {
    const { firstName, lastName, playerScore, newPlayer, id } = this.state;
    e.preventDefault();
    if (newPlayer) {
      this.props.addPlayer(firstName, lastName, playerScore);
      this.setState({
        newPlayer: !this.state.newPlayer,
        firstName: "",
        lastName: "",
        playerScore: ""
      });
    } else {
      this.props.editPlayer(firstName, lastName, playerScore, id);
      this.setState({
        editPlayer: !this.state.editPlayer,
        firstName: "",
        lastName: "",
        playerScore: "",
        id: 0
      });
    }
  };

  render() {
    const { playerArr } = this.props;
    const { newPlayer, editPlayer } = this.state;

    return (
      <div className="leaderboard-view-component">
        <LeaderboardTable
          playerArr={playerArr}
          editPlayerEvent={this.editPlayerEvent}
          deletePlayerEvent={this.deletePlayerEvent}
        />
        <div className="table-btn-ctrls">
          <div
            className="table-btn"
            id="nav1"
            onClick={() => this.setState({ newPlayer: true })}
          >
            <h3>ADD PLAYER</h3>
          </div>
        </div>
        {newPlayer || editPlayer ? (
          <Fade bottom>
            <div className="bg-modal">
              <div className="modal-content">
                <div
                  className="close"
                  onClick={() =>
                    this.setState({ newPlayer: false, editPlayer: false })
                  }
                >
                  +
                </div>
                <form
                  className="player-maker-form"
                  onSubmit={e => this.handleSubmit(e)}
                >
                  <div className="player-name-container">
                    <label
                      htmlFor="new-player-name"
                      className="new-player-name"
                    >
                      Player Name:
                    </label>
                    <input
                      required
                      type="text"
                      className="player-name-input"
                      id="new-player-name"
                      name="name"
                      placeholder="First Name"
                      value={this.state.firstName}
                      onChange={e =>
                        this.setState({ firstName: e.target.value })
                      }
                    />
                    <input
                      required
                      type="text"
                      className="player-name-input"
                      id="new-player-name"
                      name="name"
                      placeholder="Last Name"
                      value={this.state.lastName}
                      onChange={e =>
                        this.setState({ lastName: e.target.value })
                      }
                    />
                    <label
                      htmlFor="new-player-name"
                      className="new-player-name"
                    >
                      Player Score:
                    </label>
                    <input
                      required
                      type="number"
                      inputMode="numeric"
                      autoComplete="off"
                      min="0"
                      max="100"
                      maxLength="3"
                      pattern="^([0-9]|[1-9][0-9]|100)$"
                      className="player-name-input"
                      id="new-player-name"
                      name="name"
                      placeholder="0-100"
                      value={this.state.playerScore}
                      onChange={e =>
                        this.setState({ playerScore: e.target.value })
                      }
                    />
                  </div>
                  {newPlayer ? (
                    <button type="submit">ADD PLAYER</button>
                  ) : (
                    <button type="submit">EDIT PLAYER</button>
                  )}
                </form>
              </div>
            </div>
          </Fade>
        ) : null}
      </div>
    );
  }
}

export default LeaderboardView;
