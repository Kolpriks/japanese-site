import React from 'react'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Footer from './components/Footer/Footer'
import './styles/main.css'

const placeholderText = 'Type here..'

// const Title = () => {
// 	return(
// 		<h1>Title</h1>
// 	)
// }


class App extends React.Component {
	render(){
		return(
			<div className="container">
				{/* <Title/> */}
				<Header/>
				{/* <input
				onMouseEnter={this.mouseOver}
				placeholder={placeholderText}
				onClick={this.inputClick}
				/> */}
				<Card/>
				<Footer/>
			</div>
		)
	}
}

export default App 


// 	render() {
// 		return (

// 		)
// 	}
// 	inputClick() { console.log('Clicked')}
// 	mouseOver() { console.log('Mouse over the Input')}