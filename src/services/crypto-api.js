import {cryptoAction} from "../store/crypto-slice";

const options={
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
		'X-RapidAPI-Key': 'bea9070566mshf34e725203c5656p158dcbjsnd8c8d41ceacd'
	}
}




export const fetchCoins=(count)=>{
	return async (dispatch)=>{
		dispatch(cryptoAction.setLoading(true))
		const fetchCoin=async ()=>{
			const response=await fetch(`https://coinranking1.p.rapidapi.com/coins?limit=${count}&offset=0`, options);
			if(!response.ok){
				throw new Error('Not found!')

			}
			return await response.json();
		}
		try {
			const data=await fetchCoin();
			dispatch(cryptoAction.addCoins({coin:data.data.coins}));
			dispatch(cryptoAction.setLoading(false));
		}catch (e){

		}
	}
}
export const getCoin=(uuid)=>{
	return async (dispatch)=>{
		dispatch(cryptoAction.setLoading(true))
		const fetchCoin=async()=>{
			const response = await fetch(`https://coinranking1.p.rapidapi.com/coin/${uuid}`,options);
			if(!response.ok){
				throw new Error('Error occured');
			}
			return await response.json();
		}
		try{
			const data=await fetchCoin();
			dispatch(cryptoAction.setCoin(data.data.coin))
			dispatch(cryptoAction.setLoading(false))
		}catch (e){

		}

	}

}
export const fetchData=()=>{
	return async (dispatch)=>{
		dispatch(cryptoAction.setLoading(true))
		const fetchStats= async ()=>{
			const response= await fetch(`https://coinranking1.p.rapidapi.com/coins?offset=0`, options);
			if(!response.ok){
				throw new Error('Not found!')
			}
			return await response.json()
		}
		try{
			const data=await fetchStats();
			dispatch(cryptoAction.addStats({stats:data.data.stats}));
			dispatch(cryptoAction.setLoading(false));
		}catch (e){
			console.log(e);
		}
	}
}