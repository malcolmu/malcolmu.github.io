# Project rules

## Staging deployment

- The staging site is `https://malcolmu.github.io/slboc/`.
- Always deploy staging through GitHub Actions using `.github/workflows/pages.yml`. A push to `main` triggers the deployment; `workflow_dispatch` is the manual fallback.
- Never use ChatGPT hosting or OpenAI Sites for this project's staging site. Do not create or restore `.openai/hosting.json`, add OpenAI hosting metadata, or invoke an OpenAI Sites deployment for staging.
- Before deploying, run `npm run build:staging` and `node --test tests/accessibility-export.test.mjs`.
- When asked to deploy staging, commit and push the validated source to `main`, then confirm the GitHub Pages workflow succeeds and the staging URL responds.
- Do not change the staging host or deployment route unless the user explicitly asks.
