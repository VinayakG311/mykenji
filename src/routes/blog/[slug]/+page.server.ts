import { getPost } from '$lib/backend/posts';
import type { Load } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Load} */
export const load: Load = async ({ url, params, fetch }) => {
	const res = await getPost(params.slug);
	if (res?.post) {
		return {
			post: res.post[0],
			toc: res.toc
		}
		
	}

	return {
		status: 500,
		error: new Error(`Could not load url`)
	};
};
