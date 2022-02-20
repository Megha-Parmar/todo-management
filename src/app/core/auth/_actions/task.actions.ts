// NGRX
import { Action } from '@ngrx/store';
import {  TaskDataModel } from '../_models/task.model';

export enum TaskActionTypes {

    TaskCreated = 'Task Created',
    TaskUpdated = 'Task Updated',
    TaskDeleted = 'Task Deleted',
    TaskStatusUpdated = 'Task Status Deleted',
}



export class TaskCreated implements Action {
    readonly type = TaskActionTypes.TaskCreated;
    constructor(public payload: TaskDataModel) { }
    // constructor(public payload: { tasks: TaskDataModel }) { }

}


export class TaskUpdated implements Action {
    readonly type = TaskActionTypes.TaskUpdated;

    constructor(public payload: TaskDataModel) { }
}

export class TaskStatusUpdated implements Action {
    readonly type = TaskActionTypes.TaskStatusUpdated;
    constructor(public payload: TaskDataModel) { }
}
export class TaskDeleted implements Action {
    readonly type = TaskActionTypes.TaskDeleted;
    constructor(public payload: number) { }

}


export type TaskAcion = TaskCreated
    | TaskUpdated
    | TaskDeleted
    | TaskStatusUpdated;


