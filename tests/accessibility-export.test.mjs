import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const exportRoot = new URL("../out/slboc/", import.meta.url);
const representativePages = [
  ["Home", "index.html"],
  ["What’s on", "whats-on/index.html"],
  ["Event", "whats-on/twelfth-night/index.html"],
  ["Our story", "our-story/index.html"],
  ["Visit", "visit/index.html"],
  ["Weddings", "weddings/index.html"],
  ["Contact", "contact/index.html"],
  ["Blog", "blog/index.html"],
  ["Long article", "blog/a-massive-thank-you-to-the-heritage-fund-uk-national-lottery-players-as-we-come-to-the-end-of-our-very-first-heritage-grant-project/index.html"],
];

test("static pages retain core WCAG structure", async () => {
  for (const [name, relativePath] of representativePages) {
    const html = await readFile(new URL(relativePath, exportRoot), "utf8");
    const imageTags = html.match(/<img\b[^>]*>/g) ?? [];
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
    const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];

    assert.match(html, /<html[^>]*lang="en"/, `${name}: page language`);
    assert.match(html, /href="#main-content"[^>]*>Skip to main content</, `${name}: skip link`);
    assert.equal((html.match(/id="main-content"/g) ?? []).length, 1, `${name}: one skip target`);
    assert.equal((html.match(/<main\b/g) ?? []).length, 1, `${name}: one main landmark`);
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${name}: one level-one heading`);
    assert.match(html, /<title>[^<]+<\/title>/, `${name}: descriptive page title`);
    assert.deepEqual(duplicateIds, [], `${name}: no duplicate IDs`);
    assert.ok(imageTags.every((tag) => /\balt=/.test(tag)), `${name}: every image has an alt attribute`);
  }
});

test("exported forms retain labels and input purposes", async () => {
  const html = await readFile(new URL("contact/index.html", exportRoot), "utf8");
  const controlTags = html.match(/<(?:input|textarea)\b[^>]*>/g) ?? [];

  for (const tag of controlTags) {
    const id = tag.match(/\sid="([^"]+)"/)?.[1];
    assert.ok(id, `form control has an ID: ${tag}`);
    assert.match(html, new RegExp(`<label[^>]*for="${id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`), `form control ${id} has a label`);
    assert.match(tag, /\sname="[^"]+"/, `form control ${id} has a name`);
  }

  assert.match(html, /autocomplete="name"/i, "name input identifies its purpose");
  assert.match(html, /autocomplete="email"/i, "email input identifies its purpose");
});
