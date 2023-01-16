import { c as create_ssr_component } from "./index.js";
const metadata = {
  "title": "Book Log",
  "date": "2023-01-02T00:00:00.000Z",
  "summary": "In which I talk about books",
  "tags": ["books", "reading"]
};
const Book_log = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>Hey everyone and happy New Year 🎉!</p>
<p>I’m going to start a book log where I update my progress while reading books and
then review them when I finish.</p>
<p>There’s no better time to start than the present, so here goes for my first
book.</p>
<hr>
<h3>The Book</h3>
<h4>The Luminaries<br></h4>
<small>By: Susan Dennard</small>
<p>I started the book yesterday, January 1st, and I’m about halfway through it.
I’ve read <em>115/304</em> pages so far. I’m really enjoying the book. The
characters are well developed and every chapter ends with something happening
that makes you want to read the next chapter. The setting is described
exceptionally well and I can picture the forest in my mind.</p>
<h3>Overall</h3>
<ul><li>Genre: Fanatasy</li>
<li>Rating: 👍</li>
<li>Progress: 115/304</li></ul>`;
});
export {
  Book_log as default,
  metadata
};
