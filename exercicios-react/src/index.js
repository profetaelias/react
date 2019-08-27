import React from 'react'
import ReactDOM from 'react-dom'
import PrimeiroComponente from './componentes/PrimeiroComponente'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div><PrimeiroComponente valor='Boa noite!'></PrimeiroComponente></div>
    , elemento)