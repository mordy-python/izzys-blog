import { c as create_ssr_component, e as escape, h as each, v as validate_component, m as missing_component } from "../../../../chunks/index.js";
import { c as config } from "../../../../chunks/config.js";
const Bye = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><h3>Bye</h3>

	<p>Thank you for visiting! If you have any questions you can email me at
		<a href="${"mailto:imky171@gmail.com"}">imky171 @ gmail dot com</a> or
		<a href="${"/contact"}">fill out the contact form.</a></p></div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".title-block.svelte-vj8xoi.svelte-vj8xoi{display:flex;align-items:center;justify-content:space-between}.title-block.svelte-vj8xoi h2.svelte-vj8xoi{color:#8be9fd}.title-block.svelte-vj8xoi small.svelte-vj8xoi{color:#6272a4}a.svelte-vj8xoi.svelte-vj8xoi{text-decoration:none;color:inherit}.tag.svelte-vj8xoi.svelte-vj8xoi{color:#6272a4;font-weight:bold}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1g3xu8r_START -->${$$result.title = `<title>${escape(data.title)} - ${escape(config.title)}</title>`, ""}<meta property="${"og:title"}" content="${escape(data.title, true) + " - " + escape(config.title, true)}"><!-- HEAD_svelte-1g3xu8r_END -->`, ""}

<article><div class="${"title-block svelte-vj8xoi"}"><h2 class="${"svelte-vj8xoi"}">${escape(data.title)}</h2>
		<small class="${"svelte-vj8xoi"}">${escape(new Date(data.date).toLocaleDateString())}</small></div>
	${data.tags.length ? `<aside>${each(data.tags, (tag) => {
    return `<a href="${"/blog/tags/" + escape(tag, true)}" class="${"tag svelte-vj8xoi"}">#${escape(tag)}</a> `;
  })}</aside>` : ``}
	${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}
	${validate_component(Bye, "Bye").$$render($$result, {}, {}, {})}
</article>`;
});
export {
  Page as default
};
