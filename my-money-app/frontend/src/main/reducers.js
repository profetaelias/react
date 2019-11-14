//11
import { combineReducers } from 'redux'

import DashboardReducer from "../dashboard/dashboardReducer"
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'

const rootReducer = combineReducers({
    //configuração inicial 
    // dashboard: () => ({summary:{credit:100, debt:50}})
//13
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer
})

export default rootReducer