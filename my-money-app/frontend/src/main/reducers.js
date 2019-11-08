//11
import { combineReducers } from 'redux'

//12
import DashboardReducer from '../dashboard/dashboardReducer'

const rootReducer = combineReducers({
    //configuração inicial 
    // dashboard: () => ({summary:{credit:100, debt:50}})
//13
    dashboard: DashboardReducer

})

export default rootReducer