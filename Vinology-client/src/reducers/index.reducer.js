import {combineReducers} from 'redux'
import userReducer from './user.reducer'
import query from './query.reducer'
import car from './car.reducer'

export default combineReducers({
    
    userData: userReducer,
    queryData: query,
    carData: car

})
