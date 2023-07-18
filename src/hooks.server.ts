import type { Handle, HandleServerError } from '@sveltejs/kit';

export const handleError: HandleServerError = ({ error }) => {
	const message = 'Error caught in [server-hooks]: ' + (error as any)?.message;
	console.error(message);
	return { message };
};
