import type { LayoutLoad } from "./$types"

export const load = (async ({ data }) => {
	return { ...data, "layout.ts": 1 }
}) satisfies LayoutLoad;