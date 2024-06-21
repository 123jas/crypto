import styles from './Navbar.module.css'
import Logo from "../Logo/Logo";
import {Link} from "react-router-dom";
import Navlink from "./Navlink";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";


const Navbar=()=>{
	const [toggle,setToggle]=useState(false);

	const getToggle=(toggle)=>{
		setToggle(toggle);
	}
	const toggleHandler=()=>{
		setToggle(prevState => !prevState);
	}
	return (
		<div className={styles.navbar}>
			<Link to='/homepage'>
				<Logo/>
			</Link>
			<div className={styles['responsive-nav']}>
				<FontAwesomeIcon onClick={toggleHandler} className={styles.hamburger} icon={faBars}/>
				<Navlink toggle={toggle} getToggle={getToggle}/>
			</div>
		</div>
	)
}

export default Navbar;