import type { INodeProperties } from 'n8n-workflow';

export const usersOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['users'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new user',
				action: 'Create a user',
				routing: {
					request: {
						method: 'POST',
						url: '/users',
					},
				},
			},
			{
				name: 'Create Membership',
				value: 'createMembership',
				description: 'Create a new user membership',
				action: 'Create user membership',
				routing: {
					request: {
						method: 'POST',
						url: '/users/memberships',
					},
				},
			},
			{
				name: 'Create Note',
				value: 'createNote',
				description: 'Create a new note',
				action: 'Create user note',
				routing: {
					request: {
						method: 'POST',
						url: '/users/createNote',
					},
				},
			},
			{
				name: 'Delete by ID',
				value: 'deleteById',
				description: 'Delete user by ID',
				action: 'Delete user by ID',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/users/{{$parameter.deleteType}}/{{$parameter.deleteUserId}}',
					},
				},
			},
			{
				name: 'Get by ID',
				value: 'getById',
				description: 'Get user by ID',
				action: 'Get user by ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/users/{{$parameter.userId}}',
					},
				},
			},
			{
				name: 'Get by Name/Email/Phone',
				value: 'getByInput',
				description: 'Get a list of users by input search query',
				action: 'Get user by search query',
				routing: {
					request: {
						method: 'GET',
						url: '=/users/user/{{$parameter.searchInput}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get a list of users',
				action: 'Get many users',
				routing: {
					request: {
						method: 'GET',
						url: '/users',
					},
				},
			},
			{
				name: 'Get Memberships',
				value: 'getMemberships',
				description: 'Get a list of user memberships',
				action: 'Get user memberships',
				routing: {
					request: {
						method: 'GET',
						url: '/users/memberships',
					},
				},
			},
			{
				name: 'Get with Waiver Signed Status',
				value: 'getWithWaiver',
				description: 'Get users by signed waiver status',
				action: 'Get users by signed waiver status',
				routing: {
					request: {
						method: 'GET',
						url: '=/users/waiver/{{$parameter.waiverType}}/{{$parameter.waiverValue}}',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an existing user',
				action: 'Update a user',
				routing: {
					request: {
						method: 'PATCH',
						url: '/users',
					},
				},
			},
		],
		default: 'getAll',
	},
];

export const usersFields: INodeProperties[] = [
	// users.create fields
	{
		displayName: 'First Name',
		name: 'firstName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['users'],
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
		displayName: 'Last Name',
		name: 'lastName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['users'],
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
		required: true,
		displayOptions: {
			show: {
				resource: ['users'],
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
		displayName: 'Phone',
		name: 'phone',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['users'],
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
		displayOptions: {
			show: {
				resource: ['users'],
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
		displayName: 'Active',
		name: 'active',
		type: 'options',
		options: [
			{ name: 'Yes (Active)', value: 1 },
			{ name: 'No (Inactive)', value: 0 },
		],
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['create'],
			},
		},
		default: 1,
		routing: {
			send: {
				type: 'body',
				property: 'active',
			},
		},
	},
	{
		displayName: 'Additional Phone',
		name: 'additionalPhone',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['create'],
			},
		},
		default: '',
		routing: {
			send: {
				type: 'body',
				property: 'additional_phone',
			},
		},
	},
	{
		displayName: 'Personal ID / Passport',
		name: 'personalId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['create'],
			},
		},
		default: '',
		routing: {
			send: {
				type: 'body',
				property: 'personal_id',
			},
		},
	},
	{
		displayName: 'Birthday',
		name: 'birthday',
		type: 'dateTime',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['create'],
			},
		},
		default: '',
		routing: {
			send: {
				type: 'body',
				property: 'birthday',
			},
		},
	},
	{
		displayName: 'Gender',
		name: 'gender',
		type: 'options',
		options: [
			{ name: 'Male', value: 'male' },
			{ name: 'Female', value: 'female' },
			{ name: 'Other', value: 'other' },
		],
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['create'],
			},
		},
		default: 'male',
		routing: {
			send: {
				type: 'body',
				property: 'gender',
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
				resource: ['users'],
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
				resource: ['users'],
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
	{
		displayName: 'Has Waiver Signed',
		name: 'hasWaiver',
		type: 'options',
		options: [
			{ name: 'Yes', value: 1 },
			{ name: 'No', value: 0 },
		],
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['create'],
			},
		},
		default: 1,
		routing: {
			send: {
				type: 'body',
				property: 'has_waiver',
			},
		},
	},
	{
		displayName: 'Medical Certificate Approved',
		name: 'medicalCert',
		type: 'options',
		options: [
			{ name: 'Yes', value: 1 },
			{ name: 'No', value: 0 },
		],
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['create'],
			},
		},
		default: 1,
		routing: {
			send: {
				type: 'body',
				property: 'medical_cert',
			},
		},
	},

	// users.update fields
	{
		displayName: 'User ID',
		name: 'updateUserId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['update'],
			},
		},
		default: 0,
		description: 'The ID of the user to update',
		routing: {
			send: {
				type: 'body',
				property: 'user_id',
			},
		},
	},
	{
		displayName: 'First Name',
		name: 'updateFirstName',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['update'],
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
		displayName: 'Last Name',
		name: 'updateLastName',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['update'],
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
		displayName: 'Phone',
		name: 'updatePhone',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['update'],
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
		displayName: 'Additional Phone',
		name: 'updateAdditionalPhone',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['update'],
			},
		},
		default: '',
		routing: {
			send: {
				type: 'body',
				property: 'additional_phone',
			},
		},
	},
	{
		displayName: 'Personal ID',
		name: 'updatePersonalId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['update'],
			},
		},
		default: '',
		routing: {
			send: {
				type: 'body',
				property: 'personal_id',
			},
		},
	},
	{
		displayName: 'Birthday',
		name: 'updateBirthday',
		type: 'dateTime',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['update'],
			},
		},
		default: '',
		routing: {
			send: {
				type: 'body',
				property: 'birthday',
			},
		},
	},

	// users.getById fields
	{
		displayName: 'User ID',
		name: 'userId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['getById'],
			},
		},
		default: 0,
		description: 'The ID of the user to retrieve',
	},

	// users.deleteById fields
	{
		displayName: 'Type',
		name: 'deleteType',
		type: 'options',
		options: [
			{ name: 'Lead', value: 'lead' },
			{ name: 'Client (User)', value: 'client' },
		],
		required: true,
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['deleteById'],
			},
		},
		default: 'client',
	},
	{
		displayName: 'User ID',
		name: 'deleteUserId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['deleteById'],
			},
		},
		default: 0,
	},

	// users.getMemberships fields
	{
		displayName: 'Active Only',
		name: 'membershipsActiveOnly',
		type: 'options',
		options: [
			{ name: 'All', value: 'all' },
			{ name: 'Yes (Active)', value: 'true' },
			{ name: 'No (Inactive)', value: 'false' },
		],
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['getMemberships'],
			},
		},
		default: 'all',
		routing: {
			send: {
				type: 'query',
				property: 'active',
			},
		},
	},
	{
		displayName: 'User ID',
		name: 'membershipsUserId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['getMemberships'],
			},
		},
		default: 0,
		description: 'Filter memberships by user ID',
		routing: {
			send: {
				type: 'query',
				property: 'user_id',
			},
		},
	},

	// users.createMembership fields
	{
		displayName: 'User ID',
		name: 'createMembershipUserId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['createMembership'],
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
		displayName: 'Membership Type ID',
		name: 'createMembershipTypeId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['createMembership'],
			},
		},
		default: 0,
		routing: {
			send: {
				type: 'body',
				property: 'membership_type_id',
			},
		},
	},
	{
		displayName: 'Start Date',
		name: 'createMembershipStartDate',
		type: 'dateTime',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['createMembership'],
			},
		},
		default: '',
		routing: {
			send: {
				type: 'body',
				property: 'start_date',
			},
		},
	},
	{
		displayName: 'End Date',
		name: 'createMembershipEndDate',
		type: 'dateTime',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['createMembership'],
			},
		},
		default: '',
		routing: {
			send: {
				type: 'body',
				property: 'end_date',
			},
		},
	},
	{
		displayName: 'Generate QR Code',
		name: 'createMembershipGenerateQr',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['createMembership'],
			},
		},
		default: true,
		routing: {
			send: {
				type: 'body',
				property: 'generate_qr',
			},
		},
	},
	{
		displayName: 'Location ID',
		name: 'createMembershipLocationId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['createMembership'],
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

	// users.getWithWaiver fields
	{
		displayName: 'Type',
		name: 'waiverType',
		type: 'options',
		options: [
			{ name: 'Lead', value: 'lead' },
			{ name: 'Client (User)', value: 'client' },
		],
		required: true,
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['getWithWaiver'],
			},
		},
		default: 'client',
	},
	{
		displayName: 'Waiver Signed Status',
		name: 'waiverValue',
		type: 'options',
		options: [
			{ name: 'Waiver Signed', value: 1 },
			{ name: 'Waiver NOT Signed', value: 0 },
		],
		required: true,
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['getWithWaiver'],
			},
		},
		default: 1,
	},

	// users.getByInput fields
	{
		displayName: 'Search Input',
		name: 'searchInput',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['getByInput'],
			},
		},
		default: '',
		placeholder: 'Search by first name, email, or phone number',
	},

	// users.createNote fields
	{
		displayName: 'User ID',
		name: 'createNoteUserId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['users'],
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
				resource: ['users'],
				operation: ['createNote'],
			},
		},
		default: '',
		routing: {
			send: {
				type: 'body',
				property: 'description',
			},
		},
	},
];
