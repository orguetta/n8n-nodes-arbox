import {
	INodeType,
	INodeTypeDescription,
	NodeConnectionTypes,
} from 'n8n-workflow';

import { customFieldsFields, customFieldsOperations } from './descriptions/CustomFieldsDescription';
import { digitalFormsFields, digitalFormsOperations } from './descriptions/DigitalFormsDescription';
import { leadsFields, leadsOperations } from './descriptions/LeadsDescription';
import { locationsFields, locationsOperations } from './descriptions/LocationsDescription';
import { membershipTypesFields, membershipTypesOperations } from './descriptions/MembershipTypesDescription';
import { reportsFields, reportsOperations } from './descriptions/ReportsDescription';
import { scheduleFields, scheduleOperations } from './descriptions/ScheduleDescription';
import { tasksFields, tasksOperations } from './descriptions/TasksDescription';
import { usersFields, usersOperations } from './descriptions/UsersDescription';

export class Arbox implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Arbox',
		name: 'arbox',
		icon: 'file:arbox.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter.resource + ": " + $parameter.operation}}',
		description: 'Consume the Arbox API for fitness clubs and studios',
		defaults: {
			name: 'Arbox',
		},
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'arboxApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://arboxserver.arboxapp.com/api/public/v3',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'api-key': '={{$credentials.apiKey}}',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{ name: 'Custom Field', value: 'customFields' },
					{ name: 'Digital Form', value: 'digitalForms' },
					{ name: 'Lead', value: 'leads' },
					{ name: 'Location', value: 'locations' },
					{ name: 'Membership Type', value: 'membershipTypes' },
					{ name: 'Report', value: 'reports' },
					{ name: 'Schedule / Class', value: 'schedule' },
					{ name: 'Task', value: 'tasks' },
					{ name: 'User / Member', value: 'users' },
				],
				default: 'users',
			},

			// Operations
			...customFieldsOperations,
			...digitalFormsOperations,
			...leadsOperations,
			...locationsOperations,
			...membershipTypesOperations,
			...reportsOperations,
			...scheduleOperations,
			...tasksOperations,
			...usersOperations,

			// Fields
			...customFieldsFields,
			...digitalFormsFields,
			...leadsFields,
			...locationsFields,
			...membershipTypesFields,
			...reportsFields,
			...scheduleFields,
			...tasksFields,
			...usersFields,
		],
		usableAsTool: true,
	};
}
