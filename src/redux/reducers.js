// A file with functions that determine 
// how to serve your state (more on that 
// next lesson)


import { combineReducers } from 'redux'

const user = (state = null) => state

const cars = (state = []) => state

export default combineReducers({ user, cars })