import React from 'react';
import { shallow } from 'enzyme';
import LeaderboardView from './LeaderboardView';
import MockData from '../../assets/mockData';

const mockPlayerArr = MockData.mockPlayerData
const mockSinglePlayerObj = MockData.mockSinglePlayerObj
const mockDeletePlayer = jest.fn();
const mockAddPlayer = jest.fn();
const mockEditPlayer = jest.fn();

describe('LeaderboardView', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<LeaderboardView playerArr={mockPlayerArr} deletePlayer={mockDeletePlayer} addPlayer={mockAddPlayer} editPlayer={mockEditPlayer}/>)
    instance = wrapper.instance()
  })

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have default state", () => {
    wrapper.setState({
        newPlayer: false,
        editPlayer: false,
        id: 0,
        firstName: "",
        lastName: "",
        playerScore: ""
    });

    expect(wrapper.state()).toEqual({
        newPlayer: false,
        editPlayer: false,
        id: 0,
        firstName: "",
        lastName: "",
        playerScore: ""
    });
  });

  it("should change state of newPlayer and editPlayer when clicked", () => {
    wrapper.setState({newPlayer: true,editPlayer: true});
    wrapper.find("[data-test='exit-modal-btn']").simulate("click");
    expect(wrapper.state('editPlayer')).toEqual(false);
    expect(wrapper.state('newPlayer')).toEqual(false);
  });

  it("should change state of newPlayer when clicked", () => {
    wrapper.setState({newPlayer: false});
    wrapper.find("[data-test='new-player-btn']").simulate("click");
    expect(wrapper.state('newPlayer')).toEqual(true);
  });

  it("should invoke 'handleSubmit' on new-player-form submit", () => {
     wrapper.setState({ newPlayer: true })
     jest.spyOn(instance, 'handleSubmit')
     wrapper
      .find("[data-test='player-form']")
      .simulate('submit', { preventDefault() {} })
     expect(instance.handleSubmit).toHaveBeenCalled()
    });

    it("should invoke 'handleSubmit' on edit-player-form submit", () => {
         wrapper.setState({ editPlayer: true })
         jest.spyOn(instance, 'handleSubmit')
         wrapper
          .find("[data-test='player-form']")
          .simulate('submit', { preventDefault() {} })
         expect(instance.handleSubmit).toHaveBeenCalled()
    });

    it("should change the state of 'firstName' onChange", () => {
        wrapper.setState({ newPlayer: true })
        expect(wrapper.state('firstName')).toEqual('')
        let playerName = {
            target: { value: 'Rory', classList: 'player-name-input' },
        }
        wrapper
        .find("[data-test='first-name-input']")
        .simulate('change', playerName)
        expect(wrapper.state('firstName')).toEqual('Rory')
    });

    it("should change the state of 'lastName' onChange", () => {
        wrapper.setState({ newPlayer: true })
        expect(wrapper.state('lastName')).toEqual('')
        let playerName = {
            target: { value: 'Mcllroy', classList: 'player-name-input' },
        }
        wrapper
        .find("[data-test='last-name-input']")
        .simulate('change', playerName)
        expect(wrapper.state('lastName')).toEqual('Mcllroy')
    });

    it("should change the state of 'playerScore' onChange", () => {
        wrapper.setState({ newPlayer: true })
        expect(wrapper.state('playerScore')).toEqual('')
        let playerScore = {
            target: { value: '89', classList: 'player-name-input' },
        }
        wrapper
        .find("[data-test='player-score-input']")
        .simulate('change', playerScore)
        expect(wrapper.state('playerScore')).toEqual('89')
    });


  describe('editPlayerEvent', () => {
      it('should change the state of editPlayer, firstName, lastName, playerScore, and id', () => {
        expect(wrapper.state('editPlayer')).toEqual(false);
        expect(wrapper.state('firstName')).toEqual("");
        expect(wrapper.state('lastName')).toEqual("");
        expect(wrapper.state('playerScore')).toEqual("");
        expect(wrapper.state('id')).toEqual(0);
        instance.editPlayerEvent(mockSinglePlayerObj);
        expect(wrapper.state('editPlayer')).toEqual(true);
        expect(wrapper.state('firstName')).toEqual("Hideki");
        expect(wrapper.state('lastName')).toEqual("Matsuyama");
        expect(wrapper.state('playerScore')).toEqual("75");
        expect(wrapper.state('id')).toEqual(22);
      });
  });

  describe('deletePlayerEvent', () => {
    it("should invoke 'deletePlayer' when called", () => {
        instance.deletePlayerEvent(mockSinglePlayerObj)
        expect(mockDeletePlayer).toHaveBeenCalledWith(22)
    });
  });


});