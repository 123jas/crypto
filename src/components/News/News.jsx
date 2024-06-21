import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchNews} from "../../services/news-api";
import styles from './News.module.css'
import New from "./New";
import loader from "../../assests/loader.gif";
import {useState} from "react";

const News=({simplified})=>{

	const count=simplified?6:18;
	const [value,setValue]=useState("crypto");
	const coins=useSelector(state=>state.crypto.coins);
	let options;
	const coinNames=coins.map(coin=>coin.name);
	options=['crypto',...coinNames];

	const changeHandler=(e)=>{
		setValue(e.target.value);
	}

	const dispatch=useDispatch();
	useEffect(()=>{
		dispatch(fetchNews(value,count))
	},[dispatch,value,count]);

	const news=useSelector(state=>state.news.news);
	const loading=useSelector(state=>state.news.isLoading);
	return(
		<>
			{!simplified && loading?<div className={styles.loader}><img src={loader} alt=""/></div>:
				<>
					{!simplified && <div className={styles.select}>
						<select placeholder="Select Crypto for News.." className={styles.select} value={value} onChange={changeHandler}>
							{options.map((option) => (
								<option key={option} value={option}>{option}</option>
							))}
						</select>
					</div>}
					<div className={simplified?styles['sim-news']:styles.news}>
						{<New news={news}/>}
					</div>
				</>

			}
		</>

	)
}
export default News;