import {createSlice} from "@reduxjs/toolkit";

const NewsSlice=createSlice({
	name:'news slice',
	initialState:{
		news:[{
			name:"",
			url:'',
			image:{
				thumbnail:{
					contentUrl:'',
				}
			},
			description:'',
			provider:[
				{
					name:'',
					image:{
						thumbnail:{
							contentUrl:''
						}
					}
				}
			],
			datePublished:''
		}],
		isLoading:true
	},
	reducers:{
		addNews(state,action){
			state.news=action.payload.news;
		},
		setLoading(state,action){
			state.isLoading=action.payload;
		},
	}
})

export const NewsAction=NewsSlice.actions;

export default NewsSlice;