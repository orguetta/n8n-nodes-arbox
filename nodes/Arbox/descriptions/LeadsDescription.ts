import type { INodeProperties } from 'n8n-workflow';

export const leadsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['leads'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new lead',
				action: 'Create a lead',
				routing: {
					request: {
						method: 'POST',
						url: '/leads',
					},
				},
			},
			{
				name: 'Create Note',
				value: 'createNote',
				description: 'Create a new note',
				action: 'Create a lead note',
				routing: {
					request: {
						method: 'POST',
						url: '/leads/createNote',
					},
				},
			},
			{
				name: 'Get Converted',
				value: 'getConverted',
				description: 'Get converted leads',
				action: 'Get converted leads',
				routing: {
					request: {
						method: 'GET',
						url: '/leads/converted',
					},
				},
			},
			{
				name: 'Get Lost',
				value: 'getLost',
				description: 'Get lost leads',
				action: 'Get lost leads',
				routing: {
					request: {
						method: 'GET',
						url: '/leads/lost',
					},
				},
			},
			{
				name: 'Get Lost Reasons',
				value: 'getLostReasons',
				description: 'Get a list of lead lost reasons',
				action: 'Get lead lost reasons',
				routing: {
					request: {
						method: 'GET',
						url: '/lostReasons',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get a list of leads',
				action: 'Get many leads',
				routing: {
					request: {
						method: 'GET',
						url: '/leads',
					},
				},
			},
			{
				name: 'Get Sources',
				value: 'getSources',
				description: 'Get a list of business sources',
				action: 'Get lead sources',
				routing: {
					request: {
						method: 'GET',
						url: '/sources',
					},
				},
			},
			{
				name: 'Get Status Logs',
				value: 'getStatusLogs',
				description: 'Get all leads status updates logs',
				action: 'Get lead status logs',
				routing: {
					request: {
						method: 'GET',
						url: '/leads/updateStatus',
					},
				},
			},
			{
				name: 'Get Statuses',
				value: 'getStatuses',
				description: 'Get a list of business statuses',
				action: 'Get lead statuses',
				routing: {
					request: {
						method: 'GET',
						url: '/statuses',
					},
				},
			},
			{
				name: 'Mark as Lost',
				value: 'markAsLost',
				description: 'Mark lead as lost',
				action: 'Mark lead as lost',
				routing: {
					request: {
						method: 'POST',
						url: '/leads/markAsLost',
					},
				},
			},
			{
				name: 'Update Status',
				value: 'updateStatus',
				description: 'Update lead status',
				action: 'Update lead status',
				routing: {
					request: {
						method: 'POST',
						url: '/leads/updateStatus',
					},
				},
			},
		],
		default: 'getAll',
	},
];

