const cleanNewsData = data => {
    const cleanedNewsArr = data.map(news => {
        return {
          Title: news.Title
        };
      });
      return cleanedNewsArr;
}

const sortPlayerArr = arr => {
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

export {
    cleanNewsData,
    sortPlayerArr
}