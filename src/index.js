import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import './styles/main.css'

import App from './App'

const main = ReactDOMClient.createRoot(document.getElementById('app'))

main.render(<App/>)