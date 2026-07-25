import type {
	ICredentialTestRequest,
	ICredentialType,
	Icon,
	INodeProperties,
} from 'n8n-workflow';

export class ArboxApi implements ICredentialType {
	name = 'arboxApi';
	displayName = 'Arbox API';
	icon: Icon = 'file:arboxApi.svg';

	// Must link to documentation or describe where to get it
	documentationUrl = 'https://arboxserver.arboxapp.com/docs/';

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://arboxserver.arboxapp.com/api/public/v3',
			url: '/locations',
			headers: {
				'api-key': '={{$credentials.apiKey}}',
			},
		},
	};
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			description: 'The API Key retrieved from Arbox under Settings > Club Information',
			required: true,
		},
	];
}
