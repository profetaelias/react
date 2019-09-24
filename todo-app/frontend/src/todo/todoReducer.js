const INITIAL_STATE = {
    description: 'Ler livro', 
    list: [{
        _id: 1, 
        description: 'Pagar a fatura do cartão', 
        done: true
    },{
        _id: 2, 
        description: 'Reunião com a equipe às 10h', 
        done: false
    },{
        _id: 3, 
        description: 'Consulta médica na terça depois do almoço', 
        done: false
    }]
}

export default (state = INITIAL_STATE, action) => {
    
	switch(action.type) {
        case 'DESCRIPTION_CHANGED': 
            console.log(action.payload)
            return {...state, description: action.payload}
        default: 
            return state
    }
}