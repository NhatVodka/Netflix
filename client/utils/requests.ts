const BASE_URL = "http://localhost:8800/api";

const requests = {
  fetchNowPlaying: `${BASE_URL}/category?categoryName=Now Playing`,
  fetchTopRated: `${BASE_URL}/category?categoryName=Top Rated`,
  fetchPopular: `${BASE_URL}/category?categoryName=Popular`,
  fetchUpcoimg: `${BASE_URL}/category?categoryName=Upcoming`,
};

export default requests;
