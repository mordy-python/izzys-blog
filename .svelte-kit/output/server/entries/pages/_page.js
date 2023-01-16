async function load() {
  const post = await import("../../chunks/welcome.js");
  const { title, date, tags, summary } = post.metadata;
  const content = post.default;
  return {
    content,
    tags,
    title,
    date,
    summary
  };
}
export {
  load
};
