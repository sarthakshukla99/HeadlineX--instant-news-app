import axios from "axios";

const api = axios.create({
	baseURL: "https://newsapi.org/v2",
});

const apiKey = "?country=in&apiKey=e5c8d47f4bb84396861f582a4a91dd12";

const getTopHeadline = api.get("/top-headlines" + apiKey);

// const getByCategory = (category) => api.get('/everything?q='+category+'&apiKey=e5c8d47f4bb84396861f582a4a91dd12')

const getByCategory = (category) =>
	api.get(
		"everything?q="+category+"&apiKey=e5c8d47f4bb84396861f582a4a91dd12"
	);

export default { getTopHeadline, getByCategory };
