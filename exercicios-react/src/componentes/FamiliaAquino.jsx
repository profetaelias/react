import React from 'react'
import Membro from './Membro'
import Familia from './Familia'

export default props => 
    <div>
        <Membro nome={props.nome} sobrenome={props.sobrenome}/>
    </div>
