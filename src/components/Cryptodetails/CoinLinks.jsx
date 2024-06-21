import styles from './CoinStats.module.css'
const CoinLinks=(props)=>{
	return (
		<div className={styles.links}>
			<h3>{props.name} Links</h3>
			{props.links.map(link=>{
				return (
					<div key={link.name} className={styles.link}>
						<div>{link.type}</div>
						<div><a href={`${link.url}`} target='_blank' rel="noreferrer">{link.name}</a></div>
					</div>
				)
			})}
		</div>
	)
}

export default CoinLinks;