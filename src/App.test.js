import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import MockData from './assets/mockData';
import { sortPlayerArr } from "./assets/cleaners";

jest.mock("./assets/cleaners.js");

const mockPlayerData = MockData.mockPlayerData;
const mockLink = "https://pga-leaderboard-be.herokuapp.com/api/v1/players";
const mockId = 1;

const playerBody = {
  body: '{\"first_name\":\"Rory\",\"last_name\":\"Mcllroy\",\"score\":\"80\"}',
  headers: { 'Content-Type': 'application/json' },
  method: 'POST',
}

describe('App', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<App arr={mockPlayerData}/>)
    instance = wrapper.instance()

    window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockPlayerData),
    }))
  })

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have default state", () => {
    wrapper.setState({
      playerArr: [],
      link: "https://pga-leaderboard-be.herokuapp.com",
      error: ""
    });

    expect(wrapper.state()).toEqual({
      playerArr: [],
      link: "https://pga-leaderboard-be.herokuapp.com",
      error: ""
    });
  });

  describe('componentDidMount', () => {
    it("should invoke 'fetchPlayers' when mounted", () => {
      let mockFn = jest.spyOn(instance, 'fetchPlayers')
      instance.componentDidMount()
      expect(mockFn).toHaveBeenCalled()
    });
  });

  describe('fetchPlayers', () => {
    it("should invoke 'fetch' with correct param", () => {
      instance.fetchPlayers();
      expect(fetch).toHaveBeenCalledWith(wrapper.state('link') + "/api/v1/players")
    });

    it("should invoke 'sortPlayerArr' with correct param", () => {
      sortPlayerArr.mockImplementation(() => Promise.resolve(mockPlayerData));
      instance.fetchPlayers();
      expect(sortPlayerArr).toHaveBeenCalledWith(mockPlayerData);
    });

    it("should set the state of 'newsArr' to the cleanedNewsData", async () => {
      wrapper.setState({ playerArr: [] });
      expect(wrapper.state('playerArr')).toEqual([]);
      sortPlayerArr.mockImplementation(() => Promise.resolve(mockPlayerData));
      await instance.fetchPlayers();
      expect(wrapper.state('playerArr')).toEqual(mockPlayerData);
    });

    it("should throw an error if the response is not ok and save it to state", async () => {
      expect(wrapper.state('error')).toEqual("");
      window.fetch = jest.fn().mockImplementation(() => ({
          response: false,
      }));

      await instance.fetchPlayers();
      expect(wrapper.state('error')).toEqual('players.json is not a function');
    });
  });

  describe('addPlayer', () => {
    it("should invoke 'fetch' with the correct params", () => {
      instance.addPlayer('Rory', 'Mcllroy', '80')
      expect(fetch).toHaveBeenCalledWith("https://pga-leaderboard-be.herokuapp.com/api/v1/players", playerBody)
    });

    it('should throw an error if the response is not ok and save it to state', async () => {
      expect(wrapper.state('error')).toEqual('')
      window.fetch = jest.fn().mockImplementation(() => ({
        response: false,
      }))

      await instance.addPlayer('Rory', 'Mcllroy', '80')
      expect(wrapper.state('error')).toEqual('response.json is not a function')
    });
  });

  describe('deletePlayer', () => {
    it('should invoke fetch with the correct params', () => {
      const mockBody = { method: 'DELETE' }
      instance.deletePlayer(mockId)
      expect(fetch).toHaveBeenCalledWith(`${mockLink}/${mockId}`, mockBody)
    });

    it('should throw an error if the response is not ok and save it to state', async () => {
      expect(wrapper.state('error')).toEqual('')
      window.fetch = jest.fn().mockImplementation(() => ({
        response: false,
      }))

      await instance.deletePlayer(mockId)
      expect(wrapper.state('error')).toEqual('players.json is not a function')
    });
  });

  describe('editPlayer', () => {
    it('should invoke fetch with the correct params', () => {
      const mockBody = {
        body: '{\"first_name\":\"Rory\",\"last_name\":\"Mcllroy\",\"score\":\"80\"}',
        "headers": {"Content-Type": "application/json",},
        "method": "PATCH",}
      instance.editPlayer("Rory", "Mcllroy", "80", 22)
      expect(fetch).toHaveBeenCalledWith(`${mockLink}/22`, mockBody)
    });

    it('should throw an error if the response is not ok and save it to state', async () => {
      expect(wrapper.state('error')).toEqual('')
      window.fetch = jest.fn().mockImplementation(() => ({
        response: false,
      }))

      await instance.editPlayer(mockId)
      expect(wrapper.state('error')).toEqual('players.json is not a function')
    });
  });

});
