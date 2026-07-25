import type { INodeProperties } from 'n8n-workflow';

export const reportsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['reports'],
			},
		},
		options: [
			{
				name: 'Get Report',
				value: 'get',
				description: 'Generate and retrieve any of the 20 available Arbox system reports',
				action: 'Get a report',
				routing: {
					request: {
						method: 'GET',
						url: '=/reports/{{$parameter.reportType}}',
					},
				},
			},
		],
		default: 'get',
	},
];

export const reportsFields: INodeProperties[] = [
	{
		displayName: 'Report Type',
		name: 'reportType',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['reports'],
				operation: ['get'],
			},
		},
		options: [
			{ name: 'Attendance', value: 'attendance', description: 'Attendance logs' },
			{ name: 'Box Categories', value: 'boxCategories', description: 'Box categories breakdown' },
			{ name: 'Cancellation Reasons', value: 'cancellationReasons', description: 'List of cancellation reasons' },
			{ name: 'Cancellation Reasons Details', value: 'cancellationReasonsDetails', description: 'Cancellation details by member' },
			{ name: 'Debt', value: 'debt', description: 'Outstanding membership/purchase debt' },
			{ name: 'First Time Bookings', value: 'firstTime', description: 'First-time class booking logs' },
			{ name: 'Frozen Memberships', value: 'frozenMemberships', description: 'Frozen memberships report' },
			{ name: 'Gender Attendance', value: 'genderAttendance', description: 'Attendance logs segmented by gender' },
			{ name: 'Gender Attendance Summary', value: 'genderAttendanceSummary', description: 'Attendance summary by gender' },
			{ name: 'Genders', value: 'genders', description: 'Gender demographic report' },
			{ name: 'Leaders', value: 'leaders', description: 'Lead generation performance' },
			{ name: 'Leads Status Count', value: 'leadsStatusCount', description: 'Count of leads in each status' },
			{ name: 'Marketing Sources', value: 'marketingSources', description: 'Performance of marketing channels' },
			{ name: 'Medical Certificates', value: 'medicalCertificate', description: 'Status of medical certificates' },
			{ name: 'Memberships in Process', value: 'membershipsInProcess', description: 'Memberships in onboarding/process' },
			{ name: 'Non Attendance', value: 'nonAttendance', description: 'Members who did not attend booked classes' },
			{ name: 'Purchases by Date', value: 'purchasesByDate', description: 'Item and membership purchases report' },
			{ name: 'Transactions', value: 'transactions', description: 'Financial transaction logs' },
			{ name: 'User Birthdays', value: 'userBirthdays', description: 'Upcoming user birthdays' },
			{ name: 'User Schedules', value: 'userSchedules', description: 'Schedules booked by specific users' },
		],
		default: 'attendance',
		description: 'The specific report you want to generate',
	},
	{
		displayName: 'From Date',
		name: 'reportFromDate',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				resource: ['reports'],
				operation: ['get'],
			},
		},
		default: '',
		description: 'Start date for the report range',
		routing: {
			send: {
				type: 'query',
				property: 'fromDate',
			},
		},
	},
	{
		displayName: 'To Date',
		name: 'reportToDate',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				resource: ['reports'],
				operation: ['get'],
			},
		},
		default: '',
		description: 'End date for the report range (must not exceed 31 days from start date)',
		routing: {
			send: {
				type: 'query',
				property: 'toDate',
			},
		},
	},
	{
		displayName: 'Location ID',
		name: 'reportLocationId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['reports'],
				operation: ['get'],
			},
		},
		default: 0,
		description: 'Filter report results by a specific location ID',
		routing: {
			send: {
				type: 'query',
				property: 'location_id',
			},
		},
	},
];
