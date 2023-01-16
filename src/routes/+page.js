// @ts-ignore
export async function load() {
    // @ts-ignore
    const post = await import("./blog/posts/welcome.md");

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