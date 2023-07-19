import { initState } from "@inlang/sdk-js/adapter-sveltekit/server"
import type { PageServerLoad } from "./$types"

export const load = (async () => {
	return { "page.server.ts": 1 }
}) satisfies PageServerLoad;

export const entries = async () => {
	const { languages } = await initState(await import("../../inlang.config"))

	return languages.map((language) => ({ lang: language }))
}