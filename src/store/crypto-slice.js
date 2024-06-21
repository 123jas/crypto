import {createSlice} from "@reduxjs/toolkit";

const cryptoSlice=createSlice({
	name:'crypto',
	initialState:{
		stats:{
			totalCoins:0,
			totalExchanges:0,
			totalMarketCap:0,
			total24hVolume:0,
			totalMarkets:0
		},
		coins:[],
		cryptos:[],
		coin:{
			supply:{
				confirmed:false,
				total:0,
				circulating:0
			},
			description:'',
			numberOfExchanges:0,
			numberOfMarkets:0,
			price:0,
			rank:0,
			'24hVolume':0,
			marketCap:0,
			allTimeHigh:{
				price:0
			},
			links:[]
		},

		isLoading:true,
	},
	reducers:{
		addStats(state,action){
			state.stats=action.payload.stats;
		},
		addCoins(state,action){
			state.coins=action.payload.coin;
			state.cryptos=action.payload.coin;
		},
		setLoading(state,action){
			state.isLoading=action.payload;
		},
		setCount(state,action) {
			state.count = action.payload;
		},
		setCryptos(state,action){
			state.cryptos=action.payload;
		},
		setCoin(state,action){
			state.coin=action.payload;
		}
	}
})

export const cryptoAction=cryptoSlice.actions;


export default cryptoSlice;