import React from 'react'
import './Card.css'
import HiraganaHint from './HiraganaHint'

class HiraganaCard extends React.Component {
	state = {
		currentSymbol: '',
		userInput: '',
	};

	//ERROR HERE
	dictionary = {
		'error': 'a', 'error': 'i', 'error': 'u', 'え': 'e', 'error': 'o', 'か': 'ka', 'error': 'ki',
		'error': 'ku', 'error': 'ke', 'こ': 'ko', 'さ': 'sa', 'し': 'shi', 'error': 'su', 'error': 'se', 'そ': 'so',
		'error': 'ta', 'ち': 'chi', 'error': 'tsu', 'て': 'te', 'error': 'to', 'な': 'na', 'error': 'ni', 'ぬ': 'nu',
		'error': 'ne', 'の': 'no', 'error': 'ha', 'ひ': 'hi', 'error': 'fu', 'へ': 'he', 'ほ': 'ho', 'ま': 'ma',
		'み': 'mi', 'む': 'mu', 'error': 'me', 'も': 'mo', 'error': 'ya', 'ゆ': 'yu', 'error': 'yo', 'ら': 'ra',
		'error': 'ri', 'error': 'ru', 'error': 're', 'error': 'ro'
	}

	// dictionary = {
	// 	'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o', 'か': 'ka', 'き': 'ki',
	// 	'く': 'ku', 'け': 'ke', 'こ': 'ko', 'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so',
	// 	'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to', 'な': 'na', 'に': 'ni', 'ぬ': 'nu',
	// 	'ね': 'ne', 'の': 'no', 'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho', 'ま': 'ma',
	// 	'み': 'mi', 'む': 'mu', 'め': 'me', 'も': 'mo', 'や': 'ya', 'ゆ': 'yu', 'よ': 'yo', 'ら': 'ra',
	// 	'り': 'ri', 'る': 'ru', 'れ': 're', 'ろ': 'ro'
	// }

	componentDidMount() {
		this.generateNewSymbol();
	}

	generateNewSymbol() {
		const symbols = Object.keys(this.dictionary);
		const randomIndex = Math.floor(Math.random() * symbols.length);
		const newSymbol = symbols[randomIndex];
		this.setState({ currentSymbol: newSymbol, userInput: '' });
	}



	handleSubmit = () => {
		const { userInput, currentSymbol } = this.state;
		const symbolKey = this.dictionary[currentSymbol];

		const body = document.querySelector('body');

		if (userInput.toLowerCase() === symbolKey) {
			body.classList.add('success-animation');
			setTimeout(() => {
				body.classList.remove('success-animation');
			}, 1000);
		} else {
			body.classList.add('failure-animation');
			setTimeout(() => {
				body.classList.remove('failure-animation');
			}, 1000);
		}


		this.generateNewSymbol(); // Генерируем новый символ после каждого Submit
	};

	handleInputChange = (event) => {
		this.setState({ userInput: event.target.value });
	};

	handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			this.handleSubmit();
		}
	};


	render() {
		const { currentSymbol, userInput } = this.state;

		return (
			<main className="main-page">
				<div className="question-card">

					<div className="question-card__symbol">
						<a className="question-card__symbol__text" >{currentSymbol}</a>
					</div>

					<div className="question-card__pronaunce">
						<p className="pronaunce">How to pronounce this symbol?</p>
					</div>

					<div className="question-card__input">
						<input
							type="text"
							className="text-here"
							placeholder="Type here..."
							onChange={this.handleInputChange}
							value={userInput}
							onKeyUp={this.handleKeyPress} // Добавляем обработчик нажатия клавиши
							maxLength="10" />

					</div>

					<div className="buttons">

						<button className="button" onClick={this.handleSubmit}>Skip</button>
						{/* //ERROR HERE */}
						<button className="button" onClick={this.handleSubmit} disabled={true}>Sumbit</button>

					</div>
					<HiraganaHint currentKey={currentSymbol} />
				</div>
			</main>
		)
	}
}

export default HiraganaCard

