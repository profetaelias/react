import React from 'react'
import ReactDOM from 'react-dom'
import PrimeiroComponente from './componentes/PrimeiroComponente'
import {CompA, CompB} from './componentes/DoisComponentes'
import MultiElementos from './componentes/MultiElementos'

const elemento = document.getElementById('root')
ReactDOM.render(
    //<div><CompA valor='Olá, eu sou o A!'></CompA><CompB valor='Olá, eu sou o B!'></CompB></div>
    <MultiElementos />
    , elemento)
