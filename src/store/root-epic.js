import { combineEpics }  from 'redux-observable'
import { posPostsUpdate }   from '../components/category-menu/epic'
import { posPostUpdate } from '../components/app-info/epic'

export default  combineEpics(
  posPostsUpdate,
  posPostUpdate
)