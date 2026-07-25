import type { INodeProperties } from 'n8n-workflow';

export const locationsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['locations'],
			},
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get a list of locations',
				action: 'Get many locations',
				routing: {
					request: {
						method: 'GET',
						url: '/locations',
					},
				},
			},
		],
		default: 'getAll',
	},
];

export const locationsFields: INodeProperties[] = [];
