
export class TaskDataModel {
	id: number;
	taskName: string;
	taskDate: string;
	status: StatusDataModel
}


export class StatusDataModel {
	id: number;
	name: String;
	value: string
}

export interface TaskState {
	readonly tasks: Array<TaskDataModel>
}

export const taskDataList: TaskDataModel[] = [
	{
		id: 1,
		taskName: "Angular Task",
		taskDate: "Wed Jun 12 1996 00:00:00 GMT+0530 (India Standard Time)",
		status: { id: 1, name: "ACTIVE", value: "Active" }
	},
	{
		id: 2,
		taskName: "Node Task",
		taskDate: "Wed Jun 12 1996 00:00:00 GMT+0530 (India Standard Time)",
		status: { id: 1, name: "ACTIVE", value: "Active" },
	},
	{
		id: 3,
		taskName: "Java Task",
		taskDate: "Wed Jun 12 1996 00:00:00 GMT+0530 (India Standard Time)",
		status: { id: 1, name: "ACTIVE", value: "Active" },
	},
	{
		id: 4,
		taskName: "React Task",
		taskDate: "Wed Jun 12 1996 00:00:00 GMT+0530 (India Standard Time)",
		status: { id: 1, name: "ACTIVE", value: "Active" },
	},
	{
		id: 5,
		taskName: "Php Task",
		taskDate: "Wed Jun 12 1996 00:00:00 GMT+0530 (India Standard Time)",
		status: { id: 1, name: "ACTIVE", value: "Active" },
	}

];
