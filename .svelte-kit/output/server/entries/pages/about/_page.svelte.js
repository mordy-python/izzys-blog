import { c as create_ssr_component, e as escape } from "../../../chunks/index.js";
import { c as config } from "../../../chunks/config.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-yqv0sp_START -->${$$result.title = `<title>About - ${escape(config.title)}</title>`, ""}<meta property="${"og:title"}" content="${"About - " + escape(config.title, true)}"><!-- HEAD_svelte-yqv0sp_END -->`, ""}

<main>About</main>`;
});
export {
  Page as default
};
