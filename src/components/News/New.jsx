import styles from './New.module.css'
import moment from "moment";
import image from '../../assests/logo.png'

const New=(props)=>{
	return (
		<>
			{props.news.map(n =>{
				return (
					<a href={n.url} target='_blank' rel='noreferrer' key={n.name} className={styles.new}>
						<div key={n.datePublished} className={styles.headline}>
							<div>
								<h3>{n.name}</h3>
							</div>
							<div className={styles.img}>
								<img src={n?.image?.thumbnail?.contentUrl || image} alt="Title"/>
							</div>
						</div>
						<div className={styles.desc}>
							<p>{n.description.length>100?`${n.description.substring(0, 100)}...`:n.description}</p>
						</div>
						<div className={styles.provider}>
							<div className={styles.name}>
								<div className={styles.logo}><img src={n?.provider[0]?.image?.thumbnail?.contentUrl || undefined} alt=""/></div>
							</div>
							<div className={styles.name}><h4>{n.provider[0].name}</h4></div>
							<div>
								{moment(n.datePublished).startOf('ss').fromNow()}
							</div>
						</div>
					</a>

				)
			})}
		</>
	)
}

export default New;