export const leadsFields: INodeProperties[] = [
	// leads.create fields
	{
		displayName: 'First Name',
		name: 'firstName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['leads'],
				operation: ['create'],
			},
		},
		default: '',
		routing: {
			send: {
				type: 'body',
				property: 'first_name',
			},
		},
	},
	{
		displayName: 'Phone',
		name: 'phone',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['leads'],
				operation: ['create'],
			},
		},
		default: '',
		routing: {
			send: {
				type: 'body',
				property: 'phone',
			},
		},
	},
	{
		displayName: 'Location ID',
		name: 'locationId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['leads'],
				operation: ['create'],
			},
		},
		default: 0,
		routing: {
			send: {
				type: 'body',
				property: 'location_id',
			},
		},
	},
	{
		displayName: 'Last Name',
		name: 'lastName',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['leads'],
				operation: ['create'],
			},
		},
		default: '',
		routing: {
			send: {
				type: 'body',
				property: 'last_name',
			},
		},
	},
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		placeholder: 'name@email.com',
		displayOptions: {
			show: {
				resource: ['leads'],
				operation: ['create'],
			},
		},
		default: '',
		routing: {
			send: {
				type: 'body',
				property: 'email',
			},
		},
	},
	{
		displayName: 'Source ID',
		name: 'sourceId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['leads'],
				operation: ['create'],
			},
		},
		default: 0,
		routing: {
			send: {
				type: 'body',
				property: 'source_id',
			},
		},
	},
	{
		displayName: 'Status ID',
		name: 'statusId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['leads'],
				operation: ['create'],
			},
		},
		default: 0,
		routing: {
			send: {
				type: 'body',
				property: 'status_id',
			},
		},
	},
	{
		displayName: 'Campaign',
		name: 'campaign',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['leads'],
				operation: ['create'],
			},
		},
		default: '',
		routing: {
			send: {
				type: 'body',
				property: 'campaign',
			},
		},
	},
	{
		displayName: 'Assignee ID',
		name: 'assigneeId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['leads'],
				operation: ['create'],
			},
		},
		default: 0,
		routing: {
			send: {
				type: 'body',
				property: 'assignee_id',
			},
		},
	},
	{
		displayName: 'Comment',
		name: 'comment',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['leads'],
				operation: ['create'],
			},
		},
		default: '',
		routing: {
			send: {
				type: 'body',
				property: 'comment',
			},
		},
	},
	{
		displayName: 'Allow SMS',
		name: 'allowSms',
		type: 'options',
		options: [
			{ name: 'Yes', value: 'yes' },
			{ name: 'No', value: 'no' },
		],
		displayOptions: {
			show: {
				resource: ['leads'],
				operation: ['create'],
			},
		},
		default: 'yes',
		routing: {
			send: {
				type: 'body',
				property: 'allow_sms',
			},
		},
	},
	{
		displayName: 'Allow Email',
		name: 'allowEmail',
		type: 'options',
		options: [
			{ name: 'Yes', value: 'yes' },
			{ name: 'No', value: 'no' },
		],
		displayOptions: {
			show: {
				resource: ['leads'],
				operation: ['create'],
			},
		},
		default: 'no',
		routing: {
			send: {
				type: 'body',
				property: 'allow_email',
			},
		},
	},

	// leads.updateStatus fields
	{
		displayName: 'User ID',
		name: 'updateStatusUserId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['leads'],
				operation: ['updateStatus'],
			},
		},
		default: 0,
		description: 'The ID of the lead to update',
		routing: {
			send: {
				type: 'body',
				property: 'user_id',
			},
		},
	},
	{
		displayName: 'Status ID',
		name: 'updateStatusStatusId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['leads'],
				operation: ['updateStatus'],
			},
		},
		default: 0,
		description: 'The ID of the new status',
		routing: {
			send: {
				type: 'body',
				property: 'status_id',
			},
		},
	},
	{
		displayName: 'Comment',
		name: 'updateStatusComment',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['leads'],
				operation: ['updateStatus'],
			},
		},
		default: '',
		routing: {
			send: {
				type: 'body',
				property: 'comment',
			},
		},
	},

	// leads.markAsLost fields
	{
		displayName: 'User ID',
		name: 'markAsLostUserId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['leads'],
				operation: ['markAsLost'],
			},
		},
		default: 0,
		routing: {
			send: {
				type: 'body',
				property: 'user_id',
			},
		},
	},
	{
		displayName: 'Lost Reason ID',
		name: 'markAsLostReasonId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['leads'],
				operation: ['markAsLost'],
			},
		},
		default: 0,
		routing: {
			send: {
				type: 'body',
				property: 'lost_reason_id',
			},
		},
	},
	{
		displayName: 'Comment',
		name: 'markAsLostComment',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['leads'],
				operation: ['markAsLost'],
			},
		},
		default: '',
		routing: {
			send: {
				type: 'body',
				property: 'comment',
			},
		},
	},

	// leads.createNote fields
	{
		displayName: 'Lead (User) ID',
		name: 'createNoteUserId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['leads'],
				operation: ['createNote'],
			},
		},
		default: 0,
		routing: {
			send: {
				type: 'body',
				property: 'user_id',
			},
		},
	},
	{
		displayName: 'Description',
		name: 'createNoteDescription',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['leads'],
				operation: ['createNote'],
			},
		},
		default: '',
		description: 'The text content of the note',
		routing: {
			send: {
				type: 'body',
				property: 'description',
			},
		},
	},
];
