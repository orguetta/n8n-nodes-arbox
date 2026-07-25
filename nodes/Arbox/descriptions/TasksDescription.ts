import type { INodeProperties } from 'n8n-workflow';

export const tasksOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['tasks'],
			},
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get a list of tasks',
				action: 'Get many tasks',
				routing: {
					request: {
						method: 'GET',
						url: '/tasks',
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new task',
				action: 'Create a task',
				routing: {
					request: {
						method: 'POST',
						url: '/tasks',
					},
				},
			},
			{
				name: 'Get Types',
				value: 'getTypes',
				description: 'Get a list of task types',
				action: 'Get all task types',
				routing: {
					request: {
						method: 'GET',
						url: '/tasks/types',
					},
				},
			},
		],
		default: 'getAll',
	},
];

export const tasksFields: INodeProperties[] = [
	// task.getAll fields
	{
		displayName: 'From Date',
		name: 'fromDate',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				resource: ['tasks'],
				operation: ['getAll'],
			},
		},
		default: '',
		description: 'The start date for getting tasks',
		routing: {
			send: {
				type: 'query',
				property: 'from_date',
			},
		},
	},
	{
		displayName: 'To Date',
		name: 'toDate',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				resource: ['tasks'],
				operation: ['getAll'],
			},
		},
		default: '',
		description: 'The end date for getting tasks',
		routing: {
			send: {
				type: 'query',
				property: 'to_date',
			},
		},
	},
	{
		displayName: 'Task Type ID',
		name: 'taskTypeIdQuery',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['tasks'],
				operation: ['getAll'],
			},
		},
		default: 0,
		description: 'Filter by task type ID',
		routing: {
			send: {
				type: 'query',
				property: 'task_type',
			},
		},
	},
	{
		displayName: 'Include Completed',
		name: 'includeCompleted',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['tasks'],
				operation: ['getAll'],
			},
		},
		default: false,
		description: 'Whether to include completed tasks',
		routing: {
			send: {
				type: 'query',
				property: 'include_completed',
			},
		},
	},
	{
		displayName: 'Location ID',
		name: 'locationIdQuery',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['tasks'],
				operation: ['getAll'],
			},
		},
		default: 0,
		description: 'Filter by location ID',
		routing: {
			send: {
				type: 'query',
				property: 'location_id',
			},
		},
	},

	// task.create fields
	{
		displayName: 'Location ID',
		name: 'locationId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['tasks'],
				operation: ['create'],
			},
		},
		default: 0,
		description: 'The ID of the location to associate with the task',
		routing: {
			send: {
				type: 'body',
				property: 'location_id',
			},
		},
	},
	{
		displayName: 'Task Type ID',
		name: 'taskTypeId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['tasks'],
				operation: ['create'],
			},
		},
		default: 0,
		description: 'The ID of the task type',
		routing: {
			send: {
				type: 'body',
				property: 'task_type_id',
			},
		},
	},
	{
		displayName: 'Reminder Date',
		name: 'reminderDate',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				resource: ['tasks'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'The date for the task reminder',
		routing: {
			send: {
				type: 'body',
				property: 'reminder.date',
			},
		},
	},
	{
		displayName: 'Reminder Time',
		name: 'reminderTime',
		type: 'string',
		placeholder: '12:00',
		required: true,
		displayOptions: {
			show: {
				resource: ['tasks'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'The time for the task reminder in HH:MM format',
		routing: {
			send: {
				type: 'body',
				property: 'reminder.time',
			},
		},
	},
	{
		displayName: 'User ID',
		name: 'userId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['tasks'],
				operation: ['create'],
			},
		},
		default: 0,
		description: 'Optional ID of the user associated with the task',
		routing: {
			send: {
				type: 'body',
				property: 'user_id',
			},
		},
	},
	{
		displayName: 'Assigned To (User ID)',
		name: 'assignedTo',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['tasks'],
				operation: ['create'],
			},
		},
		default: 0,
		description: 'ID of the user to assign the task to',
		routing: {
			send: {
				type: 'body',
				property: 'assigned_to',
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['tasks'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'The description/notes of the task',
		routing: {
			send: {
				type: 'body',
				property: 'description',
			},
		},
	},
];
