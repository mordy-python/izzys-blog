import { c as create_ssr_component, f as add_attribute, e as escape, h as each } from "./index.js";
const PageTitle_svelte_svelte_type_style_lang = "";
const css = {
  code: ".title-block.svelte-3uy352.svelte-3uy352{display:flex;align-items:center;justify-content:space-between;margin-bottom:5px}.title-block.svelte-3uy352 h2.svelte-3uy352{color:#8be9fd}a.svelte-3uy352.svelte-3uy352{text-decoration:none;color:inherit}.tag.svelte-3uy352.svelte-3uy352{color:#6272a4;font-weight:bold}small.svelte-3uy352.svelte-3uy352{color:#6272a4}",
  map: null
};
const PageTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { path } = $$props;
  let { title } = $$props;
  let { date } = $$props;
  let { tags } = $$props;
  let { summary } = $$props;
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  if ($$props.summary === void 0 && $$bindings.summary && summary !== void 0)
    $$bindings.summary(summary);
  $$result.css.add(css);
  return `<div class="${"title-block svelte-3uy352"}"><h2 class="${"svelte-3uy352"}"><a${add_attribute("href", path, 0)} class="${"svelte-3uy352"}">${escape(title)}</a></h2>
	<small class="${"svelte-3uy352"}">${escape(new Date(date).toLocaleDateString())}</small></div>
<p>${escape(summary)}</p>
${each(tags, (tag) => {
    return `<a href="${"/blog/tags/" + escape(tag, true)}" class="${"tag svelte-3uy352"}">#${escape(tag)}</a> `;
  })}`;
});
export {
  PageTitle as P
};
