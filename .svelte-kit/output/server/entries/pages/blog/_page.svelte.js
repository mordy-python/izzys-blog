import { c as create_ssr_component, e as escape, f as add_attribute, h as each, v as validate_component } from "../../../chunks/index.js";
import { P as PageTitle } from "../../../chunks/PageTitle.js";
import { c as config } from "../../../chunks/config.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-wdpgl_START -->${$$result.title = `<title>${escape(config.title)}</title>`, ""}<meta property="${"og:title"}"${add_attribute("content", config.title, 0)}><!-- HEAD_svelte-wdpgl_END -->`, ""}

${each(data.posts, (post) => {
    return `${validate_component(PageTitle, "PageTitle").$$render(
      $$result,
      {
        path: post.path,
        title: post.meta.title,
        date: post.meta.date,
        tags: post.meta.tags,
        summary: post.meta.summary
      },
      {},
      {}
    )}`;
  })}`;
});
export {
  Page as default
};
