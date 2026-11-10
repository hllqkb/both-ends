# 两头烧 (Both Ends)

A two-minute browser game about being a student who started interning in the first year:
homework falls on the left, work tickets fall on the right, and the energy bar is a candle
lit at both ends.

Play: https://hllqkb.github.io/both-ends/

- The game: [`prototypes/both-ends/`](prototypes/both-ends/) (one HTML file and a config, no build step)
- The one-page brief it was built from: [`design/game-brief.md`](design/game-brief.md)
- Check evidence (screenshots, rows): [`prototypes/both-ends/evidence/`](prototypes/both-ends/evidence/)

## How it was made

This repository is a copy of the
[Claude Code Game Studios](https://github.com/Donchitos/Claude-Code-Game-Studios) template
(MIT, see `LICENSE`; its own README is kept at [`docs/TEMPLATE-README.md`](docs/TEMPLATE-README.md)).
The game came out of its `/prototype` one-shot route: a brief, a first build, then the
template's small check. The check runs in GitHub Actions (`.github/workflows/check.yml`)
instead of on a laptop.

Controls: arrow keys or A/D to run, Space to dash, P to pause, M to mute. On a phone, hold the
screen to run toward your finger and double-tap to dash.
