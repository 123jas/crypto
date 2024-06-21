import {NavLink} from "react-router-dom";
import styles from "./Navlink.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBitcoinSign, faHome, faNewspaper} from "@fortawesome/free-solid-svg-icons";

const Navlink=(props)=>{
	const clickHandler=()=>{
		props.getToggle(!props.toggle);
	}
	return (
		<div className={props.toggle?styles.block:styles.links} onClick={clickHandler}>
			<NavLink activeClassName={styles.active} to='/homepage' className={styles.link}>
				<FontAwesomeIcon icon={faHome}/>
				Home
			</NavLink>
			<NavLink activeClassName={styles.active} to='/cryptocurrencies' className={styles.link}>
				<FontAwesomeIcon icon={faBitcoinSign}/>
				Cryptocurrencies
			</NavLink>
			<NavLink activeClassName={styles.active} to='/news' className={styles.link}>
				<FontAwesomeIcon icon={faNewspaper}/>
				News
			</NavLink>
		</div>
	)
}

export default Navlink;