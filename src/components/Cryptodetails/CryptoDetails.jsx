import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchHistory, getCoin} from "../../services/crypto-api";
import styles from './Cryptodetails.module.css'
import CoinStats from "./CoinStats";
import millify from "millify";
import loader from '../../assests/loader.gif'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faArrowRightArrowLeft,
	faBolt,
	faChartLine, faCheck, faCircleInfo,
	faDollar,
	faHashtag,
	faTrophy, faXmark
} from "@fortawesome/free-solid-svg-icons";
import HTMLReactParser from "html-react-parser";
import CoinLinks from "./CoinLinks";

const CryptoDetails=()=>{
	const param=useParams();


	const dispatch=useDispatch();

	const coin=useSelector(state=>state.crypto.coin);


	useEffect(()=>{
		dispatch(getCoin(param.coinId));
	},[dispatch,param.coinId]);

	const loading=useSelector(state=>state.crypto.isLoading)

	const stats=[
		{id:1,title:'Price to USD',value:`$${millify(coin.price)}`,icon:<FontAwesomeIcon icon={faDollar}/>},
		{id:2,title:'Rank',value:coin.rank,icon:<FontAwesomeIcon icon={faHashtag}/>},
		{id:3,title:'24h Volume',value:`${millify(coin['24hVolume'])}`,icon:<FontAwesomeIcon icon={faBolt}/>},
		{id:4,title:'Market Cap',value:`${millify(coin.marketCap)}`,icon:<FontAwesomeIcon icon={faTrophy}/>},
		{id:5,title:'All Time High',value:`$${millify(coin.allTimeHigh.price)}`,icon:<FontAwesomeIcon icon={faDollar}/>},
	]

	const stats2=[
		{id:1,title:'Number of Markets',value:coin.numberOfMarkets,icon:<FontAwesomeIcon icon={faChartLine}/>},
		{id:2,title:'Number of Exchanges',value:coin.numberOfExchanges,icon:<FontAwesomeIcon icon={faArrowRightArrowLeft}/>},
		{id:3,title:'Approved Supply',value:coin.supply.confirmed?<FontAwesomeIcon icon={faCheck}/>:<FontAwesomeIcon icon={faXmark}/> ,icon:<FontAwesomeIcon icon={faCircleInfo}/>},
		{id:4,title:'Total Supply',value:coin.supply.total && `$${millify(coin.supply.total)}` ,icon :<FontAwesomeIcon icon={faCircleInfo}/>},
		{id:5,title:'Circlulating Supply',value: `$${millify(coin.supply.circulating)}`,icon:<FontAwesomeIcon icon={faCircleInfo}/>}
	]

	return(
		<>
			{loading&&<div className={styles.loader}><img src={loader} alt=""/></div>}
			{!loading&&<div className={styles.cryptoDetails}>
				<div className={styles['main_heading']}>
					<h1>{coin.name} ({coin.symbol})</h1>
					<p>{coin.name} live price in US dollars. View value statistics, market cap and supply.</p>
				</div>
				<hr className={styles.mainHr}/>
				<div className={styles.stats}>
					<div className={styles.stat}>
						<div className={styles.stat_heading}>
							<h1>{coin.name} Value Statistics</h1>
							<p>An overview showing the stats of {coin.name}</p>
						</div>
						<CoinStats stats={stats}/>
					</div>
					<div className={styles.stat}>
						<div className={styles.stat_heading}>
							<h1>Other Statistics</h1>
							<p>An overview showing the stats of all cryptos</p>
						</div>
						<CoinStats stats={stats2}/>
					</div>
				</div>
				<div className={styles.anotherInfo}>
					<div className={styles.theory}>
						<h3>{`What is ${coin.name}?`}</h3>
						{HTMLReactParser(coin.description)}
					</div>
					<CoinLinks name={coin.name} links={coin.links}/>
				</div>
			</div>}
		</>
	)
}
export default CryptoDetails;