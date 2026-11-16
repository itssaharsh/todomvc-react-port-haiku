# Behaviour tests (Kane CLI)

These 18 plain-English tests were designed by Kane CLI from the TodoMVC spec, passed on the original jQuery app, and were used by [Ditto](https://github.com/itssaharsh/ditto) to check this port until every one passed here too.

Run them against a local build:

```bash
npm run build && npx serve -l 7002 dist   # or any static server on port 7002
kane-cli testrun run tests/kane --parallel 3 < /dev/null
```

The start URL and test values come from `.testmuai/variables/ditto.json`.
