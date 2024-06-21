import styles from "./Logo.module.css";
import logo from "../../assests/logo.png";

const Logo=()=>{
	return(
			<div className={styles.logo}>
				<img src={logo} alt="Crypto-App logo"/>
				<h1>Crypto World</h1>
			</div>
		)
}

export default Logo;