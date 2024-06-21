import React,{Suspense} from "react";
import {Navbar} from "./components";
import {Route, Switch,Redirect} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import { fetchData} from "./services/crypto-api";
import loader from "./assests/loader.gif";
import './App.css'

const Cryptocurrencies=React.lazy(()=>import('./components/Cryptocurrencies/Cryptocurrencies'))
const Homepage=React.lazy(()=>import('./components/Homepage/Homepage'))
const CryptoDetails=React.lazy(()=>import('./components/Cryptodetails/CryptoDetails'))
const News=React.lazy(()=>import('./components/News/News'));


function App() {
	const dispatch=useDispatch();

	useEffect(()=>{
		dispatch(fetchData());
	},[dispatch]);

	return (
			<Suspense fallback={
				<div className="load"><img src={loader} alt='loader'/></div>}>
				<div className="flex">
					<nav>
						<div>
							<Navbar/>
						</div>
					</nav>
					<main>
						<Switch>
							<Route path='/' exact>
								<Redirect to='/homepage'/>
							</Route>
							<Route path='/homepage' exact>
								<Homepage/>
							</Route>
							<Route path='/cryptocurrencies' exact>
								<Cryptocurrencies/>
							</Route>
							<Route path='/cryptocurrencies/:coinId' exact>
								<CryptoDetails/>
							</Route>
							<Route path='/news' exact>
								<News/>
							</Route>
						</Switch>
					</main>
				</div>
			</Suspense>
	);
}
export default App;
