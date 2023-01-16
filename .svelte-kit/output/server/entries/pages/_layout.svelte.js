import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const Header_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-clea07{padding:1rem;background-color:#282a36;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;box-shadow:0 5px 10px 0 rgb(0 0 0 / 15%);font-size:20px}ul.svelte-clea07{margin:0;list-style-type:none;display:flex;gap:1rem}a.svelte-clea07{text-decoration:none;color:inherit;padding:5px;transition:0.5s;border:1px solid #282a36}a.svelte-clea07:hover{background-color:#6272a4;border-radius:5px}.home.svelte-clea07{background-color:#50fa7b;color:#282a36;border-radius:5px;transition:0.5s}.home.svelte-clea07:hover{background-color:#282a36;color:#50fa7b;border:1px solid #50fa7b}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="${"svelte-clea07"}"><a href="${"/"}" class="${"home svelte-clea07"}">Home</a>

	<nav><ul class="${"svelte-clea07"}"><li><a href="${"/blog"}" class="${"svelte-clea07"}">Blog</a></li>
			<li><a href="${"/about"}" class="${"svelte-clea07"}">About</a></li>
			<li><a href="${"/contact"}" class="${"svelte-clea07"}">Contact</a></li></ul></nav>
</header>`;
});
const style = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

${$$result.head += `<!-- HEAD_svelte-1poz8wk_START --><script async src="${"https://www.googletagmanager.com/gtag/js?id=G-2Z5YZ6J0BL"}"><\/script><script>window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-2Z5YZ6J0BL');
	<\/script><!-- HEAD_svelte-1poz8wk_END -->`, ""}

<main>${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
