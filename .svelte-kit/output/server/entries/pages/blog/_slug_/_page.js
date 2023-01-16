const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
async function load({ params }) {
  const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../posts/book-log.md": () => import("../../../../chunks/book-log.js"), "../posts/welcome.md": () => import("../../../../chunks/welcome.js") }), `../posts/${params.slug}.md`);
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
