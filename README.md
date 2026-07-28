# St Luke’s Bombed Out Church — website prototype

This is a responsive design prototype for the home page, What’s On calendar and Sound Bath event-detail page.

## Routes

- `/` — Home
- `/whats-on` — interactive month calendar and agenda view
- `/whats-on/sound-bath-experience` — individual event page

The prototype uses one typed local event dataset in `app/lib/events.ts`. Calendar date selection, category filters, view switching and month navigation are interactive; ticket links intentionally lead out to Eventbrite.

## Brand notes

The colour system is based on the current signage guidance: `#4D55A0`, `#DDD3D0`, `#40AF78` and `#FFF8E9`, supported by an accessible dark ink colour. D-DIN and Helvetica Neue are approximated with system fallbacks for this prototype only. Confirm webfont licences and final browser-safe font files before production.

Photography is sourced from the project’s internal current-site reference set. It is for redesign exploration only; confirm rights, credits and original-resolution files before publication.

## Commands

- `npm run dev` — run locally
- `npm run build` — create and verify production output
- `npm run lint` — check code quality
- `npm test` — render all three routes and check core content
