//11
import { combineReducers } from 'redux'

import DashboardReducer from "../dashboard/dashboardReducer"
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'

import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'
import AuthReducer from '../auth/authReducer'

const rootReducer = combineReducers({
    //configuração inicial 
    // dashboard: () => ({summary:{credit:100, debt:50}})
//13
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer, 
    form: formReducer, 
    toastr: toastrReducer,
    auth: AuthReducer
})

export default rootReducer