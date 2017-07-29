import { combineReducers } from 'redux';
import { routerReducer }   from 'react-router-redux'
import  isMobile           from '../../lib/is-mobile-reducer'

export default combineReducers({
  router: routerReducer
})