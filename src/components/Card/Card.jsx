import React from 'react'
import '../Card/Card.css'

class Card extends React.Component {
	dictionary = {'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o', 'か': 'ka', 'き': 'ki', 
	'く': 'ku', 'け': 'ke', 'こ': 'ko', 'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so', 
	'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to', 'な': 'na', 'に': 'ni', 'ぬ': 'nu',
	'ね': 'ne', 'の': 'no', 'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho', 'ま': 'ma',
	'み': 'mi', 'む': 'mu', 'め': 'me', 'も': 'mo', 'や': 'ya', 'ゆ': 'yu', 'よ': 'yo', 'ら': 'ra', 
	'り': 'ri', 'る': 'ru', 'れ': 're', 'ろ': 'ro'}

	getRandomSymbol() {
		const symbols = Object.keys(this.dictionary);
		const randomIndex = Math.floor(Math.random() * symbols.length);
		return symbols[randomIndex];
	}

	render() {
		return(
		<main className="main-page">
			<div className="question-card">

				<div className="question-card__symbol">
					<a className="question-card__symbol__text" >{this.getRandomSymbol()}</a>
				</div>

				<div className="question-card__pronaunce">
					<p className="pronaunce">How to pronounce this symbol?</p>
				</div>

				<div className="question-card__input">
					<input type="text" className="text-here" placeholder="Type here..." maxlength="10"/>
				</div>

				<div className="buttons">
					<button className="button">Sumbit</button>
					<button className="button">Skip</button>
				</div>
			</div>
		</main>
		)
	}
}

export default Card