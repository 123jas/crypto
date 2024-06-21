import styles from './Homepage.module.css'
import Stats from "./Stats";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import News from "../News/News";
import Cryptocurrencies from "../Cryptocurrencies/Cryptocurrencies";
const Homepage=()=>{
	const stats=useSelector(state=>state.crypto?.stats);
	const loading=useSelector(state=>state.crypto.isLoading);
	return (
		<div className={styles.homepage}>
			<h1 className={styles['main-heading']}>Global Crypto Stats</h1>
			{!loading && <Stats stats={stats}/>}
			<div className={styles.crypto}>
				<h1>Top 10 Cryptos in the World</h1>
				<Link to='/cryptocurrencies'>Show More</Link>
			</div>
			<Cryptocurrencies simplified={true}/>
			<div className={styles.crypto}>
				<h1>Latest Crypto News</h1>
				<Link to='/news'>Show More</Link>
			</div>
			<News simplified/>
		</div>
	)
}
export default Homepage;