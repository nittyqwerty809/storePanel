
import testReducer from './Slices/test.sample.slice';
import authReducer from './Slices/auth.slice';
import countReducer from './Slices/counter.slice';
import userReducer  from './Slices/login.slice'
import InventryReducer  from './Slices/Inventory.slice'
import  UpdateInventory from './Slices/updateInventory.slice'
import SearchReducer  from "./Slices/search.slice"
import getAllInvoiceReducer  from "./Slices/getInvoice.slice"

const combinedReducers = {
	testReducer, 
	authReducer,
	countReducer,
	userReducer,
	InventryReducer,
	UpdateInventory,
	SearchReducer,
	getAllInvoiceReducer
}

export default combinedReducers