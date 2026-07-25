import type { INodeProperties } from 'n8n-workflow';

export const customFieldsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['customFields'],
			},
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get a list of many custom fields',
				action: 'Get many custom fields',
				routing: {
					request: {
						method: 'GET',
						url: '/customFields',
					},
				},
			},
		],
		default: 'getAll',
	},
];

export const customFieldsFields: INodeProperties[] = [];
