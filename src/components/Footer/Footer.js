import React, { Component } from "react";
import "./Footer.scss";
import Ticker from "react-ticker";

class Footer extends Component {
  state = {
    newsArr: [],
    link:
      "https://api.sportsdata.io/golf/v2/json/News?key=2c8dc552e7334a8eaf607b64dcbe5306",
    loading: false
  };

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async () => {
    this.setState({ loading: true });
    try {
      const news = await fetch(`${this.state.link}`);
      const response = await news.json();
      const cleanedNewsArr = await this.cleanNewsData(response);
      this.setState({ newsArr: cleanedNewsArr, loading: false });
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  cleanNewsData = data => {
    const cleanedNewsArr = data.map(news => {
      return {
        Title: news.Title
      };
    });
    return cleanedNewsArr;
  };

  render() {
    const { newsArr } = this.state;
    return (
      <div className="footer-component">
        <div className="cbs-logo-container">
          <img
            className="cbs-logo"
            src={"https://i.imgur.com/MLx968p.png"}
            alt="CBS Logo"
          />
        </div>
        <div className="news-scroll">
          {this.state.loading === false ? (
            <Ticker mode="smooth" offset="35">
              {({ index }) => (
                <>
                  <img
                    className="dot"
                    src={"https://i.imgur.com/rH90dFZ.png"}
                    alt="Bold white dot to seperate news stories"
                  />
                  <h3 className="news-text">{newsArr[index].Title}</h3>
                </>
              )}
            </Ticker>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Footer;
