// @ts-ignore
export async function load({ params }) {
    const post = await import(`../posts/${params.slug}.md`);

    const { title, date, tags, summary } = post.metadata;
    const content = post.default;

    return {
        content,
        tags,
        title,
        date,
        summary,
    }
}