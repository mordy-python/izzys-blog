import { c as create_ssr_component, e as escape } from "../../../chunks/index.js";
import { c as config } from "../../../chunks/config.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-pnf737{margin:-30px auto}h1.svelte-pnf737{text-align:center}form.svelte-pnf737{background-color:#44475a;padding:10px;border-radius:10px}.form-group.svelte-pnf737{margin:5px 0}input[type='text'].svelte-pnf737,input[type='email'].svelte-pnf737,textarea.svelte-pnf737{padding:10px;margin:10px 0;border:none;outline:none;background-color:#44475a;box-shadow:0 0 15px 4px rgba(0, 0, 0, 0.14);width:100%;color:#f8f8f2;border-radius:10px;font-family:inherit;font-size:inherit}textarea.svelte-pnf737{resize:none}button.svelte-pnf737{background-color:#50fa7b;color:#44475a;border-radius:5px;transition:0.5s;padding:5px;transition:0.5s;border:1px solid #44475a;font-size:18px}button.svelte-pnf737:hover{background-color:#44475a;color:#50fa7b;border:1px solid #50fa7b}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-apb2cv_START -->${$$result.title = `<title>Contact - ${escape(config.title)}</title>`, ""}<meta property="${"og:title"}" content="${"Contact - " + escape(config.title, true)}"><!-- HEAD_svelte-apb2cv_END -->`, ""}

<main class="${"svelte-pnf737"}"><h1 class="${"svelte-pnf737"}">Contact Me</h1>
	<form name="${"netlify-contact-form"}" method="${"POST"}" data-netlify="${"true"}" autocomplete="${"off"}" class="${"svelte-pnf737"}"><input type="${"hidden"}" name="${"form-name"}" value="${"netlify-contact-form"}">
		<div class="${"form-group svelte-pnf737"}"><label for="${"name"}">Name</label>
			<input name="${"name"}" id="${"name"}" required placeholder="${"Name"}" type="${"text"}" class="${"svelte-pnf737"}"></div>
		<div class="${"form-group svelte-pnf737"}"><label for="${"email"}">Email</label>
			<input name="${"email"}" id="${"email"}" required placeholder="${"Email"}" type="${"email"}" class="${"svelte-pnf737"}"></div>
		<div class="${"form-group svelte-pnf737"}"><label for="${"message"}">Message</label>
			<textarea name="${"message"}" id="${"message"}" required placeholder="${"Message"}" rows="${"10"}" class="${"svelte-pnf737"}"></textarea></div>
		<button type="${"submit"}" class="${"svelte-pnf737"}">Submit</button></form>
</main>`;
});
export {
  Page as default
};
