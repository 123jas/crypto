import styles from './Cryptocurrencies.module.css'
import Coin from "./Coin";
import {useSelector,useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {fetchCoins} from "../../services/crypto-api";
import {cryptoAction} from "../../store/crypto-slice";
import loader from '../../assests/loader.gif'

const Cryptocurrencies=({simplified})=>{

	const count=simplified?10:100;

	const dispatch=useDispatch();

	useEffect(()=>{
		dispatch(fetchCoins(count));
	},[count,dispatch])

	const coins=useSelector(state=>state.crypto.coins);

	const loading=useSelector(state=>state.crypto.isLoading)

	const cryptos=useSelector(state=>state.crypto.cryptos);

	const [searchValue,setSearchValue]=useState("");

	const onChangeHandler=(e)=>{
		setSearchValue(e.target.value);
	}

	useEffect(()=>{
		let searchedCoin=coins.filter(crypto=>crypto.name.toLowerCase().includes(searchValue.toLowerCase()));
		dispatch(cryptoAction.setCryptos(searchedCoin));
	},[searchValue,dispatch,coins]);


	return(
		<>
			{!simplified&& <div className={styles.input}><input onKeyUp={onChangeHandler} placeholder={"Search for Crypto Here.."}/></div> }
			{loading?<div className={styles.loader}><img src={loader} alt=""/></div>:<div className={ simplified?styles['sim-crypto']:styles.crypto}>
				{cryptos.map(coin=> <Coin key={coin.rank} detail={coin}/>)}
			</div>}
		</>
	)
}
export default Cryptocurrencies;