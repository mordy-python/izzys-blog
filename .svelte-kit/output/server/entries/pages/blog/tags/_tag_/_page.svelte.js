import { c as create_ssr_component, h as each, v as validate_component } from "../../../../../chunks/index.js";
import { P as PageTitle } from "../../../../../chunks/PageTitle.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${each(data.posts, (post) => {
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
