import { c as create_ssr_component } from "./index.js";
const metadata = {
  "title": "Welcome & About Me",
  "date": "2022-12-18T00:00:00.000Z",
  "summary": "In which I introduce myself",
  "tags": ["about-me"]
};
const Welcome = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>Welcome to my blog, my name is Izzy.</p>
<h3>My Hobbies</h3>
<ul><li><p>I enjoy coding</p>
<ul><li>My favorite language is Python, but I am expanding to other languages such
as TypeScript and Javascript.</li>
<li>This blog is made with SvelteKit and JS</li></ul></li>
<li><p>I also enjoy cooking and baking</p>
<ul><li>I’ve made different types of bread and cakes as well as brownies and cookies</li></ul></li>
<li><p>I thoroughly enjoy reading, it’s one of my favorite pastimes.</p></li>
<li><p>I also love solving rubiks cubes.</p>
<ul><li>I can solve a 3x3 in about a minute</li>
<li>I can solve a 2x2 in around 18 seconds</li></ul></li></ul>`;
});
export {
  Welcome as default,
  metadata
};
