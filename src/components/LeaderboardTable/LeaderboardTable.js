import React, { Component } from "react";
import "./LeaderboardTable.scss";
import Table from "react-bootstrap/Table";

class LeaderboardTable extends Component {
  editPlayerHandler = player => {
    this.props.editPlayerEvent(player);
  };

  deletePlayerHandler = player => {
    this.props.deletePlayerEvent(player);
  };

  render() {
    const { playerArr } = this.props;
    return (
      <div className="leaderboard-table-component">
        <container className="table-head">
          <div className="pga-logo-container">
            <img
              className="pga-logo"
              src={"https://i.imgur.com/ZZt0zk8.png"}
              alt="PGA logo"
            />
          </div>
          <div>
            <h3>1ST ANNUAL FRISCO CHAMPIONSHIP</h3>
            <p>FRISCO, TX</p>
          </div>
        </container>
        <Table hover className="leaderboard-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
              <th>Edit</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {playerArr.map((player, index) => (
              <tr key={index}>
                <td className="player-name">
                  {player.last_name}, {player.first_name}
                </td>
                <td className="player-score">{player.score}</td>
                <td
                  className="edit-player"
                  onClick={() => {
                    this.editPlayerHandler(player);
                  }}
                >
                  <img
                    className="edit-player-btn"
                    src={"https://i.imgur.com/sfaD9Mf.png"}
                    alt="Edit player icon button"
                  />
                </td>
                <td
                  className="delete-player"
                  onClick={() => {
                    this.deletePlayerHandler(player);
                  }}
                >
                  <img
                    className="delete-btn"
                    src={"https://i.imgur.com/ZJ6SKgx.png"}
                    alt="Trash can icon to remove players"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default LeaderboardTable;
