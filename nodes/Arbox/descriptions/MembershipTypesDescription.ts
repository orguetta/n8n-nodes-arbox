import type { INodeProperties } from 'n8n-workflow';

export const membershipTypesOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['membershipTypes'],
			},
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get a list of membership types',
				action: 'Get many membership types',
				routing: {
					request: {
						method: 'GET',
						url: '/membershipTypes',
					},
				},
			},
		],
		default: 'getAll',
	},
];

export const membershipTypesFields: INodeProperties[] = [];
