# makefun-x-reposts-02 — X reposts & likes

[![make.fun](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/c/makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/cashbags/makefun-x-reposts-02/rank.svg)](https://make.fun/c/makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/cashbags/makefun-x-reposts-02/reward.svg)](https://make.fun/c/makefun-x-reposts-02)

Entry for the make.fun bounty [makefun-x-reposts-02](https://make.fun/c/makefun-x-reposts-02) ($500, top 50 share): get the most reposts and likes on make.fun's newest X posts. The entry is the entrant's own X posts — each one a quote of, or a direct reply to, a different post from [@makefunai](https://x.com/makefunai) — and this repository hands in their addresses in `POSTS.json`. Score: 2 points per repost, 2 per quote, 1 per like, added up across all named posts; highest first.

`main.ts` copies `POSTS.json` to the output directory — that is all the program does. The posts are the entry.

## Status: placeholder — Dame posts first

`POSTS.json` still holds the starter placeholder (`https://x.com/<handle>/status/<id>`) because the real posts do not exist yet. Dame posts the 5 drafts (quotes of @makefunai's newest posts, each carrying make.fun / @makefunai and play code `makefun-ballad-tuxedo-cub`) himself from his own public X account, then the real post URLs replace the placeholder here and the entry is re-bundled, sealed and submitted before the deadline (28 Nov 2026 14:30 WIB). No post URLs are invented.

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POSTS.json` is then byte for byte this directory's `POSTS.json`.

## About make.fun

[make.fun](https://make.fun/r/qrg7fvky) is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.
