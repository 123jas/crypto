import styles from "./Homepage.module.css";
import millify from "millify";

const Stats=({stats})=>{
	return(
		<div className={styles.stats}>
			<div className={styles.stat}>
				<div className={styles['stat-heading']}>Total Cryptocurrencies</div>
				<p>{millify(stats?.totalCoins)}</p>
			</div>
			<div className={styles.stat}>
				<div className={styles['stat-heading']}>Total Exchanges</div>
				<p>{millify(stats?.totalExchanges)}</p>
			</div>
			<div className={styles.stat}>
				<div className={styles['stat-heading']}>Total Market Cap</div>
				<p>{millify(stats?.totalMarketCap)}</p>
			</div>
			<div className={styles.stat}>
				<div className={styles['stat-heading']}>Total 24h Volume</div>
				<p>{millify(stats?.total24hVolume)}</p>
			</div>
			<div className={styles.stat}>
				<div className={styles['stat-heading']}>Total Market</div>
				<p>{millify(stats?.totalMarkets)}</p>
			</div>
		</div>
	)
};

export default Stats;