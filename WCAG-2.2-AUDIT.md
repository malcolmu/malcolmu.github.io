# WCAG 2.2 accessibility audit

**Site:** St Luke’s Bombed Out Church local prototype  
**Audit date:** 29 July 2026  
**Target:** WCAG 2.2 Level AA  
**Current result:** No known WCAG 2.2 AA failures remain in the first-party prototype after the changes in this audit.

## Scope and method

The audit covered the shared page templates and representative examples of the home, events, event detail, Our Story, standard content, contact, blog index and long-form blog article pages.

Checks included:

- page language, titles, landmarks and heading structure;
- image alternatives and form labels;
- complete keyboard navigation;
- skip-link behaviour;
- mobile-menu focus management, focus containment and Escape handling;
- accordion state and keyboard operation;
- visible focus indicators;
- text and non-text colour contrast;
- reduced-motion behaviour;
- 320px reflow and horizontal overflow;
- long headings and content expansion;
- minimum WCAG 2.2 target sizes;
- accessible names, status messages and control grouping;
- static-export regression checks.

Testing used desktop, tablet and 320px browser widths. Representative exported pages are now covered by an automated accessibility regression test.

## Changes made

### Structure and navigation

- Added a keyboard-visible “Skip to main content” link and a single reliable destination on every page template.
- Added explicit banner and content-information landmarks.
- Added unique, descriptive page titles, including event and article pages.
- Added current-page state to the main and mobile navigation.
- Kept one level-one heading and one main landmark on every tested page.

### Keyboard and focus

- Added a high-contrast, two-colour focus indicator that remains visible on light, dark and green backgrounds.
- Made the mobile navigation move focus into the open panel, contain focus, close with Escape and return focus to the trigger.
- Prevented the closed mobile panel from entering the tab order.
- Confirmed that the FAQ accordion exposes its open/closed state and closes the previous panel when another opens.

### Forms and status

- Gave each form field an explicit label, ID and name.
- Added `name` and `email` autocomplete purposes.
- Added an announced status message when the prototype form is submitted.
- Connected the prototype notice to the form programmatically.

### Reflow, motion and interaction

- Removed fixed hero heights that could clip enlarged or re-spaced text.
- Corrected long article headers so they use the full width on small screens.
- Added an `overflow-wrap` safeguard for unusually long headings.
- Added reduced-motion rules for fades, transitions, smooth scrolling and the Our Story parallax treatment.
- Increased standalone interactive targets to at least 24 × 24 CSS pixels; primary controls are 44px or larger.
- Added group semantics to the event view and category controls.
- Corrected the month-selector heading/button structure.

### Links and images

- Confirmed that every tested image has an alternative-text attribute.
- Added screen-reader warnings to links that open a new tab.
- Underlined email links where they appear within contact copy.

## Visible style changes

These changes affect the appearance and should be included in design review:

1. **Small green text on light backgrounds is darker.**  
   The original `#40af78` brand green only reaches roughly 2.6:1 against the cream background. Small labels now use `#23764b`, which reaches roughly 5.3:1. The brighter brand green remains in large fills, borders and dark-background treatments.

2. **Keyboard focus is more prominent.**  
   Focused controls use a cream inner ring and dark outer ring. This is only visible during keyboard navigation and is designed to retain at least 3:1 contrast on every site background.

3. **Programme-section labels are slightly brighter.**  
   Cream labels over the purple sections increased from 75% to 82% opacity to clear the 4.5:1 text requirement.

4. **Adjacent-month calendar dates are darker and more distinct.**  
   They now use `#554f4d` on `#cbc4c2`. The selected-date border also uses the darker accessible green.

5. **Current navigation items are visibly identified.**  
   Desktop navigation uses the existing underline; the mobile panel adds a purple rule/accent.

6. **Contact email links are underlined.**  
   This ensures links inside ordinary copy are not identified by colour alone.

7. **Very long heroes can grow taller.**  
   The normal hero appearance is unchanged, but long or enlarged text is no longer clipped by a fixed-height container.

8. **Some hit areas are slightly larger.**  
   Text links, footer links, calendar event links and the month selector have larger invisible or minimally visible padding.

9. **A skip link appears when keyboard users press Tab.**  
   It is not visible during normal pointer use.

## Checks passed

| Area | Result |
| --- | --- |
| Keyboard access and no keyboard traps | Pass |
| Focus visible and not obscured | Pass |
| Skip repeated navigation | Pass |
| Page language and descriptive titles | Pass |
| Heading and landmark structure | Pass |
| Alternative text in tested templates | Pass |
| Form labels and input purposes | Pass |
| Status-message announcement | Pass |
| Text contrast in defined colour treatments | Pass |
| Non-text contrast for focus and selected states | Pass |
| 320px reflow and horizontal overflow | Pass |
| WCAG 2.2 minimum target size | Pass |
| Reduced-motion support | Pass |
| Long-title and content expansion | Pass |
| Static export/build | Pass |

## Before making a formal public conformance claim

A formal accessibility claim should still wait for:

- a short manual assistive-technology pass with VoiceOver and Safari on Apple devices, plus NVDA with Firefox or Chrome on Windows;
- testing of the final working form, including required fields, validation, error identification and recovery;
- review of final CMS-authored content, especially heading order, link wording and image descriptions;
- checks of any embedded or third-party services. Eventbrite and Google Maps are outside this site’s conformance boundary, although the links leading to them are accessible.

Accessibility is also an ongoing content and editorial responsibility. New event cards, blog posts, images and CMS components should be checked before publication.
