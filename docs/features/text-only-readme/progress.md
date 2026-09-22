# Text-only README
Last Updated: 2026-09-22T17:16:17.360117+00:00
Status: Ready for Review
Completion: 90%

## Original request
«и svg давай уберем из репо это скорее для сайта иллюстрация, в гитхабе более строго все должно быть»

## Current Context
Removed README illustrations and playful captions. Website illustration assets remain. Generator no longer appends illustration markup to README rows.

## Decisions
Keep website visuals; GitHub has only statuses, dates, sources and notifications. Keep hosted legacy SVG URLs working for existing references.

## Timeline
Edited README and generator. Release build, JS syntax and diff checks are run before PR.

## Files Modified
README.md (catalogue); build.py and minimal-README.md (website source); this progress note.

## Challenges & Solutions
Generated README must match manual edit to prevent illustration reintroduction.

## Next Steps
- [ ] Merge PRs and verify published README
