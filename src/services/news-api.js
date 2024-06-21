import {NewsAction} from "../store/news-slice";

const options = {
	method: 'GET',
	headers: {
		'X-BingApis-SDK': 'true',
		'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
		'X-RapidAPI-Key': 'bea9070566mshf34e725203c5656p158dcbjsnd8c8d41ceacd'
	}
};

export const fetchNews=(category,count)=>{
	return async (dispatch)=>{
		dispatch(NewsAction.setLoading(true))
		const fetchData=async ()=>{
			const response=await fetch(`https://bing-news-search1.p.rapidapi.com/news/search?q=${category}&count=${count}&freshness=Day&textFormat=Raw&safeSearch=Off`,options);
			if(!response.ok){
				throw new Error('An Error Occured');
			}
			const data=await response.json();
			localStorage.setItem(data);
			return data;
		}
		try {
			const data=await fetchData();
			dispatch(NewsAction.addNews({news:data.value}));
			dispatch(NewsAction.setLoading(false));
		}catch (e){

		}
	}
}