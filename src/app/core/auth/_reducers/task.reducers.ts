// NGRX
import { createFeatureSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
// Actions
import { UserActions, UserActionTypes } from '../_actions/user.actions';


// CRUD
import { QueryParamsModel } from '../../_base/crud';
// Models
import { User } from '../_models/user.model';
import { TaskAcion, TaskActionTypes } from '../_actions/task.actions';
import {  taskDataList, TaskDataModel } from '../_models/task.model';


// taskDataList

var data:TaskDataModel[] = JSON.parse(localStorage.getItem("data"))

export function taskReducer(state: Array<TaskDataModel> = data, action: TaskAcion) {
    switch (action.type) {

        case TaskActionTypes.TaskCreated: 
        localStorage.setItem("data",JSON.stringify([...state, action.payload]));
        return [...state, action.payload];
        case TaskActionTypes.TaskUpdated:
            //  return state.filter(item => item.id !== action.payload);
            localStorage.setItem("data",JSON.stringify(state.map((item) => (item.id === action.payload.id ? action.payload : item))));
            return state.map((item) => (item.id === action.payload.id ? action.payload : item));
        case TaskActionTypes.TaskStatusUpdated:
            localStorage.setItem("data",JSON.stringify(state.map((item) => {
                if (item.id === action.payload.id) {
                    item.status = action.payload.status;

                }

                return item;
            })));
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    item.status = action.payload.status;

                }

                return item;
            });
        case TaskActionTypes.TaskDeleted: 
        localStorage.setItem("data",JSON.stringify(state.filter(item => item.id !== action.payload)))
        return state.filter(item => item.id !== action.payload);

        default:
            
            if(!localStorage.getItem("data")){

                localStorage.setItem("data",JSON.stringify(taskDataList))    
            }
            
        return state;
    }
}


