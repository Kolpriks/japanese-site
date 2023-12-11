import React from "react"
import profile from './profile_img.png'
import '../Header/Header.css'

class Header extends React.Component {
	render(){
		return(
			<div>
				<header className="header">
					<div className="header__wraper">

						<div className="header__logo">
							<a href="#">Logo</a>
						</div>
						<div className="header__languages">
							<a href="#">Hiragana</a>
							<a href="#">Katakana</a>
							<a href="#">Kanji</a>
						</div>
						<div className="profile">
							<img className="profile__img" src={profile} width="20px"/>
							<a href="#">Profile</a>
						</div>
					</div>
				</header>
			</div>
		)
	}
}

export default Header