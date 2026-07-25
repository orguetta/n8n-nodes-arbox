import type { INodeProperties } from 'n8n-workflow';

export const digitalFormsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['digitalForms'],
			},
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get a list of digital forms',
				action: 'Get many digital forms',
				routing: {
					request: {
						method: 'GET',
						url: '/digitalForms',
					},
				},
			},
			{
				name: 'Create Link',
				value: 'createLink',
				description: 'Create a link for a user to fill a digital form',
				action: 'Create a digital form link',
				routing: {
					request: {
						method: 'POST',
						url: '/digitalForms/createLink',
					},
				},
			},
		],
		default: 'getAll',
	},
];

export const digitalFormsFields: INodeProperties[] = [
	{
		displayName: 'Digital Form ID',
		name: 'digitalFormId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['digitalForms'],
				operation: ['createLink'],
			},
		},
		default: 0,
		description: 'The ID of the digital form to create a link for',
		routing: {
			send: {
				type: 'body',
				property: 'digital_form_id',
			},
		},
	},
	{
		displayName: 'User ID',
		name: 'userId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['digitalForms'],
				operation: ['createLink'],
			},
		},
		default: 0,
		description: 'The ID of the user who needs to fill the form',
		routing: {
			send: {
				type: 'body',
				property: 'user_id',
			},
		},
	},
];
