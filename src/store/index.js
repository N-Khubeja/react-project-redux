import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todoreducer } from "./todo/todo.reducers";

const rootReducer = combineReducers({
    todo:todoreducer
})

export const store = configureStore({
    reducer:rootReducer
})