import type { PageLoad } from "./$types"

export const load = (async ({ data }) => {
	return { ...data, "page.ts": 1 }
}) satisfies PageLoad;