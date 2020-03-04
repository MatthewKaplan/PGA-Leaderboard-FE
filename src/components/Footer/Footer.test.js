import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";
import MockData from '../../assets/mockData';
import { cleanNewsData } from "../../assets/cleaners";

jest.mock("../../assets/cleaners.js");

const mockNewsData = MockData.mockNews
const mockCleanedNewsData = MockData.mockCleanNews

describe("Footer", () => {
    let wrapper, instance;

    beforeEach(() => {
        wrapper = shallow(<Footer data={mockNewsData} />);
        instance = wrapper.instance()

        window.fetch = jest.fn().mockImplementation(() => 
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockNewsData),
            }))
    });

    it("should match the snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should have default state", () => {
        wrapper.setState({
            newsArr: [],
            link: "https://api.sportsdata.io/golf/v2/json/News?key=2c8dc552e7334a8eaf607b64dcbe5306",
            loading: false,
            error: ""
        });
        
        expect(wrapper.state()).toEqual({
            newsArr: [],
            link: "https://api.sportsdata.io/golf/v2/json/News?key=2c8dc552e7334a8eaf607b64dcbe5306",
            loading: false,
            error: ""
        });
    });

    describe('componentDidMount', () => {
        it("should invoke 'fetchNews' when mounted", () => {
            let mockFn = jest.spyOn(instance, 'fetchNews');
            instance.componentDidMount()
            expect(mockFn).toHaveBeenCalled();
        });
    });

    describe('fetchNews', () => {
        it("should set the state of loading to true", () => {
            expect(wrapper.state('loading')).toEqual(false)
            instance.fetchNews();
            expect(wrapper.state('loading')).toEqual(true)
        });

        it("should invoke 'fetch' with correct param", () => {
            instance.fetchNews();
            expect(fetch).toHaveBeenCalledWith(wrapper.state('link'))
        });

        it("should invoke 'cleanNewsData' with correct param", () => {
            cleanNewsData.mockImplementation(() => Promise.resolve(mockNewsData));
            instance.fetchNews();
            expect(cleanNewsData).toHaveBeenCalledWith(mockNewsData);
        });

        it("should set the state of 'newsArr' to the cleanedNewsData", async () => {
            wrapper.setState({ newsArr: [] });
            expect(wrapper.state('newsArr')).toEqual([]);
            cleanNewsData.mockImplementation(() => Promise.resolve(mockCleanedNewsData));
            await instance.fetchNews();
            expect(wrapper.state('newsArr')).toEqual(mockCleanedNewsData);
        });

        it("should set the state of 'loading' to the false after function is finished", async () => {
            wrapper.setState({ loading: true });
            await instance.fetchNews();
            expect(wrapper.state('loading')).toEqual(false)
        });

        it("should throw an error if the response is not ok and save it to state", async () => {
            expect(wrapper.state('error')).toEqual("");
            window.fetch = jest.fn().mockImplementation(() => ({
                response: false,
            }));

            await instance.fetchNews();
            expect(wrapper.state('error')).toEqual('news.json is not a function');
        });
    });
});