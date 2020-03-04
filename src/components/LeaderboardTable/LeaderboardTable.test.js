import React from 'react';
import { shallow } from 'enzyme';
import LeaderboardTable from './LeaderboardTable';
import MockData from '../../assets/mockData';

const mockPlayerArr = MockData.mockSinglePlayerData
const mockEditPlayerEvent = jest.fn();
const mockDeletePlayerEvent = jest.fn();

describe('LeaderboardTable', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<LeaderboardTable playerArr={mockPlayerArr} editPlayerEvent={mockEditPlayerEvent} deletePlayerEvent={mockDeletePlayerEvent}/>)
    instance = wrapper.instance()
  })

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should invoke 'editPlayerHandler' with correct params when songs navagation tab is clicked", () => {
    jest.spyOn(instance, "editPlayerHandler");
    wrapper.find("[data-test='edit-btn']").simulate("click");
    expect(instance.editPlayerHandler).toHaveBeenCalledWith(mockPlayerArr[0]);
  });

  it("should invoke 'deletePlayerHandler' with correct params when songs navagation tab is clicked", () => {
    jest.spyOn(instance, "deletePlayerHandler");
    wrapper.find("[data-test='delete-btn']").simulate("click");
    expect(instance.deletePlayerHandler).toHaveBeenCalledWith(mockPlayerArr[0]);
  });
});