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
  assert.match(html, /church-roof-\d+\.webp/);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview|react-loading-skeleton/);
});

test("renders the events calendar and individual event pages", async () => {
  const [calendar, detail] = await Promise.all([render("/whats-on"), render("/whats-on/sound-bath-experience-july-29")]);
  const [calendarHtml, detailHtml] = await Promise.all([calendar.text(), detail.text()]);
  assert.equal(calendar.status, 200);
  assert.equal(detail.status, 200);
  assert.match(calendarHtml, /August 2026/);
  assert.match(calendarHtml, /Twelfth Night/);
  assert.match(calendarHtml, /Calendar/);
  assert.match(calendarHtml, /Agenda/);
  assert.match(calendarHtml, /The next three/);
  assert.match(calendarHtml, /calendar-event-link/);
  assert.match(detailHtml, /Check Eventbrite/);
  assert.match(detailHtml, /Good to know/);
});

test("renders the major local content routes", async () => {
  const routes = ["/visit", "/our-story", "/garden-bar", "/weddings", "/venue-hire", "/blog", "/blog/looking-back-at-a-year-of-events-at-st-luke-s-bombed-out-church", "/get-involved", "/jobs", "/contact", "/terms", "/privacy"];
  const responses = await Promise.all(routes.map(render));
  for (const response of responses) {
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.doesNotMatch(html, /Your site is taking shape|codex-preview/);
  }
});

test("keeps rolled-up heritage content and the expanded footer visible", async () => {
  const [story, garden, home] = await Promise.all([render("/our-story"), render("/garden-bar"), render("/")]);
  const [storyHtml, gardenHtml, homeHtml] = await Promise.all([story.text(), garden.text(), home.text()]);
  assert.match(storyHtml, /Above us, only sky/);
  assert.match(storyHtml, /20th-century chapel/);
  assert.match(gardenHtml, /Opening times/);
  assert.match(homeHtml, /Blog &amp; stories|Blog & stories/);
  assert.match(homeHtml, /instagram\.com\/bombedoutchurchliverpool/);
});
