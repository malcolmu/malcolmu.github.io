import assert from "node:assert/strict";
import test from "node:test";

async function render(path) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the home page with the project positioning and event route", async () => {
  const response = await render("/");
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.match(html, /A place of reflection/);
  assert.match(html, /a living venue/);
  assert.match(html, /What’s on/);
  assert.match(html, /church-roof\.jpg/);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview|react-loading-skeleton/);
});

test("renders the events calendar and individual event pages", async () => {
  const [calendar, detail] = await Promise.all([render("/whats-on"), render("/whats-on/sound-bath-experience")]);
  const [calendarHtml, detailHtml] = await Promise.all([calendar.text(), detail.text()]);
  assert.equal(calendar.status, 200);
  assert.equal(detail.status, 200);
  assert.match(calendarHtml, /August 2026/);
  assert.match(calendarHtml, /Sound Bath Experience/);
  assert.match(calendarHtml, /Calendar/);
  assert.match(calendarHtml, /Agenda/);
  assert.match(detailHtml, /Book with Eventbrite/);
  assert.match(detailHtml, /Good to know/);
});
