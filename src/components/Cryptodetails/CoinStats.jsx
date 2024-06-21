import styles from './CoinStats.module.css'

const CoinStats=(props)=>{

	return(
		<div className={styles.main_stats}>
			{props.stats.map(stat=>{
				return (
					<div key={stat.id} className={styles.attributes}>
						<div className={styles.heading}>
							{stat.icon}
							{stat.title}
						</div>
						<div className={styles.value}>
							{stat.value}
						</div>
					</div>
				)
			})}
		</div>
)
}

export default CoinStats;