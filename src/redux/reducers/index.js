import {combineReducers} from 'redux'
import Auth from './Auth'
import Users from './Users'
import { SearchUser } from './Users'
import Transfer from './Transfer'
import {AddTransferUser} from "./Transfer"
import TransferHistory from './TransferHistory'
import Topup from './Topup'

const reducers = combineReducers({
    Auth,
    Users,
    SearchUser,
    Transfer,
    AddTransferUser,
    TransferHistory,
    Topup
})

export default reducers