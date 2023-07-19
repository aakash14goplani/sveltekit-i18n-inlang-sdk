import type { LayoutServerLoad } from "./$types"

export const load = (async () => {
	return { "layout.server.ts": 1 }
}) satisfies LayoutServerLoad;