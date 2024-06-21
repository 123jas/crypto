import {configureStore} from "@reduxjs/toolkit";
import cryptoSlice from "./crypto-slice";
import NewsSlice from "./news-slice";

const store=configureStore(
	{
		reducer:{crypto:cryptoSlice.reducer,news:NewsSlice.reducer}
	}
)

export default store;