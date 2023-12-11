import React from 'react'
import '../Footer/Footer.css'

class Footer extends React.Component{
	render(){
		return(
		<footer>
			<div className="footer__text">
				<div className="year">2023</div>
				<span className="separator"></span>
				<div className="end-text">Website made by two enthusiasts</div>
			</div>
		</footer>
		)
	}
}

export default Footer