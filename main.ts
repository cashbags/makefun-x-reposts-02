// makefun-x-reposts-02 entry driver.
//
// The entry itself is a list of X posts, not code: POSTS.json names up to 15
// of the entrant's own X posts, each one a quote of (or a direct reply to) a
// different post from make.fun's own account, and the house scores those posts
// by their reposts, quotes and likes. All this program does is hand that list
// to the grader: it reads POSTS.json from the repository root and writes it
// unchanged into the output directory.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Environment overrides (used by the grader's container):
//   MAKEFUN_BOT_DIR     repository root, default /bot
//   MAKEFUN_OUTPUT_DIR  output directory, default /output

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'POSTS.json');
const target = join(outputDir, 'POSTS.json');

mkdirSync(outputDir, { recursive: true });

let list: string;
try {
  list = readFileSync(source, 'utf8');
} catch (err) {
  console.error(`could not read ${source}: ${(err as Error).message}`);
  process.exit(1);
}

JSON.parse(list); // refuse to ship a list that is not valid JSON
writeFileSync(target, list);
console.log(`wrote ${target}`);
