# Claude banked reset
Last Updated: 2026-09-22T17:00:27.201459+00:00
Status: Ready for Review
Completion: 90%

## Current Context
Official Opus 5.5 page verified via curl. User supplied official X announcement. New banked state is distinct from completed/expected; historical September 4 event retained. No expiry or exact plan eligibility invented.

## Original request
«так там пришел banked reset от антопика в честь опуса - давай-ка сделаем апдейт на сайте»

## Decisions
Use verified official blog as evidence; date-only precision avoids inventing announcement time. Cycling green card indicates available benefit; explicit manual use text. Separate fresh origin/main worktree preserves existing uncommitted notes.

## Files Modified
data/events.json; build.py; locales/en.json; locales/ru.json; src/site.js; src/style.css; generated public files.

## Timeline
2026-09-22T17:00:27.201459+00:00: verified announcement, implemented banked state and locale strings.

## Challenges & Solutions
Search failed to extract Anthropic page; direct HTTPS fetch returned official text.

## Next Steps
- [x] Build, syntax and state checks
- [ ] Publish PR and deploy
- [ ] Verify live card

## Latest decisions and verification
2026-09-22T17:03:36.727068+00:00 — Build, Python/JS syntax, diff whitespace and three-provider state assertions passed. Grok uses previously read original September 5 announcement, explicitly scoped to Grok Bot. Reports of September 17 reset remain unverified.
Existing free-ai-coding repository replaces obsolete catalogue with reset-only README as requested. Removed old translated catalogues and generator so stale offers cannot reappear; full content remains in Git history. Existing token-limit-resets repository remains untouched, no destructive remote deletion.

## Latest user correction
2026-09-22: User: «из free-ai-coding убираем banked resets». Removed the Anthropic banked-reset section from the README; site card remains. README generation also excludes banked events to prevent reintroduction. No new providers added.
