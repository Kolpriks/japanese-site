import React from 'react'
import Header from './components/Header'

const placeholderText = 'Type here..'

const Title = () => {
	return(
		<h1>Title</h1>
	)
}


class App extends React.Component {
	render() {
		return (
			<div>
				<Title/>
				<Header title='I can do props!'/>
				<h1>Hello! I was here</h1>
				<input
				onMouseEnter={this.mouseOver}
				placeholder={placeholderText}
				onClick={this.inputClick}
				/>
			</div>
		)
	}
	inputClick() { console.log('Clicked')}
	mouseOver() { console.log('Mouse over the Input')}
}

export default App 