import styles from './Coin.module.css'
import millify from "millify";
import {Link} from "react-router-dom";
const Coin=(props)=>{
	const {name,rank,price,marketCap,change,iconUrl,uuid}=props.detail;
	return (
		<Link to={`cryptocurrencies/${uuid}`} className={styles.coinLink}>
			<div className={styles.container}>
				<div className={styles.title}>
					<h4>{`${rank}.${name}`}</h4>
					<div className={styles.logo}>
						<img src={iconUrl} alt=""/>
					</div>
				</div>
				<div className={styles.border}></div>
				<div className={styles.addOn}>
					<p>Price:${millify(price)}</p>
					<p>Market Cap:{millify(marketCap)}</p>
					<p>Daily Change:{change}%</p>
				</div>
			</div>
		</Link>
		)
}

export default Coin;