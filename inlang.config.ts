import type { DefineConfig } from '@inlang/core/config';

export const defineConfig = (async (env) =>  {
	const { default: jsonPlugin } = await env.$import(
		'https://cdn.jsdelivr.net/npm/@inlang/plugin-json@3/dist/index.js'
	);
	const { default: sdkPlugin } = await env.$import(
		'https://cdn.jsdelivr.net/npm/@inlang/sdk-js-plugin@latest/dist/index.js'
	);

	return {
		referenceLanguage: 'en',
		plugins: [
			jsonPlugin({
				pathPattern: './src/lib/languages/{language}.json'
			}),
			sdkPlugin({
				languageNegotiation: {
					strategies: [{ type: 'localStorage' }]
				}
			})
		]
	};
}) satisfies DefineConfig;
