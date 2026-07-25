import type { INodeProperties } from 'n8n-workflow';

export const scheduleOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['schedule'],
			},
		},
		options: [
			{
				name: 'Book Trial Class',
				value: 'bookTrialClass',
				description: 'Book for a trial class',
				action: 'Book trial class',
				routing: {
					request: {
						method: 'POST',
						url: '/schedule/booking/trial',
					},
				},
			},
			{
				name: 'Delete User From Trial Class',
				value: 'deleteTrialClassBooking',
				description: 'Delete user from a trial class booking',
				action: 'Delete trial class booking',
				routing: {
					request: {
						method: 'DELETE',
						url: '/schedule/booking/trial',
					},
				},
			},
			{
				name: 'Get Box Categories',
				value: 'getBoxCategories',
				description: 'Get a list of box categories',
				action: 'Get box categories',
				routing: {
					request: {
						method: 'GET',
						url: '/schedule/boxCategories',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get a list of schedules between dates',
				action: 'Get many schedules',
				routing: {
					request: {
						method: 'GET',
						url: '/schedule',
					},
				},
			},
			{
				name: 'Get Trial Bookings',
				value: 'getTrialBookings',
				description: 'Get a list of trial bookings',
				action: 'Get trial bookings',
				routing: {
					request: {
						method: 'GET',
						url: '/schedule/booking/trial',
					},
				},
			},
			{
				name: 'Get Waiting List Entries',
				value: 'getWaitingList',
				description: 'Get entries from the waiting list',
				action: 'Get waiting list entries',
				routing: {
					request: {
						method: 'GET',
						url: '/schedule/entryFromWaitingList',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a schedule',
				action: 'Update a schedule',
				routing: {
					request: {
						method: 'PATCH',
						url: '/schedule',
					},
				},
			},
		],
		default: 'getAll',
	},
];

export const scheduleFields: INodeProperties[] = [
	// schedule.getAll fields
	{
		displayName: 'From Date',
		name: 'scheduleFromDate',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				resource: ['schedule'],
				operation: ['getAll'],
			},
		},
		default: '',
		routing: {
			send: {
				type: 'query',
				property: 'from_date',
			},
		},
	},
	{
		displayName: 'To Date',
		name: 'scheduleToDate',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				resource: ['schedule'],
				operation: ['getAll'],
			},
		},
		default: '',
		routing: {
			send: {
				type: 'query',
				property: 'to_date',
			},
		},
	},
	{
		displayName: 'Box Category ID',
		name: 'scheduleBoxCategoryId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['schedule'],
				operation: ['getAll'],
			},
		},
		default: 0,
		routing: {
			send: {
				type: 'query',
				property: 'box_category_id',
			},
		},
	},
	{
		displayName: 'Include Registration Count',
		name: 'scheduleRegCount',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['schedule'],
				operation: ['getAll'],
			},
		},
		default: true,
		routing: {
			send: {
				type: 'query',
				property: 'registration_count',
			},
		},
	},
	{
		displayName: 'Include Waiting List Count',
		name: 'scheduleWaitingListCount',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['schedule'],
				operation: ['getAll'],
			},
		},
		default: true,
		routing: {
			send: {
				type: 'query',
				property: 'waiting_list_count',
			},
		},
	},
	{
		displayName: 'Include Registration Details',
		name: 'scheduleRegDetails',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['schedule'],
				operation: ['getAll'],
			},
		},
		default: true,
		routing: {
			send: {
				type: 'query',
				property: 'registration_details',
			},
		},
	},
	{
		displayName: 'Location ID',
		name: 'scheduleLocationId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['schedule'],
				operation: ['getAll'],
			},
		},
		default: 0,
		routing: {
			send: {
				type: 'query',
				property: 'location_id',
			},
		},
	},

	// schedule.update fields
	{
		displayName: 'Schedule ID',
		name: 'updateScheduleId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['schedule'],
				operation: ['update'],
			},
		},
		default: 0,
		routing: {
			send: {
				type: 'body',
				property: 'schedule_id',
			},
		},
	},
	{
		displayName: 'Staff Member ID',
		name: 'updateStaffMemberId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['schedule'],
				operation: ['update'],
			},
		},
		default: 0,
		routing: {
			send: {
				type: 'body',
				property: 'staff_member_id',
			},
		},
	},

	// schedule.bookTrialClass fields
	{
		displayName: 'User ID',
		name: 'bookTrialUserId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['schedule'],
				operation: ['bookTrialClass'],
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
		displayName: 'Schedule ID',
		name: 'bookTrialScheduleId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['schedule'],
				operation: ['bookTrialClass'],
			},
		},
		default: 0,
		routing: {
			send: {
				type: 'body',
				property: 'schedule_id',
			},
		},
	},
	{
		displayName: 'Force Booking',
		name: 'bookTrialForce',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['schedule'],
				operation: ['bookTrialClass'],
			},
		},
		default: false,
		routing: {
			send: {
				type: 'body',
				property: 'force',
			},
		},
	},

	// schedule.deleteTrialClassBooking fields
	{
		displayName: 'User ID',
		name: 'deleteTrialUserId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['schedule'],
				operation: ['deleteTrialClassBooking'],
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
		displayName: 'Schedule ID',
		name: 'deleteTrialScheduleId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['schedule'],
				operation: ['deleteTrialClassBooking'],
			},
		},
		default: 0,
		routing: {
			send: {
				type: 'body',
				property: 'schedule_id',
			},
		},
	},
];
