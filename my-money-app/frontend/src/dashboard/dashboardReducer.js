//10
const INITIAL_STATE = {summary: {credit:0, debt:0 }}

export default function(state = INITIAL_STATE, action) {
    //configuracao inicial
    //return state
    
    //15
    switch(action.type) {
        case 'BILLING_SUMMARY_FETCHED':
            return { ...state, summary: action.payload.data }
        
        default: 
           return state
    }

}